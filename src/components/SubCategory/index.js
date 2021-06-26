import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const SubCategory = (props) => {
  const {
    categoryId,
    configId,
    UIComponent
  } = props

  const [subCategoryState, setSubCategoryState] = useState({ subCategory: null, loading: false, error: null })
  const [{ loading }] = useSession()
  const [ordering] = useApi()

  useEffect(() => {
    if (configId) getSubCategory(configId)
    else if (categoryId) getSubCategory(categoryId)
  }, [categoryId, configId])

  /**
   * Method to get Sub Category List
   */
  const getSubCategory = async (id) => {
    if (loading) return
    try {
      setSubCategoryState({ ...subCategoryState, loading: true })
      const { content: { error, result } } = await ordering.configs(id).get();
      if (!error) {
        setSubCategoryState({
          ...subCategoryState,
          loading: false,
          subCategory: result
        })
      } else {
        setSubCategoryState({
          ...subCategoryState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setSubCategoryState({
        ...subCategoryState,
        loading: false,
        error: err
      })
    }
  }

  const saveConfiguartion = async (changes) => {
    if (loading) return
    const id = configId || categoryId
    try {
      setSubCategoryState({ ...subCategoryState, loading: true })
      const { content: { error, result } } = await ordering.configs(id).save(changes)
      if (!error) {
        setSubCategoryState({
          ...subCategoryState,
          loading: false,
          subCategory: result
        })
      } else {
        setSubCategoryState({
          ...subCategoryState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setSubCategoryState({
        ...subCategoryState,
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
          subCategoryState={subCategoryState}
          saveConfiguartion={saveConfiguartion}
        />
      )}
    </>
  )
}

SubCategory.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Category_Id, this must be contains an category id for get data from API
   */
  categoryId: PropTypes.number,
  /**
   * Config_id, this must be contains an config id for get data from API
   */
  configId: PropTypes.number,
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

SubCategory.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
