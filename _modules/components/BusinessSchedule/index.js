"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSchedule = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var BusinessSchedule = function BusinessSchedule(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      handleSuccessBusinessScheduleUpdate = props.handleSuccessBusinessScheduleUpdate;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      schedule = _useState4[0],
      setSchedule = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedCopyDays = _useState6[0],
      setSelectedCopyDays = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isConflict = _useState8[0],
      setIsConflict = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      openAddScheduleIndex = _useState10[0],
      setOpenAddScheduleInex = _useState10[1];

  var _useState11 = (0, _react.useState)({
    open: {
      hour: 0,
      minute: 0
    },
    close: {
      hour: 23,
      minute: 59
    }
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      addScheduleTime = _useState12[0],
      setAddScheduleTime = _useState12[1];
  /**
   * Clean selectedCopyDays
   */


  var cleanSelectedCopyDays = function cleanSelectedCopyDays() {
    return setSelectedCopyDays([]);
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

  var convertMinutes = function convertMinutes(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;
    return hour * 60 + minute;
  };
  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {Number} index index of schedule time
   * @param {String} value changed value
   */


  var handleChangeTime = function handleChangeTime(daysOfWeekIndex, isOpen, isHour, index, value) {
    var _schedule = _toConsumableArray(schedule);

    var conflict;
    var selectedLaps = _schedule[daysOfWeekIndex].lapses[index];

    if (isOpen) {
      if (isHour) {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: {
            hour: parseInt(value),
            minute: selectedLaps.open.minute
          },
          close: selectedLaps.close
        }, index);

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value);
        }
      } else {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: {
            hour: selectedLaps.open.hour,
            minute: parseInt(value)
          },
          close: selectedLaps.close
        }, index);

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value);
        }
      }
    } else {
      if (isHour) {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: selectedLaps.open,
          close: {
            hour: parseInt(value),
            minute: selectedLaps.close.minute
          }
        }, index);

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value);
        }
      } else {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: selectedLaps.open,
          close: {
            hour: selectedLaps.close.hour,
            minute: parseInt(value)
          }
        }, index);

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value);
        }
      }
    }

    if (!conflict) {
      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });

      setSchedule(_schedule);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          schedule: _schedule
        }
      }));
    }
  };
  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleAddScheduleTime = function handleAddScheduleTime(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(schedule);

    var conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, addScheduleTime, null);

    if (conflict) {
      setIsConflict(true);
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime);

      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });

      setSchedule(_schedule);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          schedule: _schedule
        }
      }));
    }
  };
  /**
   * Method to delete the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Number} index index of schedule time
   */


  var handleDeleteScheduleTime = function handleDeleteScheduleTime(daysOfWeekIndex, index) {
    var _schedule = _toConsumableArray(schedule);

    _schedule[daysOfWeekIndex].lapses.splice(index, 1);

    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        schedule: _schedule
      }
    }));
  };
  /**
   * Method to control the business schedule time enable state
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleScheduleTimeActiveState = function handleScheduleTimeActiveState(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(schedule);

    _schedule[daysOfWeekIndex].enabled = !_schedule[daysOfWeekIndex].enabled;
    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        schedule: _schedule
      }
    }));
  };
  /**
   * Method to update the business from the API
   */


  var handleUpdateBusinessClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, _yield$ordering$busin, _yield$ordering$busin2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread({}, formState.changes);
              _context.next = 5;
              return ordering.businesses(business.id).save(changes, {
                accessToken: session.token
              });

            case 5:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;
              setOpenAddScheduleInex(null);

              if (!error) {
                handleSuccessBusinessScheduleUpdate && handleSuccessBusinessScheduleUpdate(result);
              }

              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: error ? formState.changes : {},
                result: {
                  error: false,
                  result: result
                },
                loading: false
              }));
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleUpdateBusinessClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleSelectCopyTimes = function handleSelectCopyTimes(index, daysOfWeekIndex) {
    var _selectedCopyDays = _toConsumableArray(selectedCopyDays);

    var _schedule = _toConsumableArray(schedule);

    if (!_selectedCopyDays.includes(index)) {
      var conflict = false;

      for (var i = 0; i < _schedule[index].lapses.length; i++) {
        if (isCheckConflict(_schedule[daysOfWeekIndex].lapses, _schedule[index].lapses[i], null)) {
          conflict = true;
        }
      }

      if (conflict) {
        setIsConflict(true);
        return;
      }

      _selectedCopyDays.push(index);

      var _iterator = _createForOfIteratorHelper(_schedule[index].lapses),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var laps = _step.value;

          _schedule[daysOfWeekIndex].lapses.push(laps);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });
    } else {
      _selectedCopyDays = _selectedCopyDays.filter(function (el) {
        return el !== index;
      });

      var newLapses = _schedule[daysOfWeekIndex].lapses.filter(function (laps) {
        var _iterator2 = _createForOfIteratorHelper(_schedule[index].lapses),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var deleteLaps = _step2.value;

            if (convertMinutes(laps.open) === convertMinutes(deleteLaps.open) && convertMinutes(laps.close) === convertMinutes(deleteLaps.close)) {
              return false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      });

      _schedule[daysOfWeekIndex].lapses = newLapses;
    }

    setSelectedCopyDays(_selectedCopyDays);
    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        schedule: _schedule
      }
    }));
  };
  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {String} value changed value
   */


  var handleChangeAddScheduleTime = function handleChangeAddScheduleTime(daysOfWeekIndex, isOpen, isHour, value) {
    var _schedule = _toConsumableArray(schedule);

    var conflict;

    if (isOpen) {
      if (isHour) {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: {
            hour: parseInt(value),
            minute: addScheduleTime.open.minute
          },
          close: addScheduleTime.close
        }, null);

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            open: _objectSpread(_objectSpread({}, addScheduleTime.open), {}, {
              hour: parseInt(value)
            })
          }));
        }
      } else {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: {
            hour: addScheduleTime.open.hour,
            minute: parseInt(value)
          },
          close: addScheduleTime.close
        }, null);

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            open: _objectSpread(_objectSpread({}, addScheduleTime.open), {}, {
              minute: parseInt(value)
            })
          }));
        }
      }
    } else {
      if (isHour) {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: addScheduleTime.open,
          close: {
            hour: parseInt(value),
            minute: addScheduleTime.close.minute
          }
        }, null);

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            close: _objectSpread(_objectSpread({}, addScheduleTime.close), {}, {
              hour: parseInt(value)
            })
          }));
        }
      } else {
        conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, {
          open: addScheduleTime.open,
          close: {
            hour: addScheduleTime.close.hour,
            minute: parseInt(value)
          }
        }, null);

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            close: _objectSpread(_objectSpread({}, addScheduleTime.close), {}, {
              minute: parseInt(value)
            })
          }));
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(formState.changes).length === 0 || isConflict) return;
    handleUpdateBusinessClick();
  }, [formState === null || formState === void 0 ? void 0 : formState.changes, isConflict]);
  (0, _react.useEffect)(function () {
    setSchedule(business === null || business === void 0 ? void 0 : business.schedule);
  }, [business === null || business === void 0 ? void 0 : business.schedule]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    selectedCopyDays: selectedCopyDays,
    isConflict: isConflict,
    setIsConflict: setIsConflict,
    cleanSelectedCopyDays: cleanSelectedCopyDays,
    handleChangeTime: handleChangeTime,
    handleAddScheduleTime: handleAddScheduleTime,
    handleDeleteScheduleTime: handleDeleteScheduleTime,
    handleScheduleTimeActiveState: handleScheduleTimeActiveState,
    handleSelectCopyTimes: handleSelectCopyTimes,
    addScheduleTime: addScheduleTime,
    setAddScheduleTime: setAddScheduleTime,
    handleChangeAddScheduleTime: handleChangeAddScheduleTime,
    openAddScheduleIndex: openAddScheduleIndex,
    setOpenAddScheduleInex: setOpenAddScheduleInex
  })));
};

exports.BusinessSchedule = BusinessSchedule;
BusinessSchedule.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessSchedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};