import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const CategoryDescription = (props) => {
  const {
    UIComponent,
    categoryId
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()
  const [categoryState, setCategoryState] = useState({ category: null, loading: !props.category, error: null })

  useEffect(() => {
    if (props.category) {
      setCategoryState({
        ...categoryState,
        category: props.category
      })
    } else {
      getCategory()
    }
  }, [categoryId])

  /**
   * Method to get order from API
   */
  const getCategory = async () => {
    if (loading) return
    try {
      setCategoryState({ ...categoryState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/config_categories/${categoryId}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setCategoryState({
          ...categoryState,
          loading: false,
          category: result
        })
      } else {
        setCategoryState({
          ...categoryState,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setCategoryState({
        ...categoryState,
        loading: false,
        error: err
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          category={categoryState}
        />
      )}
    </>
  )
}

CategoryDescription.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
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

CategoryDescription.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
