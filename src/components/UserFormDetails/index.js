import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useValidationFields as useValidationsFieldsController } from '../../contexts/ValidationsFieldsContext'

/**
 * Component to manage user form details behavior without UI component
 */
export const UserFormDetails = (props) => {
  const {
    UIComponent,
    useDefualtSessionManager,
    user,
    useValidationFields,
    handleButtonUpdateClick,
    handleSuccessUpdate,
    setSelectedUser,
    onClose,
    setUsersList,
    usersList
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [validationFields] = useValidationsFieldsController()
  const [isEdit, setIsEdit] = useState(false)
  const [userState, setUserState] = useState({ loading: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Delete selected a user
   */
  const deleteUser = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.users(user?.id || userState.result.result.id).delete()
      if (!response.content.error) {
        const _users = [...usersList.users]
        const selectedItem = _users.filter(item => item.id === user.id)[0]
        const index = _users.indexOf(selectedItem)
        if (index > -1) {
          _users.splice(index, 1)
        }
        setUsersList({
          ...usersList,
          users: _users
        })
        setFormState({ ...formState, loading: false })
        onClose()
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
   * Default fuction for user profile workflow
   */
  const handleUpdateClick = async (changes, isImage, image) => {
    if (handleButtonUpdateClick) {
      return handleButtonUpdateClick(userState.result.result, formState.changes)
    }
    try {
      let response
      setFormState({ ...formState, loading: true })
      if (changes) {
        formState.changes = { ...formState.changes, ...changes }
      }
      if (isImage) {
        response = await ordering.users(user?.id || userState.result.result.id).save({ photo: image || formState.changes.photo }, {
          accessToken: accessToken
        })

        const { photo, ...changes } = formState.changes

        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : changes,
          result: response.content,
          loading: false
        })
        if (!response.content.error) setSelectedUser(response.content.result)
      } else {
        response = await ordering.users(user?.id || userState.result.result.id).save(formState.changes, {
          accessToken: accessToken
        })
        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : {},
          result: response.content,
          loading: false
        })
      }

      if (!response.content.error) {
        const _users = [...usersList.users]
        const selectedItem = _users.filter(item => item.id === user.id)[0]
        const index = _users.indexOf(selectedItem)
        if (index > -1) {
          _users[index] = response.content.result
        }
        setUsersList({
          ...usersList,
          users: _users
        })
        setUserState({
          ...userState,
          result: {
            ...userState.result,
            ...response.content
          }
        })

        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }

        if (!image) {
          setIsEdit(!isEdit)
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
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          photo: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useValidationFields ||
      (!validationFields.loading && !validationFields.fields?.checkout[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout[fieldName] &&
        validationFields.fields?.checkout[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFields &&
      !validationFields.loading &&
      validationFields.fields?.checkout?.[fieldName] &&
      validationFields.fields?.checkout?.[fieldName]?.enabled &&
      validationFields.fields?.checkout?.[fieldName]?.required
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isEdit={isEdit}
          cleanFormState={cleanFormState}
          formState={formState}
          userState={userState}
          validationFields={validationFields}
          showField={showField}
          setFormState={setFormState}
          selectedUser={user}
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
          deleteUser={deleteUser}
        />
      )}
    </>
  )
}

UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object Users list
   */
  usersList: PropTypes.object,
  /**
   * Function to change user lists
   */
  setUsersList: PropTypes.func,
  /**
   * Function to close modal
   */
  onClose: PropTypes.func,
  /**
   * Object selected a user data to update
   */
  user: PropTypes.object,
  /**
   * Function to change user data
   */
  setSelectedUser: PropTypes.func,
  /**
   * Use session user to details
   */
  useSessionUser: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`boolean\`.`)
    }
    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`userId\` and \`user\`.`)
    }
  },
  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: PropTypes.bool,
  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`number\`.`)
    }
    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`useSessionUser\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`user\`.`)
    }
  },
  /**
   * Function to change default user details behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: PropTypes.func,
  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: PropTypes.func,
  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFields: PropTypes.bool,
  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: PropTypes.string,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
  /**
   * Components types before user details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after user details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
