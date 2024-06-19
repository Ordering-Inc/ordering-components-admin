"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAndProductList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _OrderContext = require("../../contexts/OrderContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
_dayjs.default.extend(_utc.default);
var BusinessAndProductList = exports.BusinessAndProductList = function BusinessAndProductList(props) {
  var _businessState$busine10, _orderState$options14, _orderState$options15, _orderState$options16;
  var isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    slug = props.slug,
    categoryId = props.categoryId,
    productId = props.productId,
    isInitialRender = props.isInitialRender,
    ordering = props.ordering,
    businessProps = props.businessProps,
    UIComponent = props.UIComponent;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    languageState = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      id: null,
      name: t('ALL', 'All')
    }),
    _useState2 = _slicedToArray(_useState, 2),
    categorySelected = _useState2[0],
    setCategorySelected = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    sortByValue = _useState6[0],
    setSortByValue = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    filterByMenus = _useState8[0],
    setFilterByMenus = _useState8[1];
  var _useState9 = (0, _react.useState)({
      business: {},
      menus: null,
      loading: true,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    businessState = _useState10[0],
    setBusinessState = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    categoriesState = _useState12[0],
    setCategoriesState = _useState12[1];
  var _useState13 = (0, _react.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    orderOptions = _useState14[0],
    setOrderOptions = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    requestsState = _useState16[0],
    setRequestsState = _useState16[1];
  var _useState17 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    productModal = _useState18[0],
    setProductModal = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    featuredProducts = _useState20[0],
    setFeaturedProducts = _useState20[1];
  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };
  var _useState21 = (0, _react.useState)(categoryStateDefault),
    _useState22 = _slicedToArray(_useState21, 2),
    categoryState = _useState22[0],
    setCategoryState = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    errors = _useState24[0],
    setErrors = _useState24[1];

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  var handleChangeCategory = function handleChangeCategory(category) {
    if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setCategorySelected(category);
  };
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  var handleChangeSortBy = function handleChangeSortBy(val) {
    setSortByValue(val);
  };
  var handleChangeFilterByMenus = function handleChangeFilterByMenus(val) {
    setFilterByMenus(val);
  };
  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name && name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description && description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };
  var isFeaturedSearch = function isFeaturedSearch(product) {
    if (product.featured) {
      if (!searchValue) return true;
      return product.name && product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || product.description && product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
    }
    return false;
  };
  var sortProductsArray = function sortProductsArray(option, array) {
    if (option === 'rank') {
      return array.sort(function (a, b) {
        return b.rank - a.rank;
      });
    }
    if (option === 'a-z') {
      return array.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    }
    return array;
  };
  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch) {
      var _businessState$busine, _orderState$options;
      var _businessState$busine2, isFeatured, _categoryState, _businessState$busine3, productsFiltered, _businessState$busine4, _productsFiltered, _businessState$busine5, _productsFiltered2, categoryKey, categoryState, pagination, parameters, where, searchConditions, _businessState$busine6, _businessState$busine7, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
              _context.next = 8;
              break;
            }
            isFeatured = !!(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && (_businessState$busine2 = _businessState$busine2.categories) !== null && _businessState$busine2 !== void 0 && (_businessState$busine2 = _businessState$busine2.find(function (category) {
              return category;
            })) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.products.filter(function (product) {
              return product.featured;
            }).length);
            setFeaturedProducts(isFeatured);
            _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
              loading: false
            });
            if ((categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== 'featured' && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== null) {
              productsFiltered = businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.categories) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.find(function (category) {
                return (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id);
              })) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.products.filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              _categoryState.products = productsFiltered || [];
            } else if ((categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured') {
              _productsFiltered = businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 || (_businessState$busine4 = _businessState$busine4.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.reduce(function (products, category) {
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
              }, []).filter(function (product) {
                return isFeaturedSearch(product);
              });
              _categoryState.products = _productsFiltered || [];
            } else {
              _productsFiltered2 = businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 || (_businessState$busine5 = _businessState$busine5.categories) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.reduce(function (products, category) {
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
              }, []).filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              _categoryState.products = _productsFiltered2 || [];
            }
            _categoryState.products = sortProductsArray(sortByValue, _categoryState.products);
            setCategoryState(_objectSpread({}, _categoryState));
            return _context.abrupt("return");
          case 8:
            categoryKey = searchValue ? 'search' : (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured' ? 'featured' : categorySelected !== null && categorySelected !== void 0 && categorySelected.id ? "categoryId:".concat(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) : 'all';
            categoryState = categoriesState[categoryKey] || categoryStateDefault;
            categoryState.products = sortProductsArray(sortByValue, categoryState.products);
            pagination = categoryState.pagination;
            if (!(!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages)) {
              _context.next = 15;
              break;
            }
            setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
              loading: false
            }));
            return _context.abrupt("return");
          case 15:
            setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
              loading: true
            }));
            parameters = {
              type: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1,
              page: newFetch ? 1 : pagination.currentPage + 1,
              page_size: pagination.pageSize
            };
            if (sortByValue) {
              parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue;
            }
            where = null;
            searchConditions = [];
            if (searchValue) {
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            if ((categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured') {
              where = {
                conditions: [{
                  attribute: 'featured',
                  value: true
                }]
              };
            }
            if ((categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured' && searchValue) {
              where = {
                conditions: [{
                  attribute: 'featured',
                  value: true
                }, {
                  conditions: searchConditions,
                  conector: 'OR'
                }],
                conector: 'AND'
              };
            }
            _context.prev = 24;
            functionFetch = categorySelected !== null && categorySelected !== void 0 && categorySelected.id && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== 'featured' ? ordering.businesses((_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.id).categories(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id).products() : ordering.businesses((_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.id).products();
            source = {};
            requestsState.products = source;
            setRequestsState(_objectSpread({}, requestsState));
            productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
            _context.next = 32;
            return productEndpoint.get({
              cancelToken: source
            });
          case 32:
            _yield$productEndpoin = _context.sent;
            _yield$productEndpoin2 = _yield$productEndpoin.content;
            error = _yield$productEndpoin2.error;
            result = _yield$productEndpoin2.result;
            _pagination = _yield$productEndpoin2.pagination;
            if (!error) {
              newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                  currentPage: _pagination.current_page,
                  totalItems: _pagination.total,
                  totalPages: _pagination.total_pages
                }),
                loading: false,
                products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
              };
              categoriesState[categoryKey] = newcategoryState;
              setCategoryState(_objectSpread({}, newcategoryState));
              setCategoriesState(_objectSpread({}, categoriesState));
              setFeaturedProducts(!!categoriesState.all.products.find(function (product) {
                return product.featured;
              }));
            } else {
              setErrors(result);
            }
            _context.next = 43;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](24);
            setErrors([_context.t0.message]);
          case 43:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[24, 40]]);
    }));
    return function getProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _businessState$busine8;
      var _orderState$options2, _orderState$options3, _businessState$busine9, source, parameters, _yield$ordering$busin, result, product;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(categoryId && productId && (_businessState$busine8 = businessState.business) !== null && _businessState$busine8 !== void 0 && _businessState$busine8.id)) {
              _context2.next = 17;
              break;
            }
            _context2.prev = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            parameters = {
              type: ((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) || 1,
              moment: ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment) || null
            };
            _context2.next = 8;
            return ordering.businesses((_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.id).categories(categoryId).products(productId).parameters(parameters).get({
              cancelToken: source
            });
          case 8:
            _yield$ordering$busin = _context2.sent;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_context2.t0]
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 14]]);
    }));
    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.id), isInitialRender]);
  var isValidMoment = function isValidMoment(date, format) {
    return (0, _dayjs.default)(date, format).format(format) === date;
  };
  var getBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _orderState$options4, _orderState$options5, _orderState$options6, _orderState$options7, _orderState$options8, _orderState$options9, source, parameters, _orderState$options10, moment, _yield$ordering$busin2, result, _yield$ordering$busin3, menus;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            setRequestsState(_objectSpread({}, requestsState));
            parameters = {
              type: ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) || 1,
              location: (_orderState$options5 = orderState.options) !== null && _orderState$options5 !== void 0 && (_orderState$options5 = _orderState$options5.address) !== null && _orderState$options5 !== void 0 && _orderState$options5.location ? "".concat((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.address) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.location) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.lat, ",").concat((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 || (_orderState$options7 = _orderState$options7.address) === null || _orderState$options7 === void 0 || (_orderState$options7 = _orderState$options7.location) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.lng) : null
            };
            if ((_orderState$options8 = orderState.options) !== null && _orderState$options8 !== void 0 && _orderState$options8.moment && isValidMoment((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            if (filterByMenus) {
              parameters.menu_id = filterByMenus;
            }
            _context3.next = 10;
            return ordering.businesses(slug).select(businessProps).parameters(parameters).get({
              cancelToken: source
            });
          case 10:
            _yield$ordering$busin2 = _context3.sent;
            result = _yield$ordering$busin2.content.result;
            _context3.next = 14;
            return ordering.businesses(result.id).menus().get();
          case 14:
            _yield$ordering$busin3 = _context3.sent;
            menus = _yield$ordering$busin3.content.result;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false,
              menus: menus
            }));
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 19]]);
    }));
    return function getBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!businessState.loading) {
      getProducts(true);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [categorySelected.id]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [sortByValue]);
  (0, _react.useEffect)(function () {
    getProducts();
  }, [slug]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness();
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading) {
      var _orderState$options11, _orderState$options12, _orderState$options13;
      setOrderOptions({
        type: orderState === null || orderState === void 0 || (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.type,
        moment: orderState === null || orderState === void 0 || (_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.moment,
        location: orderState === null || orderState === void 0 || (_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 || (_orderState$options13 = _orderState$options13.address) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.location
      });
    }
  }, [orderState === null || orderState === void 0 || (_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.type, orderState === null || orderState === void 0 || (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.moment, JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 || (_orderState$options16 = _orderState$options16.address) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.location)]);

  /**
   * Cancel business request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.business]);

  /**
   * Cancel products request on unmount and pagination
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    sortByValue: sortByValue,
    filterByMenus: filterByMenus,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    featuredProducts: featuredProducts,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    handleChangeSortBy: handleChangeSortBy,
    handleChangeFilterByMenus: handleChangeFilterByMenus,
    getNextProducts: getProducts,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    }
  })));
};
BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessAndProductList.defaultProps = {};