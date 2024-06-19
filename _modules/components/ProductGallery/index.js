"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductGallery = void 0;
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
var ProductGallery = exports.ProductGallery = function ProductGallery(props) {
  var UIComponent = props.UIComponent,
    business = props.business,
    categoryId = props.categoryId,
    product = props.product,
    handleSuccessUpdate = props.handleSuccessUpdate;
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
      loading: false,
      gallery: [],
      photos: [],
      videos: [],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    productGalleryState = _useState2[0],
    setProductGalleryState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      changes: {},
      itemId: null,
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    changesState = _useState4[0],
    setChangesState = _useState4[1];

  /**
   * Method to get the product gallery from API
   */
  var getProductGallery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, content, photos, videos;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
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
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery"), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            content = _context.sent;
            if (!content.error) {
              photos = content.result.filter(function (item) {
                return item.type === 1;
              });
              videos = content.result.filter(function (item) {
                return item.type === 2;
              });
              setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                loading: false,
                gallery: content.result,
                photos: photos,
                videos: videos
              }));
            } else {
              setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function getProductGallery() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to add new product gallery from API
   * @param {Object} params
   */
  var handleAddProductGalleryItem = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var requestOptions, response, content, _content$result, _content$result2, gallery, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(params)
            };
            _context2.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery"), requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            content = _context2.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_ADDED', 'Product gallery item added'));
              gallery = [].concat(_toConsumableArray(productGalleryState.gallery), [content.result]);
              if (((_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.type) === 1) {
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  gallery: gallery,
                  photos: [].concat(_toConsumableArray(productGalleryState.photos), [content.result])
                }));
              }
              if (((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.type) === 2) {
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  gallery: gallery,
                  videos: [].concat(_toConsumableArray(productGalleryState.videos), [content.result])
                }));
              }
              updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                gallery: gallery
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function handleAddProductGalleryItem(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Medthod to update the product gallery from API
   */
  var handleUpdateProductGallery = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, content, _content$result3, _content$result4, gallery, photos, videos, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changesState === null || changesState === void 0 ? void 0 : changesState.changes)
            };
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery/").concat(changesState === null || changesState === void 0 ? void 0 : changesState.itemId), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              gallery = productGalleryState.gallery.filter(function (item) {
                if (item.id === content.result.id) {
                  Object.assign(item, content.result);
                }
                return true;
              });
              if (((_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.type) === 1) {
                photos = productGalleryState.photos.filter(function (item) {
                  if (item.id === content.result.id) {
                    Object.assign(item, content.result);
                  }
                  return true;
                });
                setProductGalleryState(_objectSpread(_objectSpread({}, setProductGalleryState), {}, {
                  gallery: gallery,
                  photos: photos
                }));
              }
              if (((_content$result4 = content.result) === null || _content$result4 === void 0 ? void 0 : _content$result4.type) === 2) {
                videos = productGalleryState.videos.filter(function (item) {
                  if (item.id === content.result.id) {
                    Object.assign(item, content.result);
                  }
                  return true;
                });
                setProductGalleryState(_objectSpread(_objectSpread({}, setProductGalleryState), {}, {
                  gallery: gallery,
                  videos: videos
                }));
              }
              updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                gallery: gallery
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_SAVED', 'Product gallery item saved'));
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleUpdateProductGallery() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the product gallery item from API
   * @param {Number} itemId
   * @param {Number} type if photo or video
   */
  var handleDeteteProductGalleryItem = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(itemId, type) {
      var requestOptions, response, content, gallery, photos, videos, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery/").concat(itemId), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            content = _context4.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              gallery = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.gallery.filter(function (item) {
                return item.id !== itemId;
              });
              if (type === 1) {
                photos = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.photos.filter(function (photo) {
                  return photo.id !== itemId;
                });
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  gallery: gallery,
                  photos: photos
                }));
              }
              if (type === 2) {
                videos = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.videos.filter(function (video) {
                  return video.id !== itemId;
                });
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  gallery: gallery,
                  videos: videos
                }));
              }
              updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                gallery: gallery
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_DELETED', 'Product gallery item deleted'));
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function handleDeteteProductGalleryItem(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Update product photo data
   * @param {File} file Image to change business photo
   */
  var handleChangeImage = function handleChangeImage(file, itemId) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        changes: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.changes), {}, {
          file: reader.result
        }),
        itemId: itemId
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Method to change the option state
   */
  var handleChangeItem = function handleChangeItem(changes, id) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.changes), changes)
    }, id && {
      itemId: id
    }));
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var timeout = null;
  var handleChangeInput = function handleChangeInput(e, itemId) {
    if (!itemId) {
      handleChangeState(e, itemId);
      return;
    }
    e.persist();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      handleChangeState(e, itemId);
    }, 1000);
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeState = function handleChangeState(e, itemId) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value)),
      itemId: itemId
    }));
  };

  /**
   * Method to add new product from changes
   */
  var handleAddGalleryProduct = function handleAddGalleryProduct(_type) {
    var params = _objectSpread(_objectSpread({}, changesState.changes), {}, {
      type: _type
    });
    handleAddProductGalleryItem(params);
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0 || !(changesState !== null && changesState !== void 0 && changesState.itemId)) return;
    handleUpdateProductGallery();
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes]);
  (0, _react.useEffect)(function () {
    if (product !== null && product !== void 0 && product.gallery) {
      var photos = product === null || product === void 0 ? void 0 : product.gallery.filter(function (item) {
        return item.type === 1;
      });
      var videos = product === null || product === void 0 ? void 0 : product.gallery.filter(function (item) {
        return item.type === 2;
      });
      setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
        loading: false,
        gallery: product.gallery,
        photos: photos,
        videos: videos
      }));
    } else {
      getProductGallery();
    }
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productGalleryState: productGalleryState,
    changesState: changesState,
    handleChangeItem: handleChangeItem,
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleAddGalleryProduct: handleAddGalleryProduct,
    handleDeteteProductGalleryItem: handleDeteteProductGalleryItem
  })));
};
ProductGallery.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product gallery
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product gallery
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductGallery.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};