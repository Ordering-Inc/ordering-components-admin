"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var PlaceList = exports.PlaceList = function PlaceList(props) {
  var UIComponent = props.UIComponent,
    cityMangersPropsToFetch = props.cityMangersPropsToFetch;
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
  var _useState = (0, _react.useState)({
      countries: [],
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    countriesState = _useState2[0],
    setCountriesState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      options: [],
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    dropdownOptionsState = _useState4[0],
    setDropdownOptionsState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    cityManagerList = _useState6[0],
    setCityMangerList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    actionState = _useState8[0],
    setActionState = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedCity = _useState10[0],
    setSelectedCity = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    changesState = _useState12[0],
    setChangesState = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openCity = _useState14[0],
    setOpenCity = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedCityList = _useState16[0],
    setSelectedCityList = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    openZoneDropdown = _useState18[0],
    setOpenZonedropdown = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedZoneDropdown = _useState20[0],
    setSelectedZoneDropdown = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedZoneList = _useState22[0],
    setSelectedZoneList = _useState22[1];
  var _useState23 = (0, _react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedCountries = _useState24[0],
    setSelectedCountries = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    startSeveralDeleteStart = _useState26[0],
    setStartSeveralDeleteStart = _useState26[1];

  /**
   * Method to get the countries from API
   */
  var getCountries = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$ordering$count, _yield$ordering$count2, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: true
            }));
            _context.next = 4;
            return ordering.countries().get();
          case 4:
            _yield$ordering$count = _context.sent;
            _yield$ordering$count2 = _yield$ordering$count.content;
            error = _yield$ordering$count2.error;
            result = _yield$ordering$count2.result;
            if (!error) {
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: false,
                countries: result
              }));
            } else {
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function getCountries() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get the dropdown options from API
   */
  var getDropdownOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context2.next = 5;
            return fetch("".concat(ordering.root, "/dropdownoptions"), requestOptions);
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            content = _context2.sent;
            if (!content.error) {
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                loading: false,
                options: content.result
              }));
            } else {
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getDropdownOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to update country from API
   */
  var handleUpdateCountry = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(countryId, changes) {
      var _yield$ordering$count3, _yield$ordering$count4, error, result, countries;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            _context3.next = 5;
            return ordering.countries(countryId).save(changes);
          case 5:
            _yield$ordering$count3 = _context3.sent;
            _yield$ordering$count4 = _yield$ordering$count3.content;
            error = _yield$ordering$count4.error;
            result = _yield$ordering$count4.result;
            if (!error) {
              countries = countriesState.countries.filter(function (country) {
                if (country.id === countryId) {
                  Object.assign(country, result);
                }
                return true;
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: countries
              }));
              showToast(_ToastContext.ToastType.Success, t('COUNTRY_SAVED', 'Country saved'));
            }
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            setActionState({
              loading: false,
              error: [_context3.t0.message]
            });
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 12]]);
    }));
    return function handleUpdateCountry(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to add new country from API
   */
  var handleAddCountry = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(changes) {
      var _yield$ordering$count5, _yield$ordering$count6, error, result, newCountry;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            _context4.next = 5;
            return ordering.countries().save(changes);
          case 5:
            _yield$ordering$count5 = _context4.sent;
            _yield$ordering$count6 = _yield$ordering$count5.content;
            error = _yield$ordering$count6.error;
            result = _yield$ordering$count6.result;
            if (!error) {
              newCountry = _objectSpread({}, result);
              newCountry.enabled = true;
              newCountry.cities = [];
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: [].concat(_toConsumableArray(countriesState.countries), [newCountry])
              }));
              showToast(_ToastContext.ToastType.Success, t('COUNTRY_ADDED', 'Country added'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
            } else {
              setActionState({
                loading: false,
                error: result
              });
            }
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            setActionState({
              loading: false,
              error: [_context4.t0.message]
            });
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 12]]);
    }));
    return function handleAddCountry(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the country from API
   */
  var handleDeleteCountry = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(countryId) {
      var _yield$ordering$count7, _yield$ordering$count8, error, result, countries, contriesList;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            _context5.next = 5;
            return ordering.countries(countryId).delete();
          case 5:
            _yield$ordering$count7 = _context5.sent;
            _yield$ordering$count8 = _yield$ordering$count7.content;
            error = _yield$ordering$count8.error;
            result = _yield$ordering$count8.result;
            if (!error) {
              countries = countriesState.countries.filter(function (country) {
                return country.id !== countryId;
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: countries
              }));
              showToast(_ToastContext.ToastType.Success, t('COUNTRY_DELETED', 'Country deleted'));
              if (startSeveralDeleteStart) {
                contriesList = _toConsumableArray(selectedCountries);
                contriesList.shift();
                if (contriesList.length === 0) {
                  setStartSeveralDeleteStart(false);
                }
                setSelectedCountries(contriesList);
              }
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: result
              }));
              setStartSeveralDeleteStart(false);
            }
            _context5.next = 16;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            setActionState({
              loading: false,
              error: [_context5.t0.message]
            });
            setStartSeveralDeleteStart(false);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return function handleDeleteCountry(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to update the city from API
   */
  var handleUpdateCity = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(countryId, cityId, changes) {
      var _yield$ordering$count9, _yield$ordering$count10, error, result, countries;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            _context6.next = 5;
            return ordering.countries(countryId).cities(cityId).save(changes);
          case 5:
            _yield$ordering$count9 = _context6.sent;
            _yield$ordering$count10 = _yield$ordering$count9.content;
            error = _yield$ordering$count10.error;
            result = _yield$ordering$count10.result;
            if (!error) {
              countries = countriesState.countries.map(function (country) {
                if (country.id === countryId) {
                  var cities = country.cities.filter(function (city) {
                    if (city.id === cityId) {
                      Object.assign(city, result);
                    }
                    return true;
                  });
                  country.cities = cities;
                }
                return country;
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: countries
              }));
              showToast(_ToastContext.ToastType.Success, t('CITY_SAVED', 'City saved'));
              setChangesState({});
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: result
              }));
            }
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            setActionState({
              loading: false,
              error: [_context6.t0.message]
            });
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function handleUpdateCity(_x5, _x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the city from API
   */
  var handleDeleteCity = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(countryId, cityId) {
      var _yield$ordering$count11, _yield$ordering$count12, error, result, countries, cityList;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            _context7.next = 5;
            return ordering.countries(countryId).cities(cityId).delete();
          case 5:
            _yield$ordering$count11 = _context7.sent;
            _yield$ordering$count12 = _yield$ordering$count11.content;
            error = _yield$ordering$count12.error;
            result = _yield$ordering$count12.result;
            if (!error) {
              countries = countriesState.countries.map(function (country) {
                if (parseInt(country.id) === parseInt(countryId)) {
                  var cities = country.cities.filter(function (city) {
                    return city.id !== cityId;
                  });
                  country.cities = cities;
                }
                return country;
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: countries
              }));
              showToast(_ToastContext.ToastType.Success, t('CITY_REMOVED', 'City removed'));
              if (startSeveralDeleteStart) {
                cityList = _toConsumableArray(selectedCityList);
                cityList.shift();
                if (cityList.length === 0) {
                  setStartSeveralDeleteStart(false);
                }
                setSelectedCityList(cityList);
              }
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: result
              }));
              setStartSeveralDeleteStart(false);
            }
            _context7.next = 16;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            setActionState({
              loading: false,
              error: [_context7.t0.message]
            });
            setStartSeveralDeleteStart(false);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function handleDeleteCity(_x8, _x9) {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to get city managers from API
   */
  var getCityManagers = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var source, _yield$ordering$setAc, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
              loading: true
            }));
            source = {};
            _context8.next = 5;
            return ordering.setAccessToken(token).users().select(cityMangersPropsToFetch).where([{
              attribute: 'level',
              value: [1]
            }]).get({
              cancelToken: source
            });
          case 5:
            _yield$ordering$setAc = _context8.sent;
            result = _yield$ordering$setAc.content.result;
            setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
              loading: false,
              users: result
            }));
            _context8.next = 13;
            break;
          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
              loading: false,
              error: _context8.t0.message
            }));
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 10]]);
    }));
    return function getCityManagers() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to add new city from API
   */
  var handleAddCity = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var _yield$ordering$count13, _yield$ordering$count14, error, result, countries;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (changesState !== null && changesState !== void 0 && changesState.country_id) {
              _context9.next = 3;
              break;
            }
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              error: t('SELECT_COUNTRY', 'Select a country')
            }));
            return _context9.abrupt("return");
          case 3:
            _context9.prev = 3;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            changesState.enabled = true;
            _context9.next = 9;
            return ordering.countries(changesState === null || changesState === void 0 ? void 0 : changesState.country_id).cities().save(changesState);
          case 9:
            _yield$ordering$count13 = _context9.sent;
            _yield$ordering$count14 = _yield$ordering$count13.content;
            error = _yield$ordering$count14.error;
            result = _yield$ordering$count14.result;
            if (!error) {
              countries = countriesState.countries.map(function (country) {
                if (country.id === (changesState === null || changesState === void 0 ? void 0 : changesState.country_id)) {
                  var cities = [].concat(_toConsumableArray(country.cities), [result]);
                  country.cities = cities;
                }
                return country;
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                countries: countries
              }));
              showToast(_ToastContext.ToastType.Success, t('CITY_ADDED', 'City added'));
              setChangesState({});
              setOpenCity(false);
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: result
              }));
            }
            _context9.next = 19;
            break;
          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](3);
            setActionState({
              loading: false,
              error: [_context9.t0.message]
            });
          case 19:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[3, 16]]);
    }));
    return function handleAddCity() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleChangesState = function handleChangesState(key, val) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, key, val)));
  };
  var handleSaveCity = function handleSaveCity() {
    handleUpdateCity(selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.country_id, selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.id, changesState);
  };
  var handleCheckboxClick = function handleCheckboxClick(city) {
    var found = selectedCityList.find(function (_city) {
      return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
    });
    if (!found) {
      setSelectedCityList([].concat(_toConsumableArray(selectedCityList), [city]));
    } else {
      var cities = selectedCityList.filter(function (_city) {
        return _city.id !== city.id;
      });
      setSelectedCityList(cities);
    }
  };
  var handleAllCheckboxClick = function handleAllCheckboxClick() {
    var _countriesState$count;
    var cities = (_countriesState$count = countriesState.countries) === null || _countriesState$count === void 0 ? void 0 : _countriesState$count.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []);
    if (cities.length === selectedCityList.length) {
      setSelectedCityList([]);
    } else {
      setSelectedCityList(cities);
    }
  };

  /**
   * Method to delete the several cities from API
   */
  var handleSeveralDeleteCities = function handleSeveralDeleteCities() {
    setStartSeveralDeleteStart(true);
  };

  /**
   * Method to update the city from API
   */
  var handleUpdateDropdown = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(dropdownId, changes) {
      var requestOptions, response, content, dropdownOptions;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context10.next = 6;
            return fetch("".concat(ordering.root, "/dropdownoptions/").concat(dropdownId), requestOptions);
          case 6:
            response = _context10.sent;
            _context10.next = 9;
            return response.json();
          case 9:
            content = _context10.sent;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              dropdownOptions = dropdownOptionsState.options.filter(function (option) {
                if (option.id === dropdownId) {
                  Object.assign(option, content.result);
                }
                return true;
              });
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                options: dropdownOptions
              }));
              showToast(_ToastContext.ToastType.Success, t('ZONE_SAVED', 'Zone saved'));
              setChangesState({});
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context10.next = 16;
            break;
          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](0);
            setActionState({
              loading: false,
              error: [_context10.t0.message]
            });
          case 16:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 13]]);
    }));
    return function handleUpdateDropdown(_x10, _x11) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSaveZone = function handleSaveZone() {
    handleUpdateDropdown(selectedZoneDropdown === null || selectedZoneDropdown === void 0 ? void 0 : selectedZoneDropdown.id, changesState);
  };

  /**
   * Method to add new city from API
   */
  var handleAddZone = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var requestOptions, response, content, dropdownOptions;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            if (changesState !== null && changesState !== void 0 && changesState.name) {
              _context11.next = 3;
              break;
            }
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              error: t('NAME_REQUIRED', 'The name is required.')
            }));
            return _context11.abrupt("return");
          case 3:
            _context11.prev = 3;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            changesState.enabled = true;
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changesState)
            };
            _context11.next = 10;
            return fetch("".concat(ordering.root, "/dropdownoptions"), requestOptions);
          case 10:
            response = _context11.sent;
            _context11.next = 13;
            return response.json();
          case 13:
            content = _context11.sent;
            if (!content.error) {
              dropdownOptions = [].concat(_toConsumableArray(dropdownOptionsState.options), [content.result]);
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                options: dropdownOptions
              }));
              showToast(_ToastContext.ToastType.Success, t('ZONE_ADDED', 'Zone added'));
              setChangesState({});
              setOpenZonedropdown(false);
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context11.next = 20;
            break;
          case 17:
            _context11.prev = 17;
            _context11.t0 = _context11["catch"](3);
            setActionState({
              loading: false,
              error: [_context11.t0.message]
            });
          case 20:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[3, 17]]);
    }));
    return function handleAddZone() {
      return _ref11.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the city from API
   */
  var handleDeleteZone = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(zoneId) {
      var requestOptions, response, content, dropdownOptions, zoneList;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context12.next = 6;
            return fetch("".concat(ordering.root, "/dropdownoptions/").concat(zoneId), requestOptions);
          case 6:
            response = _context12.sent;
            _context12.next = 9;
            return response.json();
          case 9:
            content = _context12.sent;
            if (!content.error) {
              dropdownOptions = dropdownOptionsState.options.filter(function (zone) {
                return zone.id !== zoneId;
              });
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                options: dropdownOptions
              }));
              showToast(_ToastContext.ToastType.Success, t('ZONE_REMOVED', 'Zone removed'));
              if (startSeveralDeleteStart) {
                zoneList = _toConsumableArray(selectedZoneList);
                zoneList.shift();
                if (zoneList.length === 0) {
                  setStartSeveralDeleteStart(false);
                }
                setSelectedZoneList(zoneList);
              }
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
              setStartSeveralDeleteStart(false);
            }
            _context12.next = 17;
            break;
          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](0);
            setActionState({
              loading: false,
              error: [_context12.t0.message]
            });
            setStartSeveralDeleteStart(false);
          case 17:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 13]]);
    }));
    return function handleDeleteZone(_x12) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleCheckboxZoneClick = function handleCheckboxZoneClick(zone) {
    var found = selectedZoneList.find(function (_zone) {
      return (_zone === null || _zone === void 0 ? void 0 : _zone.id) === zone.id;
    });
    if (!found) {
      setSelectedZoneList([].concat(_toConsumableArray(selectedZoneList), [zone]));
    } else {
      var zones = selectedZoneList.filter(function (_zone) {
        return _zone.id !== zone.id;
      });
      setSelectedZoneList(zones);
    }
  };
  var handleAllCheckboxZoneClick = function handleAllCheckboxZoneClick() {
    var zones = _toConsumableArray(dropdownOptionsState.options);
    if (zones.length === selectedZoneList.length) {
      setSelectedZoneList([]);
    } else {
      setSelectedZoneList(zones);
    }
  };

  /**
   * Method to delete the several cities from API
   */
  var handleSeveralDeleteZones = function handleSeveralDeleteZones() {
    setStartSeveralDeleteStart(true);
  };
  (0, _react.useEffect)(function () {
    var _selectedZoneList$;
    if (!startSeveralDeleteStart || selectedZoneList.length === 0) return;
    handleDeleteZone((_selectedZoneList$ = selectedZoneList[0]) === null || _selectedZoneList$ === void 0 ? void 0 : _selectedZoneList$.id);
  }, [selectedZoneList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    var _selectedCityList$, _selectedCityList$2;
    if (!startSeveralDeleteStart || selectedCityList.length === 0) return;
    handleDeleteCity((_selectedCityList$ = selectedCityList[0]) === null || _selectedCityList$ === void 0 ? void 0 : _selectedCityList$.country_id, (_selectedCityList$2 = selectedCityList[0]) === null || _selectedCityList$2 === void 0 ? void 0 : _selectedCityList$2.id);
  }, [selectedCityList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    var _selectedCountries$;
    if (!startSeveralDeleteStart || selectedCountries.length === 0) return;
    handleDeleteCountry((_selectedCountries$ = selectedCountries[0]) === null || _selectedCountries$ === void 0 ? void 0 : _selectedCountries$.id);
  }, [selectedCountries, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    setChangesState({});
  }, [selectedCity]);
  (0, _react.useEffect)(function () {
    getCityManagers();
    getCountries();
    getDropdownOptions();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    countriesState: countriesState,
    dropdownOptionsState: dropdownOptionsState,
    cityManagerList: cityManagerList,
    actionState: actionState,
    handleUpdateCountry: handleUpdateCountry,
    handleAddCountry: handleAddCountry,
    setSelectedCountries: setSelectedCountries,
    selectedCountries: selectedCountries,
    handleDeleteCountry: handleDeleteCountry,
    handleUpdateCity: handleUpdateCity,
    handleDeleteCity: handleDeleteCity,
    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
    openCity: openCity,
    setOpenCity: setOpenCity,
    changesState: changesState,
    handleChangesState: handleChangesState,
    cleanChagesState: function cleanChagesState() {
      return setChangesState({});
    },
    handleSaveCity: handleSaveCity,
    handleAddCity: handleAddCity,
    selectedCityList: selectedCityList,
    handleCheckboxClick: handleCheckboxClick,
    handleAllCheckboxClick: handleAllCheckboxClick,
    handleSeveralDeleteCities: handleSeveralDeleteCities,
    handleSeveralDeleteCountries: function handleSeveralDeleteCountries() {
      return setStartSeveralDeleteStart(true);
    },
    handleUpdateDropdown: handleUpdateDropdown,
    openZoneDropdown: openZoneDropdown,
    setOpenZonedropdown: setOpenZonedropdown,
    selectedZoneDropdown: selectedZoneDropdown,
    setSelectedZoneDropdown: setSelectedZoneDropdown,
    handleSaveZone: handleSaveZone,
    handleAddZone: handleAddZone,
    handleDeleteZone: handleDeleteZone,
    selectedZoneList: selectedZoneList,
    handleCheckboxZoneClick: handleCheckboxZoneClick,
    handleAllCheckboxZoneClick: handleAllCheckboxZoneClick,
    handleSeveralDeleteZones: handleSeveralDeleteZones
  })));
};
PlaceList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PlaceList.defaultProps = {
  cityMangersPropsToFetch: ['id', 'name', 'lastname'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};