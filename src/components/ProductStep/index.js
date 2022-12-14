import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { getDistance } from '../../utils'

/**
 * Component to manage ProductStep behavior without UI component
 */
export const ProductStep = (props) => {
  const {
    UIComponent,
    location
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  const [businessList, setBusinessList] = useState([])
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [business, setBusiness] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeAddress = async (ad) => {
    const lat = ad?.location?.lat
    const lng = ad?.location?.lng
    const url = `https://integrations.ordering.co/network/search.php?latitude=${lat}&longitude=${lng}`
    setIsLoading(true)
    const response = await fetch(url, {
      method: 'GET'
    })
    const res = await response.json()
    const sortedBusinessList = res?.result.sort((a, b) => getDistance(a?.address?.lat, a?.address.lon, lat, lng) - getDistance(b?.address?.lat, b?.address.lon, lat, lng))
    setBusinessList(sortedBusinessList)
    setIsLoading(false)
  }

  /**
   * Method to update the business from the API
   */
  const handleImport = async () => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(business)
      }
      const functionFetch = `https://integrations.ordering.co/network/sync_store.php?project=${ordering.project}`
      const response = await fetch(functionFetch, requestOptions)
      const content = await response.json()
      setActionState({ ...actionState, loading: false, error: content?.error ? content?.result : null })
    } catch (err) {
      setActionState({ ...actionState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (location) handleChangeAddress({ location })
  }, [location])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          setBusiness={setBusiness}
          handleImport={handleImport}
          actionState={actionState}
          business={business}
          handleChangeAddress={handleChangeAddress}
          isLoading={isLoading}
        />
      )}
    </>
  )
}

ProductStep.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductStep.defaultProps = {
  loadMorePageSize: 10,
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
