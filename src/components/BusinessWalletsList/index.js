import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessWalletsList = (props) => {
  const {
    UIComponent,
    business
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [walletsListState, setWalletsListState] = useState({ wallets: business?.configs || [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  const getWalletsList = async () => {
    try {
      setWalletsListState({ ...walletsListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/configs`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setWalletsListState({
          ...walletsListState,
          loading: false,
          wallets: content.result
        })
      } else {
        setWalletsListState({ ...walletsListState, loading: false, error: content.result })
      }
    } catch (err) {
      setWalletsListState({
        ...walletsListState,
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleUpdateWallet = async (walletId, params) => {
    try {
      setActionState({ ...actionState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/configs/${walletId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (business?.configs) return
    getWalletsList()
  }, [business?.configs])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            walletsListState={walletsListState}
            actionState={actionState}
            handleUpdateWallet={handleUpdateWallet}
          />
        )
      }
    </>
  )
}

BusinessWalletsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business promotions
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after business promotions
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before business promotions
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after business promotions
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessWalletsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
