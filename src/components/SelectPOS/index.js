import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage banner behavior without UI component
 */
export const SelectPOS = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, user }] = useSession()
  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [formState, setFormState] = useState({ changes: {}, loading: false, error: null })

  /**
   * Method to send message with POS
   */
  const handleSendMessage = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`http://integrations.ordering.co/network/request_integration.php?admin_name=${user?.name}&project=${ordering?.project}&Selected_POS=${formState?.changes?.pos}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        showToast(ToastType.Success, content.result)
      } else {
        setFormState({ ...formState, loading: false, error: content.result })
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, error: [err.message] })
    }
  }

  const changeFormState = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState?.changes,
        ...changes
      }
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleSendMessage={handleSendMessage}
          changeFormState={changeFormState}
        />
      )}
    </>
  )
}

SelectPOS.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

SelectPOS.defaultProps = {}
