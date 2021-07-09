import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage product extras behavior without UI component
 */
export const ProductExtraOptions = (props) => {
  const {
    UIComponent,
    business,
    extra,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [extraState, setExtraState] = useState({ extra: extra, loading: false, error: null })
  const [formState, setFormState] = useState({ changes: {}, result: { error: false } })
  const [editOptionId, setEditOptionId] = useState(null)
  const [editErrors, setEditErrors] = useState({})
  const [addChangesState, setAddChangesState] = useState({
    conditioned: false,
    enabled: true,
    min: 1,
    max: 1
  })

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} optionId
   */
  const handleChangeInput = (e, optionId) => {
    setEditOptionId(optionId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }
  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   */
  const handleChangeOptionEnable = (enabled, optionId) => {
    setEditOptionId(optionId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        enabled: enabled
      }
    })
  }

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeAddOption = (e) => {
    setAddChangesState({
      ...addChangesState,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handleChangeImage = (file, optionId) => {
    setEditOptionId(optionId)
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          image: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Method to change the add option enabled state
   * @param {Boolean} enabled
   */
  const handleChangeAddOptionEnable = (enabled) => {
    setAddChangesState({ ...addChangesState, enabled: enabled })
  }

  const handleSuccessUpdateBusiness = (updatedExtra) => {
    if (handleUpdateBusinessState) {
      const updatedExtras = business.extras.filter(extra => {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra)
        }
        return true
      })
      const businessState = { ...business, extras: updatedExtras }
      const categories = businessState.categories.map(item => {
        const _products = item.products.map(prod => {
          const _extras = prod.extras.filter(extra => {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra)
            }
            return true
          })
          return { ...prod, extras: _extras }
        })
        const _item = { ...item, products: _products }
        return _item
      })
      const updatedBusiness = { ...businessState, categories: categories }
      handleUpdateBusinessState(updatedBusiness)
    }
  }

  /**
   * Method to save the new ingredient from API
   */
  const handleUpdateOption = async () => {
    try {
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${editOptionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({
          ...formState,
          changes: content.error ? formState.changes : {},
          result: content.result
        })
        const options = extraState.extra.options.filter(option => {
          if (option.id === content.result.id) {
            Object.assign(option, content.result)
          }
          return true
        })
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  /**
   * Method to save the new product extra option from API
   */
  const handleAddOption = async () => {
    try {
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addChangesState)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setAddChangesState({
          conditioned: false,
          enabled: true,
          min: 1,
          max: 1
        })
        const options = [...extraState.extra.options, content.result]
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }
  /**
   * Method to delete the extra
   * @param {Number} optionId
   */
  const handleDeteteOption = async (optionId) => {
    try {
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${optionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const options = extraState.extra.options.filter(option => option.id !== optionId)
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    if (!Object.keys(formState.changes).length) return
    if (formState.changes?.name === '' || formState.changes?.min === '' || formState.changes?.max === '') {
      setEditErrors({
        name: formState.changes?.name === '',
        min: formState.changes?.min === '',
        max: formState.changes?.max === ''
      })
    } else {
      handleUpdateOption()
    }
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
    setExtraState({ ...extraState, extra: extra })
  }, [extra])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          editErrors={editErrors}
          formState={formState}
          cleanFormState={cleanFormState}
          extraState={extraState}
          editOptionId={editOptionId}
          addChangesState={addChangesState}
          cleanEditErrors={() => setEditErrors({})}
          handleChangeImage={handleChangeImage}
          handleChangeInput={handleChangeInput}
          handleChangeOptionEnable={handleChangeOptionEnable}
          handleAddOption={handleAddOption}
          handleChangeAddOption={handleChangeAddOption}
          handleChangeAddOptionEnable={handleChangeAddOptionEnable}
          handleDeteteOption={handleDeteteOption}
        />
      )}
    </>
  )
}

ProductExtraOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product extra options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product extra options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductExtraOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
