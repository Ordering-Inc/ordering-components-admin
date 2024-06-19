"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../ConfigContext");
var _SessionContext = require("../SessionContext");
var _WebsocketContext = require("../WebsocketContext");
var _OrderContext = require("../OrderContext");
var _BusinessContext = require("../BusinessContext");
var _LanguageContext = require("../LanguageContext");
var _ApiContext = require("../ApiContext");
var _EventContext = require("../EventContext");
var _UtilsContext = require("../UtilsContext");
var _ToastContext = require("../ToastContext");
var _webStrategy = require("../../webStrategy");
var _ValidationsFieldsContext = require("../ValidationsFieldsContext");
var _CustomerContext = require("../CustomerContext");
var _SiteContext = require("../SiteContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = exports.OrderingContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
var OrderingProvider = exports.OrderingProvider = function OrderingProvider(_ref) {
  var Alert = _ref.Alert,
    settings = _ref.settings,
    children = _ref.children;
  var webStrategy = new _webStrategy.WebStrategy();
  var isAlsea = ['alsea', 'alsea-staging'].includes(settings.project);
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: settings
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, null, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_ToastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_ValidationsFieldsContext.ValidationFieldsProvider, null, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    settings: Object.assign(settings.socket, {
      project: settings.project
    }),
    isAlsea: isAlsea
  }, /*#__PURE__*/_react.default.createElement(_SiteContext.SiteProvider, null, /*#__PURE__*/_react.default.createElement(_CustomerContext.CustomerProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    strategy: webStrategy,
    Alert: Alert
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, null, children))))))))))))));
};