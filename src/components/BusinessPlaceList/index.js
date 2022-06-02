import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessPlaceList = (props) => {
  const {
    UIComponent,
    business
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [placeList, setPlaceList] = useState({ loading: false, places: [], error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to add the campaign in the campaign list
   * @param {Object} result campaign to add
   */
  const handleSuccessAddPlace = (result) => {
    const places = [...placeList.places, result]
    setPlaceList({ ...placeList, places })
  }

  /**
   * Method to update the place list
   */
  const handleSuccessUpdatePlace = async (result) => {
    const updatedPlaceList = placeList?.places?.map(place => {
      if (result?.id === place?.id) {
        return {
          ...place,
          ...result
        }
      }
      return place
    })
    setPlaceList({
      ...placeList,
      places: updatedPlaceList
    })
  }

  /**
   * Method to delete place
   */
  const handleSuccessDeletePlace = (placeId) => {
    const updatedPlaceList = placeList?.places?.filter(place => place.id !== placeId)
    setPlaceList({
      ...placeList,
      places: updatedPlaceList
    })
  }

  const getPlaceList = async () => {
    try {
      setPlaceList({ ...placeList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business?.id}/place_groups`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPlaceList({
          ...placeList,
          loading: false,
          places: content.result
        })
      } else {
        setPlaceList({
          ...placeList,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setPlaceList({
        ...placeList,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Function to update place data
   */
  const handleChangeEnabled = async (placeId, changes, isMulti) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/business/${business?.id}/place_groups/${placeId}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({
          ...actionState,
          loading: false,
          error: null
        })
        !isMulti && handleSuccessUpdatePlace(content.result)
        showToast(ToastType.Success, t('PLACE_UPDATED', 'Place updated'))
      } else {
        setActionState({
          ...actionState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        ...actionState,
        loading: false,
        error: err.message
      })
    }
  }

  const getMultiCheckStatus = () => {
    let isChecked = true
    placeList.places.forEach(place => {
      if (!place.enabled) isChecked = false
    })
    return isChecked
  }

  const handleMultiChangeEnabled = async () => {
    const allPromise = []
    const isChecked = getMultiCheckStatus()
    placeList.places.forEach(place => {
      allPromise.push(new Promise((resolve, reject) => {
        resolve(handleChangeEnabled(place.id, { enabled: !isChecked }, true))
      }))
    })
    await Promise.all(allPromise)
    const updatedPlaceList = placeList?.places?.map(place => {
      return {
        ...place,
        enabled: !isChecked
      }
    })
    setPlaceList({
      ...placeList,
      places: updatedPlaceList
    })
  }

  useEffect(() => {
    if (!business) return
    getPlaceList()
  }, [business])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            placeList={placeList}
            handleSuccessAddPlace={handleSuccessAddPlace}
            handleSuccessUpdatePlace={handleSuccessUpdatePlace}
            handleSuccessDeletePlace={handleSuccessDeletePlace}
            handleChangeEnabled={handleChangeEnabled}
            handleMultiChangeEnabled={handleMultiChangeEnabled}
            getMultiCheckStatus={getMultiCheckStatus}
          />
        )
      }
    </>
  )
}

BusinessPlaceList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before delivery zones
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after delivery zones
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessPlaceList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
