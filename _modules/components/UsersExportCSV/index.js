"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersExportCSV = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
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
var UsersExportCSV = exports.UsersExportCSV = function UsersExportCSV(props) {
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    UIComponent = props.UIComponent,
    userTypesSelected = props.userTypesSelected,
    selectedUserActiveState = props.selectedUserActiveState,
    searchValue = props.searchValue,
    isSearchByUserId = props.isSearchByUserId,
    isSearchByUserEmail = props.isSearchByUserEmail,
    isSearchByUserPhone = props.isSearchByUserPhone,
    isSearchByUserName = props.isSearchByUserName;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useState = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    actionStatus = _useState2[0],
    setActionStatus = _useState2[1];

  /**
   * Method to get csv from API
   */
  var getCSV = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(filterApply) {
      var _props$multiFilterVal, _props$multiFilterVal2, _props$multiFilterVal33, _props$multiFilterVal34, requestOptions, defaultConditions, filterConditons, isOrdersCountValue, _Object$keys, searchConditions, _props$multiFilterVal3, _props$multiFilterVal4, _props$multiFilterVal6, _props$multiFilterVal7, _props$multiFilterVal9, _props$multiFilterVal10, _props$multiFilterVal12, _props$multiFilterVal13, _props$multiFilterVal15, _props$multiFilterVal17, _props$multiFilterVal19, _props$multiFilterVal21, _props$multiFilterVal23, _props$multiFilterVal25, _props$multiFilterVal27, _props$multiFilterVal29, _props$multiFilterVal31, _searchConditions, _props$multiFilterVal5, _props$multiFilterVal8, _props$multiFilterVal11, _props$multiFilterVal14, _props$multiFilterVal16, _props$multiFilterVal18, _props$multiFilterVal20, _props$multiFilterVal22, _props$multiFilterVal24, _props$multiFilterVal26, _props$multiFilterVal28, _props$multiFilterVal30, _props$multiFilterVal32, filterConditonsObj, functionFetch, response, content;
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
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            defaultConditions = [];
            if (Array.isArray(defaultUserTypesSelected)) {
              defaultConditions.push({
                attribute: 'level',
                value: defaultUserTypesSelected
              });
            }
            filterConditons = [];
            isOrdersCountValue = props.multiFilterValues && ((_props$multiFilterVal = props.multiFilterValues) === null || _props$multiFilterVal === void 0 ? void 0 : _props$multiFilterVal.ordersCount) && ((_props$multiFilterVal2 = props.multiFilterValues) === null || _props$multiFilterVal2 === void 0 || (_props$multiFilterVal2 = _props$multiFilterVal2.ordersCount) === null || _props$multiFilterVal2 === void 0 ? void 0 : _props$multiFilterVal2.value);
            if (filterApply) {
              if (userTypesSelected.length > 0) {
                filterConditons.push({
                  attribute: 'level',
                  value: userTypesSelected
                });
              }
              // if (!disabledActiveStateCondition) {
              //   filterConditons.push({ attribute: 'enabled', value: selectedUserActiveState })
              // }
              if (searchValue) {
                searchConditions = [];
                if (isSearchByUserId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserEmail) {
                  searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserPhone) {
                  searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                  searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                filterConditons.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }
              if (((_Object$keys = Object.keys(props === null || props === void 0 ? void 0 : props.multiFilterValues)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
                _searchConditions = [];
                if ((_props$multiFilterVal3 = props.multiFilterValues) !== null && _props$multiFilterVal3 !== void 0 && _props$multiFilterVal3.name && ((_props$multiFilterVal4 = props.multiFilterValues) === null || _props$multiFilterVal4 === void 0 ? void 0 : _props$multiFilterVal4.name) !== null) {
                  _searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal5 = props.multiFilterValues) === null || _props$multiFilterVal5 === void 0 ? void 0 : _props$multiFilterVal5.name, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal6 = props.multiFilterValues) !== null && _props$multiFilterVal6 !== void 0 && _props$multiFilterVal6.lastname && ((_props$multiFilterVal7 = props.multiFilterValues) === null || _props$multiFilterVal7 === void 0 ? void 0 : _props$multiFilterVal7.lastname) !== null) {
                  _searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal8 = props.multiFilterValues) === null || _props$multiFilterVal8 === void 0 ? void 0 : _props$multiFilterVal8.lastname, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal9 = props.multiFilterValues) !== null && _props$multiFilterVal9 !== void 0 && _props$multiFilterVal9.email && ((_props$multiFilterVal10 = props.multiFilterValues) === null || _props$multiFilterVal10 === void 0 ? void 0 : _props$multiFilterVal10.email) !== null) {
                  _searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal11 = props.multiFilterValues) === null || _props$multiFilterVal11 === void 0 ? void 0 : _props$multiFilterVal11.email, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal12 = props.multiFilterValues) !== null && _props$multiFilterVal12 !== void 0 && _props$multiFilterVal12.cellphone && ((_props$multiFilterVal13 = props.multiFilterValues) === null || _props$multiFilterVal13 === void 0 ? void 0 : _props$multiFilterVal13.cellphone) !== null) {
                  _searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal14 = props.multiFilterValues) === null || _props$multiFilterVal14 === void 0 ? void 0 : _props$multiFilterVal14.cellphone, "%"))
                    }
                  });
                }
                if (((_props$multiFilterVal15 = props.multiFilterValues) === null || _props$multiFilterVal15 === void 0 ? void 0 : _props$multiFilterVal15.countryPhoneCode) !== null) {
                  _searchConditions.push({
                    attribute: 'country_phone_code',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal16 = props.multiFilterValues) === null || _props$multiFilterVal16 === void 0 ? void 0 : _props$multiFilterVal16.countryPhoneCode, "%"))
                    }
                  });
                }
                if (((_props$multiFilterVal17 = props.multiFilterValues) === null || _props$multiFilterVal17 === void 0 ? void 0 : _props$multiFilterVal17.cityIds.length) !== 0) {
                  _searchConditions.push({
                    attribute: 'city_id',
                    value: (_props$multiFilterVal18 = props.multiFilterValues) === null || _props$multiFilterVal18 === void 0 ? void 0 : _props$multiFilterVal18.cityIds
                  });
                }
                if (((_props$multiFilterVal19 = props.multiFilterValues) === null || _props$multiFilterVal19 === void 0 ? void 0 : _props$multiFilterVal19.phoneVerified) !== null) {
                  _searchConditions.push({
                    attribute: 'phone_verified',
                    value: (_props$multiFilterVal20 = props.multiFilterValues) === null || _props$multiFilterVal20 === void 0 ? void 0 : _props$multiFilterVal20.phoneVerified
                  });
                }
                if (((_props$multiFilterVal21 = props.multiFilterValues) === null || _props$multiFilterVal21 === void 0 ? void 0 : _props$multiFilterVal21.emailVerified) !== null) {
                  _searchConditions.push({
                    attribute: 'email_verified',
                    value: (_props$multiFilterVal22 = props.multiFilterValues) === null || _props$multiFilterVal22 === void 0 ? void 0 : _props$multiFilterVal22.emailVerified
                  });
                }
                if (((_props$multiFilterVal23 = props.multiFilterValues) === null || _props$multiFilterVal23 === void 0 ? void 0 : _props$multiFilterVal23.userType) !== null) {
                  _searchConditions.push({
                    attribute: 'level',
                    value: (_props$multiFilterVal24 = props.multiFilterValues) === null || _props$multiFilterVal24 === void 0 ? void 0 : _props$multiFilterVal24.userType
                  });
                }
                if (((_props$multiFilterVal25 = props.multiFilterValues) === null || _props$multiFilterVal25 === void 0 ? void 0 : _props$multiFilterVal25.loyaltyLevel) !== null) {
                  _searchConditions.push({
                    attribute: 'loyalty_level_id',
                    value: (_props$multiFilterVal26 = props.multiFilterValues) === null || _props$multiFilterVal26 === void 0 ? void 0 : _props$multiFilterVal26.loyaltyLevel
                  });
                }
                if (((_props$multiFilterVal27 = props.multiFilterValues) === null || _props$multiFilterVal27 === void 0 ? void 0 : _props$multiFilterVal27.enabled) !== null) {
                  _searchConditions.push({
                    attribute: 'enabled',
                    value: (_props$multiFilterVal28 = props.multiFilterValues) === null || _props$multiFilterVal28 === void 0 ? void 0 : _props$multiFilterVal28.enabled
                  });
                }
                if (((_props$multiFilterVal29 = props.multiFilterValues) === null || _props$multiFilterVal29 === void 0 ? void 0 : _props$multiFilterVal29.deliveryFromDatetime) !== null) {
                  _searchConditions.push({
                    attribute: 'created_at',
                    value: {
                      condition: '>=',
                      value: (_props$multiFilterVal30 = props.multiFilterValues) === null || _props$multiFilterVal30 === void 0 ? void 0 : _props$multiFilterVal30.deliveryFromDatetime
                    }
                  });
                }
                if (((_props$multiFilterVal31 = props.multiFilterValues) === null || _props$multiFilterVal31 === void 0 ? void 0 : _props$multiFilterVal31.deliveryEndDatetime) !== null) {
                  _searchConditions.push({
                    attribute: 'created_at',
                    value: {
                      condition: '<=',
                      value: (_props$multiFilterVal32 = props.multiFilterValues) === null || _props$multiFilterVal32 === void 0 ? void 0 : _props$multiFilterVal32.deliveryEndDatetime
                    }
                  });
                }
                if (_searchConditions.length) {
                  filterConditons.push({
                    conector: 'AND',
                    conditions: _searchConditions
                  });
                }
              }
            }
            filterConditonsObj = {
              conditions: filterConditons,
              conector: 'AND'
            };
            functionFetch = filterApply ? isOrdersCountValue ? "".concat(ordering.root, "/users_new.csv?mode=dashboard&orderBy=id&orders_count_condition=").concat((_props$multiFilterVal33 = props.multiFilterValues) === null || _props$multiFilterVal33 === void 0 || (_props$multiFilterVal33 = _props$multiFilterVal33.ordersCount) === null || _props$multiFilterVal33 === void 0 ? void 0 : _props$multiFilterVal33.condition, "&orders_count_value=").concat((_props$multiFilterVal34 = props.multiFilterValues) === null || _props$multiFilterVal34 === void 0 || (_props$multiFilterVal34 = _props$multiFilterVal34.ordersCount) === null || _props$multiFilterVal34 === void 0 ? void 0 : _props$multiFilterVal34.value, "&where=").concat(JSON.stringify(filterConditonsObj)) : "".concat(ordering.root, "/users_new.csv?mode=dashboard&orderBy=id&where=").concat(JSON.stringify(filterConditonsObj)) : defaultConditions.length > 0 ? "".concat(ordering.root, "/users_new.csv?mode=dashboard&orderBy=id&where=").concat(JSON.stringify(defaultConditions)) : "".concat(ordering.root, "/users_new.csv?mode=dashboard&orderBy=id");
            _context.next = 14;
            return fetch(functionFetch, requestOptions);
          case 14:
            response = _context.sent;
            _context.next = 17;
            return response.json();
          case 17:
            content = _context.sent;
            setActionStatus({
              loading: false,
              result: content.result,
              error: null
            });
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: _context.t0
            }));
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 21]]);
    }));
    return function getCSV(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    getCSV: getCSV
  })));
};
UsersExportCSV.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
UsersExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  multiFilterValues: {}
};