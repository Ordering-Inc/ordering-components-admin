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
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])

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
      setFormState({ ...formState, loading: true })
      const changes = {}
      for (const key in formState?.changes) {
        changes[key] = JSON.stringify(formState?.changes[key])
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
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        const _business = { ...business }
        _business.menus.filter(menu => {
          if (menu.id === content.result.id) {
            Object.assign(menu, content.result)
          }
          return true
        })
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
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
      setFormState({ ...formState, loading: true })
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
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
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
    } else {
      setSelectedProductsIds([])
      setOrderTypeSate({
        delivery: false,
        pickup: false,
        eatin: false,
        curbside: false,
        driver_thru: false
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
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
            handleChangeScheduleState={handleChangeScheduleState}
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
