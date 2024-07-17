"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsocketStatus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to manage websocket status without UI component
 */
var WebsocketStatus = exports.WebsocketStatus = function WebsocketStatus(props) {
  var _socket$socket;
  var UIComponent = props.UIComponent;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useState = (0, _react.useState)(socket !== null && socket !== void 0 && (_socket$socket = socket.socket) !== null && _socket$socket !== void 0 && _socket$socket.connected ? 1 : 2),
    _useState2 = _slicedToArray(_useState, 2),
    socketStatus = _useState2[0],
    setSocketStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(new Date()),
    _useState4 = _slicedToArray(_useState3, 2),
    connectedDate = _useState4[0],
    setConnectedDate = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    reconnectAttemptCount = _useState6[0],
    setReconnectAttemptCount = _useState6[1];
  var getWebsocketStatus = function getWebsocketStatus(num) {
    switch (num) {
      case 0:
        return t('CONNECTING', 'Connecting');
      case 1:
        return t('OK', 'Ok');
      case 2:
        return t('DISCONNECTED', 'Disconnected');
    }
  };
  var connectListener = function connectListener() {
    setReconnectAttemptCount(0);
    setSocketStatus(1);
    setConnectedDate(new Date());
  };
  var disconnectListener = function disconnectListener() {
    setSocketStatus(2);
  };
  var reconnectAttemptListener = function reconnectAttemptListener() {
    setReconnectAttemptCount(function (prev) {
      return prev + 1;
    });
    setSocketStatus(0);
  };
  var connectionErrorListner = function connectionErrorListner() {
    setSocketStatus(2);
  };
  (0, _react.useEffect)(function () {
    if (socket !== null && socket !== void 0 && socket.socket) {
      socket.socket.on('connect', connectListener);
      socket.socket.on('disconnect', disconnectListener);
      socket.socket.on('reconnect_attempt', reconnectAttemptListener);
      socket.socket.on('connect_error', connectionErrorListner);
    }
    return function () {
      socket.socket.off('connect', connectListener);
      socket.socket.off('disconnect', disconnectListener);
      socket.socket.off('reconnect_attempt', reconnectAttemptListener);
      socket.socket.off('connect_error', connectionErrorListner);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    socketStatus: socketStatus,
    connectedDate: connectedDate,
    getWebsocketStatus: getWebsocketStatus,
    reconnectAttemptCount: reconnectAttemptCount
  })));
};
WebsocketStatus.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
WebsocketStatus.defaultProps = {};