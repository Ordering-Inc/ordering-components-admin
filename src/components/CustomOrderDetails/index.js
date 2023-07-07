import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage custom order details behavior without UI component
 */
export const CustomOrderDetails = (props) => {
  const {
    UIComponent,
    businessPropsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [orderState, { updateProduct, handleDisableToast }] = useOrder()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [phone, setPhone] = useState('')
  const [customersPhones, setCustomersPhones] = useState({ users: [], loading: false, error: null })
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], error: null })
  const [productList, setProductList] = useState({ loading: false, products: [], error: null })
  const [defaultCountryCodeState, setDefaultCountryCodeState] = useState({ loading: true, code: 'US', error: null })
  const [extraFields, setExtraFields] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })

  const googleMapsApiKey = useMemo(() => configs?.google_maps_api_key?.value, [configs])
  const cart = useMemo(() => {
    if (!orderState?.carts || !selectedBusiness?.id) return null
    return orderState?.carts[`businessId:${selectedBusiness?.id}`]
  }, [orderState?.carts, selectedBusiness?.id])

  /**
   * Get users from API
   */
  const getUsers = async () => {
    setCustomersPhones({ ...customersPhones, loading: true })
    const conditions = {
      conector: 'AND',
      conditions: [{
        attribute: 'enabled',
        value: encodeURI(true)
      },
      {
        conector: 'OR',
        conditions: [{
          attribute: 'cellphone',
          value: {
            condition: 'ilike',
            value: encodeURI(`%${phone}%`)
          }
        },
        {
          attribute: 'phone',
          value: {
            condition: 'ilike',
            value: encodeURI(`%${phone}%`)
          }
        }]
      }]
    }
    try {
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .where(conditions)
        .get()
      setCustomersPhones({ ...customersPhones, users: result, loading: false })
    } catch (e) {
      setCustomersPhones({ ...customersPhones, loading: false, error: e.message })
    }
  }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async (location) => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })

      const parameters = {
        location: location,
        type: orderState.options?.type || 1
      }

      const conditions = {
        conector: 'AND',
        conditions: [{
          attribute: 'enabled',
          value: encodeURI(true)
        }]
      }

      const fetchEndpoint = ordering.businesses().where(conditions).asDashboard().select(businessPropsToFetch).parameters(parameters)
      const { content: { error, result } } = await fetchEndpoint.get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error?.message]
      })
    }
  }

  /**
   * Method to get products list from API
   */
  const getProducts = async (searchValue) => {
    try {
      setProductList({
        ...productList,
        loading: true
      })
      let where = null
      const searchConditions = []
      if (searchValue) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      where = {
        conditions: searchConditions,
        conector: 'OR'
      }
      const { content: { error, result } } = await ordering.businesses(selectedBusiness.id).products().where(where).get()
      if (!error) {
        setProductList({
          ...productList,
          loading: false,
          products: result
        })
      } else {
        setProductList({
          ...productList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setProductList({
        ...productList,
        loading: false,
        error: [error?.message]
      })
    }
  }

  /**
   * Method to update product cart
   */
  const handeUpdateProductCart = async (product, increament) => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    let successful = true
    const cartProduct = {
      ...product,
      quantity: increament ? product.quantity + 1 : product.quantity - 1
    }
    successful = await updateProduct(cartProduct, selectedUser?.id, selectedBusiness?.id)

    if (successful) {
      showToast(ToastType.Success, t('PRODUCT_UPDATE', 'Product updated'))
    }
  }

  const handlePlaceOrderByTotal = async () => {
    const customer = {
      name: selectedUser?.name,
      cellphone: selectedUser?.cellphone,
      phone: selectedUser?.phone,
      address: selectedUser?.address,
      address_notes: selectedUser?.address_notes,
      location: JSON.stringify(selectedUser?.location)
    }

    const changes = {
      paymethod: 'cash',
      business_id: selectedBusiness?.id,
      delivery_type: orderState.options?.type || 1,
      customer: JSON.stringify(customer),
      ...extraFields
    }

    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/orders/custom`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        showToast(ToastType.Success, t('CUSTOM_ORDER_CREATED', 'Custom order created'))
        setActionState({ ...actionState, loading: false, error: null })
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ ...actionState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the phone code from the location
   */
  const handleGetPhoneCode = async () => {
    if (!googleMapsApiKey) return
    setDefaultCountryCodeState({
      ...defaultCountryCodeState,
      loading: true
    })
    navigator.geolocation.getCurrentPosition((geo) => {
      const latitude = geo.coords.latitude
      const longitude = geo.coords.longitude
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const results = data.results
          if (results.length > 0) {
            const addressComponents = results[0].address_components
            addressComponents.forEach(address => {
              if (address.types.includes('country')) {
                setDefaultCountryCodeState({
                  loading: false,
                  code: address.short_name ?? 'US',
                  error: null
                })
              }
            })
          } else {
            setDefaultCountryCodeState({
              loading: false,
              code: '+1',
              error: null
            })
          }
        })
        .catch(err => {
          setDefaultCountryCodeState({
            ...defaultCountryCodeState,
            loading: false,
            error: [err.message]
          })
        })
    }, (err) => {
      setDefaultCountryCodeState({
        ...defaultCountryCodeState,
        loading: false,
        error: [err.message]
      })
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    })
  }

  useEffect(() => {
    if (phone && phone.length >= 7) {
      getUsers()
    }
    if ((phone && phone.length < 7) || !phone) {
      setCustomersPhones({ ...customersPhones, users: [] })
    }
  }, [phone])

  useEffect(() => {
    if (selectedBusiness?.id) {
      getProducts()
    } else {
      setProductList({ loading: false, products: [], error: null })
    }
  }, [selectedBusiness])

  useEffect(() => {
    if (selectedUser) {
      handleDisableToast(false)
    } else {
      handleDisableToast(true)
    }
  }, [selectedUser])

  useEffect(() => {
    handleGetPhoneCode()
    return () => handleDisableToast(true)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          selectedBusiness={selectedBusiness}
          setSelectedBusiness={setSelectedBusiness}
          phone={phone}
          onChangeNumber={val => setPhone(val)}
          customersPhones={customersPhones}
          setCustomersPhones={setCustomersPhones}
          businessList={businessList}
          getBusinessList={getBusinessList}
          productList={productList}
          getProducts={getProducts}
          handeUpdateProductCart={handeUpdateProductCart}
          cart={cart}
          defaultCountryCodeState={defaultCountryCodeState}
          handlePlaceOrderByTotal={handlePlaceOrderByTotal}
          setExtraFields={setExtraFields}
          extraFields={extraFields}
          actionState={actionState}
        />
      )}
    </>
  )
}

CustomOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

CustomOrderDetails.defaultProps = {
  businessPropsToFetch: ['id', 'name', 'location', 'logo', 'slug', 'zones']
}
