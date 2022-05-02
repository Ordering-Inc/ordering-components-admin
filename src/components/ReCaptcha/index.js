import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import PropTypes from 'prop-types'
import { useConfig } from '../../contexts/ConfigContext'

export const ReCaptcha = (props) => {
  const {
    handleReCaptcha
  } = props

  const [{ configs }] = useConfig()

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    handleReCaptcha(value)
  }

  const getReCaptChaSiteKey = () => {
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_site_key?.value) {
      return configs?.security_recaptcha_site_key.value
    } else {
      console.log('ReCaptcha component: the config doesn\'t have recaptcha site key')
      return null
    }
  }

  return (
    <>
      {getReCaptChaSiteKey() && (
        <ReCAPTCHA
          sitekey={getReCaptChaSiteKey()}
          onChange={onChange}
          onErrored={e => console.log(e)}
        />
      )}
    </>
  )
}

ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: PropTypes.func
}
