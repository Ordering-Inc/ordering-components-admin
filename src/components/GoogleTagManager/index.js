import React, { useEffect } from 'react'
import { useConfig } from '../../contexts/ConfigContext'

export const GoogleTagManager = ({ children }) => {
  const [{ configs }] = useConfig()

  useEffect(() => {
    if (configs?.google_tag_manager?.value) {
      const tag = (w, d, s, l, i) => {
        w[l] = w[l] || []; w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        })
        const f = d.getElementsByTagName(s)[0]
        const j = d.createElement(s)
        const dl = l !== 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
        window.document.head.appendChild(j)
      }
      tag(window, document, 'script', 'dataLayer', configs?.google_tag_manager?.value)
    }
  }, [configs?.google_tag_manager?.value])

  return (
    <>
      {children}
    </>
  )
}
