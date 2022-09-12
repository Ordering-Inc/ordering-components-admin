import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage gift cards without UI component
 */
export const GiftCardsList = (props) => {
  const {
    UIComponent,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [giftCards, setGiftCards] = useState({ loading: true, list: [], error: null })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [activeStatus, setActiveStatus] = useState('pending')

  /**
   * Method to get the gift cards from API
   */
  const getGiftCards = async (page, pageSize) => {
    try {
      setGiftCards({
        ...giftCards,
        loading: true
      })
      let where = []
      const conditions = []
      if (activeStatus) {
        conditions.push(
          {
            attribute: 'status',
            value: activeStatus
          }
        )
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = where
        ? `${ordering.root}/gift_cards?page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/gift_cards?page=${page}&page_size=${pageSize}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result, pagination } = await response.json()
      if (!error) {
        setPaginationProps({
          currentPage: pagination.current_page,
          pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
          totalPages: pagination.total_pages,
          totalItems: pagination.total,
          from: pagination.from,
          to: pagination.to
        })
      }
      setGiftCards({
        loading: false,
        list: error ? [] : result,
        error: error ? result : null
      })
    } catch (err) {
      setGiftCards({
        ...giftCards,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    getGiftCards(0, paginationProps.pageSize)
  }, [activeStatus])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          giftCards={giftCards}
          paginationProps={paginationProps}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          getGiftCards={getGiftCards}
        />
      )}
    </>
  )
}
GiftCardsList.propTypes = {
  /**
 * UI Component, this must be containt all graphic elements and use parent props
 */
  UIComponent: PropTypes.elementType
}
GiftCardsList.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10 }
}
