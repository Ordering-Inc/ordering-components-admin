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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      isSearchByUserPhone = props.isSearchByUserPhone;

  var _useState = (0, _react.useState)({
    users: [],
    loading: true,
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
      searchVal = _useState6[0],
      setSearchVal = _useState6[1];

  var _useState7 = (0, _react.useState)(3),
      _useState8 = _slicedToArray(_useState7, 2),
      userTypeSelected = _useState8[0],
      setUserTypeSelected = _useState8[1];

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

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      spinLoading = _useState14[0],
      setSpinLoading = _useState14[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  (0, _react.useEffect)(function () {
    getUsers(true, false);
  }, [userTypeSelected]);
  (0, _react.useEffect)(function () {
    if (searchVal !== null && !usersList.loading) getUsers(true, false);
  }, [searchVal]);
  (0, _react.useEffect)(function () {
    if ((Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(true, false);
  }, [filterValues]);
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
              parameters = _objectSpread(_objectSpread({}, parameters), paginationParams);
              where = null;
              conditions = [];

              if (userTypeSelected) {
                conditions.push({
                  attribute: 'level',
                  value: userTypeSelected
                });
              }

              if (searchVal) {
                searchConditions = [];

                if (isSearchByUserId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchVal, "%"))
                    }
                  });
                }

                if (isSearchByUserEmail) {
                  searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchVal, "%"))
                    }
                  });
                }

                if (isSearchByUserPhone) {
                  searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchVal, "%"))
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

              fetchEndpoint = where ? ordering.users().select(propsToFetch).parameters(parameters).where(where) : ordering.users().select(propsToFetch).parameters(parameters);
              _context.next = 14;
              return fetchEndpoint.get();

            case 14:
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
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 26]]);
    }));

    return function getUsers(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Edit a user by UserId, order options and filters
   * @param {number} userId Make a new request or next page
   */


  var getUserById = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(userId, enabled) {
      var fetchEndpoint, _yield$fetchEndpoint$3, result, found, users;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setSpinLoading(true);
              fetchEndpoint = ordering.users(userId);
              _context2.next = 5;
              return fetchEndpoint.save({
                enabled: !enabled
              });

            case 5:
              _yield$fetchEndpoint$3 = _context2.sent;
              result = _yield$fetchEndpoint$3.content.result;
              found = usersList.users.find(function (user) {
                return result.id === user.id;
              });
              users = [];

              if (found) {
                users = usersList.users.filter(function (user) {
                  if (result.id === user.id) user.enabled = result === null || result === void 0 ? void 0 : result.enabled;
                  return true;
                });
              }

              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                users: users
              }));
              setSpinLoading(false);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              if (_context2.t0.constructor.name !== 'Cancel') {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  error: [_context2.t0.message]
                }));
              }

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function getUserById(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Change user type
   * @param {object} userType User type
   */


  var handleChangeUserType = function handleChangeUserType(userType) {
    if (userType !== userTypeSelected && !usersList.loading) {
      setUserTypeSelected(userType);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    usersList: usersList,
    setUsersList: setUsersList,
    filterValues: filterValues,
    setFilterValues: setFilterValues,
    userTypeSelected: userTypeSelected,
    handleChangeUserType: handleChangeUserType,
    paginationProps: paginationProps,
    getUserById: getUserById,
    getUsers: getUsers,
    searchVal: searchVal,
    onSearch: setSearchVal,
    spinLoading: spinLoading,
    paginationDetail: paginationDetail
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
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'city_id', 'city', 'address', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};