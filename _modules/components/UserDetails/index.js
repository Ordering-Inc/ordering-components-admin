"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserDetails = function UserDetails(props) {
  var userId = props.userId,
      propsToFetch = props.propsToFetch,
      UIComponent = props.UIComponent,
      handleSuccessUpdate = props.handleSuccessUpdate,
      handleSuccessDeleteUser = props.handleSuccessDeleteUser;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var accessToken = session.token;

  var _useState = (0, _react.useState)({
    loading: false,
    error: false,
    change: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      scheduleState = _useState2[0],
      setScheduleState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    user: null,
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      userState = _useState4[0],
      setUserState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionStatus = _useState6[0],
      setActionStatus = _useState6[1];
  /**
   * Method to get user from API
   */


  var getUser = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var fetchEndpoint, _yield$fetchEndpoint$, result, user;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loading: true
              }));
              fetchEndpoint = ordering.setAccessToken(session.token).users(userId).select(propsToFetch);
              _context.next = 5;
              return fetchEndpoint.get();

            case 5:
              _yield$fetchEndpoint$ = _context.sent;
              result = _yield$fetchEndpoint$.content.result;
              user = Array.isArray(result) ? null : result;
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loading: false,
                user: user
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getUser() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleScheduleState = function handleScheduleState(scheduleChanges) {
    (scheduleChanges === null || scheduleChanges === void 0 ? void 0 : scheduleChanges.length) > 0 && setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      change: scheduleChanges
    }));
  };
  /**
   * Method to delete users from API
   */


  var handleDeleteUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$setAc, content;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus({
                loading: true,
                error: null
              });
              _context2.next = 5;
              return ordering.setAccessToken(session.token).users(userId).delete();

            case 5:
              _yield$ordering$setAc = _context2.sent;
              content = _yield$ordering$setAc.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error) {
                showToast(_ToastContext.ToastType.Success, t('USER_DELETED', 'User deleted'));
                handleSuccessDeleteUser && handleSuccessDeleteUser(userState.user);
                props.onClose && props.onClose();
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context2.t0.message]
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function handleDeleteUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleScheduleUpdateUser = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _scheduleState$change, _userState$user, _userState$user2, _change, _yield$ordering$users, _yield$ordering$users2, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (!((scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$change = scheduleState.change) === null || _scheduleState$change === void 0 ? void 0 : _scheduleState$change.length) > 0 && userState !== null && userState !== void 0 && (_userState$user = userState.user) !== null && _userState$user !== void 0 && _userState$user.id)) {
                _context3.next = 14;
                break;
              }

              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
                loading: true
              }));
              _change = {
                schedule: JSON.stringify(scheduleState === null || scheduleState === void 0 ? void 0 : scheduleState.change)
              };
              _context3.next = 7;
              return ordering.users(userState === null || userState === void 0 ? void 0 : (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.id).save(_change, {
                accessToken: accessToken
              });

            case 7:
              _yield$ordering$users = _context3.sent;
              _yield$ordering$users2 = _yield$ordering$users.content;
              error = _yield$ordering$users2.error;
              result = _yield$ordering$users2.result;

              if (!error) {
                setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
                  change: [],
                  loading: false,
                  error: false
                }));
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  error: false,
                  user: Object.assign(userState.user, result)
                }));
                showToast(_ToastContext.ToastType.Success, t('SCHEDULE_UPDATED', 'Schedule Updated'));
              } else {
                setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
                  change: [],
                  loading: false,
                  error: true
                }));
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  error: true
                }));
                showToast(_ToastContext.ToastType.Error, t('SCHEDULE_UPDATED_FAILED', 'Schedule Update Failed'));
              }

              _context3.next = 15;
              break;

            case 14:
              showToast(_ToastContext.ToastType.Info, t('NOT_CHANGED', 'Not Changed'));

            case 15:
              _context3.next = 22;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](0);
              setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
                change: [],
                loading: false,
                error: true
              }));
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loading: false,
                error: _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message
              }));
              showToast(_ToastContext.ToastType.Error, _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 17]]);
    }));

    return function handleScheduleUpdateUser() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to connect with Google calendar
   */


  var handleGoogleCalendarSync = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _userState$user3, requestOptions, response, content;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus({
                loading: true,
                error: null
              });
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/users/").concat((_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.id, "/google/calendar/sync"), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                showToast(_ToastContext.ToastType.Success, t('YOUR_CALENDAR_WILL_BE_SYNCHRONIZED', 'Your calendar will be synchronized'));
              } else {
                setActionStatus({
                  loading: false,
                  error: content.result
                });
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context4.t0.message]
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleGoogleCalendarSync() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (props.user) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        user: props.user
      }));
    } else {
      getUser();
    }
  }, [userId]);

  var handleSuccessUserUpdate = function handleSuccessUserUpdate(updatedUser) {
    setUserState(_objectSpread(_objectSpread({}, userState), {}, {
      user: Object.assign(userState.user, updatedUser)
    }));
    handleSuccessUpdate && handleSuccessUpdate(updatedUser);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    userState: userState,
    actionStatus: actionStatus,
    handleDeleteUser: handleDeleteUser,
    handleSuccessUserUpdate: handleSuccessUserUpdate,
    handleGoogleCalendarSync: handleGoogleCalendarSync,
    scheduleState: scheduleState,
    handleScheduleState: handleScheduleState,
    handleScheduleUpdateUser: handleScheduleUpdateUser
  })));
};

exports.UserDetails = UserDetails;
UserDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
  * This must be contains userId to fetch
  */
  userId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
  * User, this must be contains an object with all user info
  */
  user: _propTypes.default.object,

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
UserDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location', 'loyalty_level', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'phone_verified', 'email_verified', 'schedule', 'timezone', 'max_days_in_future', 'occupation_id', 'occupation', 'session']
};