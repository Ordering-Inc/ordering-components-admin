import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const OrderingWebsite = (props) => {
  const {
    UIComponent,
    appId
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [themeValues, setThemeValues] = useState({})
  const [advancedValues, setAdvancedValues] = useState({})
  const [orderingTheme, setOrderingTheme] = useState({ loading: true, themes: [], error: null, siteId: null })
  const [themesList, setThemesList] = useState({ loading: true, themes: [], error: null })
  const [site, setSite] = useState(null)
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: false, error: null })
  const [franchisesList, setFranchisesList] = useState({ loading: false, franchises: [], error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })

  /**
 * Update form data
 * @param {EventTarget} e Related HTML event
 */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
    setSite({
      ...site,
      [e.target.name]: e.target.value
    })
  }

  /**
 * Method to get the themes from API
 */
  const getSites = async () => {
    try {
      setOrderingTheme({
        ...orderingTheme,
        loading: true
      })
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
        const found = result.find(site => site.code === appId)
        if (found) {
          await getSiteTheme(found.id)
          setSite(found)
        } else {
          await handleAddSite()
        }
      }
    } catch (err) {
      setOrderingTheme({
        ...orderingTheme,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to get businesses from API
   */
  const getBusinesses = async () => {
    try {
      setBusinessesList({ ...businessesList, loading: false })
      let where = null
      const conditions = []
      conditions.push({
        attribute: 'enabled',
        value: true
      })
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .businesses()
        .select(['name', 'logo', 'slug'])
        .where(where)
        .asDashboard()
        .get()
      if (!error) {
        setBusinessesList({ ...businessesList, loading: false, businesses: result })
      }
    } catch (err) {
      setBusinessesList({ ...businessesList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get brand list
   */
  const getFranchises = async () => {
    try {
      setFranchisesList({ ...franchisesList, loading: true })
      let where = null
      const conditions = []
      conditions.push({
        attribute: 'enabled',
        value: true
      })
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/franchises?where=${JSON.stringify(where)}`
      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFranchisesList({
          ...franchisesList,
          loading: false,
          franchises: result
        })
      } else {
        setFranchisesList({
          ...franchisesList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setFranchisesList({
        ...franchisesList,
        loading: false,
        error: err
      })
    }
  }

  /**
 * Function to add new site from API
 */
  const handleAddSite = async () => {
    try {
      const initialData = {
        code: appId,
        name: 'Ordering.co'
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(initialData)
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        await getSiteTheme(result.id)
        setSite(result)
      } else {
        setOrderingTheme({
          ...orderingTheme,
          loading: false,
          themes: [],
          error: result
        })
      }
    } catch (err) {
      setOrderingTheme({
        ...orderingTheme,
        loading: false,
        result: [err.message]
      })
    }
  }

  /**
   * Method to get the site theme from API
   */
  const getSiteTheme = async (siteId) => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites/${siteId}/themes`, requestOptions)
      const { error, result } = await response.json()
      setOrderingTheme({
        loading: false,
        themes: error ? [] : result,
        error: error ? result : null,
        siteId: siteId
      })
    } catch (err) {
      setOrderingTheme({
        ...orderingTheme,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
 * Method to assign the theme to site
 */
  const handleAssignTheme = async (value, themeId, siteId) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          theme_id: themeId,
          values: JSON.stringify(value)
        })
      }
      const response = await fetch(`${ordering.root}/sites/${siteId}/themes`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('THEME_ADDED', 'Theme added'))
        setOrderingTheme({
          ...orderingTheme,
          themes: [result]
        })
      } else {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

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
        themes: error ? [] : result,
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

  /**
 * Method to update the site theme from API
 */
  const handleUpdateSiteTheme = async (advancedTheme) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const themeId = orderingTheme.themes[0]?.theme_id
      const siteId = orderingTheme.themes[0]?.site_id
      const myProductvalues = {
        ...orderingTheme.themes[0].values,
        my_products: {
          ...orderingTheme.themes[0].values?.my_products,
          components: { ...themeValues }
        }
      }
      const seoOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      await fetch(`${ordering.root}/sites/${site.id}`, seoOptions)

      const values = advancedTheme ? JSON.parse(JSON.stringify(advancedTheme)) : JSON.parse(JSON.stringify(myProductvalues))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          values: JSON.stringify(values)
        })
      }
      const response = await fetch(`${ordering.root}/sites/${siteId}/themes/${themeId}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('THEME_UPDATED', 'Theme updated'))
      } else {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  useEffect(() => {
    if (!appId) return
    getThemes()
    getSites()
    getBusinesses()
    getFranchises()
  }, [appId])

  useEffect(() => {
    if (orderingTheme?.siteId && themesList.themes?.length && !orderingTheme?.themes?.length) {
      const valuesDefault = JSON.parse(JSON.stringify(themesList.themes[0]?.values_default))
      if (valuesDefault?.my_products?.components?.website_settings?.components?.values) {
        valuesDefault.my_products.components.website_settings.components.values.default_domain = `https://${ordering.project}.tryordering.com`
      }
      handleAssignTheme(valuesDefault, themesList.themes[0]?.id, orderingTheme?.siteId)
    }
  }, [JSON.stringify(themesList.themes), orderingTheme?.siteId])

  useEffect(() => {
    if (!orderingTheme.themes[0]?.values) return
    if (
      orderingTheme.themes[0]?.values?.business_view?.components?.products?.components?.product?.components?.favorite?.hidden === undefined &&
      orderingTheme.themes[0]?.values?.business_view?.components?.products?.components?.product?.components
    ) {
      orderingTheme.themes[0].values.business_view.components.products.components.product.components.favorite = {
        hidden: orderingTheme.themes[0]?.values?.business_view?.components?.product?.components?.favorite
      }
    }
    if (
      orderingTheme.themes[0]?.values?.theme_settings?.components?.values?.homepage_content === undefined
    ) {
      orderingTheme.themes[0].values.theme_settings = {
        ...orderingTheme.themes[0].values.theme_settings,
        components: {
          ...orderingTheme.themes[0].values.theme_settings?.components,
          values: {
            ...orderingTheme.themes[0].values.theme_settings?.components?.values,
            homepage_content: ''
          }
        }
      }
    }
    if (
      orderingTheme.themes[0]?.values?.theme_settings?.components?.values?.footer_content === undefined
    ) {
      orderingTheme.themes[0].values.theme_settings = {
        ...orderingTheme.themes[0].values.theme_settings,
        components: {
          ...orderingTheme.themes[0].values.theme_settings?.components,
          values: {
            ...orderingTheme.themes[0].values.theme_settings?.components?.values,
            footer_content: ''
          }
        }
      }
    }
    setAdvancedValues(JSON.parse(JSON.stringify(orderingTheme.themes[0]?.values)))
    const _themeValues = orderingTheme.themes[0]?.values?.my_products?.components
    if (!_themeValues) return
    setThemeValues(JSON.parse(JSON.stringify(_themeValues)))
  }, [orderingTheme?.themes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          themeValues={themeValues}
          advancedValues={advancedValues}
          setAdvancedValues={setAdvancedValues}
          orderingTheme={orderingTheme}
          setThemeValues={setThemeValues}
          handleUpdateSiteTheme={handleUpdateSiteTheme}
          themesList={themesList}
          site={site}
          setSite={setSite}
          businessesList={businessesList}
          franchisesList={franchisesList}
          handleChangeInput={handleChangeInput}
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
