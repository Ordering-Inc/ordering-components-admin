"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionDetails = void 0;
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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
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
var ProductExtraOptionDetails = exports.ProductExtraOptionDetails = function ProductExtraOptionDetails(props) {
  var UIComponent = props.UIComponent,
    business = props.business,
    extra = props.extra,
    option = props.option,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleSucccessDeleteOption = props.handleSucccessDeleteOption,
    parentExtraState = props.parentExtraState,
    setParentExtraState = props.setParentExtraState;
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
      option: option,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    optionState = _useState2[0],
    setOptionState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      changes: {},
      result: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    changesState = _useState4[0],
    setChangesState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editSubOptionId = _useState6[0],
    setEditSubOptionId = _useState6[1];
  var _useState7 = (0, _react.useState)({
      changes: {},
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    settingChangeState = _useState8[0],
    setSettingChangeState = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    conditionalOptions = _useState10[0],
    setConditionalOptions = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    conditionalSubOptions = _useState12[0],
    setConditionalSubOptions = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    conditionalOptionId = _useState14[0],
    setConditionalOptionId = _useState14[1];
  var _useState15 = (0, _react.useState)(extra),
    _useState16 = _slicedToArray(_useState15, 2),
    extraState = _useState16[0],
    setExtraState = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    conditionalSubOptionId = _useState18[0],
    setConditionalSubOptionId = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    isAddForm = _useState20[0],
    setIsAddForm = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    dragoverSubOptionId = _useState22[0],
    setDragoverSubOptionId = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isSubOptionsBottom = _useState24[0],
    setIsSubOptionsBottom = _useState24[1];

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} id sub option id
   */
  var handleChangeInput = function handleChangeInput(e, id) {
    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: _defineProperty({}, e.target.name, e.target.value)
      });
    }
  };

  /**
   * Method change default suboption
   * @param {Number} id
   */
  var handleChangeDefaultSuboption = function handleChangeDefaultSuboption(id) {
    var _optionState$option, _optionState$option2;
    var suboptionPreselected = optionState === null || optionState === void 0 || (_optionState$option = optionState.option) === null || _optionState$option === void 0 || (_optionState$option = _optionState$option.suboptions) === null || _optionState$option === void 0 || (_optionState$option = _optionState$option.find(function (suboption) {
      return suboption.id === id;
    })) === null || _optionState$option === void 0 ? void 0 : _optionState$option.preselected;
    var defaultSubOptionsLength = optionState === null || optionState === void 0 || (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 || (_optionState$option2 = _optionState$option2.suboptions) === null || _optionState$option2 === void 0 || (_optionState$option2 = _optionState$option2.filter(function (suboption) {
      return suboption === null || suboption === void 0 ? void 0 : suboption.preselected;
    })) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.length;
    if (suboptionPreselected) {
      handleUpdateSubOption({
        id: id,
        preselected: false
      });
    } else {
      var _optionState$option3;
      if ((optionState === null || optionState === void 0 || (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : _optionState$option3.max) > defaultSubOptionsLength) {
        handleUpdateSubOption({
          id: id,
          preselected: true
        });
      } else {
        showToast(_ToastContext.ToastType.Error, t('MAX_PRESELECTED_OPTIONS_ERROR', 'Maximum number of options exceeded'), 4000);
      }
    }
  };

  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   * @param {Number} id sub option id
   */
  var handleChangeSubOptionEnable = function handleChangeSubOptionEnable(enabled, id) {
    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
          enabled: enabled
        })
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      });
    }
  };

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  var handleChangeSubOptionImage = function handleChangeSubOptionImage(file, id) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    if (id === editSubOptionId) {
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
            image: reader.result
          })
        });
      };
    } else {
      setEditSubOptionId(id);
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: {
            image: reader.result
          }
        });
      };
    }
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Method to change the suboption state
   */
  var handleChangeItem = function handleChangeItem(changes, id) {
    if (id !== undefined && editSubOptionId === id) setEditSubOptionId(id);
    setChangesState({
      result: {},
      changes: _objectSpread(_objectSpread({}, changesState.changes), changes)
    });
  };

  /**
   * Method to update the business state
   * @param {Object} updatedExtra updated extra
   */
  var handleSuccessUpdateBusiness = function handleSuccessUpdateBusiness(updatedExtra) {
    if (handleUpdateBusinessState) {
      var updatedExtras = business.extras.filter(function (extra) {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra);
        }
        return true;
      });
      var businessState = _objectSpread(_objectSpread({}, business), {}, {
        extras: updatedExtras
      });
      var categories = businessState.categories.map(function (item) {
        var _products = item.products.map(function (prod) {
          var _prod$extras;
          var _extras = prod === null || prod === void 0 || (_prod$extras = prod.extras) === null || _prod$extras === void 0 ? void 0 : _prod$extras.filter(function (extra) {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra);
            }
            return true;
          });
          return _objectSpread(_objectSpread({}, prod), {}, {
            extras: _extras
          });
        });
        var _item = _objectSpread(_objectSpread({}, item), {}, {
          products: _products
        });
        return _item;
      });
      var updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
        categories: categories
      });
      handleUpdateBusinessState(updatedBusiness);
    }
  };
  var handleSetConditionalOptions = function handleSetConditionalOptions(updatedExtra) {
    var extracedOptions = updatedExtra.options.filter(function (item) {
      return item.id !== option.id;
    });
    var _conditionalOptions = [];
    var _iterator = _createForOfIteratorHelper(extracedOptions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var optionItem = _step.value;
        _conditionalOptions.push({
          value: optionItem.id,
          content: optionItem.name
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setConditionalOptions(_conditionalOptions);
  };
  var handleSetConditionalSubOptions = function handleSetConditionalSubOptions(updatedExtra, optionId) {
    var selectedOption = updatedExtra.options.find(function (item) {
      return item.id === optionId;
    });
    var _conditionalSubOptions = [];
    var _iterator2 = _createForOfIteratorHelper(selectedOption.suboptions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var subOption = _step2.value;
        _conditionalSubOptions.push({
          value: subOption.id,
          content: subOption.name
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    setConditionalSubOptions(_conditionalSubOptions);
  };
  var handleSetDefaultCondition = function handleSetDefaultCondition(respectTo) {
    var _iterator3 = _createForOfIteratorHelper(extraState === null || extraState === void 0 ? void 0 : extraState.options),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;
        if (item !== null && item !== void 0 && item.suboptions) {
          var _iterator4 = _createForOfIteratorHelper(item.suboptions),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var subItem = _step4.value;
              if (subItem.id === respectTo) {
                setConditionalOptionId(item.id);
                setConditionalSubOptionId(subItem.id);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };

  /**
   * Method to save the new ingredient from API
   */
  var handleUpdateSubOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(changesParam) {
      var _changes, changes, key, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(!(changesParam !== null && changesParam !== void 0 && changesParam.id) && !editSubOptionId)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            _changes = changesParam || _objectSpread({}, changesState.changes);
            changes = {};
            for (key in _changes) {
              if (_changes[key] !== '') {
                changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
              }
            }
            if (!(Object.keys(changes).length === 0)) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return");
          case 8:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context.next = 13;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat((changesParam === null || changesParam === void 0 ? void 0 : changesParam.id) || editSubOptionId), requestOptions);
          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();
          case 16:
            content = _context.sent;
            setChangesState({
              changes: content.error ? changesState.changes : {},
              result: content === null || content === void 0 ? void 0 : content.result
            });
            if (content.error) {
              _context.next = 28;
              break;
            }
            subOptions = optionState.option.suboptions.filter(function (subOption) {
              if (subOption.id === content.result.id) {
                Object.assign(subOption, content.result);
              }
              return true;
            });
            updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
              suboptions: subOptions
            });
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              option: updatedOption,
              loading: false
            }));
            options = extra.options.filter(function (option) {
              if (option.id === updatedOption.id) {
                Object.assign(option, updatedOption);
              }
              return true;
            });
            updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
              options: options
            });
            setExtraState(updatedExtra);
            handleSuccessUpdateBusiness(updatedExtra);
            showToast(_ToastContext.ToastType.Success, t('CHOICE_SAVED', 'Choice saved'));
            return _context.abrupt("return", true);
          case 28:
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context.t0.message
            }));
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 30]]);
    }));
    return function handleUpdateSubOption(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to add new option from API
   */
  var handleAddOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var changes, key, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            changes = _objectSpread({}, values);
            for (key in changes) {
              if (!changes[key]) {
                delete changes[key];
              }
            }
            if (!(changes !== null && changes !== void 0 && changes.price)) {
              changes.price = 0;
            }
            if (!(Object.keys(changes).length === 0)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            changes.enabled = true;
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context2.next = 12;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions"), requestOptions);
          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.json();
          case 15:
            content = _context2.sent;
            if (!content.error) {
              subOptions = _toConsumableArray(optionState.option.suboptions);
              subOptions.push(_objectSpread(_objectSpread({}, content.result), {}, {
                preselected: false
              }));
              updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                suboptions: subOptions
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: updatedOption,
                loading: false
              }));
              options = extra.options.filter(function (option) {
                if (option.id === updatedOption.id) {
                  Object.assign(option, updatedOption);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('CHOICE_ADDED', 'Choice added'));
              setIsAddForm(false);
            }
            _context2.next = 22;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 19]]);
    }));
    return function handleAddOption(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the extra
   * @param {Number} subOptionId
   */
  var handleDeteteSubOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(subOptionId) {
      var requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
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
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat(subOptionId), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            if (!content.error) {
              subOptions = optionState.option.suboptions.filter(function (subOption) {
                return subOption.id !== subOptionId;
              });
              updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                suboptions: subOptions
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: updatedOption,
                loading: false
              }));
              options = extra.options.filter(function (option) {
                if (option.id === updatedOption.id) {
                  Object.assign(option, updatedOption);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('CHOICE_DELETED', 'Choice deleted'));
            }
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleDeteteSubOption(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to handle the option setting
   * @param {String} name setting name
   * @param {Boolean} checked check state of option setting
   */
  var handleOptionSetting = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, checked) {
      var change;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            change = _defineProperty({}, name, checked);
            if (name === 'conditioned' && !checked) {
              setConditionalSubOptionId(null);
              setConditionalOptionId(null);
              change.respect_to = 0;
            }
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              changes: change
            }));
            handleUpdateOption(change);
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleOptionSetting(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to save the option from API
   * @param {Object} change
   */
  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(change) {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(change)
            };
            _context5.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id), requestOptions);
          case 6:
            response = _context5.sent;
            _context5.next = 9;
            return response.json();
          case 9:
            content = _context5.sent;
            if (!content.error) {
              setSettingChangeState({
                changes: content.error ? settingChangeState.changes : {},
                loading: false
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: _objectSpread(_objectSpread({}, optionState.option), content.result)
              }));
              options = extra.options.filter(function (option) {
                if (option.id === content.result.id) {
                  Object.assign(option, content.result);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_SAVED', 'Option saved'));
            }
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              loading: false,
              error: _context5.t0.message
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleUpdateOption(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the extra
   */
  var handleDeteteOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            if (!content.error) {
              handleSucccessDeleteOption && handleSucccessDeleteOption(option.id);
              showToast(_ToastContext.ToastType.Success, t('OPTION_DELETED', 'Option deleted'));
              props.onClose && props.onClose();
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context6.t0.message
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleDeteteOption() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to duplicate option from API
   */
  var handleDuplicateOption = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                copy_options: 'metafields,suboptions'
              })
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/duplicate"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            content = _context7.sent;
            if (!content.error) {
              if (parentExtraState.extra.options) options = [].concat(_toConsumableArray(parentExtraState.extra.options), [content.result]);else options = [_objectSpread({}, content.result)];
              updatedExtra = _objectSpread(_objectSpread({}, parentExtraState.extra), {}, {
                options: options
              });
              setParentExtraState(_objectSpread(_objectSpread({}, parentExtraState), {}, {
                extra: updatedExtra
              }));
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_DUPLICATED', 'Option duplicated'));
            }
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context7.t0.message);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function handleDuplicateOption() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to duplicate sub option from API
   */
  var handleDuplicateSubOption = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
      var requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                copy_options: 'metafields'
              })
            };
            _context8.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat(id, "/duplicate"), requestOptions);
          case 5:
            response = _context8.sent;
            _context8.next = 8;
            return response.json();
          case 8:
            content = _context8.sent;
            if (!content.error) {
              subOptions = [].concat(_toConsumableArray(optionState.option.suboptions), [content.result]);
              updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                suboptions: subOptions
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: updatedOption,
                loading: false
              }));
              options = extra.options.filter(function (option) {
                if (option.id === updatedOption.id) {
                  Object.assign(option, updatedOption);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('SUBOPTION_DUPLICATED', 'Suboption duplicated'));
            }
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function handleDuplicateSubOption(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to change the conditional option
   * @param {Number} optionId
   */
  var handleChangeConditionalOption = function handleChangeConditionalOption(optionId) {
    setConditionalOptionId(optionId);
    handleSetConditionalSubOptions(extraState, optionId);
  };

  /**
   * Method to change the conditional option
   * @param {Number} subOptionId
   */
  var handleChangeConditionalSubOption = function handleChangeConditionalSubOption(subOptionId) {
    handleUpdateOption({
      respect_to: subOptionId
    });
  };
  var handleChangeSettingsChangeState = function handleChangeSettingsChangeState(updatedChange) {
    setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
      changes: _objectSpread(_objectSpread({}, setChangesState.changes), updatedChange)
    }));
  };

  /**
   * Method to handle sub option drag start
   */
  var handleDragStart = function handleDragStart(event, subOption) {
    event.dataTransfer.setData('transferSubOptionId', subOption.id);
    var ghostElement = document.createElement('div');
    ghostElement.classList.add('ghostDragging');
    ghostElement.innerHTML = subOption.name;
    document.body.appendChild(ghostElement);
    event.dataTransfer.setDragImage(ghostElement, 0, 0);
    setIsSubOptionsBottom(false);
  };

  /**
   * Method to handle sub option drag over
   */
  var hanldeDragOver = function hanldeDragOver(event, subOption, isLastSubOption) {
    event.preventDefault();
    var element = event.target.closest('.draggable-suboption');
    if (element) {
      if (!isLastSubOption) {
        setDragoverSubOptionId(subOption.id);
      } else {
        var middlePositionY = window.scrollY + event.target.getBoundingClientRect().top + event.target.offsetHeight / 2;
        var dragPositionY = event.clientY;
        if (dragPositionY > middlePositionY) {
          setIsSubOptionsBottom(true);
          setDragoverSubOptionId(null);
        } else {
          setIsSubOptionsBottom(false);
          setDragoverSubOptionId(subOption.id);
        }
      }
    }
  };

  /**
   * Method to handle sub option drop
   */
  var handleDrop = function handleDrop(event, subOption) {
    event.preventDefault();
    var transferSubOptionId = parseInt(event.dataTransfer.getData('transferSubOptionId'));
    if (subOption.id === transferSubOptionId) return;
    var dropSubOptionRank;
    if (isSubOptionsBottom) {
      dropSubOptionRank = (subOption === null || subOption === void 0 ? void 0 : subOption.rank) + 1;
    } else {
      dropSubOptionRank = subOption === null || subOption === void 0 ? void 0 : subOption.rank;
    }
    setIsSubOptionsBottom(false);
    handleUpdateSubOption({
      id: transferSubOptionId,
      rank: dropSubOptionRank
    });
  };

  /**
   * Method to handle sub option drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setDragoverSubOptionId(null);
  };
  (0, _react.useEffect)(function () {
    if (conditionalOptionId) {
      handleSetConditionalOptions(extraState);
      handleSetConditionalSubOptions(extraState, conditionalOptionId);
      var selectedOption = extraState.options.find(function (item) {
        return item.id === option.id;
      });
      handleSetDefaultCondition(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.respect_to);
    }
  }, [extraState, conditionalOptionId]);
  (0, _react.useEffect)(function () {
    setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
      option: option
    }));
    handleSetConditionalOptions(extra);
    handleSetDefaultCondition(option === null || option === void 0 ? void 0 : option.respect_to);
  }, [option, extra]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    optionState: optionState,
    changesState: changesState,
    editSubOptionId: editSubOptionId,
    settingChangeState: settingChangeState,
    handleChangeSettingsChangeState: handleChangeSettingsChangeState,
    handleChangeInput: handleChangeInput,
    handleChangeSubOptionImage: handleChangeSubOptionImage,
    handleChangeSubOptionEnable: handleChangeSubOptionEnable,
    handleDeteteSubOption: handleDeteteSubOption,
    handleOptionSetting: handleOptionSetting,
    conditionalOptions: conditionalOptions,
    conditionalSubOptions: conditionalSubOptions,
    conditionalOptionId: conditionalOptionId,
    conditionalSubOptionId: conditionalSubOptionId,
    handleChangeConditionalOption: handleChangeConditionalOption,
    handleChangeConditionalSubOption: handleChangeConditionalSubOption,
    handleAddOption: handleAddOption,
    handleDeteteOption: handleDeteteOption,
    handleChangeDefaultSuboption: handleChangeDefaultSuboption,
    handleUpdateSubOption: handleUpdateSubOption,
    handleChangeItem: handleChangeItem,
    handleUpdateOption: handleUpdateOption,
    isAddForm: isAddForm,
    setIsAddForm: setIsAddForm,
    handleDuplicateOption: handleDuplicateOption,
    handleDuplicateSubOption: handleDuplicateSubOption,
    dragoverSubOptionId: dragoverSubOptionId,
    isSubOptionsBottom: isSubOptionsBottom,
    handleDragStart: handleDragStart,
    hanldeDragOver: hanldeDragOver,
    handleDrop: handleDrop,
    handleDragEnd: handleDragEnd
  })));
};
ProductExtraOptionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product extra option details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product extra option details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtraOptionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};