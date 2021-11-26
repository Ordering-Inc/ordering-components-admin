"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schedule = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Schedule = function Schedule(props) {
  var UIComponent = props.UIComponent,
      scheduleList = props.scheduleList,
      handleChangeScheduleState = props.handleChangeScheduleState;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      scheduleState = _useState2[0],
      setScheduleState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isConflict = _useState4[0],
      setIsConflict = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isTimeChangeError = _useState6[0],
      setIsTimeChangeError = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: {
      hour: 0,
      minute: 0
    },
    close: {
      hour: 23,
      minute: 45
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      addScheduleTime = _useState8[0],
      setAddScheduleTime = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      openAddSchedule = _useState10[0],
      setOpenAddSchedule = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedCopyDays = _useState12[0],
      setSelectedCopyDays = _useState12[1];
  /**
   * Clean selectedCopyDays
   */


  var cleanSelectedCopyDays = function cleanSelectedCopyDays() {
    return setSelectedCopyDays([]);
  };
  /**
   * Method to covert into minutes
   */


  var convertMinutes = function convertMinutes(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;
    return hour * 60 + minute;
  };
  /**
   * Method to check contain conflict
   */


  var isCheckConflict = function isCheckConflict(lapses, newSchedule, index) {
    var openNew = newSchedule.open.hour * 60 + newSchedule.open.minute;
    var closeNew = newSchedule.close.hour * 60 + newSchedule.close.minute;

    for (var i = 0; i < lapses.length; i++) {
      if (i !== index) {
        var openOld = lapses[i].open.hour * 60 + lapses[i].open.minute;
        var closeOld = lapses[i].close.hour * 60 + lapses[i].close.minute;
        if (openNew <= openOld && closeNew >= closeOld) return true;
        if (openNew < openOld && closeNew > openOld) return true;
        if (openNew > openOld && closeNew < closeOld) return true;
        if (openNew < closeOld && closeNew > closeOld) return true;
      }
    }

    return false;
  };
  /**
   * Method to control the schedule
   */


  var handleEnabledSchedule = function handleEnabledSchedule(daysOfWeekIndex, checked) {
    var _schedule = _toConsumableArray(scheduleState);

    _schedule[daysOfWeekIndex].enabled = checked;
    setScheduleState(_schedule);
  };
  /**
   * Method to change the schedule time on the week day
   * @param {String} changeTime change time
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} lapseIndex lapse no
   * @param {Boolean} isOpen open or close
   */


  var handleChangeScheduleTime = function handleChangeScheduleTime(changeTime, daysOfWeekIndex, lapseIndex, isOpen) {
    var _schedule = _toConsumableArray(scheduleState);

    var currentLapses = _toConsumableArray(_schedule[daysOfWeekIndex].lapses);

    var hour = parseInt(changeTime.split(':')[0]);
    var minute = parseInt(changeTime.split(':')[1]);
    var changeScheduleTime;
    var _isTimeChangeError = false;

    if (isOpen) {
      _isTimeChangeError = convertMinutes({
        hour: hour,
        minute: minute
      }) >= convertMinutes(currentLapses[lapseIndex].close);

      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        changeScheduleTime = {
          open: {
            hour: hour,
            minute: minute
          },
          close: currentLapses[lapseIndex].close
        };
      }
    } else {
      _isTimeChangeError = convertMinutes(currentLapses[lapseIndex].open) >= convertMinutes({
        hour: hour,
        minute: minute
      });

      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        changeScheduleTime = {
          open: currentLapses[lapseIndex].open,
          close: {
            hour: hour,
            minute: minute
          }
        };
      }
    }

    if (!_isTimeChangeError) {
      var conflict = isCheckConflict(currentLapses, changeScheduleTime, lapseIndex);

      if (conflict) {
        setIsConflict(true);
      } else {
        _schedule[daysOfWeekIndex].lapses[lapseIndex] = changeScheduleTime;

        _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
          return convertMinutes(a.open) - convertMinutes(b.open);
        });

        setScheduleState(_schedule);
      }
    }
  };
  /**
   * Method to delete the schedule time on the week day
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} index lapse index
   */


  var handleDeleteSchedule = function handleDeleteSchedule(daysOfWeekIndex, index) {
    var _schedule = _toConsumableArray(scheduleState);

    _schedule[daysOfWeekIndex].lapses.splice(index, 1);

    setScheduleState(_schedule);
  };

  var handleOpenAddSchedule = function handleOpenAddSchedule(daysOfWeekIndex) {
    setAddScheduleTime({
      open: {
        hour: 0,
        minute: 0
      },
      close: {
        hour: 23,
        minute: 45
      }
    });
    setOpenAddSchedule(_defineProperty({}, daysOfWeekIndex, true));
  };
  /**
   * Method to change the add schedule time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close
   */


  var handleChangeAddScheduleTime = function handleChangeAddScheduleTime(changeTime, isOpen) {
    var hour = parseInt(changeTime.split(':')[0]);
    var minute = parseInt(changeTime.split(':')[1]);
    var _isTimeChangeError = false;

    if (isOpen) {
      _isTimeChangeError = convertMinutes({
        hour: hour,
        minute: minute
      }) >= convertMinutes(addScheduleTime.close);

      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
          open: {
            hour: hour,
            minute: minute
          }
        }));
      }
    } else {
      _isTimeChangeError = convertMinutes(addScheduleTime.open) >= convertMinutes({
        hour: hour,
        minute: minute
      });

      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
          close: {
            hour: hour,
            minute: minute
          }
        }));
      }
    }
  };
  /**
   * Method to add new schedule on the week day
   * @param {Nuumber} daysOfWeekIndex week day
   */


  var handleAddSchedule = function handleAddSchedule(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(scheduleState);

    var currentLapses = _toConsumableArray(_schedule[daysOfWeekIndex].lapses);

    var conflict = isCheckConflict(currentLapses, addScheduleTime, null);

    if (conflict) {
      setIsConflict(true);
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime);

      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });

      setScheduleState(_schedule);
      setOpenAddSchedule(_defineProperty({}, daysOfWeekIndex, false));
    }
  };
  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleSelectCopyTimes = function handleSelectCopyTimes(index) {
    setSelectedCopyDays([].concat(_toConsumableArray(selectedCopyDays), [index]));
  };
  /**
   * Method to apply copy times
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleApplyScheduleCopyTimes = function handleApplyScheduleCopyTimes(daysOfWeekIndex) {
    var _schedule = scheduleState.map(function (option, index) {
      if (selectedCopyDays.includes(index)) {
        return scheduleState[daysOfWeekIndex];
      }

      return option;
    });

    setScheduleState(_schedule);
  };

  (0, _react.useEffect)(function () {
    if (scheduleState.length === 0) return;
    handleChangeScheduleState(scheduleState);
  }, [scheduleState]);
  (0, _react.useEffect)(function () {
    if (scheduleList) {
      setScheduleState(scheduleList);
    } else {
      var schedule = [];

      for (var i = 0; i < 7; i++) {
        schedule.push({
          enabled: true,
          lapses: [{
            open: {
              hour: 0,
              minute: 0
            },
            close: {
              hour: 23,
              minute: 45
            }
          }]
        });
      }

      setScheduleState(schedule);
    }
  }, [scheduleList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    scheduleState: scheduleState,
    isConflict: isConflict,
    setIsConflict: setIsConflict,
    isTimeChangeError: isTimeChangeError,
    addScheduleTime: addScheduleTime,
    openAddSchedule: openAddSchedule,
    setIsTimeChangeError: setIsTimeChangeError,
    handleEnabledSchedule: handleEnabledSchedule,
    handleChangeScheduleTime: handleChangeScheduleTime,
    handleDeleteSchedule: handleDeleteSchedule,
    handleOpenAddSchedule: handleOpenAddSchedule,
    handleChangeAddScheduleTime: handleChangeAddScheduleTime,
    handleAddSchedule: handleAddSchedule,
    selectedCopyDays: selectedCopyDays,
    cleanSelectedCopyDays: cleanSelectedCopyDays,
    handleSelectCopyTimes: handleSelectCopyTimes,
    handleApplyScheduleCopyTimes: handleApplyScheduleCopyTimes
  })));
};

exports.Schedule = Schedule;
Schedule.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Schedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};