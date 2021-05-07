import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const UserExport = (props) => {
  const {
    UIComponent,
    filterValues
  } = props
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * Method to get csv from API
   */
  const getCSV = async (filterApply) => {
    if (loading) return
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const filterConditions = []

      if (filterApply) {
        if (Object.keys(filterValues).length) {
          if (filterValues.name && filterValues.name !== null) {
            filterConditions.push(
              {
                attribute: 'name',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${filterValues.name}%`)
                }
              }
            )
          }
          if (filterValues.lastname && filterValues.lastname !== null) {
            filterConditions.push(
              {
                attribute: 'lastname',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${filterValues.lastname}%`)
                }
              }
            )
          }
          if (filterValues.email && filterValues.email !== null) {
            filterConditions.push(
              {
                attribute: 'email',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${filterValues.email}%`)
                }
              }
            )
          }
          if (filterValues.email_verified !== undefined) {
            filterConditions.push(
              {
                attribute: 'email_verified',
                value: filterValues.email_verified
              }
            )
          }
          if (filterValues.phone && filterValues.phone !== null) {
            filterConditions.push(
              {
                attribute: 'phone',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${filterValues.phone}%`)
                }
              }
            )
          }
          if (filterValues.phone_verified !== undefined) {
            filterConditions.push(
              {
                attribute: 'phone_verified',
                value: filterValues.phone_verified
              }
            )
          }
          if (filterValues.id && parseInt(filterValues.id) > 0) {
            filterConditions.push(
              {
                attribute: 'id',
                value: parseInt(filterValues.id)
              }
            )
          }
        }
      }
      const functionFetch = filterApply
        ? `${ordering.root}/users.csv?mode=dashboard&orderBy=id&where=${JSON.stringify(filterConditions)}`
        : `${ordering.root}/users.csv?mode=dashboard&orderBy=id`

      const response = await fetch(functionFetch, requestOptions)
      const fileSuffix = new Date().getTime()
      await response.blob().then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `users_${fileSuffix}.csv`
        a.click()
      })
      setActionStatus({ ...actionStatus, loading: false })
    } catch (err) {
      setActionStatus({ loading: false, error: err })
    }
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionStatus={actionStatus}
          getCSV={getCSV}
        />
      )}
    </>
  )
}

UserExport.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for filterslist
   */
  filterValues: PropTypes.object,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UserExport.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
