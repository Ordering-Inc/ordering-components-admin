import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage product ingredient behavior without UI component
 */
export const ProductIngredient = (props) => {
  const {
    business,
    product,
    UIComponent,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [productState, setProductState] = useState({ product: product, loading: false, error: null })
  const [changesState, setChangesState] = useState({})
  const [isAddMode, setIsAddMode] = useState(false)
  const [editIngredientId, setEditIngredientId] = useState(null)

  /**
   * Method to change the ingredient name
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, ingredientId) => {
    setEditIngredientId(ingredientId)
    setChangesState({
      ...changesState,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Method to save the new ingredient from API
   */
  const handleAddIngredient = async () => {
    if (Object.keys(changesState).length === 0) {
      setIsAddMode(false)
      return
    }
    try {
      let changes = {
        business_id: business?.id,
        category_id: product?.category_id,
        product_id: product?.id
      }
      changes = { ...changes, ...changesState }
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setProductState({ ...productState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${product?.category_id}/products/${product.id}/ingredients`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({})
        setIsAddMode(false)
        let ingredients
        if (productState?.product.ingredients) {
          ingredients = [...productState?.product.ingredients, content.result]
        } else {
          ingredients = [content.result]
        }
        const updatedProduct = { ...productState.product, ingredients: ingredients }
        setProductState({
          ...productState,
          loading: false,
          product: updatedProduct
        })
        if (handleUpdateBusinessState) {
          const categories = business.categories.map(item => {
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
          const updatedBusiness = { ...business, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
        showToast(ToastType.Success, t('INGREDIENT_SAVED', 'Ingredient saved'))
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to save the new ingredient from API
   */
  const handleUpdateIngredient = async () => {
    try {
      let changes = {
        business_id: business?.id,
        category_id: product?.category_id,
        product_id: product?.id
      }

      changes = { ...changes, ...changesState }
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setProductState({ ...productState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${product?.category_id}/products/${product.id}/ingredients/${editIngredientId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({})
        const ingredients = productState?.product.ingredients.filter(ingredient => {
          if (ingredient.id === editIngredientId) {
            Object.assign(ingredient, content.result)
          }
          return true
        })
        const updatedProduct = { ...productState.product, ingredients: ingredients }
        setProductState({
          ...productState,
          loading: false,
          product: updatedProduct
        })
        if (handleUpdateBusinessState) {
          const categories = business.categories.map(item => {
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
          const updatedBusiness = { ...business, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
        showToast(ToastType.Success, t('INGREDIENT_SAVED', 'Ingredient saved'))
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to delete the product ingredient
   * @param {Number} ingredientId id to delete the ingredient
   */
  const handleDeleteIngredient = async (ingredientId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setProductState({ ...productState, loading: false })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${product?.category_id}/products/${product.id}/ingredients/${ingredientId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const ingredients = productState?.product.ingredients.filter(ingredient => ingredient.id !== ingredientId)
        const updatedProduct = { ...productState.product, ingredients: ingredients }
        setProductState({
          ...productState,
          loading: false,
          product: updatedProduct
        })
        if (handleUpdateBusinessState) {
          const categories = business.categories.map(item => {
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
          const updatedBusiness = { ...business, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
        showToast(ToastType.Success, t('INGREDIENT_DELETED', 'Ingredient deleted'))
      }
    } catch (err) {
      setProductState({ ...productState, loading: false, error: err.message })
    }
  }

  /**
   * Method to open the ingredient add form
   */
  const handleOpenAddForm = () => {
    setIsAddMode(true)
  }

  useEffect(() => {
    if (Object.keys(changesState).length > 0 && !isAddMode && editIngredientId) {
      handleUpdateIngredient()
    }
  }, [changesState, isAddMode, editIngredientId])

  useEffect(() => {
    setProductState({
      ...productState,
      product: product
    })
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productState={productState}
          changesState={changesState}
          isAddMode={isAddMode}
          handleChangeInput={handleChangeInput}
          handleOpenAddForm={handleOpenAddForm}
          handleDeleteIngredient={handleDeleteIngredient}
          handleAddIngredient={handleAddIngredient}
        />
      )}
    </>
  )
}

ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product ingredient
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product ingredient
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product ingredient
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product ingredient
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductIngredient.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
