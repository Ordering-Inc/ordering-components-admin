import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage Banner Image link behavior without UI component
 */
export const BannerImageLink = (props) => {
  const {
    UIComponent,
    propsToFetch,
    isSearchByName,
    handleUpdateBannerItem
  } = props
  const [ordering] = useApi()
  const [searchValue, setSearchValue] = useState(null)
  const [imageState, setImageState] = useState({ image: props.image, loading: false, error: null })
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], result: { error: null } })
  const [selectedLinkType, setSelectedLinkType] = useState(props.image?.action?.type || null)
  const [selectedBusinessId, setSelectedBusinessId] = useState(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)

  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  /**
   * Method to get business list from API
   */
  const getBusinessList = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })

      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.businesses().asDashboard().select(propsToFetch).where(where)
        : ordering.businesses().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result,
          pagination
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  const handleSaveLink = async () => {
    try {
      setImageState({
        ...imageState,
        loading: true
      })
      let action = null
      if (selectedLinkType === 'business') {
        action = {
          type: 'business',
          business_id: selectedBusinessId
        }
      }
      if (selectedLinkType === 'product') {
        action = {
          type: 'product',
          business_id: selectedBusinessId,
          category_id: selectedCategoryId,
          product_id: selectedProductId
        }
      }
      const content = await handleUpdateBannerItem({ action: JSON.stringify(action) }, imageState.image?.id, true)
      if (content.error) {
        setImageState({
          ...imageState,
          loading: false,
          error: content.result
        })
      } else {
        setImageState({
          loading: false,
          image: content.result,
          error: null
        })
      }
    } catch (error) {
      setImageState({
        ...imageState,
        loading: true,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    getBusinessList()
  }, [searchValue])

  useEffect(() => {
    if (props.image?.action) {
      const action = { ...props.image?.action }
      setSelectedBusinessId(action?.business_id || null)
      setSelectedCategoryId(action?.category_id || null)
      setSelectedProductId(action?.product_id || null)
    } else {
      setSelectedBusinessId(null)
      setSelectedCategoryId(null)
      setSelectedProductId(null)
    }
  }, [props.image, selectedLinkType])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          onSearch={setSearchValue}
          businessList={businessList}
          selectedLinkType={selectedLinkType}
          setSelectedLinkType={setSelectedLinkType}
          selectedBusinessId={selectedBusinessId}
          setSelectedBusinessId={setSelectedBusinessId}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
          handleSaveLink={handleSaveLink}
        />
      )}
    </>
  )
}

BannerImageLink.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

BannerImageLink.defaultProps = {
  propsToFetch: ['id', 'name', 'logo', 'slug']
}
