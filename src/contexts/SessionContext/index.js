import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'
/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ children, strategy }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({
    auth: null,
    token: null,
    user: null,
    loading: true
  })

  const setValuesFromLocalStorage = async () => {
    const { auth, token, user } = await getValuesFromLocalStorage()

    if (token) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/order_options`, requestOptions)
      if (!response.ok) {
        logout()
      }
    }
    setState({
      ...state,
      auth,
      token,
      user,
      loading: false
    })
  }

  const getValuesFromLocalStorage = async () => {
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const project = await strategy.getItem('project')
    const user = await strategy.getItem('user', true)
    return { auth, token, project, user }
  }

  const login = async (values) => {
    await strategy.setItem('token', values.token)
    await strategy.setItem('user', values.user, true)
    await strategy.setItem('project', values.project)
    setState({
      ...state,
      auth: true,
      user: values.user,
      token: values.token,
      loading: false
    })
    window.Canny('identify', {
      appID: '5b05e5e2d3f6c47201694ad4',
      user: {
        // Replace these values with the current user's data
        email: values.user.email,
        name: values.user.name,
        id: values.user.id,

        // These fields are optional, but recommended:
        avatarURL: values?.user?.photo,
        created: new Date(values?.user.created_at).toISOString()
      }
    })
  }

  const logout = async () => {
    await strategy.removeItem('token')
    await strategy.removeItem('user')
    await strategy.removeItem('project')
    setState({
      ...state,
      auth: false,
      user: null,
      token: null,
      loading: false
    })
  }

  const changeUser = async (user) => {
    await strategy.setItem('user', user, true)
    setState({
      ...state,
      user,
      loading: false
    })
  }

  const checkLocalStorage = async () => {
    const { token, project, user } = await getValuesFromLocalStorage()
    if (token && !state.token) {
      login({
        user,
        token,
        project
      })
    }

    if (!token && state.token) {
      logout()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 1000)
    return () => clearInterval(interval)
  }, [state])

  useEffect(() => {
    setValuesFromLocalStorage()
    !function (w, d, i, s) { function l() { if (!d.getElementById(i)) { var f = d.getElementsByTagName(s)[0], e = d.createElement(s); e.type = "text/javascript", e.async = !0, e.src = "https://canny.io/sdk.js", f.parentNode.insertBefore(e, f) } } if ("function" != typeof w.Canny) { var c = function () { c.q.push(arguments) }; c.q = [], w.Canny = c, "complete" === d.readyState ? l() : w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1) } }(window, document, "canny-jssdk", "script")
  }, [])

  const functions = {
    login,
    logout,
    changeUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => { }]
}
