import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const BusinessBrands = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [brandList, setBrandList] = useState({ loading: false, brands: [], error: null })

  /**
   * Method to update brand list
   */
  const handleUpdateBrandList = (brands) => {
    setBrandList({ ...brandList, brands: brands })
  }

  /**
   * Method to get brand list
   */
  const getBrands = async () => {
    if (loading) return
    try {
      setBrandList({ ...brandList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/franchises`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBrandList({
          ...brandList,
          loading: false,
          brands: result
        })
      } else {
        setBrandList({
          ...brandList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setBrandList({
        ...brandList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          brandList={brandList}
          handleUpdateBrandList={handleUpdateBrandList}
        />
      )}
    </>
  )
}

BusinessBrands.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessBrands.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
