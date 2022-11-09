import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'
import { useSession } from '../SessionContext'

/**
 * Create SiteContext
 * This context will save site list on current project
 */
export const SiteContext = createContext()

/**
 * Custom provider to site manager
 * This provider has a reducer for manage site state
 * @param {props} props
 */
export const SiteProvider = ({ children }) => {
  const [ordering] = useApi()
  const [session] = useSession()

  const [siteList, setSiteList] = useState([])

  const getSiteList = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.token}`
      }
    }
    const response = await fetch(`${ordering.root}/sites`, requestOptions)
    const content = await response.json()
    if (!content.error) {
      setSiteList(content.result)
    }
  }

  const changeSiteList = (data) => {
    setSiteList(data)
  }

  useEffect(() => {
    if (session?.loading) return
    getSiteList()
  }, [session])

  const functions = {
    changeSiteList
  }

  return (
    <SiteContext.Provider value={[siteList, functions]}>
      {children}
    </SiteContext.Provider>
  )
}

/**
 * Hook to get and update site state
 */
export const useSite = () => {
  const siteManager = useContext(SiteContext)
  return siteManager || [{}, () => {}]
}
