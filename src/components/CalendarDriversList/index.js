import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import moment from 'moment'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useSession } from '../../contexts/SessionContext'

export const CalendarDriversList = (props) => {
  const {
    UIComponent,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [selectedGroupId, setSelectedGroupId] = useState(null)
  const [isTimeChangeError, setIsTimeChangeError] = useState({state: false, error: null})
  const [scheduleState, setScheduleState] = useState({state: {}, error: null, loading: false})
  const [selectedBlock, setSelectedBlock] = useState({
    user: null,
    block: null
  })
  const [showBreakBlock, setShowBreakBlock] = useState(false)
  const [propagation, setPropagation] = useState('none')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [stackEventsState, setStackEventsState] = useState({open: false, events: [], user: null})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(selectedBlock?.block ? selectedBlock?.block?.start : new Date)
  const [selectedUntilDate, setSelectedUntilDate] = useState(selectedBlock?.block ? selectedBlock?.block?.until : new Date)
  const [openModal, setOpenModal] = useState(false)
  const actualDate = moment(selectedDate).format('YYYY-MM-DD')
  const [date, setDate] = useState([moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'), moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')])
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage : 1,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  const timeErrorList = [
    t('END_TIME_LATER', 'Choose an end time later than the start time.'),
    t('START_TIME_EARLY', 'Choose a start time earlier than the end time.'),
    t('BREAK_END_TIME_EARLY', 'Choose a break end time later than the start/break start time and earlier than end time.'),
    t('BREAK_START_TIME_LATER', 'Choose a break start time later than the start times and earlier than end/break end times.'),
    t('DATE_RANGE_ERROR', 'The difference between dates should not be greater than 31'),
    t('UNTIL_TIME_LATER', 'Choose an until time later than the start time with a difference of 2 months or less.')
  ]

  /**
   * Get session
   */
  const [session] = useSession()

  /**
   * Array to save drivers
   */
  const [driversList, setDriversList] = useState({ users: [], loading: false, error: null })

  /**
   * Method to get drivers from API
   * @param {Number} page change time
   * @param {Number} pageSize open or close time
   * @param {Number} selectedGroupId open break or close break time
   */
  const getDrivers = async (page, pageSize, selectedGroupId) => {
    try {
      setDriversList({ ...driversList, loading: true })

        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.token}`
          }
        }
        const response = await fetch(`${ordering.root}/drivergroups/${selectedGroupId}/drivers?delivery_block_from=${date[0]}&delivery_block_to=${date[1]}&page=${page}&page_size=${pageSize}`, requestOptions)
        const content = await response.json()

      const { result, pagination, error } = content
      if (error) {
        setDriversList({
          ...driversList,
          loading: false,
          error: result
        })
      } else {
        driversList.users = result
        setDriversList({
          ...driversList,
          loading: false
        })
        let nextPageItems = 0
        if (pagination.current_page !== pagination.total_pages) {
          const remainingItems = pagination.total - driversList.users.length
          nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
        }
        setPaginationProps({
          ...paginationProps,
          currentPage: pagination.current_page,
          pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
          totalPages: pagination.total_pages,
          totalItems: pagination.total,
          from: pagination.from,
          to: pagination.to,
          nextPageItems
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setDriversList({
          ...driversList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Method to validate time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close time
   * @param {Boolean} isBreak open break or close break time
   */
  const handleChangeScheduleTime = (changeTime, isOpen, isBreak) => {

    const _date = moment(`${actualDate} ${changeTime}:00`)

    let _isTimeChangeError = false
    if (isOpen) {
      _isTimeChangeError = !isBreak ? _date.isSameOrAfter(scheduleState?.state?.end ? moment(scheduleState?.state?.end) : '23:59') : (_date.isSameOrAfter(scheduleState?.state?.break_end ? moment(scheduleState?.state?.break_end) : '23:59') || _date.isSameOrAfter(scheduleState?.state?.end ? moment(scheduleState?.state?.end) : '23:59') || _date.isSameOrBefore(scheduleState?.state?.start ? moment(scheduleState?.state?.start) : '00:00'))
      if (_isTimeChangeError) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 3 : 1
        })
      } else {
        isBreak ?
        setScheduleState({
          ...scheduleState,
          state: {
            ...scheduleState.state,
            break_start: `${actualDate} ${changeTime}:00`,
            break_end: scheduleState?.break_end ?? selectedBlock?.block?.break_end ?? `${actualDate} 23:59:00`
          }
        }) :
        setScheduleState({
          ...scheduleState,
          state: {
            ...scheduleState.state,
            start: `${actualDate} ${changeTime}:00`,
            end: scheduleState?.end ?? selectedBlock?.block?.end ?? `${actualDate} 23:59:00`
          }
        })
      }
    } else {
      _isTimeChangeError = !isBreak ? _date.isSameOrBefore(scheduleState?.state?.start ? moment(scheduleState?.state?.start) : '00:00') : (_date.isSameOrBefore(scheduleState?.state?.break_start ? moment(scheduleState?.state?.break_start) : '00:00') || _date.isSameOrBefore(scheduleState?.state?.start ? moment(scheduleState?.state?.start) : '00:00') || _date.isSameOrAfter(scheduleState?.state?.end ? moment(scheduleState?.state?.end) : '23:59'))
      if (_isTimeChangeError && !isEdit) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 2 : 0
        })
      } else {
        isBreak ?
        setScheduleState({
          ...scheduleState,
          state: {
            ...scheduleState.state,
            break_start: scheduleState?.state?.break_start ?? selectedBlock?.block?.break_start ?? `${actualDate} 00:00:00`,
            break_end: `${actualDate} ${changeTime}:00`
          }
        }) :
        setScheduleState({
          ...scheduleState,
          state: {
            ...scheduleState.state,
            start: scheduleState?.state?.start ?? selectedBlock?.block?.start ?? `${actualDate} 00:00:00`,
            end: `${actualDate} ${changeTime}:00`
          }
        })
      }
    }
  }

   /**
   * Method to add block time
   */
  const handleAddBlockTime = async () => {
    try {
      setScheduleState({ ...scheduleState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(scheduleState.state)
      }
      const response = await fetch(`${ordering.root}/drivers/${selectedBlock?.user?.id}/delivery_blocks`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        await getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroupId)
        setScheduleState({
          ...scheduleState,
          loading: false,
          state: {},
          error: null
        })
        setSelectedBlock({
          user: null,
          block: null
        })
        setOpenModal(false)
      } else {
        setScheduleState({
          ...scheduleState,
          loading: false,
          error: result
        })
        setAlertState({
          open: true,
          content: result
        })
      }
    } catch (err) {
      setScheduleState({
        ...scheduleState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
  * Method to delete block time
  */
  const DeleteBlockTime = async () => {
    try {
      setScheduleState({ ...scheduleState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({
          propagation: propagation
        })
      }
      const response = await fetch(`${ordering.root}/drivers/${selectedBlock?.user?.id}/delivery_blocks/${selectedBlock?.block?.id}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        await getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroupId)
        setScheduleState({
          ...scheduleState,
          loading: false,
          state: {},
          error: null
        })
        setSelectedBlock({
          user: null,
          block: null
        })
        setOpenModal(false)
        setOpenDeleteModal(false)
        setPropagation('none')
        setStackEventsState({open: false, events: [], user: null})
      } else {
        setScheduleState({
          ...scheduleState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setScheduleState({
        ...scheduleState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
  * Method to delete block time
  */
  const EditBlockTime = async () => {
    try {
      setScheduleState({ ...scheduleState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({
          ...scheduleState.state,
          propagation: propagation
        })
      }
      const response = await fetch(`${ordering.root}/drivers/${selectedBlock?.user?.id}/delivery_blocks/${selectedBlock?.block?.id}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        await getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroupId)
        setScheduleState({
          ...scheduleState,
          loading: false,
          state: {},
          error: null
        })
        setSelectedBlock({
          user: null,
          block: null
        })
        setOpenModal(false)
        setOpenEditModal(false)
        setPropagation('none')
        setStackEventsState({open: false, events: [], user: null})
      } else {
        setScheduleState({
          ...scheduleState,
          loading: false,
          error: result
        })
        setAlertState({
          open: true,
          content: result
        })
      }
    } catch (err) {
      setScheduleState({
        ...scheduleState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!selectedGroupId) return
    getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroupId)
  }, [selectedGroupId, date])

  useEffect(() => {
    if(moment(selectedUntilDate).isSameOrBefore(selectedDate)) return
    setScheduleState({
      ...scheduleState,
      state: {
        ...scheduleState.state,
        until: moment(selectedUntilDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')
      }
    })
  }, [selectedUntilDate])

  useEffect(() => {
    if(!selectedBlock?.block) return
      const _startHour = moment(scheduleState?.state?.start ?? selectedBlock?.block?.start).format('HH:mm')
      const _endHour = moment(scheduleState?.state?.end ?? selectedBlock?.block?.end).format('HH:mm')
      const _breakStartHour = moment(scheduleState?.state?.break_start ?? selectedBlock?.block?.break_start).format('HH:mm')
      const _breakEndHour = moment(scheduleState?.state?.break_end ?? selectedBlock?.block?.break_end).format('HH:mm')

      const changes = showBreakBlock ? {
        start: `${actualDate} ${_startHour}:00`,
        end: `${actualDate} ${_endHour}:00`,
        break_start: `${actualDate} ${_breakStartHour}:00`,
        break_end: `${actualDate} ${_breakEndHour}:00`
      } : {
        start: `${actualDate} ${_startHour}:00`,
        end: `${actualDate} ${_endHour}:00`
      }

      setScheduleState({
        ...scheduleState,
        state: {
          ...scheduleState.state,
          ...changes
        }
      })
  }, [selectedDate])

  useEffect(() => {
    if(!selectedBlock?.block) return
    setShowBreakBlock(!!(selectedBlock?.block?.break_start))
  }, [selectedBlock])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          date={date}
          setDate={setDate}
          openModal={openModal}
          getDrivers={getDrivers}
          alertState={alertState}
          driversList={driversList}
          propagation={propagation}
          setOpenModal={setOpenModal}
          selectedDate={selectedDate}
          scheduleState={scheduleState}
          selectedBlock={selectedBlock}
          setAlertState={setAlertState}
          timeErrorList={timeErrorList}
          EditBlockTime={EditBlockTime}
          openEditModal={openEditModal}
          setPropagation={setPropagation}
          showBreakBlock={showBreakBlock}
          selectedGroupId={selectedGroupId}
          paginationProps={paginationProps}
          setSelectedDate={setSelectedDate}
          DeleteBlockTime={DeleteBlockTime}
          openDeleteModal={openDeleteModal}
          setScheduleState={setScheduleState}
          setSelectedBlock={setSelectedBlock}
          setOpenEditModal={setOpenEditModal}
          stackEventsState={stackEventsState}
          isTimeChangeError={isTimeChangeError}
          selectedUntilDate={selectedUntilDate}
          setShowBreakBlock={setShowBreakBlock}
          setOpenDeleteModal={setOpenDeleteModal}
          handleAddBlockTime={handleAddBlockTime}
          setSelectedGroupId={setSelectedGroupId}
          setStackEventsState={setStackEventsState}
          setSelectedUntilDate={setSelectedUntilDate}
          setIsTimeChangeError={setIsTimeChangeError}
          handleChangeScheduleTime={handleChangeScheduleTime}
        />
      )}
    </>
  )
}

CalendarDriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CalendarDriversList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
