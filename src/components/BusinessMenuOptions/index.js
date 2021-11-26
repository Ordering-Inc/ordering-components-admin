import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    menu,
    UIComponent,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])
  const [selectedCopyDays, setSelectedCopyDays] = useState([])
  const [schedule, setSchedule] = useState([])
  const [openAddScheduleIndex, setOpenAddScheduleInex] = useState(null)
  const [isConflict, setIsConflict] = useState(false)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Update business menu name and comment
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    const currentChanges = {
      [e.target.name]: e.target.value
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */
  const handleCheckOrderType = (orderType) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [orderType]: !orderTypeState[orderType]
      }
    })
    setOrderTypeSate({ ...orderTypeState, [orderType]: !orderTypeState[orderType] })
  }

  /**
   * Method to control the business schedule time enable state
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleScheduleTimeActiveState = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].enabled = !_schedule[daysOfWeekIndex].enabled
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        schedule: _schedule
      }
    })
  }

  /**
   * Method to check contain conflict
   */
  const isCheckConflict = (lapses, newSchedule, index) => {
    const openNew = newSchedule.open.hour * 60 + newSchedule.open.minute
    const closeNew = newSchedule.close.hour * 60 + newSchedule.close.minute
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        const openOld = lapses[i].open.hour * 60 + lapses[i].open.minute
        const closeOld = lapses[i].close.hour * 60 + lapses[i].close.minute

        if (openNew <= openOld && closeNew >= closeOld) return true
        if (openNew < openOld && closeNew > openOld) return true
        if (openNew > openOld && closeNew < closeOld) return true
        if (openNew < closeOld && closeNew > closeOld) return true
      }
    }

    return false
  }

  const convertMinutes = ({ hour, minute }) => {
    return hour * 60 + minute
  }

  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {Number} index index of schedule time
   * @param {String} value changed value
   */
  const handleChangeTime = (daysOfWeekIndex, isOpen, isHour, index, value) => {
    const _schedule = [...schedule]
    let conflict
    const selectedLaps = _schedule[daysOfWeekIndex].lapses[index]

    if (isOpen) {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: parseInt(value), minute: selectedLaps.open.minute },
            close: selectedLaps.close
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value)
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: selectedLaps.open.hour, minute: parseInt(value) },
            close: selectedLaps.close
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value)
        }
      }
    } else {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: selectedLaps.open,
            close: { hour: parseInt(value), minute: selectedLaps.close.minute }
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value)
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: selectedLaps.open,
            close: { hour: selectedLaps.close.hour, minute: parseInt(value) }
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value)
        }
      }
    }
    if (!conflict) {
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: JSON.stringify(_schedule)
        }
      })
    }
  }

  /**
   * Method to delete the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Number} index index of schedule time
   */
  const handleDeleteScheduleTime = (daysOfWeekIndex, index) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].lapses.splice(index, 1)
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: JSON.stringify(_schedule)
      }
    })
  }

  /**
   * Update schedule time
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {String} value changed value
   */
  const handleChangeAddScheduleTime = (isOpen, isHour, value) => {
    if (isOpen) {
      if (isHour) {
        setAddScheduleTime({
          ...addScheduleTime,
          open: {
            ...addScheduleTime.open,
            hour: parseInt(value)
          }
        })
      } else {
        setAddScheduleTime({
          ...addScheduleTime,
          open: {
            ...addScheduleTime.open,
            minute: parseInt(value)
          }
        })
      }
    } else {
      if (isHour) {
        setAddScheduleTime({
          ...addScheduleTime,
          close: {
            ...addScheduleTime.close,
            hour: parseInt(value)
          }
        })
      } else {
        setAddScheduleTime({
          ...addScheduleTime,
          close: {
            ...addScheduleTime.close,
            minute: parseInt(value)
          }
        })
      }
    }
  }

  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleAddScheduleTime = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, addScheduleTime, null)
    if (conflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: JSON.stringify(_schedule)
        }
      })
    }
  }

  /**
   * Method to update the busienss menu option from API
   */
  const handleUpdateBusinessMenuOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const changes = {}
      for (const key in formState?.changes) {
        changes[key] = JSON.stringify(formState?.changes[key])
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menu?.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        const _business = { ...business }
        _business.menus.filter(menu => {
          if (menu.id === content.result.id) {
            Object.assign(menu, content.result)
          }
          return true
        })
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  /**
   * Method to add the busienss menu option from API
   */
  const handleAddBusinessMenuOption = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = { ...formState?.changes }
      if (changes?.products) {
        changes.products = JSON.stringify(changes?.products)
      }
      if (changes?.schedule) {
        changes.schedule = JSON.stringify(changes?.schedule)
      } else {
        const schedule = []
        for (var i = 0; i < 7; i++) {
          schedule.push({
            enabled: true,
            lapses: [
              {
                open: {
                  hour: 0,
                  minute: 0
                },
                close: {
                  hour: 23,
                  minute: 45
                }
              }
            ]
          })
        }
        changes.schedule = JSON.stringify(schedule)
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: content.error,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        props.onClose() && props.onClose()
        const _business = { ...business }
        let _menu = { ...content.result, enabled: true }
        const products = business.categories.reduce((products, category) => [...products, ...category.products], []).filter(product => _menu.products.includes(product.id))
        _menu = { ..._menu, products: products }
        _business.menus.push(_menu)
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleSelectCopyTimes = (index) => {
    setSelectedCopyDays([...selectedCopyDays, index])
  }

  /**
   * Method to apply copy times
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleApplyScheduleCopyTimes = (daysOfWeekIndex) => {
    const _schedule = schedule.map((option, index) => {
      if (selectedCopyDays.includes(index)) {
        return schedule[daysOfWeekIndex]
      }
      return option
    })
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        schedule: _schedule
      }
    })
  }

  useEffect(() => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: selectedProductsIds
      }
    })
  }, [selectedProductsIds])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
    setBusinessMenuState({ ...businessMenuState, menu: menu || {} })
    setOrderTypeSate({
      delivery: menu?.delivery,
      pickup: menu?.pickup,
      eatin: menu?.eatin,
      curbside: menu?.curbside,
      driver_thru: menu?.driver_thru
    })
    if (Object.keys(menu).length) {
      const _selectedProductsIds = menu.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
      setSchedule(menu?.schedule)
    } else {
      setSelectedProductsIds([])
      setSchedule([
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] }
      ])
      setOrderTypeSate({
        delivery: false,
        pickup: false,
        eatin: false,
        curbside: false,
        driver_thru: false
      })
    }
  }, [menu])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenuState={businessMenuState}
            formState={formState}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
            scheduleTimes={schedule}
            addScheduleTime={addScheduleTime}
            setAddScheduleTime={setAddScheduleTime}
            handleScheduleTimeActiveState={handleScheduleTimeActiveState}
            handleChangeTime={handleChangeTime}
            handleDeleteScheduleTime={handleDeleteScheduleTime}
            handleChangeAddScheduleTime={handleChangeAddScheduleTime}
            handleAddScheduleTime={handleAddScheduleTime}
            openAddScheduleIndex={openAddScheduleIndex}
            setOpenAddScheduleInex={setOpenAddScheduleInex}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
            selectedCopyDays={selectedCopyDays}
            cleanSelectedCopyDays={cleanSelectedCopyDays}
            handleSelectCopyTimes={handleSelectCopyTimes}
            handleApplyScheduleCopyTimes={handleApplyScheduleCopyTimes}
          />
        )
      }
    </>
  )
}

BusinessMenuOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
  */
  business: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
