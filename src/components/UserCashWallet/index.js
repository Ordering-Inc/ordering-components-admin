import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const UserCashWallet = (props) => {
  const {
    UIComponent,
    userId
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [cashWalletState, setCashWalletState] = useState({ loading: false, wallet: {}, error: null })
  const [addWalletState, setAddWalletState] = useState({})
  const [reduceWalletState, setReduceWalletState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get user from API
   */
  const getUser = async () => {
    try {
      setCashWalletState({
        ...cashWalletState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          loading: false,
          wallet: content.result.find(wallet => wallet.type === 'cash') || {},
          error: null
        })
      } else {
        setCashWalletState({
          ...cashWalletState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCashWalletState({
        ...cashWalletState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to add wallet money from API
   */
  const handleAddWalletMoney = async () => {
    try {
      setActionState({ loading: true, error: null })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addWalletState)
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets/${cashWalletState.wallet?.id}/events`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          ...cashWalletState,
          wallet: {
            ...cashWalletState.wallet,
            balance: cashWalletState.wallet?.balance + content.result.amount
          }
        })
        setAddWalletState({})
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('WALLET_MONEY_ADDED', 'Wallet money added'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add wallet money from API
   */
  const handleReduceWalletMoney = async () => {
    try {
      setActionState({ loading: true, error: null })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const params = { ...reduceWalletState }
      params.amount = '-' + reduceWalletState.amount
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets/${cashWalletState.wallet?.id}/events`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          ...cashWalletState,
          wallet: {
            ...cashWalletState.wallet,
            balance: cashWalletState.wallet?.balance + content.result.amount
          }
        })
        setActionState({ loading: false, error: null })
        setReduceWalletState({})
        showToast(ToastType.Success, t('WALLET_MONEY_REDUCED', 'Wallet money reduced'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} isAddMoney variable to check if the add mode is or not
   */
  const handleChangeInput = (e, isAddMoney) => {
    if (isAddMoney) {
      setAddWalletState({
        ...addWalletState,
        [e.target.name]: e.target.value
      })
    } else {
      setReduceWalletState({
        ...addWalletState,
        [e.target.name]: e.target.value
      })
    }
  }

  useEffect(() => {
    getUser()
  }, [userId])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            cashWalletState={cashWalletState}
            addWalletState={addWalletState}
            reduceWalletState={reduceWalletState}
            actionState={actionState}
            handleChangeInput={handleChangeInput}
            handleAddWalletMoney={handleAddWalletMoney}
            handleReduceWalletMoney={handleReduceWalletMoney}
          />
        )
      }
    </>
  )
}

UserCashWallet.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * This must be contains userId to fetch
  */
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
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

UserCashWallet.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
