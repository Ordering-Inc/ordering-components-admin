import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const BusinessMenuShare = (props) => {
  const {
    UIComponent,
    business,
    menu,
    businesses,
    busienssesPropsToFetch,
    handleUpdateBusinessState
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [businessesState, setBusinessesState] = useState({ businesses: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })

  /**
   * Method to get all the business list from API
   */
  const getAllBusinesses = async () => {
    try {
      setBusinessesState({ ...businessesState, loading: false })
      const functionFetch = ordering.setAccessToken(token).businesses().select(busienssesPropsToFetch).asDashboard()
      const { content: { error, result } } = await functionFetch.get()
      if (!error) {
        setBusinessesState({ ...businessesState, businesses: result, loading: false })
      }
    } catch (err) {
      setBusinessesState({ ...businessesState, loading: false, error: err.message })
    }
  }

  /**
   * Method to share the business menu
   * @param {Number} businessId business id
   */
  const handleShareBusinessMenuClick = async (businessId) => {
    try {
      setActionState({ ...actionState, loading: true })
      let ids = menu?.businesses.reduce((ids, _business) => [...ids, _business.id], [])
      if (businessId) {
        if (ids.includes(businessId)) {
          ids = ids.filter(id => id !== businessId)
        } else {
          ids.push(businessId)
        }
      } else {
        if (ids.length === businessesState.businesses.length) {
          ids = []
        } else {
          ids = businessesState.businesses.reduce((_ids, _business) => [..._ids, _business.id], [])
        }
      }
      const changes = {
        business_id: business.id,
        shared: ids
      }
      const content = await ordering.businesses(business.id).menus(menu.id).save(changes)
      if (!content.error) {
        const menuBusinesses = []
        for (const id of ids) {
          menuBusinesses.push({
            id: id,
            name: businessesState.businesses.find(_business => _business.id === id)?.name,
            pivot: { business_id: id, menu_id: menu.id }
          })
        }
        const _businessMenu = { ...menu, businesses: menuBusinesses }
        const menus = business.menus.filter(_menu => {
          if (_menu.id === _businessMenu.id) {
            Object.assign(_menu, _businessMenu)
          }
          return true
        })
        const _business = { ...business, menus: menus }
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        setActionState({ loading: false, result: { error: false } })
      }
    } catch (err) {
      setActionState({ loading: false, result: { error: false } })
    }
  }

  useEffect(() => {
    if (businesses) {
      setBusinessesState({ ...businessesState, businesses: businesses, loading: false })
    } else {
      getAllBusinesses()
    }
  }, [businesses])
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessesState={businessesState}
          actionState={actionState}
          handleShareBusinessMenuClick={handleShareBusinessMenuClick}
        />
      )}
    </>
  )
}

BusinessMenuShare.propTypes = {
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

BusinessMenuShare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  busienssesPropsToFetch: ['id', 'name']
}
