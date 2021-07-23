import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage BusinessCategoryCreator behavior without UI component
 */
export const BusinessCategoryCreator = (props) => {
  const {
    UIComponent,
    setIsAddCategory,
    business,
    handleUpdateBusinessState
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()

  const [categoryState, setCategoryState] = useState({ loading: false, category: { enabled: true }, result: { error: false } })

  /**
 * Update credential data
 * @param {EventTarget} e Related HTML event
 */
  const handleChangeInput = (value, isName) => {
    let currentChanges = {}
    if (isName) {
      currentChanges = {
        name: value
      }
    } else {
      currentChanges = {
        enabled: value
      }
    }

    setCategoryState({
      ...categoryState,
      category: { ...categoryState.category, ...currentChanges }
    })
  }

  /**
 * Update business photo data
 * @param {File} file Image to change business photo
 */
  const handlechangeImage = (file, name) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setCategoryState({
        ...categoryState,
        category: {
          ...categoryState.category,
          [name]: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
  * Default fuction for business profile workflow
  */
  const handleUpdateClick = async () => {
    if (loading) return
    try {
      setCategoryState({
        ...categoryState,
        loading: true
      })
      const { content } = await ordering.businesses(parseInt(business?.id)).categories().save(categoryState.category)
      if (!content.error) {
        setCategoryState({
          ...categoryState,
          category: {},
          result: {
            error: false,
            result: content.result
          },
          loading: false
        })
        if (handleUpdateBusinessState) {
          const _categories = business.categories.map(item => {
            return item
          })
          _categories.push(content.result)
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        setIsAddCategory(false)
      } else {
        setCategoryState({
          ...categoryState,
          category: categoryState.category,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setCategoryState({
        ...categoryState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          handlechangeImage={handlechangeImage}
          handleChangeInput={handleChangeInput}
          handleUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

BusinessCategoryCreator.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a business
   */
  business: PropTypes.object,
  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: PropTypes.func,
  /**
   * Function to set category creation mode
   */
  setIsAddCategory: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessCategoryCreator.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
