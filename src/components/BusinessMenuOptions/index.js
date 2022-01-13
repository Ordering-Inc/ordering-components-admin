import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    menu,
    UIComponent,
    handleUpdateBusinessState,
    isSelectedSharedMenus
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])

  /**
   * Update business menu name and comment
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
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */
  const handleCheckOrderType = (orderType) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [orderType]: !orderTypeState[orderType]
      }
    })
    setOrderTypeSate({ ...orderTypeState, [orderType]: !orderTypeState[orderType] })
  }

  /**
   * Method to update the busienss menu option from API
   */
  const handleUpdateBusinessMenuOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, result: { error: false } })
      const changes = { ...formState.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menu?.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: content.error,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        const _business = { ...business }
        _business.menus.filter(menu => {
          if (menu.id === content.result.id) {
            Object.assign(menu, content.result)
            const isUpdatedProducts = typeof (changes?.products) !== 'undefined'
            if (isUpdatedProducts) {
              menu.products = [...selectedProducts]
            }
          }
          return true
        })
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_SAVED', 'Products catalog saved'))
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  /**
   * Method to add the busienss menu option from API
   */
  const handleAddBusinessMenuOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, result: { error: false } })

      const changes = { ...formState?.changes }
      if (changes?.products) {
        changes.products = JSON.stringify(changes?.products)
      }
      if (changes?.schedule) {
        changes.schedule = JSON.stringify(changes?.schedule)
      } else {
        const schedule = []
        for (var i = 0; i < 7; i++) {
          schedule.push({
            enabled: true,
            lapses: [
              {
                open: {
                  hour: 0,
                  minute: 0
                },
                close: {
                  hour: 23,
                  minute: 45
                }
              }
            ]
          })
        }
        changes.schedule = JSON.stringify(schedule)
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: content.error,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        props.onClose() && props.onClose()
        const _business = { ...business }
        let _menu = { ...content.result, enabled: true }
        const products = business.categories.reduce((products, category) => [...products, ...category.products], []).filter(product => _menu.products.includes(product.id))
        _menu = { ..._menu, products: products }
        _business.menus.push(_menu)
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_ADDED', 'Products catalog added'))
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  const handleDeleteMenu = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const endPoint = isSelectedSharedMenus
        ? `${ordering.root}/business/${business.id}/menus_shared/${menu.id}`
        : `${ordering.root}/business/${business.id}/menus/${menu.id}`
      const response = await fetch(endPoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({
          ...formState,
          loading: false,
          error: null
        })
        let _business = null
        if (isSelectedSharedMenus) {
          const menusShared = business.menus_shared.filter(_menu => _menu.id !== menu.id)
          _business = { ...business, menus_shared: menusShared }
        } else {
          const menus = business.menus.filter(_menu => _menu.id !== menu.id)
          _business = { ...business, menus: menus }
        }
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'))
        props.onClose && props.onClose()
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err
      })
    }
  }

  const handleChangeScheduleState = (scheduleChanges) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        schedule: scheduleChanges
      }
    })
  }

  useEffect(() => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: selectedProductsIds
      }
    })
  }, [selectedProductsIds])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
    setBusinessMenuState({ ...businessMenuState, menu: menu || {} })
    setOrderTypeSate({
      delivery: menu?.delivery,
      pickup: menu?.pickup,
      eatin: menu?.eatin,
      curbside: menu?.curbside,
      driver_thru: menu?.driver_thru
    })
    if (Object.keys(menu).length) {
      const _selectedProductsIds = menu.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
      setSelectedProducts(menu.products)
    } else {
      setSelectedProductsIds([])
      setSelectedProducts([])
      setOrderTypeSate({
        delivery: true,
        pickup: true,
        eatin: false,
        curbside: false,
        driver_thru: false
      })
      setFormState({
        ...formState,
        changes: {
          delivery: true,
          pickup: true
        }
      })
    }
  }, [menu])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenuState={businessMenuState}
            formState={formState}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}

            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
            handleChangeScheduleState={handleChangeScheduleState}
            handleDeleteMenu={handleDeleteMenu}
          />
        )
      }
    </>
  )
}

BusinessMenuOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
  */
  business: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
