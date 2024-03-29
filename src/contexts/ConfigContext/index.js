import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useSession } from '../SessionContext'
import { useLanguage } from '../LanguageContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
export const ConfigContext = createContext()

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
export const ConfigProvider = ({ children }) => {
  const [state, setState] = useState({ loading: true, configs: {} })
  const [languageState] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const customConfigs = {
    max_days_preorder: {
      key: 'max_days_preorder',
      value: 6
    },
    meters_to_change_address: {
      key: 'meters_to_change_address',
      value: 500
    },
    default_order_type: {
      key: 'default_order_type',
      value: 'delivery'
    },
    order_types_allowed: {
      key: 'order_types_allowed',
      value: '1|2|3|4|5'
    },
    google_autocomplete_selection_required: {
      key: 'google_autocomplete_selection_required',
      value: 'true'
    },
    google_maps_api_key: {
      key: 'google_maps_api_key',
      value: ''
    },
    country_autocomplete: {
      key: 'country_autocomplete',
      value: '*'
    },
    track_id_google_analytics: {
      key: 'track_id_google_analytics',
      value: 'UA-51635411-4'
    }
  }

  const refreshConfigs = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = token
        ? await ordering.setAccessToken(token).configs().asDictionary().get()
        : await ordering.configs().asDictionary().get()
      let data = null
      try {
        const response = await fetch('https://ipapi.co/json/')
        data = await response.json()
      } catch (error) {
        data = null
      }
      const configsResult = {
        ...customConfigs,
        ...result,
        default_country_code: {
          ...result?.default_country_code,
          value: result?.default_country_code?.value || (data && data?.country_code) || 'US',
          calling_number: result?.default_country_code?.calling_number || (data && data?.country_calling_code) || '+1'
        }
      }
      setState(prevState => ({
        ...prevState,
        loading: false,
        configs: error ? {} : token ? configsResult : { ...prevState.configs, ...configsResult }
      }))
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    refreshConfigs
  }

  useEffect(() => {
    if (!ordering?.project) {
      setState({ loading: true, configs: {} })
      return
    }
    if (!languageState.loading) {
      refreshConfigs()
    }
  }, [languageState.loading, ordering?.project, token])

  return (
    <ConfigContext.Provider value={[state, functions]}>
      {children}
    </ConfigContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
export const useConfig = () => {
  const configManager = useContext(ConfigContext)
  return configManager || [{}, async () => {}]
}
