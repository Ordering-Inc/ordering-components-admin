"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingWebsite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var OrderingWebsite = exports.OrderingWebsite = function OrderingWebsite(props) {
  var UIComponent = props.UIComponent,
    appId = props.appId;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    themeValues = _useState2[0],
    setThemeValues = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    advancedValues = _useState4[0],
    setAdvancedValues = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      themes: [],
      error: null,
      siteId: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    orderingTheme = _useState6[0],
    setOrderingTheme = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      themes: [],
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    themesList = _useState8[0],
    setThemesList = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    site = _useState10[0],
    setSite = _useState10[1];
  var _useState11 = (0, _react.useState)({
      businesses: [],
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    businessesList = _useState12[0],
    setBusinessesList = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      franchises: [],
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    franchisesList = _useState14[0],
    setFranchisesList = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      changes: {},
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    formState = _useState16[0],
    setFormState = _useState16[1];

  /**
   * Update form data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
    setSite(_objectSpread(_objectSpread({}, site), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
  * Method to get the themes from API
  */
  var getSites = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, _yield$response$json, error, result, found;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context.next = 21;
              break;
            }
            found = result.find(function (site) {
              return site.code === appId;
            });
            if (!found) {
              _context.next = 19;
              break;
            }
            _context.next = 16;
            return getSiteTheme(found.id);
          case 16:
            setSite(found);
            _context.next = 21;
            break;
          case 19:
            _context.next = 21;
            return handleAddSite();
          case 21:
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 23]]);
    }));
    return function getSites() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var where, conditions, _yield$ordering$setAc, _yield$ordering$setAc2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            _context2.next = 8;
            return ordering.setAccessToken(token).businesses().select(['name', 'logo', 'slug']).where(where).asDashboard().get();
          case 8:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: result
              }));
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function getBusinesses() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get brand list
   */
  var getFranchises = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var where, conditions, requestOptions, functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: true
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises?where=").concat(JSON.stringify(where));
            _context3.next = 10;
            return fetch(functionFetch, requestOptions);
          case 10:
            response = _context3.sent;
            _context3.next = 13;
            return response.json();
          case 13:
            _yield$response$json2 = _context3.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                franchises: result
              }));
            } else {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: false,
              error: _context3.t0
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 19]]);
    }));
    return function getFranchises() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
  * Function to add new site from API
  */
  var handleAddSite = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var initialData, requestOptions, response, _yield$response$json3, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            initialData = {
              code: appId,
              name: 'Ordering.co'
            };
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(initialData)
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            _yield$response$json3 = _context4.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (error) {
              _context4.next = 17;
              break;
            }
            _context4.next = 14;
            return getSiteTheme(result.id);
          case 14:
            setSite(result);
            _context4.next = 18;
            break;
          case 17:
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              themes: [],
              error: result
            }));
          case 18:
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              result: [_context4.t0.message]
            }));
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 20]]);
    }));
    return function handleAddSite() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get the site theme from API
   */
  var getSiteTheme = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(siteId) {
      var requestOptions, response, _yield$response$json4, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.next = 4;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes"), requestOptions);
          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();
          case 7:
            _yield$response$json4 = _context5.sent;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            setOrderingTheme({
              loading: false,
              themes: error ? [] : result,
              error: error ? result : null,
              siteId: siteId
            });
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function getSiteTheme(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
  * Method to assign the theme to site
  */
  var handleAssignTheme = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value, themeId, siteId) {
      var requestOptions, response, _yield$response$json5, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                theme_id: themeId,
                values: JSON.stringify(value)
              })
            };
            _context6.next = 4;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes"), requestOptions);
          case 4:
            response = _context6.sent;
            _context6.next = 7;
            return response.json();
          case 7:
            _yield$response$json5 = _context6.sent;
            error = _yield$response$json5.error;
            result = _yield$response$json5.result;
            if (!error) {
              showToast(_ToastContext.ToastType.Success, t('THEME_ADDED', 'Theme added'));
              setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
                themes: [result]
              }));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context6.t0.message);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleAssignTheme(_x2, _x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
  * Method to get the themes from API
  */
  var getThemes = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, _yield$response$json6, error, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setThemesList(_objectSpread(_objectSpread({}, themesList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/themes"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            _yield$response$json6 = _context7.sent;
            error = _yield$response$json6.error;
            result = _yield$response$json6.result;
            setThemesList({
              loading: false,
              themes: error ? [] : result,
              error: error ? result : null
            });
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            setThemesList(_objectSpread(_objectSpread({}, themesList), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 14]]);
    }));
    return function getThemes() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
  * Method to update the site theme from API
  */
  var handleUpdateSiteTheme = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(advancedTheme) {
      var _orderingTheme$themes, _orderingTheme$themes2, _orderingTheme$themes3, themeId, siteId, myProductvalues, seoOptions, values, requestOptions, response, _yield$response$json7, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            themeId = (_orderingTheme$themes = orderingTheme.themes[0]) === null || _orderingTheme$themes === void 0 ? void 0 : _orderingTheme$themes.theme_id;
            siteId = (_orderingTheme$themes2 = orderingTheme.themes[0]) === null || _orderingTheme$themes2 === void 0 ? void 0 : _orderingTheme$themes2.site_id;
            myProductvalues = _objectSpread(_objectSpread({}, orderingTheme.themes[0].values), {}, {
              my_products: _objectSpread(_objectSpread({}, (_orderingTheme$themes3 = orderingTheme.themes[0].values) === null || _orderingTheme$themes3 === void 0 ? void 0 : _orderingTheme$themes3.my_products), {}, {
                components: _objectSpread({}, themeValues)
              })
            });
            seoOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(formState.changes)
            };
            _context8.next = 8;
            return fetch("".concat(ordering.root, "/sites/").concat(site.id), seoOptions);
          case 8:
            values = advancedTheme ? JSON.parse(JSON.stringify(advancedTheme)) : JSON.parse(JSON.stringify(myProductvalues));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                values: JSON.stringify(values)
              })
            };
            _context8.next = 12;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes/").concat(themeId), requestOptions);
          case 12:
            response = _context8.sent;
            _context8.next = 15;
            return response.json();
          case 15:
            _yield$response$json7 = _context8.sent;
            error = _yield$response$json7.error;
            result = _yield$response$json7.result;
            if (!error) {
              showToast(_ToastContext.ToastType.Success, t('THEME_UPDATED', 'Theme updated'));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context8.next = 24;
            break;
          case 21:
            _context8.prev = 21;
            _context8.t0 = _context8["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 24:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 21]]);
    }));
    return function handleUpdateSiteTheme(_x5) {
      return _ref8.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!appId) return;
    getThemes();
    getSites();
    getBusinesses();
    getFranchises();
  }, [appId]);
  (0, _react.useEffect)(function () {
    var _themesList$themes, _orderingTheme$themes4;
    if (orderingTheme !== null && orderingTheme !== void 0 && orderingTheme.siteId && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && _themesList$themes.length && !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$themes4 = orderingTheme.themes) !== null && _orderingTheme$themes4 !== void 0 && _orderingTheme$themes4.length)) {
      var _themesList$themes$, _valuesDefault$my_pro, _themesList$themes$2;
      var valuesDefault = JSON.parse(JSON.stringify((_themesList$themes$ = themesList.themes[0]) === null || _themesList$themes$ === void 0 ? void 0 : _themesList$themes$.values_default));
      if (valuesDefault !== null && valuesDefault !== void 0 && (_valuesDefault$my_pro = valuesDefault.my_products) !== null && _valuesDefault$my_pro !== void 0 && (_valuesDefault$my_pro = _valuesDefault$my_pro.components) !== null && _valuesDefault$my_pro !== void 0 && (_valuesDefault$my_pro = _valuesDefault$my_pro.website_settings) !== null && _valuesDefault$my_pro !== void 0 && (_valuesDefault$my_pro = _valuesDefault$my_pro.components) !== null && _valuesDefault$my_pro !== void 0 && _valuesDefault$my_pro.values) {
        valuesDefault.my_products.components.website_settings.components.values.default_domain = "https://".concat(ordering.project, ".tryordering.com");
      }
      handleAssignTheme(valuesDefault, (_themesList$themes$2 = themesList.themes[0]) === null || _themesList$themes$2 === void 0 ? void 0 : _themesList$themes$2.id, orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.siteId);
    }
  }, [JSON.stringify(themesList.themes), orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.siteId]);
  (0, _react.useEffect)(function () {
    var _orderingTheme$themes5, _orderingTheme$themes6, _orderingTheme$themes7, _orderingTheme$themes9, _orderingTheme$themes10;
    if (!((_orderingTheme$themes5 = orderingTheme.themes[0]) !== null && _orderingTheme$themes5 !== void 0 && _orderingTheme$themes5.values)) return;
    if (((_orderingTheme$themes6 = orderingTheme.themes[0]) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.values) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.business_view) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.components) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.products) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.components) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.product) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.components) === null || _orderingTheme$themes6 === void 0 || (_orderingTheme$themes6 = _orderingTheme$themes6.favorite) === null || _orderingTheme$themes6 === void 0 ? void 0 : _orderingTheme$themes6.hidden) === undefined && (_orderingTheme$themes7 = orderingTheme.themes[0]) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.values) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.business_view) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.components) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.products) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.components) !== null && _orderingTheme$themes7 !== void 0 && (_orderingTheme$themes7 = _orderingTheme$themes7.product) !== null && _orderingTheme$themes7 !== void 0 && _orderingTheme$themes7.components) {
      var _orderingTheme$themes8;
      orderingTheme.themes[0].values.business_view.components.products.components.product.components.favorite = {
        hidden: (_orderingTheme$themes8 = orderingTheme.themes[0]) === null || _orderingTheme$themes8 === void 0 || (_orderingTheme$themes8 = _orderingTheme$themes8.values) === null || _orderingTheme$themes8 === void 0 || (_orderingTheme$themes8 = _orderingTheme$themes8.business_view) === null || _orderingTheme$themes8 === void 0 || (_orderingTheme$themes8 = _orderingTheme$themes8.components) === null || _orderingTheme$themes8 === void 0 || (_orderingTheme$themes8 = _orderingTheme$themes8.product) === null || _orderingTheme$themes8 === void 0 || (_orderingTheme$themes8 = _orderingTheme$themes8.components) === null || _orderingTheme$themes8 === void 0 ? void 0 : _orderingTheme$themes8.favorite
      };
    }
    setAdvancedValues(JSON.parse(JSON.stringify((_orderingTheme$themes9 = orderingTheme.themes[0]) === null || _orderingTheme$themes9 === void 0 ? void 0 : _orderingTheme$themes9.values)));
    var _themeValues = (_orderingTheme$themes10 = orderingTheme.themes[0]) === null || _orderingTheme$themes10 === void 0 || (_orderingTheme$themes10 = _orderingTheme$themes10.values) === null || _orderingTheme$themes10 === void 0 || (_orderingTheme$themes10 = _orderingTheme$themes10.my_products) === null || _orderingTheme$themes10 === void 0 ? void 0 : _orderingTheme$themes10.components;
    if (!_themeValues) return;
    setThemeValues(JSON.parse(JSON.stringify(_themeValues)));
  }, [orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.themes]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    themeValues: themeValues,
    advancedValues: advancedValues,
    setAdvancedValues: setAdvancedValues,
    orderingTheme: orderingTheme,
    setThemeValues: setThemeValues,
    handleUpdateSiteTheme: handleUpdateSiteTheme,
    themesList: themesList,
    site: site,
    setSite: setSite,
    businessesList: businessesList,
    franchisesList: franchisesList,
    handleChangeInput: handleChangeInput
  })));
};
OrderingWebsite.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before sites list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after sites list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderingWebsite.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};