import React, { useState } from 'react'
import Papa from 'papaparse'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to create importer form without UI component
 */

export const ImportCustomCSVForm = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [fileState, setFileState] = useState({ fileName: null, fileType: null, delim: null })
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const processCSV = (results) => {
    const resultArr = results.data
    const target = [] // [{key1: value1, key2: value2,}, {},,,]
    const headerFieles = resultArr[0]
    const valuesArray = resultArr.slice(1, resultArr.length)

    valuesArray.forEach(row => {
      if (headerFieles.length === row.length) {
        const obj = {}
        row.forEach((value, index) => {
          if (headerFieles[index].indexOf('/') > -1) {
            const nestObjKey = headerFieles[index].split('/')[0]
            let nestObj = null
            if (!Object.prototype.hasOwnProperty.call(obj, nestObjKey)) {
              // if nestObjKey not exist in obj
              nestObj = {}
              Object.assign(obj, { [nestObjKey]: nestObj })
            } else {
              nestObj = obj[nestObjKey]
            }
            const nestObjFileldKey = headerFieles[index].split('/')[1]
            Object.assign(nestObj, { [nestObjFileldKey]: parseInt(value) })
          } else {
            // check if value will be int or same.
            const _value = headerFieles[index].indexOf('id') > -1 ? parseInt(value) : value
            Object.assign(obj, { [headerFieles[index]]: _value })
          }
        })
        target.push(obj)
      }
    })

    let currentChanges = {}
    currentChanges = { mapping: JSON.stringify(target[0]) }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Create Importer CSV
   * @param {File} file CSV file to create importer
   */

  const handleUploadCsv = (file) => {
    if (file) {
      setFileState({
        ...fileState,
        fileName: file.name,
        fileType: file.type,
        delim: ';'
      })

      Papa.parse(file, {
        complete: function (results) {
          processCSV(results)
        }
      })
    }
  }

  /**
 * Update credential data
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

  const handleChangeSelect = (type, value) => {
    let currentChanges = {}
    currentChanges = { [type]: value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          fileState={fileState}
          handleChangeInput={handleChangeInput}
          handleChangeSelect={handleChangeSelect}
          handleUploadCsv={handleUploadCsv}
          handleCreateImporter={handleCreateImporter}
        />
      )}
    </>
  )
}

ImportCustomCSVForm.propTypes = {
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

ImportCustomCSVForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
