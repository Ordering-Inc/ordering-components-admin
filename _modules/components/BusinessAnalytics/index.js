"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAnalytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs.default.extend(_utc.default);
var BusinessAnalytics = exports.BusinessAnalytics = function BusinessAnalytics(props) {
  var UIComponent = props.UIComponent;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)({
      lapse: 'today',
      businessIds: null,
      app_id: 'all',
      franchises_id: null,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }),
    _useState2 = _slicedToArray(_useState, 2),
    filterList = _useState2[0],
    setFilterList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersList = _useState4[0],
    setOrdersList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    salesList = _useState6[0],
    setSalesList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    topProductList = _useState8[0],
    setTopProductList = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    topCategoryList = _useState10[0],
    setTopCategoryList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    orderStatusList = _useState12[0],
    setOrderStatusList = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    registerUsersList = _useState14[0],
    setRegisterUsersList = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    customerSatisfactionList = _useState16[0],
    setCustomerSatisfactionList = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    ordersAcceptSpendList = _useState18[0],
    setOrdersAcceptSpendList = _useState18[1];
  var _useState19 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    arrivedPickUpSpendList = _useState20[0],
    setArrivedPickUpSpendList = _useState20[1];
  var _useState21 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    orderLocationList = _useState22[0],
    setOrderLocationList = _useState22[1];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    countryCode = _useState24[0],
    setCountryCode = _useState24[1];
  var handleChangeCode = function handleChangeCode(code) {
    if (code === countryCode) setCountryCode('');else setCountryCode(code);
  };
  var paramsForAPI = function paramsForAPI(type) {
    var _filterList$businessI;
    var rootUrl = "".concat(ordering.root, "/reports/").concat(type);
    var params = "lapse=".concat(filterList === null || filterList === void 0 ? void 0 : filterList.lapse, "&timezone=").concat(filterList === null || filterList === void 0 ? void 0 : filterList.timeZone);
    if (filterList !== null && filterList !== void 0 && filterList.businessIds && (filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length) > 0) params = "".concat(params, "&businesses=").concat(filterList === null || filterList === void 0 || (_filterList$businessI = filterList.businessIds) === null || _filterList$businessI === void 0 ? void 0 : _filterList$businessI.toString());
    if (filterList !== null && filterList !== void 0 && filterList.app_id && filterList.app_id !== 'all') params = "".concat(params, "&app_id=").concat(filterList === null || filterList === void 0 ? void 0 : filterList.app_id);
    if (filterList !== null && filterList !== void 0 && filterList.franchises_id && (filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id.length) > 0) params = "".concat(params, "&franchises_id=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id));
    return "".concat(rootUrl, "?").concat(params);
  };

  /**
   * Method to get orders list
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!loading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('orders');
            _context.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context.sent;
            _context.next = 11;
            return response.json();
          case 11:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            setOrdersList(_objectSpread(_objectSpread({}, ordersList), {}, {
              loading: false,
              error: _context.t0
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 17]]);
    }));
    return function getOrders() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get sales list
   */
  var getSales = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!loading) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.prev = 2;
            setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('sales');
            _context2.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            _yield$response$json2 = _context2.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](2);
            setSalesList(_objectSpread(_objectSpread({}, salesList), {}, {
              loading: false,
              error: _context2.t0
            }));
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 17]]);
    }));
    return function getSales() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get top product list
   */
  var getTopProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, functionFetch, response, _yield$response$json3, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!loading) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('top_selling');
            _context3.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context3.sent;
            _context3.next = 11;
            return response.json();
          case 11:
            _yield$response$json3 = _context3.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](2);
            setTopProductList(_objectSpread(_objectSpread({}, topProductList), {}, {
              loading: false,
              error: _context3.t0
            }));
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 17]]);
    }));
    return function getTopProducts() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get top category list
   */
  var getTopCategories = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, functionFetch, response, _yield$response$json4, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!loading) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('top_categories');
            _context4.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context4.sent;
            _context4.next = 11;
            return response.json();
          case 11:
            _yield$response$json4 = _context4.sent;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            if (!error) {
              setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
                loading: false,
                error: result
              }));
            }
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](2);
            setTopCategoryList(_objectSpread(_objectSpread({}, topCategoryList), {}, {
              loading: false,
              error: _context4.t0
            }));
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 17]]);
    }));
    return function getTopCategories() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get order status List
   */
  var getOrderStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var requestOptions, functionFetch, response, _yield$response$json5, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!loading) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            _context5.prev = 2;
            setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('orders_status');
            _context5.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context5.sent;
            _context5.next = 11;
            return response.json();
          case 11:
            _yield$response$json5 = _context5.sent;
            error = _yield$response$json5.error;
            result = _yield$response$json5.result;
            if (!error) {
              setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
                loading: false,
                error: result
              }));
            }
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](2);
            setOrderStatusList(_objectSpread(_objectSpread({}, orderStatusList), {}, {
              loading: false,
              error: _context5.t0
            }));
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[2, 17]]);
    }));
    return function getOrderStatus() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to get register users list
   */
  var getRegisterUsers = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, functionFetch, response, _yield$response$json6, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!loading) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            _context6.prev = 2;
            setRegisterUsersList(_objectSpread(_objectSpread({}, registerUsersList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('users');
            _context6.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context6.sent;
            _context6.next = 11;
            return response.json();
          case 11:
            _yield$response$json6 = _context6.sent;
            error = _yield$response$json6.error;
            result = _yield$response$json6.result;
            if (!error) {
              setRegisterUsersList(_objectSpread(_objectSpread({}, registerUsersList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setRegisterUsersList(_objectSpread(_objectSpread({}, registerUsersList), {}, {
                loading: false,
                error: result
              }));
            }
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](2);
            setRegisterUsersList(_objectSpread(_objectSpread({}, registerUsersList), {}, {
              loading: false,
              error: _context6.t0
            }));
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[2, 17]]);
    }));
    return function getRegisterUsers() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to get customer satisfaction List
   */
  var getCustomerSatisfaction = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, functionFetch, response, _yield$response$json7, error, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!loading) {
              _context7.next = 2;
              break;
            }
            return _context7.abrupt("return");
          case 2:
            _context7.prev = 2;
            setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('customer_satisfaction');
            _context7.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context7.sent;
            _context7.next = 11;
            return response.json();
          case 11:
            _yield$response$json7 = _context7.sent;
            error = _yield$response$json7.error;
            result = _yield$response$json7.result;
            if (!error) {
              setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
                loading: false,
                error: result
              }));
            }
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](2);
            setCustomerSatisfactionList(_objectSpread(_objectSpread({}, customerSatisfactionList), {}, {
              loading: false,
              error: _context7.t0
            }));
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[2, 17]]);
    }));
    return function getCustomerSatisfaction() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to get orders accept spend list
   */
  var getOrdersAcceptSpend = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var requestOptions, functionFetch, response, _yield$response$json8, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!loading) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return");
          case 2:
            _context8.prev = 2;
            setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('orders_accept_spend');
            _context8.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context8.sent;
            _context8.next = 11;
            return response.json();
          case 11:
            _yield$response$json8 = _context8.sent;
            error = _yield$response$json8.error;
            result = _yield$response$json8.result;
            if (!error) {
              setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
                loading: false,
                error: result
              }));
            }
            _context8.next = 20;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](2);
            setOrdersAcceptSpendList(_objectSpread(_objectSpread({}, ordersAcceptSpendList), {}, {
              loading: false,
              error: _context8.t0
            }));
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[2, 17]]);
    }));
    return function getOrdersAcceptSpend() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to get arrived pickup spend list
   */
  var getArrivedPickeUpSpend = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var requestOptions, functionFetch, response, _yield$response$json9, error, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (!loading) {
              _context9.next = 2;
              break;
            }
            return _context9.abrupt("return");
          case 2:
            _context9.prev = 2;
            setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('arrived_pickup_spend');
            _context9.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context9.sent;
            _context9.next = 11;
            return response.json();
          case 11:
            _yield$response$json9 = _context9.sent;
            error = _yield$response$json9.error;
            result = _yield$response$json9.result;
            if (!error) {
              setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                loading: false,
                data: result
              }));
            } else {
              setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
                loading: false,
                error: result
              }));
            }
            _context9.next = 20;
            break;
          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](2);
            setArrivedPickUpSpendList(_objectSpread(_objectSpread({}, arrivedPickUpSpendList), {}, {
              loading: false,
              error: _context9.t0
            }));
          case 20:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[2, 17]]);
    }));
    return function getArrivedPickeUpSpend() {
      return _ref9.apply(this, arguments);
    };
  }();

  /**
   * Method to get location List
   */
  var getLocations = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var requestOptions, functionFetch, response, _yield$response$json10, error, result;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (!loading) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return");
          case 2:
            _context10.prev = 2;
            setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = paramsForAPI('order_location');
            _context10.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context10.sent;
            _context10.next = 11;
            return response.json();
          case 11:
            _yield$response$json10 = _context10.sent;
            error = _yield$response$json10.error;
            result = _yield$response$json10.result;
            if (!error) {
              setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                loading: false,
                locations: result
              }));
            } else {
              setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
                loading: false,
                error: result
              }));
            }
            _context10.next = 20;
            break;
          case 17:
            _context10.prev = 17;
            _context10.t0 = _context10["catch"](2);
            setOrderLocationList(_objectSpread(_objectSpread({}, orderLocationList), {}, {
              loading: false,
              error: _context10.t0
            }));
          case 20:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[2, 17]]);
    }));
    return function getLocations() {
      return _ref10.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getOrders();
    getSales();
    getTopProducts();
    getTopCategories();
    getOrderStatus();
    getRegisterUsers();
    getCustomerSatisfaction();
    getOrdersAcceptSpend();
    getArrivedPickeUpSpend();
    getLocations();
  }, [filterList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterList: filterList,
    ordersList: ordersList,
    salesList: salesList,
    topProductList: topProductList,
    topCategoryList: topCategoryList,
    orderStatusList: orderStatusList,
    registerUsersList: registerUsersList,
    customerSatisfactionList: customerSatisfactionList,
    ordersAcceptSpendList: ordersAcceptSpendList,
    arrivedPickUpSpendList: arrivedPickUpSpendList,
    orderLocationList: orderLocationList,
    handleChangeFilterList: setFilterList,
    countryCode: countryCode,
    handleChangeCode: handleChangeCode
  })));
};
BusinessAnalytics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessAnalytics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};