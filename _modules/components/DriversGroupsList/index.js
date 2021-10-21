"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupsList = function DriversGroupsList(props) {
  var UIComponent = props.UIComponent,
      isDriversMangersRequired = props.isDriversMangersRequired;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    groups: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      driversGroupsState = _useState2[0],
      setDriversGroupsState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    managers: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      driversManagersList = _useState4[0],
      setDriversManagersList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    businesses: [],
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      businessesList = _useState6[0],
      setBusinessesList = _useState6[1];

  var _useState7 = (0, _react.useState)({
    paymethods: [],
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      paymethodsList = _useState8[0],
      setPaymethodsList = _useState8[1];

  var _useState9 = (0, _react.useState)({
    drivers: [],
    loading: false,
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      driversList = _useState10[0],
      setDriversList = _useState10[1];

  var _useState11 = (0, _react.useState)({
    companies: [],
    loading: false,
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      driversCompanyList = _useState12[0],
      setDriversCompanyList = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      startSeveralDeleteStart = _useState14[0],
      setStartSeveralDeleteStart = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      openDetails = _useState16[0],
      setOpenDetails = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      changesState = _useState18[0],
      setChangesState = _useState18[1];

  var _useState19 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      actionState = _useState20[0],
      setActionState = _useState20[1];

  var _useState21 = (0, _react.useState)(null),
      _useState22 = _slicedToArray(_useState21, 2),
      curDriversGroup = _useState22[0],
      setCurDriversGroup = _useState22[1];

  var _useState23 = (0, _react.useState)([]),
      _useState24 = _slicedToArray(_useState23, 2),
      selectedBusinessIds = _useState24[0],
      setSelectedBusinessIds = _useState24[1];

  var _useState25 = (0, _react.useState)([]),
      _useState26 = _slicedToArray(_useState25, 2),
      selectedPaymethodIds = _useState26[0],
      setSelectedPaymethodIds = _useState26[1];

  var _useState27 = (0, _react.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      selectedDriverIds = _useState28[0],
      setSelectedDriverIds = _useState28[1];

  var _useState29 = (0, _react.useState)([]),
      _useState30 = _slicedToArray(_useState29, 2),
      selectedDriversCompanyIds = _useState30[0],
      setSelectedDriversCompanyIds = _useState30[1];

  var _useState31 = (0, _react.useState)([]),
      _useState32 = _slicedToArray(_useState31, 2),
      selectedGroupList = _useState32[0],
      setSelectedGroupList = _useState32[1];
  /**
   * Method to get the drivers groups from API
   */


  var getDriversGroups = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: content.result,
                  loading: false
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getDriversGroups() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to  get the driver managers from API
   */


  var getDriverManagers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
                loading: false
              }));
              _context2.next = 4;
              return ordering.setAccessToken(token).users().where([{
                attribute: 'level',
                value: 5
              }]).select(['name', 'email', 'photo']).get();

            case 4:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;

              if (!error) {
                setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
                  loading: false,
                  managers: result
                }));
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getDriverManagers() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get businesses from API
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false
              }));
              _context3.next = 4;
              return ordering.setAccessToken(token).businesses().select(['name', 'logo']).asDashboard().get();

            case 4:
              _yield$ordering$setAc3 = _context3.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;

              if (!error) {
                setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                  loading: false,
                  businesses: result
                }));
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function getBusinesses() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false
              }));
              _context4.next = 4;
              return ordering.setAccessToken(token).users().where([{
                attribute: 'level',
                value: 4
              }]).select(['name', 'lastname', 'email', 'photo']).get();

            case 4:
              _yield$ordering$setAc5 = _context4.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;

              if (!error) {
                setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                  loading: false,
                  drivers: result
                }));
              }

              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    return function getDrivers() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to get the paymethods from API
   */


  var getPaymethods = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context5.next = 5;
              return fetch("".concat(ordering.root, "/paymethods?params=name&where={%22enabled%22:true}"), requestOptions);

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();

            case 8:
              content = _context5.sent;

              if (!content.error) {
                setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                  paymethods: content.result,
                  loading: false
                }));
              }

              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function getPaymethods() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to get the drivers companies from API
   */


  var getDriversCompanies = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context6.next = 5;
              return fetch("".concat(ordering.root, "/driver_companies?params=name"), requestOptions);

            case 5:
              response = _context6.sent;
              _context6.next = 8;
              return response.json();

            case 8:
              content = _context6.sent;

              if (!content.error) {
                setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
                  companies: content.result,
                  loading: false
                }));
              }

              _context6.next = 15;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](0);
              setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
                loading: false,
                error: [_context6.t0.message]
              }));

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 12]]);
    }));

    return function getDriversCompanies() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Method to update selected drivers group from API
   * @param {Number} driverGroupId
   * @param {Object} changes
   */


  var handleUpdateDriversGroup = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(driverGroupId, changes) {
      var requestOptions, response, content, groups;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context7.next = 6;
              return fetch("".concat(ordering.root, "/drivergroups/").concat(driverGroupId), requestOptions);

            case 6:
              response = _context7.sent;
              _context7.next = 9;
              return response.json();

            case 9:
              content = _context7.sent;

              if (!content.error) {
                setActionState({
                  error: null,
                  loading: false
                });
                groups = driversGroupsState.groups.filter(function (group) {
                  if (group.id === driverGroupId) {
                    Object.assign(group, content.result);
                  }

                  return true;
                });
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
                setChangesState({});
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context7.next = 16;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](0);
              setActionState({
                loading: false,
                error: [_context7.t0.message]
              });

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 13]]);
    }));

    return function handleUpdateDriversGroup(_x, _x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the drivers group from API
   * @param {Number} driversGroupId
   */


  var handleDeleteDriversGroup = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(driversGroupId) {
      var requestOptions, response, content, groups, groupList;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context8.next = 6;
              return fetch("".concat(ordering.root, "/drivergroups/").concat(driversGroupId), requestOptions);

            case 6:
              response = _context8.sent;
              _context8.next = 9;
              return response.json();

            case 9:
              content = _context8.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                groups = driversGroupsState.groups.filter(function (group) {
                  return group.id !== driversGroupId;
                });
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'));

                if (startSeveralDeleteStart) {
                  groupList = _toConsumableArray(selectedGroupList);
                  groupList.shift();

                  if (groupList.length === 0) {
                    setStartSeveralDeleteStart(false);
                  }

                  setSelectedGroupList(groupList);
                }
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
                setStartSeveralDeleteStart(false);
              }

              _context8.next = 16;
              break;

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              setActionState({
                loading: false,
                error: [_context8.t0.message]
              });

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 13]]);
    }));

    return function handleDeleteDriversGroup(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Method to add new drivers group from API
   */


  var handleAddDriversGroup = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
      var extraAttributes, changes, requestOptions, response, content, _content$result, newGroup, newAdmin, groups;

      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              extraAttributes = {
                enabled: true,
                autoassign_amount_drivers: 1,
                autoassign_autoaccept_by_driver: false,
                autoassign_autoreject_time: 30,
                autoassign_increment_radius: 100,
                autoassign_initial_radius: 500,
                autoassign_max_in_accepted_by_business: 5,
                autoassign_max_in_accepted_by_driver: 5,
                autoassign_max_in_driver_in_business: 5,
                autoassign_max_in_pending: 5,
                autoassign_max_in_pickup_completed: 5,
                autoassign_max_in_ready_for_pickup: 5,
                autoassign_max_orders: 5,
                autoassign_max_radius: 1000,
                orders_group_max_distance_between_delivery: 200,
                orders_group_max_distance_between_pickup: 200,
                orders_group_max_orders: 1,
                orders_group_max_time_between: 5,
                orders_group_max_time_between_delivery: 600,
                orders_group_max_time_between_pickup: 600,
                orders_group_start_in_status: '7',
                orders_group_use_maps_api: false
              };
              changes = _objectSpread(_objectSpread({}, changesState), extraAttributes);
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context9.next = 8;
              return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);

            case 8:
              response = _context9.sent;
              _context9.next = 11;
              return response.json();

            case 11:
              content = _context9.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                newGroup = _objectSpread({}, content.result);

                if (!((_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.administrator) && driversManagersList.managers.length > 0) {
                  newAdmin = driversManagersList.managers.find(function (manager) {
                    var _content$result2;

                    return manager.id === ((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.administrator_id);
                  });
                  newGroup = _objectSpread(_objectSpread({}, newGroup), {}, {
                    administrator: newAdmin
                  });
                }

                groups = [].concat(_toConsumableArray(driversGroupsState.groups), [newGroup]);
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_ADDED', 'Driver group added'));
                setChangesState({});
                setOpenDetails(false);
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context9.next = 18;
              break;

            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](0);
              setActionState({
                loading: false,
                error: [_context9.t0.message]
              });

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 15]]);
    }));

    return function handleAddDriversGroup() {
      return _ref9.apply(this, arguments);
    };
  }();

  var handleChangesState = function handleChangesState(changes) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), changes));
  };

  var handleSelectGroup = function handleSelectGroup(groupId) {
    var ids = [];

    if (selectedGroupList.includes(groupId)) {
      ids = selectedGroupList.filter(function (id) {
        return id !== groupId;
      });
    } else {
      ids = [].concat(_toConsumableArray(selectedGroupList), [groupId]);
    }

    setSelectedGroupList(ids);
  };

  var handleAllSelectGroup = function handleAllSelectGroup() {
    var allIds = driversGroupsState.groups.reduce(function (ids, group) {
      return [].concat(_toConsumableArray(ids), [group.id]);
    }, []);

    if (selectedGroupList.length === allIds.length) {
      setSelectedGroupList([]);
    } else {
      setSelectedGroupList(allIds);
    }
  };

  var handleSelectBusiness = function handleSelectBusiness(businessId, checked) {
    var businessIds = _toConsumableArray(selectedBusinessIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(businessIds), [businessId]);
    } else {
      filteredIds = businessIds.filter(function (id) {
        return id !== businessId;
      });
    }

    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectPaymethod = function handleSelectPaymethod(paymethodId, checked) {
    var paymethodIds = _toConsumableArray(selectedPaymethodIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(paymethodIds), [paymethodId]);
    } else {
      filteredIds = paymethodIds.filter(function (id) {
        return id !== paymethodId;
      });
    }

    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectDriver = function handleSelectDriver(driverId, checked) {
    var driverIds = _toConsumableArray(selectedDriverIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverIds), [driverId]);
    } else {
      filteredIds = driverIds.filter(function (id) {
        return id !== driverId;
      });
    }

    setSelectedDriverIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectDriversCompany = function handleSelectDriversCompany(driverCompanyId, checked) {
    var driverCompanyIds = _toConsumableArray(selectedDriversCompanyIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverCompanyIds), [driverCompanyId]);
    } else {
      filteredIds = driverCompanyIds.filter(function (id) {
        return id !== driverCompanyId;
      });
    }

    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllBusiness = function handleSelectAllBusiness(isAll) {
    var _businessesList$busin;

    var businessIds = businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(businessIds);
    } else {
      filteredIds = [];
    }

    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllPaymethod = function handleSelectAllPaymethod(isAll) {
    var _paymethodsList$payme;

    var paymethodIds = paymethodsList === null || paymethodsList === void 0 ? void 0 : (_paymethodsList$payme = paymethodsList.paymethods) === null || _paymethodsList$payme === void 0 ? void 0 : _paymethodsList$payme.reduce(function (ids, paymethod) {
      return [].concat(_toConsumableArray(ids), [paymethod.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(paymethodIds);
    } else {
      filteredIds = [];
    }

    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllDriver = function handleSelectAllDriver(isAll) {
    var _driversList$drivers;

    var driverIds = driversList === null || driversList === void 0 ? void 0 : (_driversList$drivers = driversList.drivers) === null || _driversList$drivers === void 0 ? void 0 : _driversList$drivers.reduce(function (ids, driver) {
      return [].concat(_toConsumableArray(ids), [driver.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(driverIds);
    } else {
      filteredIds = [];
    }

    setSelectedDriverIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllDriversCompany = function handleSelectAllDriversCompany(isAll) {
    var _driversCompanyList$c;

    var driverCompanyIds = driversCompanyList === null || driversCompanyList === void 0 ? void 0 : (_driversCompanyList$c = driversCompanyList.companies) === null || _driversCompanyList$c === void 0 ? void 0 : _driversCompanyList$c.reduce(function (ids, company) {
      return [].concat(_toConsumableArray(ids), [company.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(driverCompanyIds);
    } else {
      filteredIds = [];
    }

    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };

  (0, _react.useEffect)(function () {
    if (!startSeveralDeleteStart || selectedGroupList.length === 0) return;
    handleDeleteDriversGroup(selectedGroupList[0]);
  }, [selectedGroupList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    if (curDriversGroup) {
      var _curDriversGroup$busi;

      var businessIds = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : (_curDriversGroup$busi = curDriversGroup.business) === null || _curDriversGroup$busi === void 0 ? void 0 : _curDriversGroup$busi.reduce(function (ids, business) {
        return [].concat(_toConsumableArray(ids), [business.id]);
      }, []);
      setSelectedBusinessIds(businessIds);
      setSelectedPaymethodIds((curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.allowed_paymethods) || []);
      var drivers = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.drivers.reduce(function (ids, driver) {
        return [].concat(_toConsumableArray(ids), [driver.id]);
      }, []);
      setSelectedDriverIds(drivers);
      var companyIds = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.driver_companies.reduce(function (ids, company) {
        return [].concat(_toConsumableArray(ids), [company.id]);
      }, []);
      setSelectedDriversCompanyIds(companyIds);
    } else {
      setSelectedBusinessIds([]);
      setSelectedPaymethodIds([]);
      setSelectedDriverIds([]);
      setSelectedDriversCompanyIds([]);
    }
  }, [curDriversGroup]);
  (0, _react.useEffect)(function () {
    getDriversGroups();

    if (isDriversMangersRequired) {
      getDriverManagers();
    }

    getDrivers();
    getBusinesses();
    getPaymethods();
    getDriversCompanies();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversGroupsState: driversGroupsState,
    driversManagersList: driversManagersList,
    businessesList: businessesList,
    paymethodsList: paymethodsList,
    driversList: driversList,
    driversCompanyList: driversCompanyList,
    openDetails: openDetails,
    setOpenDetails: setOpenDetails,
    cleanChagesState: function cleanChagesState() {
      return setChangesState({});
    },
    changesState: changesState,
    actionState: actionState,
    handleChangesState: handleChangesState,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    handleDeleteSelectedGroups: function handleDeleteSelectedGroups() {
      return setStartSeveralDeleteStart(true);
    },
    curDriversGroup: curDriversGroup,
    setCurDriversGroup: setCurDriversGroup,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    selectedBusinessIds: selectedBusinessIds,
    selectedPaymethodIds: selectedPaymethodIds,
    selectedDriverIds: selectedDriverIds,
    handleSelectDriver: handleSelectDriver,
    handleSelectAllDriver: handleSelectAllDriver,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectAllPaymethod: handleSelectAllPaymethod,
    selectedDriversCompanyIds: selectedDriversCompanyIds,
    handleSelectDriversCompany: handleSelectDriversCompany,
    handleSelectAllDriversCompany: handleSelectAllDriversCompany,
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup,
    handleAddDriversGroup: handleAddDriversGroup
  })));
};

exports.DriversGroupsList = DriversGroupsList;
DriversGroupsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};