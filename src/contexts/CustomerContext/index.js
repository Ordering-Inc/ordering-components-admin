import React, { useEffect, useState, useContext, createContext } from 'react'
import { useSession } from '../SessionContext'
import { useApi } from '../ApiContext'

export const CustomerContext = createContext()

export const CustomerProvider = ({ children, strategy }) => {
  const [ordering] = useApi()
  const [session] = useSession()

  const [state, setState] = useState({
    loading: false,
    user: null
  })

  const getUserCustomerFromLocalStorage = async () => {
    setState({ ...state, loading: true })
    const user = await strategy.getItem('user-customer', true)
    if (user) {
      setState({ ...state, user, loading: false })
      return
    }
    setState({ ...state, loading: false })
  }

  const setUserCustomer = async (user, isFromLocalStorage) => {
    if (isFromLocalStorage && user) {
      setState({ ...state, loading: true })
      await strategy.setItem('user-customer', user, true)
    }
    setState({
      ...state,
      user,
      loading: false
    })
  }

  const deleteUserCustomer = async (isFromLocalStorage) => {
    if (isFromLocalStorage) {
      setState({ ...state, loading: true })
      await strategy.removeItem('user-customer')
    }
    setState({
      ...state,
      user: null,
      loading: false
    })
  }

  const setLoadingCustomer = (value) => {
    setState({ ...state, loading: value })
  }

    const [siteState, setSiteState] = useState({ site: null, loading: false, error: null })

  /**
   * Method to get the themes from API
   */
  const getSites = async () => {
    try {
      setSiteState({ ...siteState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        const site = result.find(site => site.code === 'website')
        setSiteState({ ...siteState, loading: false, site: site })
      } else {
        setSiteState({ ...siteState, loading: false, error: result })
      }
    } catch (err) {
      setSiteState({ ...siteState, loading: false, error: [err.message] })
    }
  }

  const functions = {
    setLoadingCustomer,
    setUserCustomer,
    deleteUserCustomer
  }

  useEffect(() => {
    getUserCustomerFromLocalStorage()
    getSites()
  }, [])

  return (
    <CustomerContext.Provider value={[state, functions]}>
      {children}
    </CustomerContext.Provider>
  )
}

export const useCustomer = () => {
  const customerManager = useContext(CustomerContext)
  return customerManager || [{}, () => {}]
}
