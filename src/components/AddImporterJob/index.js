import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to create importerJob form without UI component
 */

export const AddImporterJob = (props) => {
  const {
    UIComponent
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [fileState, setFileState] = useState({ fileName: null, fileType: null, csvFile: null, importOptions: {} })
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  /**
   * Process CSV file to CreateImporterJob
   * @param {File} file CSV file to create importer job
   */

  const handleUploadCsv = (file) => {
    if (file) {
      const reader = new window.FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setFileState({
          ...fileState,
          fileName: file.name,
          fileType: file.type,
          csvFile: reader.result,
          importOptions: {}
        })
      }
      reader.onerror = error => console.log(error)
    }
  }

  /**
 * Update import_options data
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
    setFileState({
      ...fileState,
      importOptions: { ...fileState.importOptions, ...currentChanges }
    })
  }

  /**
 * Update import_options data
 */

  const handleCreateImporterJob = async (id) => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    const data = {
      file: fileState?.csvFile,
      import_options: JSON.stringify(fileState?.importOptions)
    }
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
      const response = await fetch(`${ordering.root}/importers/${id}/jobs`, requestOptions)
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
        showToast(ToastType.Success, t('IMPORTER_JOB_SAVED', 'Importer Job Created'))
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
          handleUploadCsv={handleUploadCsv}
          handleCreateImporterJob={handleCreateImporterJob}
        />
      )}
    </>
  )
}

AddImporterJob.propTypes = {
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

AddImporterJob.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
