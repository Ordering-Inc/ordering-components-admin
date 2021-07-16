import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage product details edit form behavior without UI component
 */
export const ProductDetatils = (props) => {
  const {
    business,
    UIComponent,
    product,
    handleUpdateBusinessState
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [productState, setProductState] = useState({ loading: false, product: null, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Method to update the product details from API
   */
  const handleUpdateClick = async (params) => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = params ? { ...params } : { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business?.id).categories(productState?.product?.category_id).products(productState?.product?.id).save(changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: error ? formState.changes : {},
        result: result,
        loading: false
      })

      if (!error) {
        setProductState({
          ...productState,
          product: {
            ...productState.product,
            ...result
          }
        })
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
   * Method to change the product enabled state
   */
  const handleChangeProductActiveState = () => {
    const params = { enabled: !productState?.product?.enabled }
    handleUpdateClick(params)
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          images: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  useEffect(() => {
    setProductState({ ...productState, product: product })
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productState={productState}
          formState={formState}
          cleanFormState={cleanFormState}
          handleChangeProductActiveState={handleChangeProductActiveState}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
          handleUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

ProductDetatils.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductDetatils.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
