"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

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
      deafultUserTypesSelected = props.deafultUserTypesSelected;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

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

  var _useState7 = (0, _react.useState)(deafultUserTypesSelected),
      _useState8 = _slicedToArray(_useState7, 2),
      userTypesSelected = _useState8[0],
      setUserTypesSelected = _useState8[1];

  var _useState9 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      paginationProps = _useState10[0],
      setPaginationProps = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      paginationDetail = _useState12[0],
      setPaginationDetail = _useState12[1];

  var _useState13 = (0, _react.useState)(true),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedUserActiveState = _useState14[0],
      setSelectedUserActiveState = _useState14[1];

  var _useState15 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      actionStatus = _useState16[0],
      setActionStatus = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      selectedUsers = _useState18[0],
      setSelectedUsers = _useState18[1];

  var _useState19 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      deleteUsersActionState = _useState20[0],
      setDeleteUsersActionState = _useState20[1];
  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */


  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch, nextPage) {
      var parameters, paginationParams, where, conditions, searchConditions, _filterValues$changes, _filterValues$changes2, filterConditions, _filterValues$changes3, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, pagination, nextPageItems, remainingItems;

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
                page: newFetch ? 1 : nextPage ? paginationProps.currentPage + 1 : paginationProps.currentPage - 1,
                page_size: paginationProps.pageSize
              };

              if (!isBusinessOwners) {
                parameters = _objectSpread({}, paginationParams);
              }

              where = null;
              conditions = [];
              conditions.push({
                attribute: 'enabled',
                value: selectedUserActiveState
              });

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

                if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$changes = filterValues.changes) === null || _filterValues$changes === void 0 ? void 0 : _filterValues$changes.name) && (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$changes2 = filterValues.changes) === null || _filterValues$changes2 === void 0 ? void 0 : _filterValues$changes2.name) !== null) {
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
              _context.next = 15;
              return fetchEndpoint.get();

            case 15:
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
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                nextPageItems: nextPageItems
              }));
              setPaginationDetail(_objectSpread({}, pagination));
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 27]]);
    }));

    return function getUsers(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Change user type
   * @param {object} userType User type
   */


  var handleSelectedUserTypes = function handleSelectedUserTypes(userType) {
    var _userTypesSelected;

    if (userTypesSelected.includes(userType)) {
      _userTypesSelected = userTypesSelected.filter(function (type) {
        return type !== userType;
      });
    } else {
      _userTypesSelected = [].concat(_toConsumableArray(userTypesSelected), [userType]);
    }

    setUserTypesSelected(_userTypesSelected);
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
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestsState = {};
              source = {};
              requestsState.updateOrder = source;
              _context2.next = 7;
              return ordering.setAccessToken(session.token).users(user.id).save({
                level: user.level
              }, {
                cancelToken: source
              });

            case 7:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                users = usersList.users.filter(function (_user) {
                  if (_user.id === user.id) {
                    _user.level = user.level;
                  }

                  return true;
                });
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  users: users
                }));
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
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
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context3.next = 4;
              return ordering.setAccessToken(session.token).users(user.id).save({
                enabled: user.enabled
              });

            case 4:
              _yield$ordering$setAc3 = _context3.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
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

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
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
    getUsers(true, false);
  }, [userTypesSelected, selectedUserActiveState, searchValue]);
  (0, _react.useEffect)(function () {
    if ((Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(true, false);
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
    handleChangeUserActiveState: handleChangeUserActiveState,
    handleChangeUserType: handleChangeUserType,
    handleChangeActiveUser: handleChangeActiveUser,
    handleDeleteUser: handleDeleteUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers,
    handleSuccessUpdate: handleSuccessUpdate,
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
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  deafultUserTypesSelected: [0, 1, 2, 3]
};