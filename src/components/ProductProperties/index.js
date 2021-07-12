import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage product properties behavior without UI component
 */
export const ProductProperties = (props) => {
  const {
    business,
    UIComponent,
    product,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [productState, setProductState] = useState(product)
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * Method to update the product details from API
   */
  const handleUpdateClick = async (params) => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = params ? { ...params } : { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business?.id).categories(productState?.category_id).products(productState?.id).save(changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: error ? formState.changes : {},
        result: result,
        loading: false
      })

      if (!error) {
        setProductState({ ...productState, ...result })
        if (handleUpdateBusinessState) {
          const categories = business.categories.map(item => {
            if (item.id === parseInt(product?.category_id)) {
              const _products = item.products.map(prod => {
                if (prod.id === product?.id) {
                  Object.assign(prod, result)
                }
                return prod
              })
              return {
                ...item,
                products: _products
              }
            }
            return item
          })
          const updatedBusiness = { ...business, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to change the product peroperty
   */
  const handleClickProperty = (key, value) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [key]: value
      }
    })
  }

  useEffect(() => {
    if (Object.keys(formState.changes).length > 0) {
      handleUpdateClick()
    }
  }, [formState.changes])

  useEffect(() => {
    setProductState(product)
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productState={productState}
          handleClickProperty={handleClickProperty}
        />
      )}
    </>
  )
}

ProductProperties.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product properties
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product properties
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product properties
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product properties
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductProperties.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
