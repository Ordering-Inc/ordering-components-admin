import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const UserList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    propsToFetch
  } = props

  const [usersList, setUsersList] = useState({ users: [], loading: true, error: null })
  const [userTypeSelected, setUserTypeSelected] = useState(3)
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [ordering] = useApi()

  useEffect(() => {
    getUsers(true, false)
  }, [userTypeSelected])

  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  const getUsers = async (newFetch, nextPage) => {
    try {
      setUsersList({ ...usersList, loading: true })
      let parameters = {}

      const paginationParams = {
        page: newFetch
          ? 1
          : (nextPage ? paginationProps.currentPage + 1 : paginationProps.currentPage - 1),
        page_size: paginationProps.pageSize
      }
      parameters = { ...parameters, ...paginationParams }
      let where = null
      const conditions = []
      if (userTypeSelected) {
        conditions.push({ attribute: 'level', value: userTypeSelected })
      }

      if (conditions.length) {
        where = {
          conditions
        }
      }

      const fetchEndpoint = where
        ? ordering.users().select(propsToFetch).parameters(parameters).where(where)
        : ordering.users().select(propsToFetch).parameters(parameters)
      const { content: { result, pagination } } = await fetchEndpoint.get()
      usersList.users = result

      setUsersList({
        ...usersList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - usersList.users.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        nextPageItems
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUsersList({
          ...usersList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Edit a user by UserId, order options and filters
   * @param {number} userId Make a new request or next page
   */
  const getUserById = async (userId, enabled) => {
    try {
      setUsersList({ ...usersList, loading: true })

      const fetchEndpoint = ordering.users(userId)
      const { content: { result } } = await fetchEndpoint.save({ enabled: !enabled })
      const found = usersList.users.find(user => result.id === user.id)
      let users = []

      if (found) {
        users = usersList.users.filter(user => {
          if (result.id === user.id) user.enabled = result?.enabled
          return true
        })
      }

      setUsersList({
        ...usersList,
        users: users,
        loading: false
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUsersList({
          ...usersList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Change user type
   * @param {object} userType User type
   */
  const handleChangeUserType = (userType) => {
    if (userType !== userTypeSelected) {
      setUserTypeSelected(userType)
    }
  }
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            usersList={usersList}
            userTypeSelected={userTypeSelected}
            handleChangeUserType={handleChangeUserType}
            paginationProps={paginationProps}
            getUserById={getUserById}
            getUsers={getUsers}
          />
        )
      }
    </>
  )
}

UserList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of user props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

UserList.defaultProps = {
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'city_id', 'city', 'address', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname'],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
