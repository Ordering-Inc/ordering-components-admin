"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversGroupDetails = exports.DriversGroupDetails = function DriversGroupDetails(props) {
  var UIComponent = props.UIComponent,
    driversGroupsState = props.driversGroupsState,
    setDriversGroupsState = props.setDriversGroupsState,
    curDriversGroup = props.curDriversGroup,
    driversGroupId = props.driversGroupId,
    driversManagers = props.driversManagers,
    businesses = props.businesses,
    paymethods = props.paymethods,
    drivers = props.drivers,
    companies = props.companies;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    user = _useSession2$.user;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      driversGroup: props.curDriversGroup,
      loading: !props.curDriversGroup,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driversGroupState = _useState2[0],
    setDriversGroupState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    actionState = _useState4[0],
    setActionState = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    changesState = _useState6[0],
    setChangesState = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedBusinessIds = _useState8[0],
    setSelectedBusinessIds = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedPaymethodIds = _useState10[0],
    setSelectedPaymethodIds = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedDriverIds = _useState12[0],
    setSelectedDriverIds = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedDriverTemporaryIds = _useState14[0],
    setSelectedDriverTemporaryIds = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedDriversCompanyIds = _useState16[0],
    setSelectedDriversCompanyIds = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedDriverManager = _useState18[0],
    setSelectedDriverManager = _useState18[1];
  var initSet = function initSet(driversGroup) {
    var _driversGroup$busines, _driversGroup$drivers, _driversGroup$drivers2, _driversGroup$driver_, _driversGroup$adminis;
    var businessIds = driversGroup === null || driversGroup === void 0 || (_driversGroup$busines = driversGroup.business) === null || _driversGroup$busines === void 0 ? void 0 : _driversGroup$busines.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    setSelectedBusinessIds(businessIds);
    setSelectedPaymethodIds((driversGroup === null || driversGroup === void 0 ? void 0 : driversGroup.allowed_paymethods) || []);
    var drivers = driversGroup === null || driversGroup === void 0 || (_driversGroup$drivers = driversGroup.drivers) === null || _driversGroup$drivers === void 0 ? void 0 : _driversGroup$drivers.reduce(function (ids, driver) {
      return [].concat(_toConsumableArray(ids), [driver.id]);
    }, []);
    setSelectedDriverIds(drivers);
    var driversTemporary = driversGroup === null || driversGroup === void 0 || (_driversGroup$drivers2 = driversGroup.drivers) === null || _driversGroup$drivers2 === void 0 ? void 0 : _driversGroup$drivers2.reduce(function (driverData, driver) {
      if (driver !== null && driver !== void 0 && driver.temporary_at) {
        return [].concat(_toConsumableArray(driverData), [{
          id: driver === null || driver === void 0 ? void 0 : driver.id,
          temporarily_activated: true,
          temporary_at: driver === null || driver === void 0 ? void 0 : driver.temporary_at
        }]);
      } else {
        return _toConsumableArray(driverData);
      }
    }, []);
    setSelectedDriverTemporaryIds(driversTemporary);
    var companyIds = driversGroup === null || driversGroup === void 0 || (_driversGroup$driver_ = driversGroup.driver_companies) === null || _driversGroup$driver_ === void 0 ? void 0 : _driversGroup$driver_.reduce(function (ids, company) {
      return [].concat(_toConsumableArray(ids), [company.id]);
    }, []);
    setSelectedDriversCompanyIds(companyIds);
    var managersIds = driversGroup === null || driversGroup === void 0 || (_driversGroup$adminis = driversGroup.administrators) === null || _driversGroup$adminis === void 0 ? void 0 : _driversGroup$adminis.reduce(function (ids, manager) {
      return [].concat(_toConsumableArray(ids), [manager.id]);
    }, []);
    setSelectedDriverManager(managersIds);
  };

  /**
   * Method to get the drives group from API
   */
  var getDriversGroup = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
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
            return fetch("".concat(ordering.root, "/drivergroups/").concat(driversGroupId), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (!error) {
              setDriversGroupState({
                loading: false,
                driversGroup: result,
                error: null
              });
              initSet(result);
            } else {
              setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function getDriversGroup() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to update selected drivers group from API
   * @param {Object} changes
   */
  var handleUpdateDriversGroup = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_changes) {
      var changes, requestOptions, groupId, response, content, groups;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            changes = _changes;
            if (typeof (_changes === null || _changes === void 0 ? void 0 : _changes.driver_available_max_distance) !== 'undefined') {
              changes = _objectSpread(_objectSpread({}, _changes), {}, {
                driver_available_max_distance: (_changes === null || _changes === void 0 ? void 0 : _changes.driver_available_max_distance) === '' ? null : _changes === null || _changes === void 0 ? void 0 : _changes.driver_available_max_distance
              });
            }
            if (typeof (_changes === null || _changes === void 0 ? void 0 : _changes.administrators) !== 'undefined') {
              changes = _objectSpread(_objectSpread({}, _changes), {}, {
                administrators: (_changes === null || _changes === void 0 ? void 0 : _changes.administrators) === '[]' ? null : _changes === null || _changes === void 0 ? void 0 : _changes.administrators
              });
            }
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            groupId = (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.id) || driversGroupId;
            _context2.next = 10;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(groupId), requestOptions);
          case 10:
            response = _context2.sent;
            _context2.next = 13;
            return response.json();
          case 13:
            content = _context2.sent;
            if (!content.error) {
              setActionState({
                error: null,
                loading: false
              });
              groups = driversGroupsState.groups.filter(function (group) {
                if (group.id === groupId) {
                  Object.assign(group, content.result);
                }
                return true;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
              setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
                driversGroup: content.result
              }));
              setChangesState({});
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            setActionState({
              loading: false,
              error: [_context2.t0.message]
            });
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 17]]);
    }));
    return function handleUpdateDriversGroup(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the drivers group from API
   */
  var handleDeleteDriversGroup = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, content, groups;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(curDriversGroup.id), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              groups = driversGroupsState.groups.filter(function (group) {
                return group.id !== curDriversGroup.id;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'));
              props.onClose && props.onClose();
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            setActionState({
              loading: false,
              error: [_context3.t0.message]
            });
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleDeleteDriversGroup() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to add new drivers group from API
   */
  var handleAddDriversGroup = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var changes, requestOptions, response, content, _content$result, newGroup, newAdmin, groups;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            changes = _objectSpread(_objectSpread({}, changesState), {}, {
              driver_available_max_distance: (changesState === null || changesState === void 0 ? void 0 : changesState.driver_available_max_distance) || null
            });
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context4.next = 7;
            return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);
          case 7:
            response = _context4.sent;
            _context4.next = 10;
            return response.json();
          case 10:
            content = _context4.sent;
            if (!content.error) {
              setActionState({
                loading: false,
                error: null
              });
              newGroup = _objectSpread({}, content.result);
              if (!((_content$result = content.result) !== null && _content$result !== void 0 && _content$result.administrator) && (driversManagers.length > 0 || (user === null || user === void 0 ? void 0 : user.level) === 5)) {
                newAdmin = driversManagers.find(function (manager) {
                  var _content$result2;
                  return manager.id === ((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.administrator_id);
                });
                newGroup = _objectSpread(_objectSpread({}, newGroup), {}, {
                  administrator: (user === null || user === void 0 ? void 0 : user.level) !== 5 ? newAdmin : JSON.parse(JSON.stringify(user))
                });
              }
              groups = [].concat(_toConsumableArray(driversGroupsState.groups), [newGroup]);
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_ADDED', 'Driver group added'));
              setChangesState({});
              props.onClose && props.onClose();
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setActionState({
              loading: false,
              error: [_context4.t0.message]
            });
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function handleAddDriversGroup() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangesState = function handleChangesState(changes) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), changes));
  };
  var handleChangeMaxDistance = function handleChangeMaxDistance(value) {
    var maxDistance = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_available_max_distance: maxDistance
    }));
  };
  var handleSelectBusiness = function handleSelectBusiness(businessId, checked) {
    var businessIds = _toConsumableArray(selectedBusinessIds);
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(businessIds), [businessId]);
    } else {
      filteredIds = businessIds.filter(function (id) {
        return id !== businessId;
      });
    }
    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectAllBusiness = function handleSelectAllBusiness(isAll) {
    var businessIds = businesses === null || businesses === void 0 ? void 0 : businesses.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(businessIds);
    } else {
      filteredIds = [];
    }
    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectPaymethod = function handleSelectPaymethod(paymethodId, checked) {
    var paymethodIds = _toConsumableArray(selectedPaymethodIds);
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(paymethodIds), [paymethodId]);
    } else {
      filteredIds = paymethodIds.filter(function (id) {
        return id !== paymethodId;
      });
    }
    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectDriver = function handleSelectDriver(driverId, checked) {
    var driverIds = _toConsumableArray(selectedDriverIds);
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverIds), [driverId]);
    } else {
      filteredIds = driverIds.filter(function (id) {
        return id !== driverId;
      });
    }
    setSelectedDriverIds(filteredIds);
    var changes = _objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    });
    if ((selectedDriverTemporaryIds === null || selectedDriverTemporaryIds === void 0 ? void 0 : selectedDriverTemporaryIds.length) > 0) {
      changes.temporary_drivers = JSON.stringify(selectedDriverTemporaryIds);
    } else if ('temporary_drivers' in changes) {
      delete changes.temporary_drivers;
    }
    setChangesState(changes);
  };
  var handleSelectDriverTemporary = function handleSelectDriverTemporary(driverId, checked, temporaryAt) {
    var index = selectedDriverTemporaryIds.findIndex(function (driver) {
      return driver.id === driverId;
    });
    if (checked) {
      if (index !== -1) {
        selectedDriverTemporaryIds[index] = _objectSpread(_objectSpread({}, selectedDriverTemporaryIds[index]), {}, {
          temporarily_activated: checked,
          temporary_at: temporaryAt || null
        });
      } else {
        selectedDriverTemporaryIds.push({
          id: driverId,
          temporarily_activated: checked,
          temporary_at: temporaryAt || null
        });
      }
    } else {
      if (index !== -1) {
        selectedDriverTemporaryIds.splice(index, 1);
      }
    }
    setSelectedDriverTemporaryIds(_toConsumableArray(selectedDriverTemporaryIds));
    var changes = _objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(selectedDriverIds)
    });
    if (selectedDriverTemporaryIds.length > 0) {
      changes.temporary_drivers = JSON.stringify(selectedDriverTemporaryIds);
    } else if ('temporary_drivers' in changes) {
      delete changes.temporary_drivers;
    }
    setChangesState(changes);
  };
  var handleSelectDriversCompany = function handleSelectDriversCompany(driverCompanyId, checked) {
    var driverCompanyIds = _toConsumableArray(selectedDriversCompanyIds);
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverCompanyIds), [driverCompanyId]);
    } else {
      filteredIds = driverCompanyIds.filter(function (id) {
        return id !== driverCompanyId;
      });
    }
    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectAllPaymethod = function handleSelectAllPaymethod(isAll) {
    var paymethodIds = paymethods === null || paymethods === void 0 ? void 0 : paymethods.reduce(function (ids, paymethod) {
      return [].concat(_toConsumableArray(ids), [paymethod.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(paymethodIds);
    } else {
      filteredIds = [];
    }
    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectAllDriver = function handleSelectAllDriver(isAll) {
    var driverIds = drivers === null || drivers === void 0 ? void 0 : drivers.reduce(function (ids, driver) {
      return [].concat(_toConsumableArray(ids), [driver.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(driverIds);
    } else {
      filteredIds = [];
    }
    setSelectedDriverIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectAllDriversCompany = function handleSelectAllDriversCompany(isAll) {
    var driverCompanyIds = companies === null || companies === void 0 ? void 0 : companies.reduce(function (ids, company) {
      return [].concat(_toConsumableArray(ids), [company.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(driverCompanyIds);
    } else {
      filteredIds = [];
    }
    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };
  var handleChangeType = function handleChangeType(type) {
    var changes = _objectSpread({}, changesState);
    delete changes.drivers;
    delete changes.driver_companies;
    changes.type = type;
    setSelectedDriverIds([]);
    setSelectedDriverManager([]);
    setSelectedDriversCompanyIds([]);
    setChangesState(_objectSpread({}, changes));
  };
  var handleSelectDriverManager = function handleSelectDriverManager(managerId, checked) {
    var driverCompanyIds = selectedDriverManager;
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverCompanyIds), [managerId]);
    } else {
      filteredIds = driverCompanyIds.filter(function (id) {
        return id !== managerId;
      });
    }
    setSelectedDriverManager(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      administrators: JSON.stringify(filteredIds)
    }));
  };
  (0, _react.useEffect)(function () {
    setChangesState({});
    if (curDriversGroup) {
      setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
        loading: false,
        driversGroup: curDriversGroup
      }));
      initSet(curDriversGroup);
    } else {
      setDriversGroupState({
        driversGroup: null,
        loading: !props.curDriversGroup,
        error: null
      });
      if (driversGroupId) {
        getDriversGroup();
      } else {
        // default for new group
        var extraAttributes = _objectSpread({
          enabled: true,
          autoassign_amount_drivers: 1,
          autoassign_autoaccept_by_driver: false,
          autoassign_autoreject_time: 30,
          autoassign_increment_radius: 100,
          autoassign_initial_radius: 500,
          autoassign_max_in_accepted_by_business: 5,
          autoassign_max_in_accepted_by_driver: 5,
          autoassign_max_in_driver_in_business: 5,
          autoassign_max_in_pending: 5,
          autoassign_max_in_pickup_completed: 5,
          autoassign_max_in_ready_for_pickup: 5,
          autoassign_max_in_driver_on_way: 5,
          autoassign_max_in_driver_almost_arrived_to_customer: 5,
          autoassign_max_orders: 5,
          autoassign_max_radius: 1000,
          orders_group_max_distance_between_delivery: 200,
          orders_group_max_distance_between_pickup: 200,
          orders_group_max_orders: 1,
          orders_group_max_time_between: 5,
          orders_group_max_time_between_delivery: 600,
          orders_group_max_time_between_pickup: 600,
          orders_group_start_in_status: 7,
          orders_group_use_maps_api: false
        }, (user === null || user === void 0 ? void 0 : user.level) === 5 && {
          administrator_id: user === null || user === void 0 ? void 0 : user.id
        });
        setChangesState(_objectSpread({
          type: 0
        }, extraAttributes));
        setSelectedBusinessIds([]);
        setSelectedPaymethodIds([]);
        setSelectedDriverIds([]);
        setSelectedDriversCompanyIds([]);
        setSelectedDriverManager([]);
      }
    }
  }, [curDriversGroup, driversGroupId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversGroupState: driversGroupState,
    changesState: changesState,
    actionState: actionState,
    cleanChagesState: function cleanChagesState() {
      return setChangesState({});
    },
    selectedBusinessIds: selectedBusinessIds,
    selectedPaymethodIds: selectedPaymethodIds,
    selectedDriverIds: selectedDriverIds,
    selectedDriverTemporaryIds: selectedDriverTemporaryIds,
    selectedDriversCompanyIds: selectedDriversCompanyIds,
    selectedDriverManager: selectedDriverManager,
    handleChangesState: handleChangesState,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectDriver: handleSelectDriver,
    handleSelectDriversCompany: handleSelectDriversCompany,
    handleSelectAllPaymethod: handleSelectAllPaymethod,
    handleSelectAllDriver: handleSelectAllDriver,
    handleSelectAllDriversCompany: handleSelectAllDriversCompany,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    handleAddDriversGroup: handleAddDriversGroup,
    handleChangeType: handleChangeType,
    handleSelectDriverManager: handleSelectDriverManager,
    handleChangeMaxDistance: handleChangeMaxDistance,
    handleSelectDriverTemporary: handleSelectDriverTemporary
  })));
};
DriversGroupDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before drivers group details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after drivers group details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before drivers group details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after drivers group details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};