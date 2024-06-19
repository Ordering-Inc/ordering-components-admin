"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _ToastContext = require("../../contexts/ToastContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var EnterprisePromotionDetails = exports.EnterprisePromotionDetails = function EnterprisePromotionDetails(props) {
  var promotion = props.promotion,
    promotionId = props.promotionId,
    promotionsList = props.promotionsList,
    businessesList = props.businessesList,
    sitesState = props.sitesState,
    UIComponent = props.UIComponent,
    handleSuccessUpdatePromotions = props.handleSuccessUpdatePromotions,
    handleSuccessAddPromotion = props.handleSuccessAddPromotion,
    handleSuccessDeletePromotion = props.handleSuccessDeletePromotion;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)({
      promotion: promotion,
      loading: !promotion,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    promotionState = _useState2[0],
    setPromotionState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      changes: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionState = _useState6[0],
    setActionState = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isAddMode = _useState8[0],
    setIsAddMode = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedBusinessIds = _useState10[0],
    setSelectedBusinessIds = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedSitesIds = _useState12[0],
    setSelectedSitesIds = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedProductsIds = _useState14[0],
    setSelectedProductsIds = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedCategoryIds = _useState16[0],
    setSelectedCategoryIds = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedUserIds = _useState18[0],
    setSelectedUserIds = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedLoyaltyLevelIds = _useState20[0],
    setSelectedLoyaltyLevelIds = _useState20[1];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState() {
    return setFormState({
      loading: false,
      changes: {}
    });
  };

  /**
   * Update business promotion image data
   * @param {File} file Image to change business promotion image
   */
  var handleChangeImage = function handleChangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          image: reader.result
        })
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };

  /**
   * Update parameter data
   * @param {changes} changes parameters to change
   */
  var handleChangeItem = function handleChangeItem(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };

  /**
   * Method to remove the key of changes
   * @param {String} key
   */
  var handleRemoveKey = function handleRemoveKey(key) {
    var _changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);
    delete _changes[key];
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _changes
    }));
  };

  /**
   * Method to change the sites
   */
  var handleSelectSite = function handleSelectSite(checked, siteId) {
    var _formState$changes;
    var sites = [];
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.sites) {
      var _formState$changes2;
      sites = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.sites);
    } else {
      if (promotion !== null && promotion !== void 0 && promotion.sites) {
        var _promotion$sites;
        sites = promotion === null || promotion === void 0 || (_promotion$sites = promotion.sites) === null || _promotion$sites === void 0 ? void 0 : _promotion$sites.reduce(function (ids, site) {
          return [].concat(_toConsumableArray(ids), [site.id]);
        }, []);
      }
    }
    if (checked) {
      sites.push(siteId);
    } else {
      sites = sites.filter(function (id) {
        return id !== siteId;
      });
    }
    setSelectedSitesIds(sites);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: sites
      })
    }));
  };
  var handleSelectAllBusiness = function handleSelectAllBusiness(isAll) {
    var _businessesList$busin;
    var businessIds = businessesList === null || businessesList === void 0 || (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(businessIds);
    } else {
      filteredIds = [];
    }
    setSelectedBusinessIds(filteredIds);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        businesses: filteredIds
      })
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
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        businesses: filteredIds
      })
    }));
  };
  var handleSelectAllSites = function handleSelectAllSites(isAll) {
    var _sitesState$sites;
    var sitesIds = (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.reduce(function (ids, site) {
      return [].concat(_toConsumableArray(ids), [site.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(sitesIds);
    } else {
      filteredIds = [];
    }
    setSelectedSitesIds(filteredIds);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: filteredIds
      })
    }));
  };
  var handleSelectUser = function handleSelectUser(checked, userId) {
    var _formState$changes3;
    var users = [];
    if ((_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.users) {
      var _formState$changes4;
      users = _toConsumableArray((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.users);
    } else {
      if (promotion !== null && promotion !== void 0 && promotion.users) {
        var _promotion$users;
        users = promotion === null || promotion === void 0 || (_promotion$users = promotion.users) === null || _promotion$users === void 0 ? void 0 : _promotion$users.reduce(function (ids, user) {
          return [].concat(_toConsumableArray(ids), [user.id]);
        }, []);
      }
    }
    if (checked) {
      users.push(userId);
    } else {
      users = users.filter(function (id) {
        return id !== userId;
      });
    }
    setSelectedUserIds(users);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        users: users
      })
    }));
  };
  var handleSelectAllUsers = function handleSelectAllUsers() {
    setSelectedUserIds([]);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        users: []
      })
    }));
  };
  var handleSelectLoyaltyLevel = function handleSelectLoyaltyLevel(checked, levelId) {
    var _formState$changes5;
    var loyaltyLevels = [];
    if ((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.loyalty_levels) {
      var _formState$changes6;
      loyaltyLevels = _toConsumableArray((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.loyalty_levels);
    } else {
      if (promotion !== null && promotion !== void 0 && promotion.loyalty_levels) {
        var _promotion$loyalty_le;
        loyaltyLevels = promotion === null || promotion === void 0 || (_promotion$loyalty_le = promotion.loyalty_levels) === null || _promotion$loyalty_le === void 0 ? void 0 : _promotion$loyalty_le.reduce(function (ids, level) {
          return [].concat(_toConsumableArray(ids), [level.id]);
        }, []);
      }
    }
    if (checked) {
      loyaltyLevels.push(levelId);
    } else {
      loyaltyLevels = loyaltyLevels.filter(function (id) {
        return id !== levelId;
      });
    }
    setSelectedLoyaltyLevelIds(loyaltyLevels);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        loyalty_levels: loyaltyLevels
      })
    }));
  };
  var handleSelectAllLoyaltyLevels = function handleSelectAllLoyaltyLevels(loyaltyLevels) {
    setSelectedLoyaltyLevelIds(loyaltyLevels);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        loyalty_levels: loyaltyLevels
      })
    }));
  };

  /**
   * Default fuction for business profile workflow
   */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var changes, key, requestOptions, response, content, updatedPromotions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);
            for (key in changes) {
              if (_typeof(changes[key]) === 'object' && changes[key] !== null || Array.isArray(changes[key])) {
                changes[key] = JSON.stringify(changes[key]);
              }
            }
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context.next = 8;
            return fetch("".concat(ordering.root, "/offers/").concat(promotion.id), requestOptions);
          case 8:
            response = _context.sent;
            _context.next = 11;
            return response.json();
          case 11:
            content = _context.sent;
            if (!content.error) {
              setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
                promotion: content.result
              }));
              setActionState({
                loading: false,
                error: null
              });
              if (handleSuccessUpdatePromotions) {
                updatedPromotions = promotionsList.filter(function (_promotion) {
                  if (_promotion.id === promotion.id) {
                    Object.assign(_promotion, content.result);
                  }
                  return true;
                });
                handleSuccessUpdatePromotions(updatedPromotions);
              }
              cleanFormState();
              showToast(_ToastContext.ToastType.Success, t('PROMOTION_SAVED', 'Promotion saved'));
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context.next = 18;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            setActionState({
              loading: false,
              error: _context.t0.message
            });
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 15]]);
    }));
    return function handleUpdateClick() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to add new promotion from API
   */
  var handleAddPromotion = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(notCloseAdd) {
      var changes, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);
            if (changes !== null && changes !== void 0 && changes.schedule) {
              changes.schedule = JSON.stringify(changes.schedule);
            }
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context2.next = 8;
            return fetch("".concat(ordering.root, "/offers"), requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            content = _context2.sent;
            if (!content.error) {
              setActionState({
                error: null,
                loading: false
              });
              handleSuccessAddPromotion && handleSuccessAddPromotion(content.result);
              showToast(_ToastContext.ToastType.Success, t('PROMOTION_ADDED', 'Promotion added'));
              !notCloseAdd && props.onClose && props.onClose();
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setActionState({
              loading: false,
              error: _context2.t0.message
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function handleAddPromotion(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the business promotion
   * @param {Number} promotionId promotion id
   */
  var handleDeletePromotion = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
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
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/offers/").concat(promotion.id), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            if (!content.error) {
              handleSuccessDeletePromotion && handleSuccessDeletePromotion(promotion.id);
              showToast(_ToastContext.ToastType.Success, t('OFFER_DELETED', 'Offer deleted'));
              props.onClose && props.onClose();
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
    return function handleDeletePromotion() {
      return _ref3.apply(this, arguments);
    };
  }();
  var initSetting = function initSetting(promotion) {
    var _promotion$businesses, _promotion$sites2, _promotion$products, _promotion$categories, _promotion$users2, _promotion$loyalty_le2;
    var businessIds = promotion === null || promotion === void 0 || (_promotion$businesses = promotion.businesses) === null || _promotion$businesses === void 0 ? void 0 : _promotion$businesses.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    setSelectedBusinessIds(businessIds || []);
    var sitesIds = promotion === null || promotion === void 0 || (_promotion$sites2 = promotion.sites) === null || _promotion$sites2 === void 0 ? void 0 : _promotion$sites2.reduce(function (ids, site) {
      return [].concat(_toConsumableArray(ids), [site.id]);
    }, []);
    setSelectedSitesIds(sitesIds || []);
    var _selectedProductsIds = promotion === null || promotion === void 0 || (_promotion$products = promotion.products) === null || _promotion$products === void 0 ? void 0 : _promotion$products.reduce(function (ids, product) {
      return [].concat(_toConsumableArray(ids), [product.id]);
    }, []);
    setSelectedProductsIds(_selectedProductsIds);
    var _selectedCategoryIds = promotion === null || promotion === void 0 || (_promotion$categories = promotion.categories) === null || _promotion$categories === void 0 ? void 0 : _promotion$categories.reduce(function (ids, category) {
      return [].concat(_toConsumableArray(ids), [category.id]);
    }, []);
    setSelectedCategoryIds(_selectedCategoryIds);
    var userIds = promotion === null || promotion === void 0 || (_promotion$users2 = promotion.users) === null || _promotion$users2 === void 0 ? void 0 : _promotion$users2.reduce(function (ids, user) {
      return [].concat(_toConsumableArray(ids), [user.id]);
    }, []);
    setSelectedUserIds(userIds || []);
    var LoyaltyLevelIds = promotion === null || promotion === void 0 || (_promotion$loyalty_le2 = promotion.loyalty_levels) === null || _promotion$loyalty_le2 === void 0 ? void 0 : _promotion$loyalty_le2.reduce(function (ids, level) {
      return [].concat(_toConsumableArray(ids), [level.id]);
    }, []);
    setSelectedLoyaltyLevelIds(LoyaltyLevelIds || []);
  };

  /**
   * Method to get the offer from API
   */
  var getPromotion = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/offers/").concat(promotionId), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context4.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (!error) {
              setPromotionState({
                loading: false,
                promotion: result,
                error: null
              });
            } else {
              setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
                loading: false,
                error: result
              }));
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function getPromotion() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!Object.keys(promotion || {}).length) {
      if (promotionId) {
        setIsAddMode(false);
        getPromotion();
      } else {
        setIsAddMode(true);
        setFormState(_objectSpread(_objectSpread({}, formState), {}, {
          changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
            enabled: true,
            auto: false,
            public: true,
            condition_type: 1,
            type: 1,
            target: 1,
            rate_type: 1,
            stackable: false,
            rate: 5
          })
        }));
        setSelectedBusinessIds(_toConsumableArray(selectedBusinessIds));
        setSelectedSitesIds(_toConsumableArray(selectedSitesIds));
        setSelectedProductsIds(_objectSpread({}, selectedProductsIds));
        setSelectedCategoryIds(_objectSpread({}, selectedCategoryIds));
        setSelectedUserIds(_toConsumableArray(selectedUserIds));
        setSelectedLoyaltyLevelIds(_toConsumableArray(selectedLoyaltyLevelIds));
      }
    } else {
      setIsAddMode(false);
      initSetting(promotion);
    }
    setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
      promotion: promotion
    }));
  }, [JSON.stringify(promotion || {}), promotionId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: isAddMode,
    promotionState: promotionState,
    formState: formState,
    actionState: actionState,
    selectedBusinessIds: selectedBusinessIds,
    selectedSitesIds: selectedSitesIds,
    selectedProductsIds: selectedProductsIds,
    setSelectedProductsIds: setSelectedProductsIds,
    selectedCategoryIds: selectedCategoryIds,
    setSelectedCategoryIds: setSelectedCategoryIds,
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion,
    handleDeletePromotion: handleDeletePromotion,
    handleChangeItem: handleChangeItem,
    handleRemoveKey: handleRemoveKey,
    handleSelectSite: handleSelectSite,
    handleSelectAllBusiness: handleSelectAllBusiness,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllSites: handleSelectAllSites,
    selectedUserIds: selectedUserIds,
    handleSelectUser: handleSelectUser,
    selectedLoyaltyLevelIds: selectedLoyaltyLevelIds,
    handleSelectLoyaltyLevel: handleSelectLoyaltyLevel,
    handleSelectAllLoyaltyLevels: handleSelectAllLoyaltyLevels,
    handleSelectAllUsers: handleSelectAllUsers
  })));
};
EnterprisePromotionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
EnterprisePromotionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};