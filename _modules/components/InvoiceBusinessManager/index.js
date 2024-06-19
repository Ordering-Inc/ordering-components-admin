"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceBusinessManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
 * Component to manage InvoiceBusunessManager behavior without UI component
 */
var InvoiceBusinessManager = exports.InvoiceBusinessManager = function InvoiceBusinessManager(props) {
  var _configs$order_types_, _configs$order_types_3;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: false,
      businesses: [],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessList = _useState2[0],
    setBusinessList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    payMethodsList = _useState4[0],
    setPayMethodsList = _useState4[1];
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var defaultOrderTypes = [{
    value: 1,
    name: t('DELIVERY', 'Delivery'),
    enabled: true
  }, {
    value: 2,
    name: t('PICKUP', 'Pickup'),
    enabled: true
  }, {
    value: 3,
    name: t('EAT_IN', 'Eat in'),
    enabled: true
  }, {
    value: 4,
    name: t('CURBSIDE', 'Curbside'),
    enabled: true
  }, {
    value: 5,
    name: t('DRIVE_THRU', 'Drive thru'),
    enabled: true
  }];
  var _useState5 = (0, _react.useState)(defaultOrderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    })),
    _useState6 = _slicedToArray(_useState5, 2),
    orderTypes = _useState6[0],
    setOrderTypes = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      invoice: null,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    exportInvoiceList = _useState8[0],
    setExportInvoiceList = _useState8[1];
  var _useState9 = (0, _react.useState)({
      type: 'charge',
      from: '',
      to: '',
      business: '',
      cancelled: false,
      discounts: false,
      notes: '',
      percentage_fee: 0,
      fixed_fee: 0,
      tax: 0,
      misc_amount: 0,
      misc_description: ''
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    businessInvocing = _useState10[0],
    setBusinessInvocing = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    filterPaymethodsID = _useState12[0],
    setFilterPaymethodsID = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    filterOrderTypesID = _useState14[0],
    setFilterOrderTypesID = _useState14[1];
  var handleChangeDeliveryTypes = function handleChangeDeliveryTypes(orderTypess) {
    setFilterOrderTypesID(orderTypess);
  };
  var handleChangePayMethods = function handleChangePayMethods(payMethods) {
    var _paymethodIds = payMethods.filter(function (_payMethods) {
      return _payMethods.enabled;
    }).map(function (_payMethodss) {
      return _payMethodss.id;
    });
    setFilterPaymethodsID(_paymethodIds);
    setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
      data: payMethods
    }));
  };

  /**
   * Method to get business list
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result, pagination;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context.next = 4;
            return ordering.businesses().asDashboard().select(propsToFetch).get();
          case 4:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            pagination = _yield$ordering$busin2.pagination;
            if (!error) {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                businesses: result,
                pagination: pagination
              }));
            } else {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: false,
              error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get payMethod list from API
   */
  var getPaymentMethod = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, _data;
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
            setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = "".concat(ordering.root, "/paymethods");
            _context2.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              _data = result.filter(function (item) {
                return item.enabled;
              });
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                loading: false,
                data: _data
              }));
            } else {
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](2);
            setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
              loading: false,
              error: _context2.t0
            }));
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 17]]);
    }));
    return function getPaymentMethod() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get order list from API
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var where, _yield$ordering$order, _yield$ordering$order2, error, result, pagination, invoice;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
              loading: true
            }));
            where = [{
              attribute: 'business_id',
              value: businessInvocing.business
            }];
            if (businessInvocing.from) {
              where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '>=',
                  value: "".concat(businessInvocing.from, " 00:00:00")
                }
              });
            }
            if (businessInvocing.to) {
              where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '<=',
                  value: "".concat(businessInvocing.to, " 23:59:59")
                }
              });
            }
            if (filterOrderTypesID.length !== 0) {
              where.push({
                attribute: 'delivery_type',
                value: filterOrderTypesID
              });
            }
            if (filterPaymethodsID.length !== 0) {
              where.push({
                attribute: 'paymethod_id',
                value: filterPaymethodsID
              });
            }
            _context3.next = 9;
            return ordering.orders().asDashboard().where(where).get();
          case 9:
            _yield$ordering$order = _context3.sent;
            _yield$ordering$order2 = _yield$ordering$order.content;
            error = _yield$ordering$order2.error;
            result = _yield$ordering$order2.result;
            pagination = _yield$ordering$order2.pagination;
            if (!error) {
              invoice = getExportInvoice(result);
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: false,
                invoice: invoice,
                pagination: pagination
              }));
            } else {
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
              loading: false,
              error: [_context3.t0 || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.toString()) || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message)]
            }));
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 17]]);
    }));
    return function getOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getExportInvoice = function getExportInvoice(result) {
    var paymethods = [];
    var _iterator = _createForOfIteratorHelper(payMethodsList === null || payMethodsList === void 0 ? void 0 : payMethodsList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var paymethod = _step.value;
        if (paymethod.enabled) paymethods.push(paymethod.id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _orderTypes = [];
    if (orderTypes) {
      var _iterator2 = _createForOfIteratorHelper(orderTypes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var orderType = _step2.value;
          if (orderType.enabled) _orderTypes.push(orderType.value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    var from = businessInvocing.from.split('-');
    if (from.length === 1) from = null;else from = new Date(from[0], from[1] - 1, from[2], 0, 0, 0, 0);
    var to = businessInvocing.to.split('-');
    if (to.length === 1) to = null;else to = new Date(to[0], to[1] - 1, to[2], 0, 0, 0, 0);
    var orders = result.filter(function (order) {
      var valid = true;
      var date = order.delivery_datetime.split(' ');
      date = new Date(date[0].split('-')[0], date[0].split('-')[1] - 1, date[0].split('-')[2], 0, 0, 0, 0);
      var orderPaymethodIds = order.payment_events.reduce(function (ids, event) {
        var _event$paymethod;
        return [].concat(_toConsumableArray(ids), [event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.id]);
      }, []);
      orderPaymethodIds.push(order.paymethod_id);
      var walletIds = order.payment_events.reduce(function (ids, event) {
        var _event$wallet_event;
        return [].concat(_toConsumableArray(ids), [event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.wallet_id]);
      }, []);
      if (!orderPaymethodIds.some(function (id) {
        return paymethods.includes(id);
      }) && !(walletIds !== null && walletIds !== void 0 && walletIds.length) || _orderTypes.indexOf(order.delivery_type) === -1 || [0, 1, 7, 8, 9, 11, 15].indexOf(order.status) === -1 && !businessInvocing.cancelled) {
        valid = false;
      }
      if (from && from > date || to && to < date) valid = false;
      return valid;
    });
    var _exportInvoice = {
      from: businessInvocing.from,
      to: businessInvocing.to,
      type: businessInvocing.type,
      orders: orders,
      percentage_fee: businessInvocing.percentage_fee,
      fixed_fee: businessInvocing.fixed_fee,
      tax: businessInvocing.tax,
      misc_amount: (businessInvocing.type !== 'payout' ? 1 : -1) * businessInvocing.misc_amount,
      misc_description: businessInvocing.misc_description,
      inlcude_discounts: businessInvocing.discounts,
      tax_products: businessInvocing.type !== 'payout' ? 0 : orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        if (current.tax_type === 1) return previous;else return previous + getTax(current);
      }, 0),
      discounts: !businessInvocing.discounts ? 0 : orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous - getDiscount(current);
      }, 0),
      orders_subtotal: orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + getSubtotal(current);
      }, 0),
      orders_total: orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + getTotal(current);
      }, 0),
      notes: businessInvocing.notes.replace(/\n/g, '<br>')
    };
    _exportInvoice.percentage_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * (_exportInvoice.orders_subtotal + _exportInvoice.discounts) * businessInvocing.percentage_fee / 100;
    _exportInvoice.fixed_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * orders.length * businessInvocing.fixed_fee;
    var subtotal = parseFloat(_exportInvoice.percentage_fee_total) + parseFloat(_exportInvoice.fixed_fee_total) + parseFloat(_exportInvoice.misc_amount) + parseFloat(_exportInvoice.discounts) + parseFloat(_exportInvoice.tax_products) + (businessInvocing.type !== 'payout' ? 0 : parseFloat(_exportInvoice.orders_subtotal));
    _exportInvoice.subtotal = subtotal;
    _exportInvoice.tax_total = (businessInvocing.type !== 'payout' ? 1 : -1) * subtotal * parseFloat(businessInvocing.tax) / 100;
    _exportInvoice.total = subtotal + _exportInvoice.tax_total;
    businessList.businesses.forEach(function (business) {
      if (business.id === businessInvocing.business) {
        _exportInvoice.business = business;
      }
    });
    return _exportInvoice;
  };

  /**
   * Method to get sub option total
   */
  var getSuboptionTotal = function getSuboptionTotal(option, suboption) {
    var suboptionQuantity = 1;
    var suboptionPrice = suboption.price;
    if (option.allow_suboptionQuantity && suboption.quantity) {
      suboptionQuantity = suboption.quantity;
    }
    if (option.with_half_option && suboption.position && suboption.position !== 'whole') {
      suboptionPrice = suboption.half_price;
    }
    return suboptionPrice * suboptionQuantity;
  };

  /**
   * Method to get product total
   */
  var getProductsTotal = function getProductsTotal(product) {
    var total = 0;
    if (product.options) {
      for (var i = 0; i < product.options.length; i++) {
        var option = product.options[i];
        if (option.suboptions) {
          for (var j = 0; j < option.suboptions.length; j++) {
            var suboption = option.suboptions[j];
            total += getSuboptionTotal(option, suboption);
          }
        }
      }
    }
    return (total + product.price) * product.quantity;
  };

  /**
   * Method to get order sub total
   */
  var getSubtotal = function getSubtotal(order) {
    if (!order.summary) {
      var subtotal = 0;
      for (var i = 0; i < order.products.length; i++) {
        subtotal += getProductsTotal(order.products[i]);
      }
      return roundPrice(subtotal);
    } else {
      var fixOrderSummary = true;
      if (configs !== null && configs !== void 0 && configs.project_fix_order_summary) {
        var _configs$project_fix_;
        fixOrderSummary = (configs === null || configs === void 0 || (_configs$project_fix_ = configs.project_fix_order_summary) === null || _configs$project_fix_ === void 0 ? void 0 : _configs$project_fix_.value) === '1';
      }
      if (order.tax_type === 1 && !fixOrderSummary) {
        return order.summary.subtotal + order.summary.tax;
      }
      return order.summary.subtotal;
    }
  };

  /**
   * Method to get order tax
   */
  var getTax = function getTax(order) {
    if (!order.summary) {
      var tax = order.tax_type === 2 ? order.tax * (getSubtotal(order) - order.discount) / 100 : 0;
      return roundPrice(tax);
    } else {
      return order.summary.tax;
    }
  };

  /**
   * Method to get order discount
   */
  var getDiscount = function getDiscount(order) {
    if (!order.summary) {
      return roundPrice(order.discount);
    } else {
      return order.summary.discount;
    }
  };

  /**
   * Method to get converted number
   */
  var roundPrice = function roundPrice(value) {
    var _configs$format_numbe;
    var power = Math.pow(10, configs === null || configs === void 0 || (_configs$format_numbe = configs.format_number_decimal_length) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value);
    var poweredVal = Math.round(value * power);
    return poweredVal / power;
  };

  /**
   * Method to get order total
   */
  var getTotal = function getTotal(order) {
    if (!order.summary) {
      var subtotal = getSubtotal(order);
      var tax = getTax(order);
      var serviceFee = getServiceFee(order);
      var totalorder = order.delivery_type === '2' ? subtotal + tax + serviceFee - order.discount : subtotal + tax + order.delivery_zone_price + getDriverTip(order) + serviceFee - order.discount;
      return roundPrice(totalorder);
    } else {
      return order.summary.total;
    }
  };

  /**
   * Method to get order service fee
   */
  var getServiceFee = function getServiceFee(order) {
    if (!order.summary) {
      var subtotal = (getSubtotal(order) - order.discount) * order.service_fee / 100;
      return roundPrice(subtotal);
    } else {
      return order.summary.service_fee;
    }
  };

  /**
   * Method to get order driver tip
   */
  var getDriverTip = function getDriverTip(order) {
    if (!order.summary) {
      var tip = (getSubtotal(order) - order.discount) * order.driver_tip / 100;
      return roundPrice(tip);
    } else {
      return order.summary.driver_tip;
    }
  };
  (0, _react.useEffect)(function () {
    var _configs$order_types_2;
    var configTypes = (configs === null || configs === void 0 || (_configs$order_types_2 = configs.order_types_allowed) === null || _configs$order_types_2 === void 0 ? void 0 : _configs$order_types_2.value.split('|').map(function (value) {
      return Number(value);
    })) || [];
    setOrderTypes(defaultOrderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }));
  }, [configs === null || configs === void 0 || (_configs$order_types_3 = configs.order_types_allowed) === null || _configs$order_types_3 === void 0 ? void 0 : _configs$order_types_3.value]);
  (0, _react.useEffect)(function () {
    getBusiness();
    getPaymentMethod();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessList: businessList,
    invocing: businessInvocing,
    payMethodsList: payMethodsList,
    orderTypes: orderTypes,
    exportInvoiceList: exportInvoiceList,
    handleChangeOrderTypes: setOrderTypes,
    handleChangeInvocing: setBusinessInvocing,
    handleChangePayMethods: handleChangePayMethods,
    getOrders: getOrders,
    getSubtotal: getSubtotal,
    getTotal: getTotal,
    handleChangeDeliveryTypes: handleChangeDeliveryTypes
  })));
};
InvoiceBusinessManager.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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
InvoiceBusinessManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
};