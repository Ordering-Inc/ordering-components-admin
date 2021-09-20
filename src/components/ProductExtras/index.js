import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage product extras behavior without UI component
 */
export const ProductExtras = (props) => {
  const {
    business,
    UIComponent,
    product,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [productState, setProductState] = useState({ product: product, loading: false, error: null })
  const [extrasState, setExtrasState] = useState({ extras: business?.extras, loading: false, error: null })
  const [changesState, setChangesState] = useState({})
  const [isAddMode, setIsAddMode] = useState(false)

  /**
   * Method to update the business state from updated product
   * @param {Object} updatedProduct
   */
  const updateBusinessState = (updatedProduct, businessState) => {
    if (handleUpdateBusinessState) {
      const categories = businessState.categories.map(item => {
        if (item.id === parseInt(product?.category_id)) {
          const _products = item.products.map(prod => {
            if (prod.id === product?.id) {
              Object.assign(prod, updatedProduct)
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
      const updatedBusiness = { ...businessState, categories: categories }
      handleUpdateBusinessState(updatedBusiness)
    }
  }

  /**
   * Method to save the new ingredient from API
   * @param {Array} extraIds
   */
  const handleProductExtraState = async (extraIds) => {
    try {
      const changes = {
        business_id: business?.id,
        category_id: product?.category_id,
        product_id: product?.id,
        extras: JSON.stringify(extraIds)
      }

      setProductState({ ...productState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${product?.category_id}/products/${product.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const extras = extrasState?.extras.filter(extra => extraIds.includes(extra.id))
        const updatedProduct = { ...productState.product, extras: extras }
        setProductState({
          ...productState,
          loading: false,
          product: updatedProduct
        })
        updateBusinessState(updatedProduct, business)
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to change the product extra enable state
   * @param {Number} extraId extra id
   * @param {Boolean} checked check state
   */
  const handleClickExtra = (extraId, checked) => {
    let extraIds
    if (productState.product.extras) {
      extraIds = productState.product.extras.reduce((ids, extra) => [...ids, extra.id], [])
    } else {
      extraIds = []
    }
    if (checked) {
      extraIds.push(extraId)
    } else {
      extraIds = extraIds.filter(id => id !== extraId)
    }
    handleProductExtraState(extraIds)
  }

  /**
   * Method to save the new ingredient from API
   * @param {Number} extraId
   * @param {Object} params updated parameters
   */
  const handleUpdateExtraState = async (extraId, params) => {
    try {
      setExtrasState({ ...extrasState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extraId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const extras = extrasState.extras.filter(extra => {
          if (extra.id === content.result.id) {
            Object.assign(extra, content.result)
          }
          return true
        })
        setExtrasState({ ...extrasState, loading: false, extras: extras })

        const productExtras = productState.product.extras.filter(extra => {
          if (extra.id === content.result.id) {
            Object.assign(extra, content.result)
          }
          return true
        })
        const updatedProduct = { ...product, extras: productExtras }
        setProductState({ ...productState, product: updatedProduct })

        if (handleUpdateBusinessState) {
          const businessState = { ...business, extras: extras }
          const categories = businessState.categories.map(item => {
            const _products = item.products.map(prod => {
              const _extras = prod.extras.filter(extra => {
                if (extra.id === content.result.id) {
                  Object.assign(extra, content.result)
                }
                return true
              })
              return { ...prod, extras: _extras }
            })
            const _item = { ...item, products: _products }
            return _item
          })
          const updatedBusiness = { ...businessState, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to change the extra name
   * @param {EventTarget} e Related HTML event
   * @param {Number} extraId extra id to change
   */
  const handleChangeExtraInput = (e, extraId) => {
    const params = {
      name: e.target.value
    }
    handleUpdateExtraState(extraId, params)
  }

  /**
   * Method to delete the extra
   * @param {Number} extraId
   */
  const handleDeteteExtra = async (extraId) => {
    try {
      setExtrasState({ ...extrasState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extraId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const extras = extrasState.extras.filter(extra => extra.id !== extraId)
        setExtrasState({ ...extrasState, loading: false, extras: extras })
        const productExtras = productState.product.extras.filter(extra => extra.id !== extraId)
        const updatedProduct = { ...product, extras: productExtras }
        setProductState({ ...productState, product: updatedProduct })
        if (handleUpdateBusinessState) {
          const businessState = { ...business, extras: extras }
          const categories = businessState.categories.map(item => {
            const _products = item.products.map(prod => {
              const _extras = prod.extras.filter(extra => extra.id !== extraId)
              return { ...prod, extras: _extras }
            })
            const _item = { ...item, products: _products }
            return _item
          })
          const updatedBusiness = { ...businessState, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to change the add extra input
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeAddExtraInput = (e) => {
    setChangesState({ name: e.target.value })
  }

  /**
   * Method to save the new ingredient from API
   */
  const handleAddExtra = async () => {
    if (Object.keys(changesState).length === 0) {
      setIsAddMode(false)
      return
    }
    try {
      const changes = {
        business_id: business?.id,
        ...changesState
      }
      setExtrasState({ ...extrasState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({})
        setIsAddMode(false)
        const extras = [...extrasState.extras, content.result]
        setExtrasState({ ...extrasState, loading: false, extras: extras })
        if (handleUpdateBusinessState) {
          const updatedBusiness = { ...business, extras: extras }
          handleUpdateBusinessState(updatedBusiness)
        }
      }
    } catch (err) {
      setExtrasState({ ...extrasState, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    setProductState({ ...productState, product: product })
  }, [product])

  useEffect(() => {
    setExtrasState({ ...extrasState, extras: business?.extras })
  }, [business])
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          changesState={changesState}
          isAddMode={isAddMode}
          productState={productState}
          extrasState={extrasState}
          handleClickExtra={handleClickExtra}
          handleChangeExtraInput={handleChangeExtraInput}
          handleDeteteExtra={handleDeteteExtra}
          handleOpenAddForm={() => setIsAddMode(true)}
          handleAddExtra={handleAddExtra}
          handleChangeAddExtraInput={handleChangeAddExtraInput}
        />
      )}
    </>
  )
}

ProductExtras.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product extras
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product extras
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product extras
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product extras
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductExtras.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
