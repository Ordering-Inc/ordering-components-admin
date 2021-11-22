import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleBusinessCategory = (props) => {
  const {
    UIComponent,
    handleUpdateBusinessState,
    business,
    category,
    categorySelected,
    setCategorySelected
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [formState, setFormState] = useState({ changes: {}, loading: false, result: { error: false } })
  const [isEditMode, setIsEditMode] = useState(false)

  const handelChangeCategoryActive = (isChecked) => {
    const params = { enabled: isChecked }
    editCategory(params)
  }

  const handleUpdateClick = () => {
    const params = {
      name: formState?.changes?.name,
      image: formState?.changes?.image
    }
    for (const key in params) {
      if (params[key] === null) {
        delete params[key]
      }
    }
    editCategory(params)
  }

  /**
 * Update category photo data
 * @param {File} file Image to change category photo
 */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          image: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
    setIsEditMode(true)
  }

  /**
   * Set properties of a category
   * @param {EventTarget} evt Related Html element
   */
  const handleInputChange = (evt) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [evt.target.name]: evt.target.value }
    })
    setIsEditMode(true)
  }

  /**
   * Method to handle drag start
   */
  const handleDragStart = (event) => {
    event.dataTransfer.setData('transferCategoryId', category?.id)
    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = category.name
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }

  /**
   * Method to handle drag over
   */
  const handleDragOver = (event) => {
    event.preventDefault()
  }

  /**
   * Method to handle drag drop
   */
  const handleDrop = (event) => {
    event.preventDefault()
    const transferCategoryId = parseInt(event.dataTransfer.getData('transferCategoryId'))
    const transferCategory = business?.categories.find(_category => _category.id === transferCategoryId)
    const transferCategoryRank = transferCategory?.rank
    const dropCategoryRank = category?.rank

    const updatedCategories = business?.categories.filter(_category => {
      if (_category.id === transferCategoryId) _category.rank = dropCategoryRank
      if (_category.id === category.id) _category.rank = transferCategoryRank
      return true
    })
    handleUpdateBusinessState({ ...business, categories: updatedCategories })
    handleChangeCategoryRank(transferCategoryId, { rank: dropCategoryRank })
  }

  /**
   * Method to change the rank of transfer category
   */
  const handleChangeCategoryRank = async (transferCategoryId, params) => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const { content } = await ordering.businesses(parseInt(business?.id)).categories(transferCategoryId).save(params)
      if (!content.error) {
        showToast(ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'))
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
   * Method to handle drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
  }

  /**
   * Method to edit a category
   */
  const editCategory = async (params) => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(category.id)).save(params)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        setIsEditMode(false)
        if (handleUpdateBusinessState) {
          const _categories = [...business.categories]
          _categories.forEach(function iterate (category) {
            if (category.id === result.id) {
              category.name = result?.name
              category.enabled = result?.enabled
              category.image = result?.image
            }
            Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        showToast(ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
 * Method to edit a category
 */
  const deleteCategory = async () => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(category.id)).delete()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = business.categories.map(item => {
            return item
          })
          const filterItem = business.categories.filter(cat => cat.id === category.id)[0]
          const index = business.categories.indexOf(filterItem)
          if (index > -1) _categories.splice(index, 1)
          handleUpdateBusinessState({ ...business, categories: _categories })
          if (category.id === categorySelected.id) setCategorySelected(_categories[0])
        }
        showToast(ToastType.Success, t('CATEOGORY_DELETED', 'Category deleted'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  useEffect(() => {
    if (category) {
      setFormState({
        ...formState,
        changes: { ...category }
      })
    }
  }, [category])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handelChangeCategoryActive={handelChangeCategoryActive}
          categoryFormState={formState}
          handlechangeImage={handlechangeImage}
          handleUpdateClick={handleUpdateClick}
          deleteCategory={deleteCategory}
          handleInputChange={handleInputChange}
          isEditMode={isEditMode}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragEnd={handleDragEnd}
        />
      )}
    </>
  )
}

SingleBusinessCategory.propTypes = {
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
   * Object for a product
   */
  category: PropTypes.object,
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

SingleBusinessCategory.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
