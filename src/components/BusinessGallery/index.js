import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const BusinessGallery = (props) => {
  const {
    business,
    UIComponent,
    handleSucessUpdateBusinessGallery,
    handleSucessDeleteBusinessGallery
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          business_id: business.id,
          file: reader.result,
          type: 1
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Method to update the business
   */
  const handleUpdateBusinessGallery = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }

      const response = await fetch(`${ordering.root}/business/${business.id}/gallery`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: content,
        loading: false
      })

      if (!content.error) {
        if (handleSucessUpdateBusinessGallery) {
          handleSucessUpdateBusinessGallery(content.result)
        }
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }
  /**
   * Method to delete the business gallery image
   */
  const handleDeleteBusinessImage = async (id) => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/business/${business.id}/gallery/${id}?business_id=${business.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        loading: false
      })

      if (!content.error) {
        handleSucessDeleteBusinessGallery && handleSucessDeleteBusinessGallery(id)
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    const photos = business?.gallery?.filter(item => item.file)
    const videos = business?.gallery?.filter(item => item.video)
    setPhotos(photos)
    setVideos(videos)
  }, [business])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessSchedule={business.schedule || []}
          businessPhotos={photos || []}
          businessVideos={videos || []}
          formState={formState}
          handlechangeImage={handlechangeImage}
          cleanFormState={cleanFormState}
          handleUpdateBusinessGallery={handleUpdateBusinessGallery}
          handleDeleteBusinessImage={handleDeleteBusinessImage}
        />
      )}
    </>
  )
}

BusinessGallery.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business, object with all data to render
   */
  business: PropTypes.object,
  /**
   * enable/disable business option of accordeon
   */
  optionToShow: PropTypes.string,
  /**
   * Components types before Business information
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business information
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessGallery.defaultProps = {
  business: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
