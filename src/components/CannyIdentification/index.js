import React, { useEffect } from 'react'
import { useSession } from '../../contexts/SessionContext'
import PropTypes from 'prop-types'

export const CannyIdentification = (props) => {
  const {
    appId,
    children
  } = props

  const [{ user }] = useSession()

  useEffect(() => {
    if (!appId) {
      return
    }
    if (window.document.getElementById('canny-jssdk')) return
    !function (w, d, i, s) { function l() { if (!d.getElementById(i)) { var f = d.getElementsByTagName(s)[0], e = d.createElement(s); e.type = "text/javascript", e.async = !0, e.src = "https://canny.io/sdk.js", f.parentNode.insertBefore(e, f) } } if ("function" != typeof w.Canny) { var c = function () { c.q.push(arguments) }; c.q = [], w.Canny = c, "complete" === d.readyState ? l() : w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1) } }(window, document, "canny-jssdk", "script")
  }, [appId])

  useEffect(() => {
    if (user) console.log(user)
  }, [user])

  return (
    <>
      {children}
    </>
  )
}

CannyIdentification.propTypes = {
  /**
   * Your Canny appId
   * @see appId What is appId ? https://developers.canny.io/install
   */
  appId: PropTypes.string.isRequired
}

CannyIdentification.defaultProps = {}
