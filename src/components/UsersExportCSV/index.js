import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const UsersExportCSV = (props) => {
  const {
    UIComponent,
    userTypesSelected,
    selectedUserActiveState
  } = props
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null, result: null })

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

      const filterConditons = []

      if (filterApply) {
        if (userTypesSelected.length > 0) {
          filterConditons.push({ attribute: 'level', value: userTypesSelected })
        }
        filterConditons.push({ attribute: 'enabled', value: selectedUserActiveState })
      }
      const functionFetch = filterApply
        ? `${ordering.root}/users.csv?mode=dashboard&orderBy=id&where=${JSON.stringify(filterConditons)}`
        : `${ordering.root}/users.csv?mode=dashboard&orderBy=id`

      const response = await fetch(functionFetch, requestOptions)
      const fileSuffix = new Date().getTime()
      await response.blob().then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `orders_${fileSuffix}.csv`
        a.click()
      })
      setActionStatus({ ...actionStatus, loading: false })
    } catch (err) {
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: err
      })
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

UsersExportCSV.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

UsersExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
