"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupAutoassign = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversGroupAutoassign = exports.DriversGroupAutoassign = function DriversGroupAutoassign(props) {
  var UIComponent = props.UIComponent,
    curDriversGroup = props.curDriversGroup,
    handleChangesState = props.handleChangesState;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    autoAssign = _useState2[0],
    setAutoAssign = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    autoRejectOrderGroup = _useState4[0],
    setAutoRejectOrderGroup = _useState4[1];
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
  var onSelectAssign = function onSelectAssign(type) {
    setAutoAssign(type);
    var changes = {};
    if (type === 1) {
      // one by one
      changes.autoassign_initial_radius = 500;
      changes.autoassign_increment_radius = 100;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 2) {
      // send to all
      changes.autoassign_initial_radius = 15000;
      changes.autoassign_increment_radius = 15000;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1000;
    } else if (type === 3) {
      // nearest available
      changes.autoassign_initial_radius = 100;
      changes.autoassign_increment_radius = 100;
      changes.autoassign_max_radius = 1500;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 4) {
      // batch wise
      changes.autoassign_initial_radius = 1000;
      changes.autoassign_increment_radius = 500;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 2;
    } else if (type === 5) {
      // round robin
      changes.autoassign_initial_radius = 15000;
      changes.autoassign_increment_radius = 15000;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 6) {
      // other
      changes.autoassign_initial_radius = '';
      changes.autoassign_increment_radius = '';
      changes.autoassign_max_radius = '';
      changes.autoassign_amount_drivers = '';
    }
    handleChangesState({
      autoassign_initial_radius: changes.autoassign_initial_radius,
      autoassign_increment_radius: changes.autoassign_increment_radius,
      autoassign_max_radius: changes.autoassign_max_radius,
      autoassign_amount_drivers: changes.autoassign_amount_drivers
    });
  };
  var handleChangeInput = function handleChangeInput(e) {
    var value = e.target.value;
    var changeValue = value === '' ? 0 : parseInt(value);
    var regExp = /^[0-9\b]+$/;
    if (changeValue === '' || regExp.test(changeValue)) {
      handleChangesState(_defineProperty({}, e.target.name, changeValue));
    }
  };
  var onChangeAutoRejectOrderGroup = function onChangeAutoRejectOrderGroup(value, option) {
    var _autoRejectOrderGroup = _objectSpread({}, autoRejectOrderGroup);
    var regExp = /^[0-9\b]+$/;
    if (value === '' || regExp.test(value)) {
      var changeValue = value === '' ? 0 : parseInt(value);
      _autoRejectOrderGroup[option] = changeValue;
      setAutoRejectOrderGroup(_autoRejectOrderGroup);
      var autoRejectOrderGroupChanges = (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.hour) * 3600 + (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.minute) * 60 + (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.second);
      handleChangesState({
        autoassign_autoreject_time: autoRejectOrderGroupChanges
      });
    }
  };
  (0, _react.useEffect)(function () {
    var _autoAssign;
    if (!curDriversGroup) return;
    if (curDriversGroup.autoassign_initial_radius * 1 === 500 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 1;else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1000) _autoAssign = 2;else if (curDriversGroup.autoassign_initial_radius * 1 === 100 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 3;else if (curDriversGroup.autoassign_initial_radius * 1 === 1000 && curDriversGroup.autoassign_amount_drivers * 1 === 2) _autoAssign = 4;else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 5;else _autoAssign = 6;
    setAutoAssign(_autoAssign);
    var _autoRejectOrderGroup = {
      hour: getHours(curDriversGroup.autoassign_autoreject_time),
      minute: getMinutes(curDriversGroup.autoassign_autoreject_time),
      second: getSeconds(curDriversGroup.autoassign_autoreject_time)
    };
    setAutoRejectOrderGroup(_autoRejectOrderGroup);
  }, [curDriversGroup]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    autoAssign: autoAssign,
    autoRejectOrderGroup: autoRejectOrderGroup,
    onSelectAssign: onSelectAssign,
    onChangeSave: handleChangesState,
    handleChangeInput: handleChangeInput,
    onChangeAutoRejectOrderGroup: onChangeAutoRejectOrderGroup
  })));
};
DriversGroupAutoassign.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupAutoassign.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};