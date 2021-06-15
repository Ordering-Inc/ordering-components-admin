import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const UserDetails = (props) => {
  const {
    userId,
    propsToFetch,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [userState, setUserState] = useState({ user: null, loading: false,  error: null })

  /**
   * Method to get user from API
   * @param {number} userId user id
   */
  const getUser = async () => {
    try {
      setUserState({
        ...userState,
        loading: true
      })
      const fetchEndpoint = ordering.setAccessToken(session.token).users(userId).select(propsToFetch)
      const { content: { result } } = await fetchEndpoint.get()
      const user = Array.isArray(result) ? null : result
      setUserState({
        ...userState,
        loading: false,
        user
      })
    } catch (err) {
      setUserState({
        ...userState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (props.user) {
      setUserState({
        ...userState,
        user: props.user
      })
    } else {
      getUser()
    }
  }, [userId])

  return (
    <>
    {
      UIComponent && (
        <UIComponent
          {...props}
          userState={userState}
        />
      )
    }
    </>
  )
}

UserDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
  * This must be contains userId to fetch
  */
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
  * User, this must be contains an object with all user info
  */
  user: PropTypes.object,
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

UserDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
}
