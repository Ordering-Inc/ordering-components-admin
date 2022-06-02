"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var UsersList = function UsersList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings,
      propsToFetch = props.propsToFetch,
      isSearchByUserId = props.isSearchByUserId,
      isSearchByUserEmail = props.isSearchByUserEmail,
      isSearchByUserPhone = props.isSearchByUserPhone,
      isSearchByUserName = props.isSearchByUserName,
      isBusinessOwners = props.isBusinessOwners,
      defaultUserTypesSelected = props.defaultUserTypesSelected,
      disabledActiveStateCondition = props.disabledActiveStateCondition,
      isDriver = props.isDriver;

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

  var _useState = (0, _react.useState)({
    users: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      usersList = _useState2[0],
      setUsersList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    clear: false,
    changes: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValues = _useState4[0],
      setFilterValues = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isVerified = _useState8[0],
      setIsVerified = _useState8[1];

  var _useState9 = (0, _react.useState)(defaultUserTypesSelected),
      _useState10 = _slicedToArray(_useState9, 2),
      userTypesSelected = _useState10[0],
      setUserTypesSelected = _useState10[1];

  var _useState11 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      paginationProps = _useState12[0],
      setPaginationProps = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      paginationDetail = _useState14[0],
      setPaginationDetail = _useState14[1];

  var _useState15 = (0, _react.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedUserActiveState = _useState16[0],
      setSelectedUserActiveState = _useState16[1];

  var _useState17 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      actionStatus = _useState18[0],
      setActionStatus = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      selectedUsers = _useState20[0],
      setSelectedUsers = _useState20[1];

  var _useState21 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      deleteUsersActionState = _useState22[0],
      setDeleteUsersActionState = _useState22[1];
  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */


  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page, pageSize) {
      var parameters, paginationParams, where, conditions, verifiedConditions, searchConditions, _filterValues$changes, _filterValues$changes2, filterConditions, _filterValues$changes3, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, pagination, nextPageItems, remainingItems;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: true
              }));
              parameters = {};
              paginationParams = {
                page: page,
                page_size: pageSize || paginationProps.pageSize
              };

              if (!isBusinessOwners) {
                parameters = _objectSpread({}, paginationParams);
              }

              where = null;
              conditions = [];

              if (!disabledActiveStateCondition) {
                conditions.push({
                  attribute: 'enabled',
                  value: selectedUserActiveState
                });
              }

              if (isVerified) {
                verifiedConditions = [];
                verifiedConditions.push({
                  attribute: 'email_verified',
                  value: true
                });
                verifiedConditions.push({
                  attribute: 'phone_verified',
                  value: true
                });
                conditions.push({
                  conector: 'OR',
                  conditions: verifiedConditions
                });
              }

              if (userTypesSelected.length > 0) {
                conditions.push({
                  attribute: 'level',
                  value: userTypesSelected
                });
              }

              if (searchValue) {
                searchConditions = [];

                if (isSearchByUserId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByUserEmail) {
                  searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByUserPhone) {
                  searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByUserName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                  searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (Object.keys(filterValues.changes).length) {
                filterConditions = [];

                if (filterValues !== null && filterValues !== void 0 && (_filterValues$changes = filterValues.changes) !== null && _filterValues$changes !== void 0 && _filterValues$changes.name && (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$changes2 = filterValues.changes) === null || _filterValues$changes2 === void 0 ? void 0 : _filterValues$changes2.name) !== null) {
                  filterConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$changes3 = filterValues.changes) === null || _filterValues$changes3 === void 0 ? void 0 : _filterValues$changes3.name, "%"))
                    }
                  });
                }

                if (filterValues.changes.lastname && filterValues.changes.lastname !== null) {
                  filterConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues.changes.lastname, "%"))
                    }
                  });
                }

                if (filterValues.changes.email && filterValues.changes.email !== null) {
                  filterConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues.changes.email, "%"))
                    }
                  });
                }

                if (filterValues.changes.email_verified !== undefined) {
                  filterConditions.push({
                    attribute: 'email_verified',
                    value: filterValues.changes.email_verified
                  });
                }

                if (filterValues.changes.phone && filterValues.changes.phone !== null) {
                  filterConditions.push({
                    attribute: 'phone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues.changes.phone, "%"))
                    }
                  });
                }

                if (filterValues.changes.phone_verified !== undefined) {
                  filterConditions.push({
                    attribute: 'phone_verified',
                    value: filterValues.changes.phone_verified
                  });
                }

                if (filterValues.changes.id && parseInt(filterValues.changes.id) > 0) {
                  filterConditions.push({
                    attribute: 'id',
                    value: parseInt(filterValues.changes.id)
                  });
                }

                if (filterConditions.length) {
                  conditions.push({
                    conector: 'AND',
                    conditions: filterConditions
                  });
                }
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              fetchEndpoint = where ? ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters).where(where) : ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters);
              _context.next = 16;
              return fetchEndpoint.get();

            case 16:
              _yield$fetchEndpoint$ = _context.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;
              usersList.users = result;
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: false
              }));
              nextPageItems = 0;

              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - usersList.users.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }

              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                from: pagination.from,
                to: pagination.to,
                nextPageItems: nextPageItems
              }));
              setPaginationDetail(_objectSpread({}, pagination));
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 28]]);
    }));

    return function getUsers(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Change user type
   * @param {object} userType User type
   */


  var handleSelectedUserTypes = function handleSelectedUserTypes(userTypes) {
    setUserTypesSelected(userTypes);
  };
  /**
   * Method to change user active state for filter
   */


  var handleChangeUserActiveState = function handleChangeUserActiveState() {
    setSelectedUserActiveState(!selectedUserActiveState);
  };
  /**
   * Method to change user type from API
   * @param {Object} user user id and new type
   */


  var handleChangeUserType = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(user) {
      var requestsState, source, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, users;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestsState = {};
              source = {};
              requestsState.updateOrder = source;
              _context2.next = 8;
              return ordering.setAccessToken(session.token).users(user.id).save({
                level: user.level
              }, {
                cancelToken: source
              });

            case 8:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                users = [];

                if (userTypesSelected.includes(user.level)) {
                  users = usersList.users.filter(function (_user) {
                    if (_user.id === user.id) {
                      _user.level = user.level;
                    }

                    return true;
                  });
                } else {
                  users = usersList.users.filter(function (_user) {
                    return _user.id !== result.id;
                  });
                }

                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  users: users
                }));
                showToast(_ToastContext.ToastType.Success, t('UPDATED', 'Updated'));
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function handleChangeUserType(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to change user enable/disable
   * @param {Object} user user id and enable state
   */


  var handleChangeActiveUser = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(user) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, users;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context3.next = 5;
              return ordering.setAccessToken(session.token).users(user.id).save({
                enabled: user.enabled
              });

            case 5:
              _yield$ordering$setAc3 = _context3.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                if (isDriver) {
                  handleSuccessUpdate(result);
                } else if (!disabledActiveStateCondition) {
                  users = usersList.users.filter(function (_user) {
                    var valid = true;

                    if (_user.id === user.id) {
                      if (user.enabled === !selectedUserActiveState) {
                        valid = false;
                      }
                    }

                    return valid;
                  });
                  setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                    users: users
                  }));
                }

                showToast(_ToastContext.ToastType.Success, t('UPDATED', 'Updated'));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleChangeActiveUser(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete users from API
   * @param {Number} userId user id to delete
   */


  var handleDeleteUser = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(userId) {
      var _yield$ordering$setAc5, content, users, _selectedUsers;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context4.next = 4;
              return ordering.setAccessToken(session.token).users(userId).delete();

            case 4:
              _yield$ordering$setAc5 = _context4.sent;
              content = _yield$ordering$setAc5.content;

              if (!content.error) {
                users = usersList.users.filter(function (user) {
                  return user.id !== userId;
                });
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  users: users
                }));

                if (deleteUsersActionState.loading) {
                  _selectedUsers = _toConsumableArray(selectedUsers);

                  _selectedUsers.shift();

                  if (_selectedUsers.length === 0) {
                    setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
                      loading: false
                    }));
                  }

                  setSelectedUsers(_selectedUsers);
                }

                setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
                  total: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) - 1
                }));
              }

              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: content.error ? content.result : null
              }));
              _context4.next = 14;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

              if (deleteUsersActionState.loading) {
                setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
                  loading: false,
                  error: [_context4.t0.message]
                }));
              }

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function handleDeleteUser(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to delete several users from API
   */


  var handleDeleteSeveralUsers = function handleDeleteSeveralUsers() {
    setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
      loading: true
    }));
  };
  /**
   * Method to change selected users
   * @param {Number} userId user id to change selected state
   */


  var handleSelectedUsers = function handleSelectedUsers(userId) {
    var _selectedUsers;

    if (selectedUsers.includes(userId)) {
      _selectedUsers = selectedUsers.filter(function (id) {
        return id !== userId;
      });
    } else {
      _selectedUsers = [].concat(_toConsumableArray(selectedUsers), [userId]);
    }

    setSelectedUsers(_selectedUsers);
  };
  /**
   * Method to update users
   * @param {Object} updatedUser updated user
   */


  var handleSuccessUpdate = function handleSuccessUpdate(updatedUser) {
    var users = usersList.users.filter(function (user) {
      if (user.id === updatedUser.id) {
        Object.assign(user, updatedUser);
      }

      return true;
    });
    setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
      users: users
    }));
  };
  /**
   * Method to add user
   * @param {Object} newUser new user to add
   */


  var handleSuccessAddUser = function handleSuccessAddUser(newUser) {
    if (userTypesSelected.includes(newUser === null || newUser === void 0 ? void 0 : newUser.level)) {
      setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
        users: [].concat(_toConsumableArray(usersList.users), [newUser])
      }));
      setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
        total: paginationDetail !== null && paginationDetail !== void 0 && paginationDetail.total ? (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) + 1 : 1
      }));
    }
  };
  /**
   * Method to delete user
   * @param {Object} user new user to delete
   */


  var handleSuccessDeleteUser = function handleSuccessDeleteUser(user) {
    if (userTypesSelected.includes(user === null || user === void 0 ? void 0 : user.level)) {
      setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
        users: usersList.users.filter(function (_user) {
          return _user.id !== user.id;
        })
      }));
      setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
        total: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) - 1
      }));
    }
  };
  /**
   * Method to update addresses of selected user
   * @param {number, Array} useId and addresses updated addresses
   */


  var handleSuccessAddressesUpdate = function handleSuccessAddressesUpdate(userId, addresses) {
    var users = usersList.users.filter(function (user) {
      if (user.id === userId) {
        user.addresses = _toConsumableArray(addresses);
      }

      return true;
    });
    setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
      users: users
    }));
  };
  /**
   * Listening action start to delete several users
   */


  (0, _react.useEffect)(function () {
    if (!deleteUsersActionState.loading || selectedUsers.length === 0) return;
    handleDeleteUser(selectedUsers[0]);
  }, [selectedUsers, deleteUsersActionState]);
  (0, _react.useEffect)(function () {
    if (usersList.loading) return;
    getUsers(1, null);
  }, [userTypesSelected, selectedUserActiveState, searchValue, isVerified]);
  (0, _react.useEffect)(function () {
    if ((Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(1, null);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    usersList: usersList,
    filterValues: filterValues,
    setFilterValues: setFilterValues,
    userTypesSelected: userTypesSelected,
    handleSelectedUserTypes: handleSelectedUserTypes,
    paginationProps: paginationProps,
    getUsers: getUsers,
    searchValue: searchValue,
    onSearch: setSearchValue,
    paginationDetail: paginationDetail,
    selectedUserActiveState: selectedUserActiveState,
    isVerified: isVerified,
    setIsVerified: setIsVerified,
    handleChangeUserActiveState: handleChangeUserActiveState,
    handleChangeUserType: handleChangeUserType,
    handleChangeActiveUser: handleChangeActiveUser,
    handleDeleteUser: handleDeleteUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAddUser: handleSuccessAddUser,
    handleSuccessDeleteUser: handleSuccessDeleteUser,
    handleSuccessAddressesUpdate: handleSuccessAddressesUpdate
  })));
};

exports.UsersList = UsersList;
UsersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Enable/Disable search option
   * Search Users list by a user ID
   */
  isSearchByUserId: _propTypes.default.bool,

  /**
   * Enable/Disable search option
   * Search Users list by a user email
   */
  isSearchByUserEmail: _propTypes.default.bool,

  /**
   * Enable/Disable search option
   * Search Users list by a user phone
   */
  isSearchByUserPhone: _propTypes.default.bool,

  /**
   * Array of user props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string)
};
UsersList.defaultProps = {
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'schedule', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'max_days_in_future', 'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  defaultUserTypesSelected: [0, 1, 2, 3]
};