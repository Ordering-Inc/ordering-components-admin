import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage sites auth settings behavior without UI component
 */
export const SitesAuthSettings = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [sitesState, setSitesState] = useState({ loading: true, sites: [], error: null })
  const [siteConfigsState, setSiteConfigsState] = useState({ loading: false, configs: [], error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the sites from API
   */
  const handleGetSitesList = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setSitesState({
          loading: false,
          sites: result,
          error: null
        })
      } else {
        setSitesState({
          ...sitesState,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setSitesState({
        ...sitesState,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Method to get the site configs from API
   */
  const handleGetSiteConfigs = async (siteId) => {
    try {
      setSiteConfigsState({
        ...siteConfigsState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites/${siteId}/configs`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setSiteConfigsState({ loading: false, configs: result, error: null })
      } else {
        setSiteConfigsState({ ...siteConfigsState, error: result })
      }
    } catch (error) {
      setSiteConfigsState({
        ...siteConfigsState,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Method to update the site config from API
   */
  const handleChangeConfig = async (value, siteId, configId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ value: value })
      }
      const response = await fetch(`${ordering.root}/sites/${siteId}/configs/${configId}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('SETTINGS_UPDATE', 'Settings updated'))
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    handleGetSitesList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          sitesState={sitesState}
          siteConfigsState={siteConfigsState}
          actionState={actionState}
          handleGetSiteConfigs={handleGetSiteConfigs}
          handleChangeConfig={handleChangeConfig}
        />
      )}
    </>
  )
}

SitesAuthSettings.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SitesAuthSettings.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
