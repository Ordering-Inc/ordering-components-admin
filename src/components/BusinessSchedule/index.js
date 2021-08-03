import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const BusinessSchedule = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessBusinessScheduleUpdate
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [schedule, setSchedule] = useState([])
  const [selectedCopyDays, setSelectedCopyDays] = useState([])
  const [isConflict, setIsConflict] = useState(false)
  const [openAddScheduleIndex, setOpenAddScheduleInex] = useState(null)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Method to check valid schedule time
   */
  const isConflictScheduleTime = (lapses, index, value) => {
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        if (convertMinutes(lapses[i].open) <= value && convertMinutes(lapses[i].close) >= value) {
          return true
        }
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
    if (isOpen) {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: parseInt(value), minute: _schedule[daysOfWeekIndex].lapses[index].open.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value)
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: _schedule[daysOfWeekIndex].lapses[index].open.hour, minute: parent(value) })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value)
        }
      }
    } else {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: parseInt(value), minute: _schedule[daysOfWeekIndex].lapses[index].close.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value)
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: _schedule[daysOfWeekIndex].lapses[index].close.hour, minute: parent(value) })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value)
        }
      }
    }
    _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleAddScheduleTime = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const openConflict = isConflictScheduleTime(
      _schedule[daysOfWeekIndex].lapses,
      null,
      convertMinutes({ hour: addScheduleTime.open.hour, minute: addScheduleTime.open.minute })
    )
    const closeConflict = isConflictScheduleTime(
      _schedule[daysOfWeekIndex].lapses,
      null,
      convertMinutes({ hour: addScheduleTime.close.hour, minute: addScheduleTime.close.minute })
    )
    if (openConflict || closeConflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: _schedule
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
        schedule: _schedule
      }
    })
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
        schedule: _schedule
      }
    })
  }

  /**
   * Method to update the business from the API
   */
  const handleUpdateBusinessClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business.id).save(changes, {
        accessToken: session.token
      })
      setOpenAddScheduleInex(null)
      if (!error) {
        handleSuccessBusinessScheduleUpdate && handleSuccessBusinessScheduleUpdate(result)
      }
      setFormState({
        ...formState,
        changes: error ? formState.changes : {},
        result: {
          error: false,
          result: result
        },
        loading: false
      })
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
   * check conflict between two schedule times
   */
  const isConflictTime = (lapses, copyLapses) => {
    for (let i = 0; i < lapses.length; i++) {
      for (let j = 0; j < copyLapses.length; j++) {
        const openTime = convertMinutes(copyLapses[j].open)
        const closeTime = convertMinutes(copyLapses[j].close)
        if ((convertMinutes(lapses[i].open) <= openTime && convertMinutes(lapses[i].close) >= openTime) || ((convertMinutes(lapses[i].open) <= closeTime && convertMinutes(lapses[i].close) >= closeTime))) {
          return true
        }
      }
    }
    return false
  }

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleSelectCopyTimes = (index, daysOfWeekIndex) => {
    let _selectedCopyDays = [...selectedCopyDays]
    const _schedule = [...schedule]

    if (!_selectedCopyDays.includes(index)) {
      const conflict = isConflictTime(_schedule[daysOfWeekIndex].lapses, _schedule[index].lapses)
      if (conflict) {
        setIsConflict(true)
        return
      }
      _selectedCopyDays.push(index)

      for (const laps of _schedule[index].lapses) {
        _schedule[daysOfWeekIndex].lapses.push(laps)
      }

      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
    } else {
      _selectedCopyDays = _selectedCopyDays.filter(el => el !== index)

      const newLapses = _schedule[daysOfWeekIndex].lapses.filter(laps => {
        for (const deleteLaps of _schedule[index].lapses) {
          if (convertMinutes(laps.open) === convertMinutes(deleteLaps.open) && convertMinutes(laps.close) === convertMinutes(deleteLaps.close)) {
            return false
          }
        }
        return true
      })
      _schedule[daysOfWeekIndex].lapses = newLapses
    }

    setSelectedCopyDays(_selectedCopyDays)

    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {String} value changed value
   */
  const handleChangeAddScheduleTime = (daysOfWeekIndex, isOpen, isHour, value) => {
    const _schedule = [...schedule]
    let conflict
    if (isOpen) {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: parseInt(value), minute: addScheduleTime.open.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            open: {
              ...addScheduleTime.open,
              hour: parseInt(value)
            }
          })
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: addScheduleTime.open.hour, minute: parseInt(value) })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            open: {
              ...addScheduleTime.open,
              minute: parseInt(value)
            }
          })
        }
      }
    } else {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: parseInt(value), minute: addScheduleTime.close.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            close: {
              ...addScheduleTime.close,
              hour: parseInt(value)
            }
          })
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: addScheduleTime.close.hour, minute: parseInt(value) })
        )
        if (conflict) {
          setIsConflict(true)
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
  }

  useEffect(() => {
    if (Object.keys(formState.changes).length === 0 || isConflict) return
    handleUpdateBusinessClick()
  }, [formState?.changes, isConflict])

  useEffect(() => {
    setSchedule(business?.schedule)
  }, [business?.schedule])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            selectedCopyDays={selectedCopyDays}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
            cleanSelectedCopyDays={cleanSelectedCopyDays}
            handleChangeTime={handleChangeTime}
            handleAddScheduleTime={handleAddScheduleTime}
            handleDeleteScheduleTime={handleDeleteScheduleTime}
            handleScheduleTimeActiveState={handleScheduleTimeActiveState}
            handleSelectCopyTimes={handleSelectCopyTimes}
            addScheduleTime={addScheduleTime}
            setAddScheduleTime={setAddScheduleTime}
            handleChangeAddScheduleTime={handleChangeAddScheduleTime}
            openAddScheduleIndex={openAddScheduleIndex}
            setOpenAddScheduleInex={setOpenAddScheduleInex}
          />
        )
      }
    </>
  )
}

BusinessSchedule.propTypes = {
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

BusinessSchedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
