"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWebsocket = exports.WebsocketProvider = exports.WebsocketContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../SessionContext");
var _EventContext = require("../EventContext");
var _socket2 = require("./socket");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
/**
 * Create SessionContext
 * This context will manage the socket conection and provide an easy interface
 */
var WebsocketContext = exports.WebsocketContext = /*#__PURE__*/(0, _react.createContext)();

// let socket = null

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
var WebsocketProvider = exports.WebsocketProvider = function WebsocketProvider(_ref) {
  var _session$user2;
  var settings = _ref.settings,
    children = _ref.children,
    isAlsea = _ref.isAlsea;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    socket = _useState2[0],
    setSocket = _useState2[1];
  (0, _react.useEffect)(function () {
    if (session.loading) return;
    if (session.auth && settings.project && settings.url) {
      var _socket = new _socket2.Socket(_objectSpread(_objectSpread({}, settings), {}, {
        accessToken: session.token,
        url: isAlsea ? 'https://alsea-socket3-production.ordering.co' : settings.url
      }));
      setSocket(_socket);
    }
    if (!session.auth) {
      socket && socket.close();
    }
  }, [session]);
  (0, _react.useEffect)(function () {
    var _session$user;
    if (socket && session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.id) {
      socket.connect();
    }
    return function () {
      socket && socket.close();
    };
  }, [socket, session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var disconnectTimeout = null;
    var connectionErrorTimeout = null;
    socket.socket.on('connect', function () {
      window.localStorage.setItem('websocket-connected-date', new Date());
      events.emit('websocket_connected');
    });
    socket.socket.on('disconnect', function () {
      disconnectTimeout = setTimeout(function () {
        return socket.socket.connect();
      }, 1000);
    });
    socket.socket.on('connect_error', function () {
      connectionErrorTimeout = setTimeout(function () {
        return socket.socket.connect();
      }, 1000);
    });
    return function () {
      clearInterval(disconnectTimeout);
      clearInterval(connectionErrorTimeout);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, session]);
  return /*#__PURE__*/_react.default.createElement(WebsocketContext.Provider, {
    value: socket
  }, children);
};

/**
 * Hook to get and update websocket state
 */
var useWebsocket = exports.useWebsocket = function useWebsocket() {
  var sockerManager = (0, _react.useContext)(WebsocketContext);
  return sockerManager || new _socket2.Socket({});
};