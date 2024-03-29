import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export const OpenCartFilter = (props) => {
  const {
    UIComponent
  } = props

  /**
   * This property is used to set in state the current value
   */
  const [filterValues, setFilterValues] = useState({
    cartId: null,
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    businessIds: [],
    cityIds: [],
    customerIds: []
  })

  /**
   * Changer order Id
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeCartId = (e) => {
    const cartId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    setFilterValues({ ...filterValues, cartId })
  }

  /**
   * Change date type
   * * @param {string} dateType date type
  */
  const handleChangeDateType = (dateType) => {
    const now = dayjs()
    switch (dateType) {
      case 'default':
        setFilterValues({ ...filterValues, dateType: 'default', deliveryFromDatetime: null, deliveryEndDatetime: null })
        break
      case 'today': {
        const today = now.format('YYYY-MM-DD')
        const todayDatetime = dayjs(today).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'today', deliveryFromDatetime: todayDatetime })
        break
      }
      case 'yesterday': {
        const yesterday = now.subtract('1', 'day').format('YYYY-MM-DD')
        const yesterdayDatetime = dayjs(yesterday).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'yesterday', deliveryFromDatetime: yesterdayDatetime })
        break
      }
      case 'last7': {
        const last7day = now.subtract('7', 'day').format('YYYY-MM-DD')
        const last7Datetime = dayjs(last7day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last7', deliveryFromDatetime: last7Datetime })
        break
      }
      case 'last30': {
        const last30day = now.subtract('30', 'day').format('YYYY-MM-DD')
        const last30Datetime = dayjs(last30day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last30', deliveryFromDatetime: last30Datetime })
        break
      }
      case 'term':
        setFilterValues({ ...filterValues, dateType: 'term', deliveryFromDatetime: null, deliveryEndDatetime: null })
    }
  }

  const handleChangeDateRange = (type, from, to) => {
    setFilterValues({
      ...filterValues,
      dateType: type,
      deliveryFromDatetime: from,
      deliveryEndDatetime: to
    })
  }
  /**
   * Change start date
   * * @param {date} fromDate start date
  */
  const handleChangeFromDate = (fromDate) => {
    let fromDatetime
    if (fromDate !== null) {
      fromDatetime = dayjs(fromDate).format('YYYY-MM-DD HH:mm:ss')
    } else {
      fromDatetime = null
    }
    setFilterValues({ ...filterValues, deliveryFromDatetime: fromDatetime })
  }
  /**
   * Change end date
   * * @param {date} endDate end date
  */
  const handleChangeEndDate = (endDate) => {
    let endDatetime
    if (endDate !== null) {
      endDatetime = dayjs(endDate).format('YYYY-MM-DD HH:mm:ss')
    } else {
      endDate = null
    }
    setFilterValues({ ...filterValues, deliveryEndDatetime: endDatetime })
  }

  /**
   * Change businesses
   * * @param {number} businessId business id
  */
  const handleChangeBusinesses = (businessId) => {
    let _businessIds = [...filterValues.businessIds]
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId)
    } else {
      _businessIds = _businessIds.filter((_businessId) => _businessId !== businessId)
    }
    setFilterValues({ ...filterValues, businessIds: _businessIds })
  }

  /**
   * Change customers
   * * @param {number} customerId customer id
  */
  const handleChangeCustomers = (customerId) => {
    let _customerIds = [...filterValues.customerIds]
    if (!_customerIds.includes(customerId)) {
      _customerIds.push(customerId)
    } else {
      _customerIds = _customerIds.filter((_customerId) => _customerId !== customerId)
    }
    setFilterValues({ ...filterValues, customerIds: _customerIds })
  }

  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    let _cityIds = [...filterValues.cityIds]
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId)
    } else {
      _cityIds = _cityIds.filter((_cityId) => _cityId !== cityId)
    }
    setFilterValues({ ...filterValues, cityIds: _cityIds })
  }

  /**
   * Reset filter values
  */
  const handleResetFilterValues = () => {
    setFilterValues({
      cartId: null,
      dateType: null,
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      cityIds: [],
      customerIds: []
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterValues={filterValues}
          handleChangeCartId={handleChangeCartId}
          handleChangeDateType={handleChangeDateType}
          handleChangeFromDate={handleChangeFromDate}
          handleChangeEndDate={handleChangeEndDate}
          handleChangeBusinesses={handleChangeBusinesses}
          handleChangeCity={handleChangeCity}
          handleChangeCustomers={handleChangeCustomers}
          handleResetFilterValues={handleResetFilterValues}
          handleChangeDateRange={handleChangeDateRange}
        />
      )}
    </>
  )
}

OpenCartFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OpenCartFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
