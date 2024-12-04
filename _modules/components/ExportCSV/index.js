"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportCSV = void 0;
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
var ExportCSV = exports.ExportCSV = function ExportCSV(props) {
  var UIComponent = props.UIComponent,
    filterValues = props.filterValues,
    ordersStatusGroup = props.ordersStatusGroup,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    franchiseId = props.franchiseId;
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(filterApply, exportWithoutMetafields) {
      var requestOptions, filterConditons, propsToFetch, _filterValues$country, _filterValues$currenc, _filterValues$driverG, _filterValues$driverG2, _filterValues$cityIds, _filterValues$adminis, _filterValues$statuse, _filterValues$busines, _filterValues$driverI, _filterValues$deliver, _filterValues$paymeth, _filterValues$offerId, _filterValues$coupon, functionFetch, response, _yield$response$json, error, result;
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
            filterConditons = [];
            propsToFetch = ['paymethod', 'payment_events', 'driver', 'driver_group', 'driver_company', 'agent', 'delivery_datetime', 'unread', 'franchise'];
            if (!exportWithoutMetafields) {
              propsToFetch.push('metafields');
            }
            if (franchiseId) {
              filterConditons.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: franchiseId
                }]
              });
            }
            if (filterApply) {
              if (Object.keys(filterValues).length) {
                if (filterValues.statuses !== undefined) {
                  if (((_filterValues$statuse = filterValues.statuses) === null || _filterValues$statuse === void 0 ? void 0 : _filterValues$statuse.length) > 0) {
                    filterConditons.push({
                      attribute: 'status',
                      value: filterValues.statuses
                    });
                  } else {
                    filterConditons.push({
                      attribute: 'status',
                      value: selectedSubOrderStatus[ordersStatusGroup] || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    });
                  }
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                  filterConditons.push({
                    attribute: 'external_id',
                    value: {
                      condition: 'ilike',
                      value: encodeURIComponent("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                    }
                  });
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                  filterConditons.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                    }
                  });
                }
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) !== null) {
                  filterConditons.push({
                    attribute: 'logistic_status',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus
                  });
                }
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) !== null) {
                  if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 0) {
                    filterConditons.push({
                      attribute: 'driver_id',
                      value: {
                        condition: '>=',
                        value: 0
                      }
                    });
                  }
                  if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 1) {
                    filterConditons.push({
                      attribute: 'driver_id',
                      value: null
                    });
                  }
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                  filterConditons.push({
                    attribute: 'external_id',
                    value: {
                      condition: 'ilike',
                      value: encodeURIComponent("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                    }
                  });
                }
                if (filterValues.deliveryFromDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '>=',
                      value: encodeURI(filterValues.deliveryFromDatetime)
                    }
                  });
                }
                if (filterValues.deliveryEndDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '<=',
                      value: filterValues.deliveryEndDatetime
                    }
                  });
                }
                if ((filterValues === null || filterValues === void 0 || (_filterValues$country = filterValues.countryCode) === null || _filterValues$country === void 0 ? void 0 : _filterValues$country.length) !== 0) {
                  filterConditons.push({
                    attribute: 'country_code',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode
                  });
                }
                if ((filterValues === null || filterValues === void 0 || (_filterValues$currenc = filterValues.currency) === null || _filterValues$currenc === void 0 ? void 0 : _filterValues$currenc.length) !== 0) {
                  filterConditons.push({
                    attribute: 'currency',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency
                  });
                }
                if (filterValues.deliveryEndDatetime !== undefined) {
                  if (filterValues.deliveryEndDatetime !== null) {
                    filterConditons.push({
                      attribute: 'delivery_datetime',
                      value: {
                        condition: '<=',
                        value: filterValues.deliveryEndDatetime
                      }
                    });
                  }
                }
                if (filterValues.businessIds !== undefined) {
                  if (((_filterValues$busines = filterValues.businessIds) === null || _filterValues$busines === void 0 ? void 0 : _filterValues$busines.length) !== 0) {
                    filterConditons.push({
                      attribute: 'business_id',
                      value: filterValues.businessIds
                    });
                  }
                }
                if (filterValues.driverIds !== undefined) {
                  if (((_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) !== 0) {
                    filterConditons.push({
                      attribute: 'driver_id',
                      value: filterValues.driverIds
                    });
                  }
                }
                if (filterValues.deliveryTypes !== undefined) {
                  if (((_filterValues$deliver = filterValues.deliveryTypes) === null || _filterValues$deliver === void 0 ? void 0 : _filterValues$deliver.length) !== 0) {
                    filterConditons.push({
                      attribute: 'delivery_type',
                      value: filterValues.deliveryTypes
                    });
                  }
                }
                if (((_filterValues$driverG = filterValues.driverGroupIds) === null || _filterValues$driverG === void 0 ? void 0 : _filterValues$driverG.length) !== 0) {
                  filterConditons.push({
                    attribute: 'driver_group_id',
                    value: filterValues.driverGroupIds
                  });
                }
                if (((_filterValues$driverG2 = filterValues.driverGroupBusinessIds) === null || _filterValues$driverG2 === void 0 ? void 0 : _filterValues$driverG2.length) !== 0) {
                  filterConditons.push({
                    attribute: 'driver_group_business',
                    conditions: [{
                      attribute: 'driver_group_id',
                      value: {
                        condition: '=',
                        value: filterValues.driverGroupBusinessIds
                      }
                    }]
                  });
                }
                if (filterValues.paymethodIds !== undefined) {
                  if (((_filterValues$paymeth = filterValues.paymethodIds) === null || _filterValues$paymeth === void 0 ? void 0 : _filterValues$paymeth.length) !== 0) {
                    filterConditons.push({
                      attribute: 'paymethod_id',
                      value: filterValues.paymethodIds
                    });
                  }
                }
                if ((filterValues === null || filterValues === void 0 || (_filterValues$cityIds = filterValues.cityIds) === null || _filterValues$cityIds === void 0 ? void 0 : _filterValues$cityIds.length) !== 0) {
                  filterConditons.push({
                    attribute: 'business',
                    conditions: [{
                      attribute: 'city_id',
                      value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                    }]
                  });
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.customerName) {
                  filterConditons.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'name',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerName, "%"))
                      }
                    }]
                  });
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.customerLastname) {
                  filterConditons.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'lastname',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerLastname, "%"))
                      }
                    }]
                  });
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.customerCellphone) {
                  filterConditons.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'cellphone',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerCellphone, "%"))
                      }
                    }]
                  });
                }
                if (filterValues !== null && filterValues !== void 0 && filterValues.customerEmail) {
                  filterConditons.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'email',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerEmail, "%"))
                      }
                    }]
                  });
                }
                if (((_filterValues$adminis = filterValues.administratorIds) === null || _filterValues$adminis === void 0 ? void 0 : _filterValues$adminis.length) !== 0) {
                  filterConditons.push({
                    attribute: 'agent_id',
                    value: filterValues.administratorIds
                  });
                }
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.offerId) !== null) {
                  if (((_filterValues$offerId = filterValues.offerId) === null || _filterValues$offerId === void 0 ? void 0 : _filterValues$offerId.length) !== 0) {
                    filterConditons.push({
                      attribute: 'offers',
                      conditions: [{
                        attribute: 'offer_id',
                        value: {
                          condition: '=',
                          value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.offerId
                        }
                      }]
                    });
                  }
                }
                if (filterValues.coupon !== null) {
                  if (((_filterValues$coupon = filterValues.coupon) === null || _filterValues$coupon === void 0 ? void 0 : _filterValues$coupon.length) !== 0) {
                    filterConditons.push({
                      attribute: 'offers',
                      conditions: [{
                        attribute: 'coupon',
                        value: {
                          condition: '=',
                          value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.coupon
                        }
                      }]
                    });
                  }
                }
              }
            }
            functionFetch = filterApply ? "".concat(ordering.root, "/orders_v2.csv?mode=dashboard&orderBy=id&where=").concat(JSON.stringify(filterConditons), "&params=").concat(propsToFetch) : "".concat(ordering.root, "/orders_v2.csv?mode=dashboard&orderBy=id&params=").concat(propsToFetch);
            _context.next = 13;
            return fetch(functionFetch, requestOptions);
          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();
          case 16:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                result: result,
                error: null
              }));
            } else {
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: _context.t0
            }));
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 22]]);
    }));
    return function getCSV(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    getCSV: getCSV
  })));
};
ExportCSV.propTypes = {
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
ExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};