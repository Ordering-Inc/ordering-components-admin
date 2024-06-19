"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptions = void 0;
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
/**
 * Component to manage product extras behavior without UI component
 */
var ProductExtraOptions = exports.ProductExtraOptions = function ProductExtraOptions(props) {
  var UIComponent = props.UIComponent,
    business = props.business,
    extra = props.extra,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    extrasState = props.extrasState,
    setExtrasState = props.setExtrasState;
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
      extra: extra,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    extraState = _useState2[0],
    setExtraState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      changes: {},
      result: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    changesState = _useState4[0],
    setChangesState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editOptionId = _useState6[0],
    setEditOptionId = _useState6[1];
  var _useState7 = (0, _react.useState)({
      conditioned: false,
      enabled: true,
      name: '',
      min: 1,
      max: 1
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    addChangesState = _useState8[0],
    setAddChangesState = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    curOption = _useState10[0],
    setCurOption = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    openModal = _useState12[0],
    setOpenModal = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    dragoverOptionId = _useState14[0],
    setDragoverOptionId = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isOptionsBottom = _useState16[0],
    setIsOptionsBottom = _useState16[1];

  /**
   * Method to get extra options from API
   */
  var getExtraOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, _yield$response$json, error, result, _business$extras, extraOptions, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
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
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options?mode=dashboard"), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              if (handleUpdateBusinessState) {
                extraOptions = business === null || business === void 0 || (_business$extras = business.extras) === null || _business$extras === void 0 ? void 0 : _business$extras.map(function (_extra) {
                  if ((_extra === null || _extra === void 0 ? void 0 : _extra.id) === (extra === null || extra === void 0 ? void 0 : extra.id)) {
                    _extra.options = result;
                  }
                  return _extra;
                });
                updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                  extras: extraOptions
                });
                handleUpdateBusinessState(updatedBusiness);
              }
            } else {
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function getExtraOptions() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Clean changesState
   */
  var cleanChangesState = function cleanChangesState(values) {
    return setChangesState(_objectSpread({}, values));
  };

  /**
   * Method to open the modal
   */
  var handleOpenModal = function handleOpenModal(option, name) {
    cleanChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: {}
    }));
    setCurOption(option);
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, _defineProperty({}, name, true)));
  };

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} optionId
   */
  var handleChangeInput = function handleChangeInput(e, optionId) {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    } else {
      setEditOptionId(optionId);
      setChangesState({
        result: {},
        changes: _defineProperty({}, e.target.name, e.target.value)
      });
    }
  };

  /**
   * Method to change the option state
   */
  var handleChangeItem = function handleChangeItem(changes, id) {
    if (id !== undefined) setEditOptionId(id);
    setChangesState({
      result: {},
      changes: _objectSpread(_objectSpread({}, changesState.changes), changes)
    });
  };
  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   */
  var handleChangeOptionEnable = function handleChangeOptionEnable(enabled, optionId) {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
          enabled: enabled
        })
      });
    } else {
      setEditOptionId(optionId);
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      });
    }
  };

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeAddOption = function handleChangeAddOption(e) {
    setAddChangesState(_objectSpread(_objectSpread({}, addChangesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  var handleChangeImage = function handleChangeImage(file, optionId) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    if (optionId === editOptionId) {
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
            image: reader.result
          })
        });
      };
    } else {
      setEditOptionId(optionId);
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
   * Method to change the add option enabled state
   * @param {Boolean} enabled
   */
  var handleChangeAddOptionEnable = function handleChangeAddOptionEnable(enabled) {
    setAddChangesState(_objectSpread(_objectSpread({}, addChangesState), {}, {
      enabled: enabled
    }));
  };
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

  /**
   * Method to update the option from API
   */
  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changesState === null || changesState === void 0 ? void 0 : changesState.changes)
            };
            _context2.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(editOptionId), requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            content = _context2.sent;
            if (!content.error) {
              setChangesState({
                changes: content.error ? changesState.changes : {},
                result: content.result
              });
              options = extraState.extra.options.filter(function (option) {
                if (option.id === content.result.id) {
                  Object.assign(option, content.result);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                options: options
              });
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                extra: updatedExtra
              }));
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_SAVED', 'Option saved'));
            }
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function handleUpdateOption() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to save the new product extra option from API
   */
  var handleAddOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload) {
      var changes, requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: true
            }));
            changes = payload ? _objectSpread(_objectSpread({}, addChangesState), payload) : _objectSpread({}, addChangesState);
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context3.next = 7;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options"), requestOptions);
          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();
          case 10:
            content = _context3.sent;
            if (!content.error) {
              setAddChangesState({
                conditioned: false,
                enabled: true,
                name: '',
                min: 1,
                max: 1
              });
              if (extraState.extra.options) options = [].concat(_toConsumableArray(extraState.extra.options), [_objectSpread(_objectSpread({}, content.result), {}, {
                suboptions: []
              })]);else options = [_objectSpread(_objectSpread({}, content.result), {}, {
                suboptions: []
              })];
              updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                options: options
              });
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                extra: updatedExtra
              }));
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_ADDED', 'Option added'));
              handleOpenModal(_objectSpread(_objectSpread({}, content.result), {}, {
                suboptions: []
              }), 'edit');
            }
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return function handleAddOption(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the extra
   * @param {Number} optionId
   */
  var handleDeteteOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(optionId) {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(optionId), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            content = _context4.sent;
            if (!content.error) {
              options = extraState.extra.options.filter(function (option) {
                return option.id !== optionId;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                options: options
              });
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                extra: updatedExtra
              }));
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_DELETED', 'Option deleted'));
            }
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: false,
              error: _context4.t0.message
            }));
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function handleDeteteOption(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the extra
   */
  var handleDeleteExtra = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var requestOptions, response, content, extras, businessState, categories, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id), requestOptions);
          case 6:
            response = _context5.sent;
            _context5.next = 9;
            return response.json();
          case 9:
            content = _context5.sent;
            if (!content.error) {
              extras = business.extras.filter(function (_extra) {
                return _extra.id !== extra.id;
              });
              if (handleUpdateBusinessState) {
                businessState = _objectSpread(_objectSpread({}, business), {}, {
                  extras: extras
                });
                categories = businessState.categories.map(function (item) {
                  var _products = item.products.map(function (prod) {
                    var _prod$extras2;
                    var _extras = prod === null || prod === void 0 || (_prod$extras2 = prod.extras) === null || _prod$extras2 === void 0 ? void 0 : _prod$extras2.filter(function (_extra) {
                      return _extra.id !== extra.id;
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
                updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
                  categories: categories
                });
                handleUpdateBusinessState(updatedBusiness);
              }
              showToast(_ToastContext.ToastType.Success, t('EXTRA_DELETED', 'Extra deleted'));
              props.onClose && props.onClose();
            }
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: false,
              error: _context5.t0.message
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleDeleteExtra() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleSucccessDeleteOption = function handleSucccessDeleteOption(optionId) {
    var options = extraState.extra.options.filter(function (option) {
      return option.id !== optionId;
    });
    var updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
      options: options
    });
    setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
      loading: false,
      extra: updatedExtra
    }));
    handleSuccessUpdateBusiness(updatedExtra);
  };

  /**
   * Method to handle option drag start
   */
  var handleDragStart = function handleDragStart(event, option) {
    event.dataTransfer.setData('transferOptionId', option.id);
    var ghostElement = document.createElement('div');
    ghostElement.classList.add('ghostDragging');
    ghostElement.innerHTML = option.name;
    document.body.appendChild(ghostElement);
    event.dataTransfer.setDragImage(ghostElement, 0, 0);
    setIsOptionsBottom(false);
  };

  /**
   * Method to handle option drag over
   */
  var hanldeDragOver = function hanldeDragOver(event, option, isLastOption) {
    event.preventDefault();
    var element = event.target.closest('.draggable-option');
    if (element) {
      if (!isLastOption) {
        setDragoverOptionId(option.id);
      } else {
        var middlePositionY = window.scrollY + event.target.getBoundingClientRect().top + event.target.offsetHeight / 2;
        var dragPositionY = event.clientY;
        if (dragPositionY > middlePositionY) {
          setIsOptionsBottom(true);
          setDragoverOptionId(null);
        } else {
          setIsOptionsBottom(false);
          setDragoverOptionId(option.id);
        }
      }
    }
  };

  /**
   * Method to handle option drop
   */
  var handleDrop = function handleDrop(event, option) {
    event.preventDefault();
    var transferOptionId = parseInt(event.dataTransfer.getData('transferOptionId'));
    if (option.id === transferOptionId) return;
    var dropOptionRank;
    if (isOptionsBottom) {
      dropOptionRank = (option === null || option === void 0 ? void 0 : option.rank) + 1;
    } else {
      dropOptionRank = option === null || option === void 0 ? void 0 : option.rank;
    }
    setIsOptionsBottom(false);
    handleChangeOptionRank(transferOptionId, {
      rank: dropOptionRank
    });
  };

  /**
   * Method to handle option drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setDragoverOptionId(null);
  };

  /**
   * Method to change the rank of option
   */
  var handleChangeOptionRank = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(transferOptionId, params) {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(params)
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(transferOptionId), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            if (!content.error) {
              setChangesState({
                changes: content.error ? changesState.changes : {},
                result: content.result
              });
              options = extraState.extra.options.filter(function (option) {
                if (option.id === content.result.id) {
                  Object.assign(option, content.result);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                options: options
              });
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                extra: updatedExtra
              }));
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_SAVED', 'Option saved'));
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
              loading: false,
              error: _context6.t0.message
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleChangeOptionRank(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to duplicate extra from API
   */
  var handleDuplicateExtra = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, content, clonedExtra, extras, updatedBusiness;
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
                copy_options: 'metafields,options,suboptions,products'
              })
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/duplicate"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            content = _context7.sent;
            if (!content.error) {
              clonedExtra = JSON.parse(JSON.stringify(extra));
              extras = [].concat(_toConsumableArray(extrasState.extras), [_objectSpread(_objectSpread({}, clonedExtra), content.result)]);
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                extras: extras
              }));
              if (handleUpdateBusinessState) {
                updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                  extras: extras
                });
                handleUpdateBusinessState(updatedBusiness);
              }
              showToast(_ToastContext.ToastType.Success, t('EXTRA_DUPLICATED', 'Extra duplicated'));
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
    return function handleDuplicateExtra() {
      return _ref7.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setChangesState({
      changes: {},
      result: {}
    });
    if (extra !== null && extra !== void 0 && extra.options) {
      setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
        extra: extra
      }));
    } else {
      getExtraOptions();
    }
  }, [extra === null || extra === void 0 ? void 0 : extra.options]);
  (0, _react.useEffect)(function () {
    setAddChangesState({
      conditioned: false,
      enabled: true,
      name: '',
      min: 1,
      max: 1
    });
  }, [extra === null || extra === void 0 ? void 0 : extra.id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    handleChangeItem: handleChangeItem,
    extraState: extraState,
    editOptionId: editOptionId,
    addChangesState: addChangesState,
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleChangeOptionEnable: handleChangeOptionEnable,
    handleAddOption: handleAddOption,
    handleChangeAddOption: handleChangeAddOption,
    handleChangeAddOptionEnable: handleChangeAddOptionEnable,
    handleDeteteOption: handleDeteteOption,
    handleDeleteExtra: handleDeleteExtra,
    handleSucccessDeleteOption: handleSucccessDeleteOption,
    handleUpdateOption: handleUpdateOption,
    curOption: curOption,
    openModal: openModal,
    setCurOption: setCurOption,
    setOpenModal: setOpenModal,
    handleOpenModal: handleOpenModal,
    dragoverOptionId: dragoverOptionId,
    isOptionsBottom: isOptionsBottom,
    handleDragStart: handleDragStart,
    hanldeDragOver: hanldeDragOver,
    handleDrop: handleDrop,
    handleDragEnd: handleDragEnd,
    handleDuplicateExtra: handleDuplicateExtra,
    setExtraState: setExtraState
  })));
};
ProductExtraOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product extra options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product extra options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtraOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};