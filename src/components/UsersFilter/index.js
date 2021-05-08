import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
export const UsersFilter = (props) => {
  const {
    UIComponent,
    setFilterValues,
    filterValues,
    onCloseModal
  } = props

  const [filterState, setFilterState] = useState({ loading: false, changes: {} })

  useEffect(() => {
    setFilterState({ ...filterState, changes: { ...filterValues } })
  }, [filterValues])

  const handleChangeInput = (name, val) => {
    setFilterState({ ...filterState, changes: { ...filterState.changes, [name]: val } })
  }

  const applyFilter = () => {
    if (Object.keys(filterState.changes).length > 0) {
      setFilterValues({ ...filterState.changes })
      onCloseModal()
    }
  }

  const clearFilter = () => {
    setFilterValues({})
    setFilterState({...filterState, changes: {}})
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeInput={handleChangeInput}
          filterState={filterState}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      )}
    </>
  )
}

UsersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change filter values
   */
  setFilterValues: PropTypes.func,
  /**
   * Object for filter values
   */
  filterValues: PropTypes.object,
  /**
   * Function to close modal
   */
  onCloseModal: PropTypes.func,
  /**
   * Array that contains business types to filter
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UsersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
