import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const BusinessTypeFilter = (props) => {
  const {
    businessTypes,
    onChangeBusinessType,
    defaultBusinessType,
    UIComponent,
    handleSuccessAddBusinessType
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * This property is used to set in state the current value
   */
  const [typeSelected, setTypeSelected] = useState(defaultBusinessType)

  /**
   * This state save the business type info from API
   */
  const [typesState, setTypesState] = useState({ loading: true, error: null, types: [], pagination: null })

  /**
   * Handle when select value changes
   */
  const handleChangeBusinessType = (businessType) => {
    setTypeSelected(businessType)
    onChangeBusinessType(businessType)
  }

  /**
   * Method to get business types from API
   */
  const getBusinessTypes = async () => {
    try {
      const response = await fetch(`${ordering.root}/business_types?where=[{"attribute":"enabled","value":true}]`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const { error, result, pagination } = await response.json()
      if (!error) {
        if (result.length > 0) {
          result.unshift({ id: null, enabled: true, image: null, name: 'All' })
        }
        setTypesState({
          ...typesState,
          loading: false,
          types: result,
          pagination
        })
        return
      }
      setTypesState({
        ...typesState,
        loading: false,
        error: result
      })
    } catch (error) {
      setTypesState({
        ...typesState,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  /**
   * Default fuction for business profile workflow
   */
  const handleUpdateClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business_types`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleSuccessAddBusinessType) {
          handleSuccessAddBusinessType(content.result)
        }
      } else {
        setFormState({
          ...formState,
          changes: formState.changes,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    const currentChanges = {
      [e.target.name]: e.target.value
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update business type image data
   * @param {File} file Image to change business type image
   */
  const handlechangeImage = (file) => {
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

  useEffect(() => {
    if (businessTypes) {
      setTypesState({
        ...typesState,
        loading: false,
        types: businessTypes
      })
    } else {
      getBusinessTypes()
    }
  }, [businessTypes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          typesState={typesState}
          businessTypes={businessTypes}
          currentTypeSelected={typeSelected}
          formState={formState}
          handleChangeBusinessType={handleChangeBusinessType}
          handleUpdateClick={handleUpdateClick}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
        />
      )}
    </>
  )
}

BusinessTypeFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  businessTypes: PropTypes.arrayOf(PropTypes.object),
  /**
   * Default business type to show
   */
  defaultBusinessType: PropTypes.string,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessTypeFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
