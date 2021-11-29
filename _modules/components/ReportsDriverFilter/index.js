"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsDriverFilter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var ReportsDriverFilter = function ReportsDriverFilter(props) {
  var UIComponent = props.UIComponent,
      filterList = props.filterList,
      handleChangeFilterList = props.handleChangeFilterList,
      onClose = props.onClose,
      isSearchByName = props.isSearchByName,
      isDriverGroup = props.isDriverGroup;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * This state save the business type info from API
   */


  var _useState = (0, _react.useState)({
    loading: true,
    error: null,
    drivers: [],
    pagination: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      driverList = _useState2[0],
      setDriverList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      driverIds = _useState4[0],
      setDriverIds = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAllCheck = _useState6[0],
      setIsAllCheck = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  /**
   * Method to change business id
   * @param {number} id
   */

  var handleChangeDriverId = function handleChangeDriverId(id) {
    var found = driverIds === null || driverIds === void 0 ? void 0 : driverIds.find(function (driverId) {
      return driverId === id;
    });

    if (found) {
      var _driverIds = driverIds === null || driverIds === void 0 ? void 0 : driverIds.filter(function (driverId) {
        return driverId !== id;
      });

      setDriverIds(_driverIds);
      setIsAllCheck(false);
    } else {
      var _driverIds2 = driverIds ? _toConsumableArray(driverIds) : [];

      _driverIds2.push(id);

      if (_driverIds2.length === (driverList === null || driverList === void 0 ? void 0 : driverList.drivers.length)) setIsAllCheck(true);
      setDriverIds(_driverIds2);
    }
  };
  /**
   * Method to change filter list
   */


  var handleClickFilterButton = function handleClickFilterButton() {
    var _driverIds = driverIds ? _toConsumableArray(driverIds) : null;

    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      drivers_ids: _driverIds
    }));
    onClose && onClose();
  };
  /**
   * Method to change all check status
   */


  var handleChangeAllCheck = function handleChangeAllCheck() {
    if (isAllCheck) {
      setDriverIds(null);
    } else {
      var _driverIds = [];

      var _iterator = _createForOfIteratorHelper(driverList.drivers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var driver = _step.value;

          _driverIds.push(driver.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      setDriverIds(_driverIds);
    }

    setIsAllCheck(!isAllCheck);
  };
  /**
   * Method to get driver list from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var where, conditions, searchConditions, isSpecialCharacter, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _filterList$driver_gr, _drivers;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                loading: true
              }));
              where = null;
              conditions = [{
                attribute: 'level',
                value: '4'
              }];

              if (searchValue) {
                searchConditions = [];
                isSpecialCharacter = rex.test(searchValue);

                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              fetchEndpoint = where ? ordering.users().asDashboard().select().where(where) : ordering.users().asDashboard().select();
              _context.next = 9;
              return fetchEndpoint.get();

            case 9:
              _yield$fetchEndpoint$ = _context.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              error = _yield$fetchEndpoint$2.error;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;

              // const where = [{ attribute: 'level', value: '4' }]
              // const { content: { error, result, pagination } } = await ordering.users().asDashboard().select(propsToFetch).where(where).get()
              if (!error) {
                _drivers = [];

                if (isDriverGroup && ((_filterList$driver_gr = filterList.driver_groups_ids) === null || _filterList$driver_gr === void 0 ? void 0 : _filterList$driver_gr.length) > 0) {
                  _drivers = result.filter(function (driver) {
                    var valid = false;
                    driver.drivergroups.forEach(function (group) {
                      if (filterList.driver_groups_ids.includes(group.id)) valid = true;
                    });
                    return valid;
                  });
                } else {
                  _drivers = _toConsumableArray(result);
                }

                setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                  loading: false,
                  drivers: _drivers,
                  pagination: pagination
                }));
              } else {
                setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                loading: false,
                error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
              }));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function getDrivers() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var controller = new AbortController();
    getDrivers();
    return controller.abort();
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    var _driverList$drivers, _filterList$drivers_i;

    if ((driverList === null || driverList === void 0 ? void 0 : (_driverList$drivers = driverList.drivers) === null || _driverList$drivers === void 0 ? void 0 : _driverList$drivers.length) === 0) return;

    var _driverIds = driverList === null || driverList === void 0 ? void 0 : driverList.drivers.reduce(function (prev, cur) {
      return [].concat(_toConsumableArray(prev), [cur.id]);
    }, []);

    var filterDriverIds = (filterList === null || filterList === void 0 ? void 0 : (_filterList$drivers_i = filterList.drivers_ids) === null || _filterList$drivers_i === void 0 ? void 0 : _filterList$drivers_i.length) > 0 ? filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids.filter(function (driverId) {
      return _driverIds.includes(driverId);
    }) : _driverIds;
    setDriverIds(_toConsumableArray(filterDriverIds));
    if (!(filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids) || (filterDriverIds === null || filterDriverIds === void 0 ? void 0 : filterDriverIds.length) === (driverList === null || driverList === void 0 ? void 0 : driverList.drivers.length)) setIsAllCheck(true);
  }, [driverList === null || driverList === void 0 ? void 0 : driverList.drivers]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driverList: driverList,
    driverIds: driverIds,
    searchValue: searchValue,
    onSearch: setSearchValue,
    handleChangeDriverId: handleChangeDriverId,
    handleClickFilterButton: handleClickFilterButton,
    isAllCheck: isAllCheck,
    handleChangeAllCheck: handleChangeAllCheck
  })));
};

exports.ReportsDriverFilter = ReportsDriverFilter;
ReportsDriverFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * filterList, this must be contains an object with filter list
   */
  filterList: _propTypes.default.object,

  /**
  * Method to change filter list
  */
  handleChangeFilterList: _propTypes.default.func,

  /**
  * Method to close business filter Modal
  */
  onClose: _propTypes.default.func,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ReportsDriverFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups']
};