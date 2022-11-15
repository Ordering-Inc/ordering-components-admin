import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const OrderingWebsite = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [themeValues, setThemeValues] = useState({})
  const [themesList, setThemesList] = useState({ loading: true, result: [], error: null })

  /**
 * Method to get the themes from API
 */
  const getThemes = async () => {
    try {
      setThemesList({
        ...themesList,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/themes`, requestOptions)
      const { error, result } = await response.json()
      setThemesList({
        loading: false,
        result: error ? [] : result,
        error: error ? result : null
      })
    } catch (err) {
      setThemesList({
        ...themesList,
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleUpdateTheme = async () => {
    if (!themesList.result[0]?.id) return
    const valuesDefault = {
      ...themesList.result[0].values_default,
      my_products: {
        ...themesList.result[0].values_default?.my_products,
        components: { ...themeValues }
      }
    }

    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          values_default: JSON.stringify(valuesDefault)
        })
      }
      const response = await fetch(`${ordering.root}/themes/${themesList.result[0]?.id}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('THEME_SAVED', 'Theme saved'))
      } else {
        showToast(ToastType.Success, result)
      }
    } catch (err) {
      showToast(ToastType.Success, err.message)
    }
  }

  useEffect(() => {
    getThemes()
  }, [])

  useEffect(() => {
    const _themeValues = themesList.result[0]?.values_default?.my_products?.components
    if (!_themeValues) return
    setThemeValues(JSON.parse(JSON.stringify(_themeValues)))
  }, [JSON.stringify(themesList.result)])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          themeValues={themeValues}
          themesList={themesList}
          setThemeValues={setThemeValues}
          handleUpdateTheme={handleUpdateTheme}
        />
      )}
    </>
  )
}

OrderingWebsite.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before sites list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after sites list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderingWebsite.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
