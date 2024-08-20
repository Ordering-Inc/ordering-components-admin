"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategoyDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _ToastContext = require("../../contexts/ToastContext");
var _utils = require("../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
 * Component to manage BusinessProductsCategoyDetails behavior without UI component
 */
var BusinessProductsCategoyDetails = exports.BusinessProductsCategoyDetails = function BusinessProductsCategoyDetails(props) {
  var UIComponent = props.UIComponent,
    businessState = props.businessState,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    category = props.category,
    categoryId = props.categoryId,
    onClose = props.onClose,
    categorySelected = props.categorySelected,
    setCategorySelected = props.setCategorySelected;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    loading = _useSession2[0].loading;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)({
      loading: false,
      changes: {
        enabled: true,
        enabledParent: false
      },
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    parentCategories = _useState4[0],
    setParentCategories = _useState4[1];
  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: category || {}
    }));
  }, [category]);

  /**
  * Update form input data
  * @param {EventTarget} e Related HTML event
  */
  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  /**
  * Update credential data
  * @param {Object} isChecked checkbox status
  */
  var handleChangeCheckBox = function handleChangeCheckBox(isChecked) {
    var currentChanges = null;
    if (isChecked.enabled !== undefined) {
      currentChanges = {
        enabled: isChecked.enabled
      };
    }
    if (isChecked.enabledParent) {
      currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
        parent_category_id: categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id
      });
    } else {
      currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
        parent_category_id: null
      });
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  /**
   * Update form item
   */
  var handleChangeItem = function handleChangeItem(change) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), change)
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
  var handlechangeImage = function handlechangeImage(file, name) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, reader.result))
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  var businessUpdate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(content) {
      var _categories, _business;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _categories = _toConsumableArray(businessState.business.categories);
            _categories.forEach(function iterate(category, index, object) {
              var _content$result2, _content$result3;
              if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                if (Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories)) {
                  var found = category.subcategories.find(function (subCategory) {
                    var _content$result;
                    return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) === (content === null || content === void 0 || (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.id);
                  });
                  if (!found) {
                    category.subcategories.push(content === null || content === void 0 ? void 0 : content.result);
                  }
                }
              }
              var categoryKeyOptions = ['name', 'enabled', 'header', 'description', 'ribbon', 'image', 'slug', 'seo_image', 'seo_title', 'seo_description', 'snooze_until'];
              if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 || (_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.id) && category.parent_category_id === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                Object.keys(category).forEach(function (key) {
                  if (categoryKeyOptions.includes(key) && content.result[key] !== undefined) {
                    category[key] = content === null || content === void 0 ? void 0 : content.result[key];
                  }
                });
              }
              if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 || (_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.id) && category.parent_category_id !== (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                object.splice(index, 1);
              }
              Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
            });
            _business = _objectSpread(_objectSpread({}, businessState.business), {}, {
              categories: _categories
            });
            return _context.abrupt("return", _business);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function businessUpdate(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
  * Default fuction for business profile workflow
  */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var keysToDelete, id, _businessState$busine, changes, key, _yield$ordering$busin, content, _formState$changes3, _formState$changes4, _content$result4, _businessState$busine2, updatedChanges, _yield$ordering$busin2, _content, updatedBusiness, _updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            keysToDelete = ['rank'];
            if (!category) {
              _context2.next = 48;
              break;
            }
            id = (category === null || category === void 0 ? void 0 : category.id) || categoryId;
            if (!loading) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            _context2.prev = 5;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            changes = _objectSpread({}, formState.changes);
            for (key in changes) {
              if (!(key === 'snooze_until' && changes[key] === null) && changes[key] === null || keysToDelete.includes(key)) {
                delete changes[key];
              }
            }
            _context2.next = 12;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id).categories(parseInt(id)).save(changes);
          case 12:
            _yield$ordering$busin = _context2.sent;
            content = _yield$ordering$busin.content;
            if (content.error) {
              _context2.next = 40;
              break;
            }
            if (!(typeof ((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 || (_formState$changes3 = _formState$changes3.ribbon) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.enabled) !== 'undefined' && !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && (_formState$changes4 = _formState$changes4.ribbon) !== null && _formState$changes4 !== void 0 && _formState$changes4.enabled) && content !== null && content !== void 0 && (_content$result4 = content.result) !== null && _content$result4 !== void 0 && (_content$result4 = _content$result4.ribbon) !== null && _content$result4 !== void 0 && _content$result4.enabled)) {
              _context2.next = 30;
              break;
            }
            updatedChanges = {
              ribbon: {
                enabled: false
              }
            };
            _context2.next = 19;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id).categories(parseInt(id)).save(updatedChanges);
          case 19:
            _yield$ordering$busin2 = _context2.sent;
            _content = _yield$ordering$busin2.content;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: _content.result,
              result: {
                error: false,
                result: _content.result
              },
              loading: false
            }));
            setCategorySelected(_content.result);
            if (!handleUpdateBusinessState) {
              _context2.next = 28;
              break;
            }
            _context2.next = 26;
            return businessUpdate(_content);
          case 26:
            updatedBusiness = _context2.sent;
            handleUpdateBusinessState(updatedBusiness);
          case 28:
            _context2.next = 37;
            break;
          case 30:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: content.result,
              result: {
                error: false,
                result: content.result
              },
              loading: false
            }));
            setCategorySelected(content.result);
            if (!handleUpdateBusinessState) {
              _context2.next = 37;
              break;
            }
            _context2.next = 35;
            return businessUpdate(content);
          case 35:
            _updatedBusiness = _context2.sent;
            handleUpdateBusinessState(_updatedBusiness);
          case 37:
            showToast(_ToastContext.ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'));
            _context2.next = 41;
            break;
          case 40:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: formState.changes,
              result: content,
              loading: false
            }));
          case 41:
            _context2.next = 46;
            break;
          case 43:
            _context2.prev = 43;
            _context2.t0 = _context2["catch"](5);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: [_context2.t0.message]
              },
              loading: false
            }));
          case 46:
            _context2.next = 49;
            break;
          case 48:
            createBusinessCategory();
          case 49:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 43]]);
    }));
    return function handleUpdateClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  var createBusinessCategory = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _formState$changes5, _changes$ribbon, _businessState$busine3, changes, _yield$ordering$busin3, content, _content$result5, newCategory, _businessState$busine4, _categories;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!loading) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            changes = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
              slug: (0, _utils.stringToSlug)((formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) || '')
            });
            if (typeof (changes === null || changes === void 0 ? void 0 : changes.ribbon) !== 'undefined' && !(changes !== null && changes !== void 0 && (_changes$ribbon = changes.ribbon) !== null && _changes$ribbon !== void 0 && _changes$ribbon.enabled)) delete changes.ribbon;
            _context3.next = 9;
            return ordering.businesses(parseInt(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id)).categories().save(changes);
          case 9:
            _yield$ordering$busin3 = _context3.sent;
            content = _yield$ordering$busin3.content;
            if (!content.error) {
              newCategory = _objectSpread({}, content.result);
              newCategory.parent_category_id = ((_content$result5 = content.result) === null || _content$result5 === void 0 ? void 0 : _content$result5.parent_category_id) || null;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                category: {},
                result: {
                  error: false,
                  result: newCategory
                },
                loading: false
              }));
              if (handleUpdateBusinessState) {
                _categories = ((_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.categories) || [];
                if (content !== null && content !== void 0 && content.result.parent_category_id) {
                  _categories.forEach(function iterate(category) {
                    if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                      category.subcategories.push(_objectSpread(_objectSpread({}, newCategory), {}, {
                        products: [],
                        subcategories: []
                      }));
                    }
                    Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                  });
                } else {
                  _categories.push(_objectSpread(_objectSpread({}, newCategory), {}, {
                    products: [],
                    subcategories: []
                  }));
                }
                handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState.business), {}, {
                  categories: _categories
                }));
              }
              showToast(_ToastContext.ToastType.Success, t('CATEOGORY_CREATED', 'Category created'));
              onClose && onClose();
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: formState.changes,
                result: content,
                loading: false
              }));
            }
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](2);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context3.t0.message
              },
              loading: false
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 14]]);
    }));
    return function createBusinessCategory() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
  * Method to edit a category
  */
  var handleDeleteCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _businessState$busine5, _yield$ordering$busin4, _yield$ordering$busin5, error, result, _categories;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!loading) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context4.next = 7;
            return ordering.businesses(parseInt((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id)).categories(parseInt(category === null || category === void 0 ? void 0 : category.id)).delete();
          case 7:
            _yield$ordering$busin4 = _context4.sent;
            _yield$ordering$busin5 = _yield$ordering$busin4.content;
            error = _yield$ordering$busin5.error;
            result = _yield$ordering$busin5.result;
            if (!error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: false,
                  result: result
                }
              }));
              if (handleUpdateBusinessState) {
                _categories = _toConsumableArray(businessState.business.categories);
                _categories.forEach(function iterate(_category, index, object) {
                  if ((_category === null || _category === void 0 ? void 0 : _category.id) === (category === null || category === void 0 ? void 0 : category.id)) {
                    object.splice(index, 1);
                  }
                  Array.isArray(_category === null || _category === void 0 ? void 0 : _category.subcategories) && _category.subcategories.forEach(iterate);
                });
                handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState.business), {}, {
                  categories: _categories
                }));
                if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) setCategorySelected(_categories[0]);
              }
              showToast(_ToastContext.ToastType.Success, t('CATEOGORY_DELETED', 'Category deleted'));
              props.onClose && props.onClose(category === null || category === void 0 ? void 0 : category.id);
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](2);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              result: {
                error: true,
                result: _context4.t0
              }
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 14]]);
    }));
    return function handleDeleteCategory() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (businessState.loading || !categorySelected) return;
    var getParentCategories = function getParentCategories(category, id) {
      var path;
      var item = {
        id: category === null || category === void 0 ? void 0 : category.id,
        name: category.name
      };
      if (!category || _typeof(category) !== 'object') return;
      if ((category === null || category === void 0 ? void 0 : category.id) === id) {
        return [];
      }
      ((category === null || category === void 0 ? void 0 : category.subcategories) || []).some(function (child) {
        return path = getParentCategories(child, id);
      });
      return path && [item].concat(_toConsumableArray(path));
    };
    businessState.business.categories.forEach(function (category) {
      var _parentCategories = getParentCategories(category, categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id);
      if (_parentCategories) {
        setParentCategories(_parentCategories);
      }
    });
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.loading, categorySelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: !category,
    formState: formState,
    setFormState: setFormState,
    parentCategories: parentCategories,
    handlechangeImage: handlechangeImage,
    handleChangeInput: handleChangeInput,
    handleChangeCheckBox: handleChangeCheckBox,
    handleChangeItem: handleChangeItem,
    handleUpdateClick: handleUpdateClick,
    handleDeleteCategory: handleDeleteCategory,
    handleChangeRibbon: handleChangeRibbon
  })));
};
BusinessProductsCategoyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Object for a business
   */
  businessState: _propTypes.default.object,
  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: _propTypes.default.func,
  /**
   * Function to set product creation mode
   */
  setIsAddProduct: _propTypes.default.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessProductsCategoyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};