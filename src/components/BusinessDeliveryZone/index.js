import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const BusinessDeliveryZone = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [businessDeliveryZonesState, setBusinessDeliveryZonesState] = useState({ zones: [], loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [zoneId, setZoneId] = useState(null)
  const [errors, setErrors] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [isAddMode, setIsAddMode] = useState(false)
  const [isAddValid, setIsAddValid] = useState(false)

  /**
   * Clean formState
   */
  const cleanFormState = () => setFormState({ ...formState, changes: {} })

  /**
   * Method to update the business delivery zone from API
   */
  const handleUpdateBusinessDeliveryZone = async () => {
    try {
      let currentChanges = { ...formState.changes }
      currentChanges = {
        ...currentChanges,
        data: JSON.stringify(formState.changes.data)
      }
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(currentChanges)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones/${zoneId}`, requestOptions)
      const content = await response.json()
      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: content.result,
        loading: false
      })
      if (!content.error) {
        const zones = businessDeliveryZonesState.zones.filter(zone => {
          if (zone.id === zoneId) {
            Object.assign(zone, content.result)
          }
          return true
        })
        setBusinessDeliveryZonesState({
          ...businessDeliveryZonesState,
          loading: false,
          zones: zones
        })
        const _business = { ...business, zones: zones }
        handleSuccessUpdate && handleSuccessUpdate(_business)
        showToast(ToastType.Success, t('DELIVERYZONE_SAVED', 'Delivery zone saved'))
      } else {
        setBusinessDeliveryZonesState({
          ...setBusinessDeliveryZonesState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to add new business delivery zone from API
   */
  const handleAddBusinessDeliveryZone = async () => {
    try {
      let currentChanges = { ...formState.changes }
      currentChanges = {
        ...currentChanges,
        data: JSON.stringify(formState.changes.data),
        type: formState.changes?.type || 2,
        enabled: true,
        schedule: JSON.stringify([
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
          { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] }
        ])
      }
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(currentChanges)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones`, requestOptions)
      const content = await response.json()
      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: content.result,
        loading: false
      })
      if (!content.error) {
        props.onClose && props.onClose()
        setIsAddMode(false)
        setIsAddValid(false)
        const zones = [
          ...businessDeliveryZonesState.zones,
          content.result
        ]
        setBusinessDeliveryZonesState({
          ...businessDeliveryZonesState,
          loading: false,
          zones: zones
        })
        const _business = { ...business, zones: zones }
        handleSuccessUpdate && handleSuccessUpdate(_business)
        showToast(ToastType.Success, t('DELIVERYZONE_ADDED', 'Delivery zone added'))
      } else {
        setBusinessDeliveryZonesState({
          ...setBusinessDeliveryZonesState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to delete the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleDeleteBusinessDeliveryZone = async (zoneId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setBusinessDeliveryZonesState({ ...businessDeliveryZonesState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones/${zoneId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const zones = businessDeliveryZonesState.zones.filter(zone => zone.id !== zoneId)
        setBusinessDeliveryZonesState({
          ...businessDeliveryZonesState,
          loading: false,
          zones: zones
        })
        const _business = { ...business, zones: zones }
        handleSuccessUpdate && handleSuccessUpdate(_business)
        showToast(ToastType.Success, t('DELIVERYZONE_DELETED', 'Business delivery zone deleted'))
      } else {
        setBusinessDeliveryZonesState({
          ...setBusinessDeliveryZonesState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessDeliveryZonesState({
        ...setBusinessDeliveryZonesState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to change the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleChangeActiveState = (zoneId) => {
    setZoneId(zoneId)
    const businessZone = businessDeliveryZonesState.zones.find(zone => zone.id === zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        enabled: !businessZone.enabled
      }
    })
  }

  /**
   * Method to change the business dleivey zone name, price, minimum
   * @param {EventTarget} e Related HTML event
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleChangeInput = (e, zoneId) => {
    setZoneId(zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Method to change the zone type
   * @param {Number} type zone type
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleZoneType = (type, zoneId) => {
    setZoneId(zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        type: type
      }
    })
  }

  /**
   * Method to change the zone type
   * @param {Object || Array} data zone type
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleChangeZoneData = (data, zoneId) => {
    setZoneId(zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        data: data
      }
    })
  }

  useEffect(() => {
    if (!Object.keys(formState.changes).length) return
    if (formState.changes?.name === '' || formState.changes?.minimum === '' || formState.changes?.price === '') {
      setErrors({
        name: formState.changes?.name === '',
        minimum: formState.changes?.minimum === '',
        price: formState.changes?.price === ''
      })
    } else {
      if (!(isAddMode || isEdit)) {
        handleUpdateBusinessDeliveryZone()
      }
    }
  }, [formState.changes, isAddMode, isEdit])

  useEffect(() => {
    if (business?.zones) {
      setBusinessDeliveryZonesState({ ...businessDeliveryZonesState, zones: business?.zones })
    }
  }, [business])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            businessDeliveryZonesState={businessDeliveryZonesState}
            handleChangeInput={handleChangeInput}
            handleChangeActiveState={handleChangeActiveState}
            handleDeleteBusinessDeliveryZone={handleDeleteBusinessDeliveryZone}
            errors={errors}
            setErrors={setErrors}
            cleanErrors={() => setErrors({})}
            handleZoneType={handleZoneType}
            handleChangeZoneData={handleChangeZoneData}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            isAddMode={isAddMode}
            setIsAddMode={setIsAddMode}
            isAddValid={isAddValid}
            setIsAddValid={setIsAddValid}
            handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
            handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
            cleanFormState={cleanFormState}
          />
        )
      }
    </>
  )
}

BusinessDeliveryZone.propTypes = {
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

BusinessDeliveryZone.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
