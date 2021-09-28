"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupOrders = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupOrders = function DriversGroupOrders(props) {
  var UIComponent = props.UIComponent,
      curDriversGroup = props.curDriversGroup,
      handleChangesState = props.handleChangesState;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      maxTimeBetweenOrder = _useState2[0],
      setMaxTimeBetweenOrder = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      maxTimeBetweenBusiness = _useState4[0],
      setMaxTimeBetweenBusiness = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      maxTimeBetweenDelivery = _useState6[0],
      setMaxTimeBetweenDelivery = _useState6[1];

  var getHours = function getHours(seconds) {
    return seconds * 1 / 3600 > 1 ? Math.floor(seconds * 1 / 3600) : 0;
  };

  var getMinutes = function getMinutes(seconds) {
    return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60);
  };

  var getSeconds = function getSeconds(seconds) {
    var remain = seconds - Math.floor(seconds / 3600) * 3600;
    return Math.floor(remain - Math.floor(remain / 60) * 60);
  };

  var handleChangeMaxTimeBetweenOrder = function handleChangeMaxTimeBetweenOrder(value, option) {
    var regExp = /^[0-9\b]+$/;

    if (value === '' || regExp.test(value)) {
      var changeValue = value === '' ? 0 : parseInt(value);

      var _maxTimeBetweenOrder = _objectSpread({}, maxTimeBetweenOrder);

      _maxTimeBetweenOrder[option] = changeValue;
      setMaxTimeBetweenOrder(_maxTimeBetweenOrder);
      var maxTimeBetweenOrderChanges = (_maxTimeBetweenOrder === null || _maxTimeBetweenOrder === void 0 ? void 0 : _maxTimeBetweenOrder.hour) * 3600 + (_maxTimeBetweenOrder === null || _maxTimeBetweenOrder === void 0 ? void 0 : _maxTimeBetweenOrder.minute) * 60 + (_maxTimeBetweenOrder === null || _maxTimeBetweenOrder === void 0 ? void 0 : _maxTimeBetweenOrder.second);
      handleChangesState({
        orders_group_max_time_between: maxTimeBetweenOrderChanges
      });
    }
  };

  var handleChangeMaxTimeBetweenBusiness = function handleChangeMaxTimeBetweenBusiness(value, option) {
    var regExp = /^[0-9\b]+$/;

    if (value === '' || regExp.test(value)) {
      var changeValue = value === '' ? 0 : parseInt(value);

      var _maxTimeBetweenBusiness = _objectSpread({}, maxTimeBetweenOrder);

      _maxTimeBetweenBusiness[option] = changeValue;
      setMaxTimeBetweenBusiness(_maxTimeBetweenBusiness);
      var maxTimeBetweenBusinessChanges = (_maxTimeBetweenBusiness === null || _maxTimeBetweenBusiness === void 0 ? void 0 : _maxTimeBetweenBusiness.hour) * 3600 + (_maxTimeBetweenBusiness === null || _maxTimeBetweenBusiness === void 0 ? void 0 : _maxTimeBetweenBusiness.minute) * 60 + (_maxTimeBetweenBusiness === null || _maxTimeBetweenBusiness === void 0 ? void 0 : _maxTimeBetweenBusiness.second);
      handleChangesState({
        orders_group_max_time_between_pickup: maxTimeBetweenBusinessChanges
      });
    }
  };

  var handleChangeMaxTimeBetweenDelivery = function handleChangeMaxTimeBetweenDelivery(value, option) {
    var regExp = /^[0-9\b]+$/;

    if (value === '' || regExp.test(value)) {
      var changeValue = value === '' ? 0 : parseInt(value);

      var _maxTimeBetweenDelivery = _objectSpread({}, maxTimeBetweenOrder);

      _maxTimeBetweenDelivery[option] = changeValue;
      setMaxTimeBetweenDelivery(_maxTimeBetweenDelivery);
      var maxTimeBetweenDeliveryChanges = (_maxTimeBetweenDelivery === null || _maxTimeBetweenDelivery === void 0 ? void 0 : _maxTimeBetweenDelivery.hour) * 3600 + (_maxTimeBetweenDelivery === null || _maxTimeBetweenDelivery === void 0 ? void 0 : _maxTimeBetweenDelivery.minute) * 60 + (_maxTimeBetweenDelivery === null || _maxTimeBetweenDelivery === void 0 ? void 0 : _maxTimeBetweenDelivery.second);
      handleChangesState({
        orders_group_max_time_between_delivery: maxTimeBetweenDeliveryChanges
      });
    }
  };

  var onChangeNumberInput = function onChangeNumberInput(name, change) {
    var regExp = /^[0-9\b]+$/;

    if (change === '' || regExp.test(change)) {
      handleChangesState(_defineProperty({}, name, change));
    }
  };

  (0, _react.useEffect)(function () {
    if (curDriversGroup) {
      var _maxTimeBetweenOrder = {
        hour: getHours(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between),
        minute: getMinutes(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between),
        second: getSeconds(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between)
      };
      setMaxTimeBetweenOrder(_maxTimeBetweenOrder);
      var _maxTimeBetweenBusiness = {
        hour: getHours(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_pickup),
        minute: getMinutes(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_pickup),
        second: getSeconds(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_pickup)
      };
      setMaxTimeBetweenBusiness(_maxTimeBetweenBusiness);
      var _maxTimeBetweenDelivery = {
        hour: getHours(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_delivery),
        minute: getMinutes(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_delivery),
        second: getSeconds(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_time_between_delivery)
      };
      setMaxTimeBetweenDelivery(_maxTimeBetweenDelivery);
    }
  }, [curDriversGroup]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    maxTimeBetweenOrder: maxTimeBetweenOrder,
    maxTimeBetweenBusiness: maxTimeBetweenBusiness,
    maxTimeBetweenDelivery: maxTimeBetweenDelivery,
    handleChangeMaxTimeBetweenOrder: handleChangeMaxTimeBetweenOrder,
    handleChangeMaxTimeBetweenBusiness: handleChangeMaxTimeBetweenBusiness,
    handleChangeMaxTimeBetweenDelivery: handleChangeMaxTimeBetweenDelivery,
    onChangeNumberInput: onChangeNumberInput
  })));
};

exports.DriversGroupOrders = DriversGroupOrders;
DriversGroupOrders.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before drivers group orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after drivers group orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before drivers group orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after drivers group orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};