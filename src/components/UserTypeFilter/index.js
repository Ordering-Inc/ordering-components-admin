import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const UserTypeFilter = (props) => {
  const {
    userTypes,
    onChangeUserType,
    defaultUserType,
    UIComponent
  } = props

  /**
   * This property is used to set in state the current value
   */
  const [typeSelected, setTypeSelected] = useState(defaultUserType)

  /**
   * Handle when select value changes
   * @param {number} userType Select a userType
   */
  const handleChangeUserType = (userType) => {
    setTypeSelected(userType)
    onChangeUserType(userType)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          userTypes={userTypes}
          currentTypeSelected={typeSelected}
          handleChangeUserType={handleChangeUserType}
        />
      )}
    </>
  )
}

UserTypeFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains user types to filter
   */
  userTypes: PropTypes.arrayOf(PropTypes.object),
  /**
   * Default user type to show
   */
  defaultUserType: PropTypes.number,
  /**
   * Function to get userType clicked
   */
  onChangeUserType: PropTypes.func,
  /**
   * Components types before user type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after user type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before user type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after user type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UserTypeFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
