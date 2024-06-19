"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSpreadSheet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _ToastContext = require("../../contexts/ToastContext");
var _UtilsContext = require("../../contexts/UtilsContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessSpreadSheet = exports.BusinessSpreadSheet = function BusinessSpreadSheet(props) {
  var UIComponent = props.UIComponent,
    categoryState = props.categoryState,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    categoryId = props.categoryId,
    categorySelected = props.categorySelected,
    handleUpdateCategoryState = props.handleUpdateCategoryState;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)({
      products: null,
      loading: false,
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    removingWithSupr = _useState4[0],
    setRemovingWithSupr = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    undo = _useState6[0],
    setUndo = _useState6[1];
  var _useState7 = (0, _react.useState)({
      row: -1,
      col: -1
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    curCell = _useState8[0],
    setCurCell = _useState8[1];
  var taxShowbusiness = "".concat(business.tax, "% ").concat(business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'));
  var feeShowbusiness = "".concat(parsePrice(0), " + ").concat(business.service_fee, "%");

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} col Number of selected col
   * @param {Number} row1 Number of selected row
   * @param {Number} col1 Number of selected col
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  var handleAfterSectionEnd = function handleAfterSectionEnd(row, col, row1, col1, hotTableObj) {
    if (curCell.row === row && curCell.col === col || row !== row1 || col !== col1) return;
    curCell.row = row;
    curCell.col = col;
    setCurCell({
      row: row,
      col: col
    });
    hotTableObj.deselectCell();
    hotTableObj.selectCell(row, col);
  };
  var handleoutsideClickDeselects = function handleoutsideClickDeselects() {
    setCurCell({
      row: -1,
      col: -1
    });
    return false;
  };

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} amount Count of selected row
   * @param {Array} datarows Numbers of selected row
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  var handleRowRemove = function handleRowRemove(row, amount, dataRows, hotTableObj) {
    if (!hotTableObj) return;
    var toRemove = [];
    var _iterator = _createForOfIteratorHelper(dataRows),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dataRow = _step.value;
        toRemove.push(hotTableObj === null || hotTableObj === void 0 ? void 0 : hotTableObj.getSourceDataAtRow(dataRow).id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (removingWithSupr) {
      setRemovingWithSupr(false);
    }
    setTimeout(function () {
      deleteProducts(toRemove);
    }, 1);
  };
  var handleItemChange = function handleItemChange(changeItems, accionHanson, hotTableObj) {
    if (undo) {
      setUndo(false);
      return;
    }
    if (accionHanson !== 'loadData') {
      changeItems = !changeItems ? [] : changeItems;
      var changes = [];
      var itemToRemove = [];
      var itemToUpdate = [];
      var itemToAdd = [];
      var id = categoryId || (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id);
      changeItems.forEach(function (item) {
        var error = {
          name: false,
          price: false
        };
        if (item[2] !== item[3]) {
          var valid = true;
          for (var j = 0; j < changes.length; j++) {
            if (changes[j] === item[0]) {
              valid = false;
              break;
            }
          }
          if (valid) {
            changes.push(item[0]);
            var row = hotTableObj.getSourceDataAtRow(item[0]);
            hotTableObj.validateRows(changes, function (res) {});
            if (!row.name && (row.price || row.quantity || row.description)) {
              error.name = true;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: [t('NAME_REQUIRED', 'Name Required')]
                }
              }));
            }
            if (row.price && typeof row.price !== 'number') {
              var price = parseFloat(row.price);
              if (!price) {
                error.price = true;
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  result: {
                    error: true,
                    result: [t('PRODUCT_PRICE_NUMBER')]
                  }
                }));
              } else row.price = price;
            }
            if (row.quantity && typeof row.quantity !== 'number' && row.quantity !== 'NA') {
              var quantity = parseFloat(row.quantity);
              if (!quantity) {
                error.quantity = true;
              } else row.quantity = quantity;
            }
            if (!row.id) {
              if (!(error.price || error.name || error.quantity)) {
                var _add = {
                  name: row.name,
                  description: row.description ? row.description : '',
                  price: row.price ? row.price : 0,
                  cost_price: (row === null || row === void 0 ? void 0 : row.cost_price) || 0,
                  category_id: id,
                  business_id: business === null || business === void 0 ? void 0 : business.id
                };
                if (row.quantity && row.quantity !== 'NA' || row.quantity === 0) {
                  _add.quantity = row.quantity;
                  _add.inventoried = true;
                }
                itemToAdd.push(_add);
              }
            } else {
              if (!row.name && !row.price && !row.description) {
                row.row = item[0];
                itemToRemove.push(row);
              } else {
                if (!(error.price || error.name || error.quantity)) {
                  if (!row.description) row.description = null;
                  var _update = {
                    id: row.id,
                    name: row.name,
                    description: row.description ? row.description : '',
                    price: row.price ? row.price : 0,
                    inventoried: (row === null || row === void 0 ? void 0 : row.inventoried) || false,
                    category_id: id,
                    business_id: business === null || business === void 0 ? void 0 : business.id
                  };
                  if (typeof (row === null || row === void 0 ? void 0 : row.offer_price) !== 'undefined') {
                    _update.offer_price = row.offer_price;
                  }
                  if (typeof (row === null || row === void 0 ? void 0 : row.cost_price) !== 'undefined') {
                    _update.cost_price = row.cost_price;
                  }
                  if (row.quantity && row.quantity !== 'NA' || row.quantity === 0) {
                    _update.quantity = row.quantity;
                  }
                  itemToUpdate.push(_update);
                }
              }
            }
          }
        }
      });
      if (itemToAdd.length > 0) {
        editProducts(itemToAdd, true, hotTableObj);
      }
      if (itemToUpdate.length > 0) {
        editProducts(itemToUpdate, false, hotTableObj);
      }
      if (itemToRemove.length > 0) {
        hotTableObj.alter('remove_row', itemToRemove[0].row, itemToRemove.length);
        setRemovingWithSupr(true);
      }
    }
  };
  var editProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, isPost, hotTableObj) {
      var requestOptions, functionFetch, response, _yield$response$json, error, result;
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
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            requestOptions = {
              method: isPost ? 'POST' : 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                products: JSON.stringify(params)
              })
            };
            functionFetch = "".concat(ordering.root, "/bulks/products");
            _context.next = 9;
            return fetch(functionFetch, requestOptions);
          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();
          case 12:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: false,
                  result: isPost ? t('PRODUCT_CREATED', 'Product created') : t('PRODUCT_UPDATE', 'Product updated')
                }
              }));
              showToast(_ToastContext.ToastType.Success, isPost ? t('PRODUCT_CREATED', 'Product created') : t('PRODUCT_UPDATE', 'Product updated'));
              getProductsByCategoryId();
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](2);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context.t0.message
              },
              loading: false
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 18]]);
    }));
    return function editProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to edit a product
   */
  var getProductsByCategoryId = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var id, params, _yield$ordering$busin, _yield$ordering$busin2, error, result, _categories;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!loading) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.prev = 2;
            id = categoryId || categorySelected.id;
            params = {
              business_id: business === null || business === void 0 ? void 0 : business.id,
              category_id: parseInt(id)
            };
            _context2.next = 7;
            return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(parseInt(id)).products().parameters(params).get();
          case 7:
            _yield$ordering$busin = _context2.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              if (handleUpdateBusinessState) {
                _categories = business === null || business === void 0 ? void 0 : business.categories.map(function (item) {
                  if (parseInt(item.id) === parseInt(id)) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      products: result
                    });
                  }
                  return item;
                });
                handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                  categories: _categories
                }));
              }
              if (handleUpdateCategoryState) {
                handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  products: result
                }));
              }
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                products: result.map(function (product) {
                  var _product$tax, _business$tax, _product$fee, _product$fee2;
                  return _objectSpread(_objectSpread({}, product), {}, {
                    taxShow: !(product !== null && product !== void 0 && product.tax) ? taxShowbusiness : "".concat((_product$tax = product.tax) === null || _product$tax === void 0 ? void 0 : _product$tax.rate, "% ").concat(((_business$tax = business.tax) === null || _business$tax === void 0 ? void 0 : _business$tax.type) === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')),
                    feeShow: !(product !== null && product !== void 0 && product.fee) ? feeShowbusiness : "".concat(parsePrice((_product$fee = product.fee) === null || _product$fee === void 0 ? void 0 : _product$fee.fixed), " + ").concat((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.percentage, "%")
                  });
                }),
                loading: false,
                result: {
                  error: false,
                  result: t('PRODUCT_SAVED', 'Product saved')
                }
              }));
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context2.t0.message
              },
              loading: false
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 14]]);
    }));
    return function getProductsByCategoryId() {
      return _ref2.apply(this, arguments);
    };
  }();
  var deleteProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
      var requestOptions, functionFetch, response, _yield$response$json2, error, result;
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
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                products: JSON.stringify(params)
              })
            };
            functionFetch = "".concat(ordering.root, "/bulks/products");
            _context3.next = 9;
            return fetch(functionFetch, requestOptions);
          case 9:
            response = _context3.sent;
            _context3.next = 12;
            return response.json();
          case 12:
            _yield$response$json2 = _context3.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: false,
                  result: t('PRODUCT_DELETED', 'Product deleted')
                }
              }));
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'));
              getProductsByCategoryId();
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](2);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context3.t0.message
              },
              loading: false
            }));
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 18]]);
    }));
    return function deleteProducts(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var spreadProducts = [];
    var _iterator2 = _createForOfIteratorHelper(categoryState.products),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _product$tax2, _business$tax2, _product$fee3, _product$fee4;
        var product = _step2.value;
        var taxShow = !(product !== null && product !== void 0 && product.tax) ? taxShowbusiness : "".concat((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.rate, "% ").concat(((_business$tax2 = business.tax) === null || _business$tax2 === void 0 ? void 0 : _business$tax2.type) === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'));
        var feeShow = !product.fee ? feeShowbusiness : "".concat(parsePrice((_product$fee3 = product.fee) === null || _product$fee3 === void 0 ? void 0 : _product$fee3.fixed), " + ").concat((_product$fee4 = product.fee) === null || _product$fee4 === void 0 ? void 0 : _product$fee4.percentage, "%");
        var _product = _objectSpread(_objectSpread({}, product), {}, {
          taxShow: taxShow,
          feeShow: feeShow
        });
        spreadProducts.push(_product);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      products: spreadProducts
    }));
  }, [categoryState === null || categoryState === void 0 ? void 0 : categoryState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleItemChange: handleItemChange,
    spreadSheetState: formState,
    handleRowRemove: handleRowRemove,
    handleAfterSectionEnd: handleAfterSectionEnd,
    handleoutsideClickDeselects: handleoutsideClickDeselects
  })));
};
BusinessSpreadSheet.propTypes = {
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
  setBusinessState: _propTypes.default.func,
  /**
    * Components types before single business card
    * Array of type components, the parent props will pass to these components
    */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after single business card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessSpreadSheet.defaultProps = {};