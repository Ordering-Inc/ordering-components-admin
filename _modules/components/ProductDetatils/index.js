"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetatils = void 0;
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
 * Component to manage product details edit form behavior without UI component
 */
var ProductDetatils = exports.ProductDetatils = function ProductDetatils(props) {
  var business = props.business,
    UIComponent = props.UIComponent,
    productId = props.productId,
    categoryId = props.categoryId,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    categoryState = props.categoryState,
    handleUpdateCategoryState = props.handleUpdateCategoryState;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: false,
      product: null,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    productState = _useState2[0],
    setProductState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      ingredients: {},
      options: {}
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    productCart = _useState6[0],
    setProductCart = _useState6[1];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * Method to get the product from API
   */
  var getProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, _yield$ordering$busin, _yield$ordering$busin2, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: true
            }));
            params = {
              version: 'v2'
            };
            _context.next = 5;
            return ordering.businesses(business.id).categories(categoryId).products(productId).parameters(params).get();
          case 5:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              setProductState({
                loading: false,
                product: result,
                error: null
              });
            } else {
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function getProduct() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to update the product details from API
   */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var _productState$product, _productState$product2, changes, originalChanges, _yield$ordering$busin3, _yield$ordering$busin4, error, result, _originalChanges$ribb, _originalChanges$ribb2, _result$ribbon, _productState$product3, _productState$product4, updatedChanges, _yield$ordering$busin5, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            changes = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
            originalChanges = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
            _context2.next = 7;
            return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 || (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.category_id).products(productState === null || productState === void 0 || (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.id).save(changes, {
              accessToken: session.token
            });
          case 7:
            _yield$ordering$busin3 = _context2.sent;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            error = _yield$ordering$busin4.error;
            result = _yield$ordering$busin4.result;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: error ? formState.changes : {},
              result: {
                error: error,
                result: result
              },
              loading: false
            }));
            if (error) {
              _context2.next = 24;
              break;
            }
            if (!(typeof (originalChanges === null || originalChanges === void 0 || (_originalChanges$ribb = originalChanges.ribbon) === null || _originalChanges$ribb === void 0 ? void 0 : _originalChanges$ribb.enabled) !== 'undefined' && !(originalChanges !== null && originalChanges !== void 0 && (_originalChanges$ribb2 = originalChanges.ribbon) !== null && _originalChanges$ribb2 !== void 0 && _originalChanges$ribb2.enabled) && result !== null && result !== void 0 && (_result$ribbon = result.ribbon) !== null && _result$ribbon !== void 0 && _result$ribbon.enabled)) {
              _context2.next = 22;
              break;
            }
            updatedChanges = {
              ribbon: {
                enabled: false
              }
            };
            _context2.next = 17;
            return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 || (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.category_id).products(productState === null || productState === void 0 || (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.id).save(updatedChanges, {
              accessToken: session.token
            });
          case 17:
            _yield$ordering$busin5 = _context2.sent;
            content = _yield$ordering$busin5.content;
            handleSuccessUpdate(content === null || content === void 0 ? void 0 : content.result);
            _context2.next = 23;
            break;
          case 22:
            handleSuccessUpdate(result);
          case 23:
            showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
          case 24:
            _context2.next = 29;
            break;
          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context2.t0.message
              },
              loading: false
            }));
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 26]]);
    }));
    return function handleUpdateClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
  * Method to edit a product
  */
  var handleDeleteProduct = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _productState$product5, _productState$product6, _yield$ordering$busin6, _yield$ordering$busin7, error, result, _categoryState$produc, updatedProducts, _categories, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context3.next = 5;
            return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt((_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.category_id)).products((_productState$product6 = productState.product) === null || _productState$product6 === void 0 ? void 0 : _productState$product6.id).delete();
          case 5:
            _yield$ordering$busin6 = _context3.sent;
            _yield$ordering$busin7 = _yield$ordering$busin6.content;
            error = _yield$ordering$busin7.error;
            result = _yield$ordering$busin7.result;
            if (!error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: false,
                  result: result
                }
              }));
              if (handleUpdateCategoryState) {
                updatedProducts = categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.filter(function (item) {
                  return item.id !== productState.product.id;
                });
                handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  products: updatedProducts
                }));
              }
              if (handleUpdateBusinessState) {
                _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);
                _categories.forEach(function iterate(category) {
                  var _productState$product7;
                  if (category.id === ((_productState$product7 = productState.product) === null || _productState$product7 === void 0 ? void 0 : _productState$product7.category_id)) {
                    var _products = category.products.filter(function (_product) {
                      return _product.id !== productState.product.id;
                    });
                    category.products = _toConsumableArray(_products);
                  }
                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });
                updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                  categories: _categories
                });
                handleUpdateBusinessState(updatedBusiness);
              }
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'));
              props.onClose && props.onClose();
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              result: {
                error: true,
                result: _context3.t0
              }
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 12]]);
    }));
    return function handleDeleteProduct() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to change the product enabled state
   */
  var handleChangeProductActiveState = function handleChangeProductActiveState() {
    var _productState$product8;
    var params = {
      enabled: !(productState !== null && productState !== void 0 && (_productState$product8 = productState.product) !== null && _productState$product8 !== void 0 && _productState$product8.enabled)
    };
    handleUpdateClick(params);
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
   * Update credential data
   * @param {Object} changes Related HTML event
   */
  var handleChangeFormState = function handleChangeFormState(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };

  /**
   * Update ribbon data
   * @param {Object} changes Related HTML event
   */
  var handleChangeRibbon = function handleChangeRibbon(changes) {
    var _formState$changes, _formState$changes2;
    var ribbonChanges = formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.ribbon ? _objectSpread(_objectSpread({}, formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.ribbon), changes) : _objectSpread({}, changes);
    var currentChanges = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
      ribbon: ribbonChanges
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: currentChanges
    }));
  };

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  var handlechangeImage = function handlechangeImage(file, isSeo) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, isSeo ? 'seo_image' : 'images', reader.result))
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */
  var initProductCart = function initProductCart(product) {
    var _props$productCart, _props$productCart2, _props$productCart3, _props$productCart4;
    var ingredients = {};
    for (var key in product.ingredients) {
      var ingredient = product.ingredients[key];
      ingredients["id:".concat(ingredient.id)] = {
        selected: true
      };
    }
    var newProductCart = _objectSpread(_objectSpread({}, props.productCart), {}, {
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: ((_props$productCart = props.productCart) === null || _props$productCart === void 0 ? void 0 : _props$productCart.ingredients) || ingredients,
      options: ((_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.options) || {},
      comment: ((_props$productCart3 = props.productCart) === null || _props$productCart3 === void 0 ? void 0 : _props$productCart3.comment) || null,
      quantity: ((_props$productCart4 = props.productCart) === null || _props$productCart4 === void 0 ? void 0 : _props$productCart4.quantity) || 1
    });
    newProductCart.unitTotal = getUnitTotal(newProductCart);
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
    setProductCart(newProductCart);
  };

  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */
  var getUnitTotal = function getUnitTotal(productCart) {
    var _props$product3;
    var subtotal = 0;
    for (var i = 0; i < ((_props$product = props.product) === null || _props$product === void 0 || (_props$product = _props$product.extras) === null || _props$product === void 0 ? void 0 : _props$product.length); i++) {
      var _props$product, _props$product2;
      var extra = (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.extras[i];
      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;
        var option = extra.options[j];
        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options;
          var suboption = option.suboptions[k];
          if ((_productCart$options = productCart.options["id:".concat(option.id)]) !== null && _productCart$options !== void 0 && (_productCart$options = _productCart$options.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options !== void 0 && _productCart$options.selected) {
            var suboptionState = productCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
            var quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1;
            var price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price;
            subtotal += price * quantity;
          }
        }
      }
    }
    return ((_props$product3 = props.product) === null || _props$product3 === void 0 ? void 0 : _props$product3.price) + subtotal;
  };

  /**
   * Check if option must show
   * @param {object} option Option to check
   */
  var showProductOption = function showProductOption(option) {
    var showOption = true;
    if (option.respect_to) {
      showOption = false;
      if (productCart.options) {
        var options = productCart.options;
        for (var key in options) {
          var _option$suboptions2;
          var _option = options[key];
          if ((_option$suboptions2 = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions2 !== void 0 && _option$suboptions2.selected) {
            showOption = true;
            break;
          }
        }
      }
    }
    return showOption;
  };

  /**
   * Function to update the product state
   */
  var handleSuccessUpdate = function handleSuccessUpdate(updatedProduct) {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
    }));
    if (handleUpdateBusinessState) {
      var _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);
      _categories.forEach(function iterate(category) {
        var _productState$product9;
        if (category.id === ((_productState$product9 = productState.product) === null || _productState$product9 === void 0 ? void 0 : _productState$product9.category_id)) {
          var _products = category.products.map(function (_product) {
            if (_product.id === productState.product.id) {
              return _objectSpread(_objectSpread({}, _product), updatedProduct);
            }
            return _product;
          });
          category.products = _toConsumableArray(_products);
        }
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
      var updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
        categories: _categories
      });
      handleUpdateBusinessState(updatedBusiness);
    }
    if (handleUpdateCategoryState) {
      var _categoryState$produc2;
      var updatedProducts = categoryState === null || categoryState === void 0 || (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.map(function (item) {
        var _productState$product10;
        if ((item === null || item === void 0 ? void 0 : item.id) === (productState === null || productState === void 0 || (_productState$product10 = productState.product) === null || _productState$product10 === void 0 ? void 0 : _productState$product10.id)) {
          return _objectSpread(_objectSpread({}, productState.product), updatedProduct);
        }
        return item;
      });
      handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
        products: updatedProducts
      }));
    }
  };

  /**
   * Method to duplicate product from API
   */
  var handleDuplicateProduct = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                copy_options: 'ingredients,gallery,tags,extras,metafields'
              })
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/categories/").concat(categoryId, "/products/").concat(productId, "/duplicate"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            content = _context4.sent;
            if (!content.error) {
              if (handleUpdateCategoryState) {
                handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  products: [].concat(_toConsumableArray(categoryState === null || categoryState === void 0 ? void 0 : categoryState.products), [content.result])
                }));
              }
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_DUPLICATED', 'Product duplicated'));
            }
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context4.t0.message);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 12]]);
    }));
    return function handleDuplicateProduct() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _props$product4;
    if (props !== null && props !== void 0 && props.product && props !== null && props !== void 0 && (_props$product4 = props.product) !== null && _props$product4 !== void 0 && _props$product4.extras) {
      setProductState(_objectSpread(_objectSpread({}, productState), {}, {
        product: props.product
      }));
      initProductCart(props.product);
    } else {
      if (productId && categoryId) {
        getProduct();
      }
    }
  }, [props.product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    productCart: productCart,
    formState: formState,
    cleanFormState: cleanFormState,
    handleChangeRibbon: handleChangeRibbon,
    handleChangeProductActiveState: handleChangeProductActiveState,
    handleChangeInput: handleChangeInput,
    handlechangeImage: handlechangeImage,
    handleUpdateClick: handleUpdateClick,
    handleDeleteProduct: handleDeleteProduct,
    showProductOption: showProductOption,
    handleChangeFormState: handleChangeFormState,
    handleSuccessUpdate: handleSuccessUpdate,
    handleDuplicateProduct: handleDuplicateProduct,
    getProduct: getProduct
  })));
};
ProductDetatils.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductDetatils.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};