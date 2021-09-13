import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const LanguageSetting = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [languageFiledsState, setLanguageFiledsState] = useState({ fields: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [defaultLanguage, setDefaultLanguage] = useState({})

  /**
   * Method to get the language fields from API
   */
  const getLanguageFields = async () => {
    try {
      setLanguageFiledsState({ ...languageFiledsState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/languages`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setLanguageFiledsState({ fields: content.result, loading: false })
        const _defaultLanguage = content.result.find(language => language.default)
        setDefaultLanguage(_defaultLanguage)
      }
    } catch (err) {
      setLanguageFiledsState({ ...languageFiledsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the language fields setting from API
   * @param {Number} fieldId selected field id
   * @param {Object} changes changes
   */
  const handleChangeFieldSetting = async (fieldId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/languages/${fieldId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('FIELD_SAVED', 'Field saved'))
        const fields = languageFiledsState.fields.filter(field => {
          if (field.id === fieldId) {
            Object.assign(field, content.result)
          }
          return true
        })
        setLanguageFiledsState({ ...languageFiledsState, fields: fields })
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getLanguageFields()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          languageFiledsState={languageFiledsState}
          defaultLanguage={defaultLanguage}
          setDefaultLanguage={setDefaultLanguage}
          handleChangeFieldSetting={handleChangeFieldSetting}
        />
      )}
    </>
  )
}

LanguageSetting.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before language fields
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after language fields
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before language fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after language fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

LanguageSetting.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
