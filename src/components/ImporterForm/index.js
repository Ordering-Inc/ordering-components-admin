import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to create importer form without UI component
 */

export const ImporterForm = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [mappingState, setMappingState] = useState({})
  const [fieldList, setFieldList] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [editState, setEditState] = useState({})

  /**
 * Update form state data
 * @param {EventTarget} e Related HTML event
 */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  const handleChangeMappingInput = (e, isMany) => {
    let mappingData = {}
    if (isMany) {
      Object.values(e).map(obj => {
        mappingData = {
          ...mappingData,
          [obj.name]: obj.value
        }
      })
    } else {
      mappingData = {
        [e.target.name]: e.target.value
      }
    }
    setMappingState({
      ...mappingState, ...mappingData
    })
  }

  const addNewField = (key, value) => {
    const field = { [key]: parseInt(value) }
    setFieldList({
      ...fieldList, ...field
    })
    clearFieldForm()
  }

  const removeField = (val) => {
    const _fieldList = [...fieldList]
    const removedFieldList = _fieldList.filter(function (field) {
      return field.fieldName !== val?.fieldName
    })
    setFieldList(removedFieldList)
  }

  const handleChangeSelect = (type, value) => {
    let currentChanges = {}
    currentChanges = { [type]: value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })

    if (!isEdit) {
      setMappingState({})
      clearMappingForm()
    }
  }

  const clearMappingForm = () => {
    document.getElementById('importer-form').reset()
  }

  const clearFieldForm = () => {
    document.getElementById('field-form').reset()
  }

  const clearImorterForm = () => {
    clearMappingForm()
    clearFieldForm()
    setMappingState({})
    setFieldList({})
  }

  const handleEditState = (seletedImpoter) => {
    if (seletedImpoter?.type !== 'sync_businesses') {
      handleChangeSelect('type', seletedImpoter?.type)
    }

    let _fieldList = {}
    _fieldList = seletedImpoter?.mapping?.fields

    let _mappingState = {}
    if (seletedImpoter?.type === 'sync_businesses') {
      _mappingState = {
        id: seletedImpoter?.mapping?.business_id,
        externalId: seletedImpoter?.mapping?.external_business_id,
        externalKey: seletedImpoter?.mapping?.external_business_key
      }

      setMappingState({
        ...mappingState,
        business_id: seletedImpoter?.mapping?.business_id,
        external_business_id: seletedImpoter?.mapping?.business_id,
        external_business_key: seletedImpoter?.mapping?.business_id
      })
    }
    if (seletedImpoter?.type === 'sync_categories') {
      _mappingState = {
        id: seletedImpoter?.mapping?.category_id,
        externalId: seletedImpoter?.mapping?.external_category_id,
        externalKey: seletedImpoter?.mapping?.external_category_key
      }

      setMappingState({
        ...mappingState,
        category_id: seletedImpoter?.mapping?.category_id,
        external_category_id: seletedImpoter?.mapping?.external_category_id,
        external_category_key: seletedImpoter?.mapping?.external_category_key
      })
    }
    if (seletedImpoter?.type === 'sync_products') {
      _mappingState = {
        id: seletedImpoter?.mapping?.product_id,
        externalId: seletedImpoter?.mapping?.external_product_id,
        externalKey: seletedImpoter?.mapping?.external_product_key
      }

      setMappingState({
        ...mappingState,
        product_id: seletedImpoter?.mapping?.category_id,
        external_product_id: seletedImpoter?.mapping?.external_category_id,
        external_product_key: seletedImpoter?.mapping?.external_category_key
      })
    }

    setEditState({
      ...editState,
      name: seletedImpoter?.name,
      slug: seletedImpoter?.slug,
      type: seletedImpoter?.type,
      mapping: _mappingState,
      fields: seletedImpoter?.mapping?.fields
    })

    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        name: seletedImpoter?.name,
        slug: seletedImpoter?.slug,
        type: seletedImpoter?.type
      }
    })

    setFieldList(_fieldList)

    setMappingState({
      ...mappingState,
      product_id: seletedImpoter?.mapping?.category_id,
      external_product_id: seletedImpoter?.mapping?.external_category_id,
      external_product_key: seletedImpoter?.mapping?.external_category_key
    })
  }

  const handleCreateImporter = async () => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    const data = { ...formState.changes }
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${ordering.root}/importers`, requestOptions)
      const { error, result } = await response.json()

      if (error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      } else {
        showToast(ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'))
        clearImorterForm()
        setFormState({
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          }
        })
      }
    } catch (error) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: [error.message]
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    if (Object.keys(mappingState).length !== 0) {
      const data = { ...mappingState }
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          mapping: JSON.stringify(data)
        }
      })
    }
  }, [mappingState])

  useEffect(() => {
    if (Object.keys(fieldList).length !== 0) {
      setMappingState({
        ...mappingState,
        fields: fieldList
      })
    }
  }, [fieldList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          mappingState={mappingState}
          fieldList={fieldList}
          handleChangeInput={handleChangeInput}
          handleChangeSelect={handleChangeSelect}
          handleChangeMappingInput={handleChangeMappingInput}
          addNewField={addNewField}
          removeField={removeField}
          isEdit={isEdit}
          clearImorterForm={clearImorterForm}
          setIsEdit={setIsEdit}
          editState={editState}
          handleCreateImporter={handleCreateImporter}
          handleEditState={handleEditState}
        />
      )}
    </>
  )
}

ImporterForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ImporterForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
