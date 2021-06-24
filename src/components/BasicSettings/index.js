import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const BasicSettings = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null, result: null })

  useEffect(() => {
    getCagegories();
  }, [])
  
  /**
   * Method to get Configration List
   */
     const getCagegories = async () => {
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
  
        const functionFetch = `${ordering.root}/language/project/config_categories`
  
        const response = await fetch(functionFetch, requestOptions)
        const { error, result } = await response.json()
        console.log(result);
        if (!error) {
          setActionStatus({
            ...actionStatus,
            loading: false,
            result: result
          })
        } else {
          setActionStatus({
            ...actionStatus,
            loading: true,
            error: result
          })
        }
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
        />
      )}
    </>
  )
}

BasicSettings.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BasicSettings.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
