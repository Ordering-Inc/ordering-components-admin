import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage platform products list behavior without UI component
 */
export const PlatformProductsList = (props) => {
  const {
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()

  const [platformProductsListState, setPlatformProductsListState] = useState({ loading: true, products: [], error: null })

  /**
   * Method to get the platform products from API
   */
  const getPlatformProductsList = async () => {
    try {
      setPlatformProductsListState({
        ...platformProductsListState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/platform_products`, requestOptions)
      const { error, result } = await response.json()
      setPlatformProductsListState({
        loading: false,
        products: error ? [] : result,
        error: error ? result : null
      })
    } catch (error) {
      setPlatformProductsListState({
        ...platformProductsListState,
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    getPlatformProductsList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          platformProductsListState={platformProductsListState}
        />
      )}
    </>
  )
}

PlatformProductsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

PlatformProductsList.defaultProps = {}
