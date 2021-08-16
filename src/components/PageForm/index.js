import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const PageForm = (props) => {
  const {
    UIComponent,
    pageId,
    pageList,
    handleSuccessUpdate,
    handleCancel
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [pageState, setPageState] = useState({ page: {}, loading: false, error: null })
  const [imageListState, setImageListState] = useState({ images: [], loading: false, error: null })
  const [insertImageState, setInsertImageState] = useState({ loading: false, change: {}, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [bodyContent, setBodyContent] = useState('<p><br></p>')
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)
  const [isAddMode, setIsAddMode] = useState(null)

  /**
   * Method to get the pages from API
   */
  const getPage = async () => {
    try {
      setPageState({ ...pageState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/pages/${pageId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPageState({ page: content.result, loading: false })
      }
    } catch (err) {
      setPageState({ ...pageState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the image files from API
   */
  const getImages = async () => {
    try {
      setImageListState({ ...imageListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/files?where={%22type%22:1}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setImageListState({ images: content.result, loading: false })
      }
    } catch (err) {
      setImageListState({ ...imageListState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new image to gallery
   */
  const handleAddImage = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setInsertImageState({ ...insertImageState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(insertImageState.change)
      }
      const response = await fetch(`${ordering.root}/files`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setInsertImageState({ loading: false, change: {}, error: null })
        const _images = [...imageListState.images, content.result]
        setImageListState({ ...imageListState, images: _images })
        showToast(ToastType.Success, t('GALLERY_IMAGE_ADDED', 'Business gallery image added'))
        setSelectedImageUrl(content?.result?.source)
      } else {
        setInsertImageState({ ...insertImageState, loading: false, error: content.result })
      }
    } catch (err) {
      setInsertImageState({ ...insertImageState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the image of gallery
   */
  const handleDeleteImage = async (imageId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/files/${imageId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ loading: false, error: null })
        const _images = imageListState.images.filter(image => image.id !== imageId)
        setImageListState({ ...imageListState, images: _images })
        showToast(ToastType.Success, t('FILE_DELETED', 'File deleted'))
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to save the page from API
   */
  const handleSavePage = async () => {
    try {
      const _changes = { ...formState.changes }
      let changes = {}
      for (const key in _changes) {
        if (_changes[key] !== '') {
          changes = { ...changes, [key]: _changes[key] }
        }
      }
      if (Object.keys(changes).length === 0) return
      changes.body = bodyContent

      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/pages/${pageId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        if (handleSuccessUpdate) {
          const updatedPages = pageList.filter(page => {
            if (page.id === pageId) {
              page.name = formState.changes?.name ? formState.changes?.name : page?.name
              page.enabled = formState.changes?.enabled ?? page?.enabled
            }
            return page
          })
          handleSuccessUpdate(updatedPages)
        }
        setFormState({ ...formState, changes: {}, loading: false, error: null })
        showToast(ToastType.Success, t('PAGE_SAVED', 'Page Saved'))
      } else {
        setFormState({ loading: false, error: content.result })
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new page from API
   */
  const handleAddPage = async () => {
    try {
      const _changes = { ...formState.changes }
      let changes = {}
      for (const key in _changes) {
        if (_changes[key] !== '') {
          changes = { ...changes, [key]: _changes[key] }
        }
      }
      if (Object.keys(changes).length === 0) return
      changes.body = bodyContent
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/pages`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        if (handleSuccessUpdate) {
          const updatedPages = [...pageList, content.result]
          handleSuccessUpdate(updatedPages)
        }
        handleCancel && handleCancel()
        setFormState({ ...formState, changes: {}, loading: false, error: null })
        showToast(ToastType.Success, t('PAGE_ADDED', 'Page Added'))
      } else {
        setFormState({ ...formState, loading: false, error: content.result })
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, error: [err.message] })
    }
  }

  const handleInsertImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setInsertImageState({
        ...insertImageState,
        change: {
          source: reader.result,
          type: 1
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  const handleChangeFormState = (field, value) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [field]: value
      }
    })
  }

  useEffect(() => {
    if (Object.keys(insertImageState.change).length === 0) return
    handleAddImage()
  }, [insertImageState.change])

  useEffect(() => {
    getImages()
    if (pageId) {
      getPage()
      setIsAddMode(false)
    } else {
      setIsAddMode(true)
    }
  }, [pageId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isAddMode={isAddMode}
          pageState={pageState}
          imageListState={imageListState}
          insertImageState={insertImageState}
          formState={formState}
          setBodyContent={setBodyContent}
          selectedImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
          handleInsertImage={handleInsertImage}
          handleDeleteImage={handleDeleteImage}
          handleChangeFormState={handleChangeFormState}
          handleSavePage={handleSavePage}
          handleAddPage={handleAddPage}
        />
      )}
    </>
  )
}

PageForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before page form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after page form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before page form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after page form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PageForm.defaultProps = {
  propsToFetch: ['name', 'enabled'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
