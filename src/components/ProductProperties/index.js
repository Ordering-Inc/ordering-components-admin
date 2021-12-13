import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage product properties behavior without UI component
 */
export const ProductProperties = (props) => {
  const {
    business,
    UIComponent,
    product,
    handleUpdateBusinessState,
    setFormTaxState,
    formTaxState,
    taxes,
    setTaxes
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [productState, setProductState] = useState(product)
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [formTaxChanges, setFormTaxChanges] = useState({})
  const [taxToEdit, setTaxToEdit] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  /**
   * Method to update the product details from API
   */
  const handleUpdateClick = async (params) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const changes = params ? { ...params } : { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business?.id).categories(productState?.category_id).products(productState?.id).save(changes, {
        accessToken: session.token
      })
      if (!error) {
        setProductState({ ...productState, ...result })
        setFormState({ ...formState, loading: false, changes: {} })
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
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
      } else {
        setFormState({ ...formState, loading: false })
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

  const handleChangeTax = (name, value) => {
    setFormTaxChanges({
      ...formTaxChanges,
      [name]: value
    })
  }

  const handleSaveTax = async (id, inheritTax) => {
    let result
    if (id) {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const response = await fetch(`${ordering.root}/taxes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.auth}`
        },
        body: JSON.stringify({
          ...formTaxChanges
        })
      })
      const { result: tax } = await response.json()
      result = tax
      setTaxes({
        ...taxes,
        [`id:${tax.id}`]: {
          name: tax.name,
          description: tax.description,
          id: tax.id,
          rate: tax.rate,
          type: tax.type
        }
      })
      showToast(ToastType.Success, t('PRODUCT_TAX_SAVED', 'Product tax saved'))
    } else {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const response = await fetch(`${ordering.root}/taxes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.auth}`
        },
        body: JSON.stringify(inheritTax || formTaxChanges)
      })
      const { result: tax } = await response.json()
      setTaxes({
        ...taxes,
        [`id:${tax.id}`]: {
          name: tax.name,
          description: tax.description,
          id: tax.id,
          rate: tax.rate,
          type: tax.type
        }
      })
      showToast(ToastType.Success, t('PRODUCT_TAX_ADDED', 'Product tax added'))
    }
    if (result?.error) return
    setTaxToEdit(null)
  }

  const handleDeleteTax = async (id) => {
    setFormTaxState({
      ...formTaxState,
      loading: true
    })
    if (id) {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const response = await fetch(`${ordering.root}/taxes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.auth}`
        }
      })
      const { error } = await response.json()
      if (!error) {
        const newTaxes = taxes
        delete newTaxes[`id:${id}`]
        setTaxes(newTaxes)
        showToast(ToastType.Success, t('PRODUCT_TAX_DELETED', 'Product tax deleted'))
      }
      setFormTaxState({
        ...formTaxState,
        loading: false
      })
    }
  }

  useEffect(() => {
    setProductState(product)
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productState={productState}
          taxes={taxes}
          formTaxState={formTaxState}
          taxToEdit={taxToEdit}
          alertState={alertState}
          setAlertState={setAlertState}
          formState={formState}
          handleClickProperty={handleClickProperty}
          handleChangeTax={handleChangeTax}
          setTaxToEdit={setTaxToEdit}
          handleSaveTax={handleSaveTax}
          handleDeleteTax={handleDeleteTax}
          handleUpdateClick={handleUpdateClick}
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
