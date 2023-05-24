"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsocketStatus = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage websocket status without UI component
 */
var WebsocketStatus = function WebsocketStatus(props) {
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

  var _useState3 = (0, _react.useState)(window.localStorage.getItem('websocket-connected-date') ? new Date(window.localStorage.getItem('websocket-connected-date')) : new Date()),
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

  (0, _react.useEffect)(function () {
    if (socket !== null && socket !== void 0 && socket.socket) {
      socket.socket.on('connect', function () {
        console.log('_____________ test connect ___________', socket);
        setReconnectAttemptCount(0);
        setSocketStatus(1);
        setConnectedDate(new Date());
      });
      socket.socket.on('disconnect', function (reason) {
        console.log('_____________ test disconnect ___________', socket);
        setSocketStatus(2); // if (reason === 'io client disconnect') {
        //   window.setTimeout(socket.socket.connect(), 1000)
        // }
      });
      socket.socket.on('connect_error', function () {
        console.log('_____________ test connect_error ___________');
      });
      socket.socket.on('reconnect_attempt', function () {
        console.log('_____________ test reconnect_attempt ___________');
        setReconnectAttemptCount(function (prev) {
          return prev + 1;
        });
        setSocketStatus(0);
      });
    }
  }, [socket === null || socket === void 0 ? void 0 : socket.socket]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    socketStatus: socketStatus,
    connectedDate: connectedDate,
    getWebsocketStatus: getWebsocketStatus,
    reconnectAttemptCount: reconnectAttemptCount
  })));
};

exports.WebsocketStatus = WebsocketStatus;
WebsocketStatus.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
WebsocketStatus.defaultProps = {};