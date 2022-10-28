"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrder = exports.OrderProvider = exports.OrderContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../SessionContext");

var _ApiContext = require("../ApiContext");

var _WebsocketContext = require("../WebsocketContext");

var _LanguageContext = require("../LanguageContext");

var _EventContext = require("../EventContext");

var _ConfigContext = require("../ConfigContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _excluded = ["carts"],
    _excluded2 = ["carts"],
    _excluded3 = ["carts"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);
/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */


var OrderContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */

exports.OrderContext = OrderContext;

var OrderProvider = function OrderProvider(_ref) {
  var _configState$configs, _configState$configs$;

  var Alert = _ref.Alert,
      children = _ref.children,
      strategy = _ref.strategy;

  var _useState = (0, _react.useState)({
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirmAlert = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)({
    show: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alert = _useState4[0],
      setAlert = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      session = _useSession2[0],
      logout = _useSession2[1].logout;

  var orderTypes = {
    delivery: 1,
    pickup: 2,
    eatin: 3,
    curbside: 4,
    drivethru: 5
  };

  var _useState5 = (0, _react.useState)({
    loading: true,
    options: {
      type: orderTypes[configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.default_order_type) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value],
      moment: null
    },
    carts: {},
    confirmAlert: confirmAlert,
    alert: alert
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];
  /**
   * Refresh order options and carts from API
   */


  var refreshOrderOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _res$content, _res$content2, customerFromLocalStorage, userCustomerId, options, res, error, result, carts, _options, _session$user, localOptions, _options2, _localOptions$address, conditions, userId, addressesResponse, address, _yield$ordering$setAc, _yield$ordering$setAc2, _error, _result, _err$message, message;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!state.loading) {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  loading: true
                }));
              }

              _context.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              options = {};

              if (userCustomerId) {
                options.query = {
                  user_id: userCustomerId
                };
              }

              _context.next = 10;
              return ordering.setAccessToken(session.token).orderOptions().get(options);

            case 10:
              res = _context.sent;
              error = res === null || res === void 0 ? void 0 : (_res$content = res.content) === null || _res$content === void 0 ? void 0 : _res$content.error;
              result = res === null || res === void 0 ? void 0 : (_res$content2 = res.content) === null || _res$content2 === void 0 ? void 0 : _res$content2.result;

              if (!error) {
                carts = result.carts, _options = _objectWithoutProperties(result, _excluded);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), _options);
              }

              if (error) {
                setAlert({
                  show: true,
                  content: result
                });

                if ((res === null || res === void 0 ? void 0 : res.status) === 401 && (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) !== 8) {
                  session.auth && logout();
                }
              }

              _context.next = 17;
              return strategy.getItem('options', true);

            case 17:
              localOptions = _context.sent;

              if (!localOptions) {
                _context.next = 49;
                break;
              }

              _options2 = {};

              if (!(Object.keys(localOptions.address).length > 0)) {
                _context.next = 41;
                break;
              }

              conditions = [{
                attribute: 'address',
                value: localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address = localOptions.address) === null || _localOptions$address === void 0 ? void 0 : _localOptions$address.address
              }];
              userId = userCustomerId || session.user.id;
              _context.next = 25;
              return ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get();

            case 25:
              addressesResponse = _context.sent;
              address = addressesResponse.content.result.find(function (address) {
                var _localOptions$address2, _localOptions$address3, _localOptions$address4;

                localOptions.address.internal_number = ((_localOptions$address2 = localOptions.address) === null || _localOptions$address2 === void 0 ? void 0 : _localOptions$address2.internal_number) || null;
                localOptions.address.zipcode = ((_localOptions$address3 = localOptions.address) === null || _localOptions$address3 === void 0 ? void 0 : _localOptions$address3.zipcode) || null;
                localOptions.address.address_notes = ((_localOptions$address4 = localOptions.address) === null || _localOptions$address4 === void 0 ? void 0 : _localOptions$address4.address_notes) || null;
                return address.location.lat === localOptions.address.location.lat && address.location.lng === localOptions.address.location.lng && address.internal_number === localOptions.address.internal_number && address.zipcode === localOptions.address.zipcode && address.address_notes === localOptions.address.address_notes;
              });

              if (address) {
                _context.next = 38;
                break;
              }

              Object.keys(localOptions.address).forEach(function (key) {
                return localOptions.address[key] === null && delete localOptions.address[key];
              });
              _context.next = 31;
              return ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address);

            case 31:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              _error = _yield$ordering$setAc2.error;
              _result = _yield$ordering$setAc2.result;

              if (!_error) {
                address = _result;
              }

              _context.next = 40;
              break;

            case 38:
              _context.next = 40;
              return ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({
                default: true
              });

            case 40:
              address && (_options2.address_id = address.id);

            case 41:
              if (localOptions.type) {
                _options2.type = localOptions.type;
              }

              if (localOptions.moment) {
                _options2.moment = _dayjs.default.utc(localOptions.moment, 'YYYY-MM-DD HH:mm:ss').unix();
              }

              if (localOptions !== null && localOptions !== void 0 && localOptions.address_id) {
                _options2.address_id = localOptions === null || localOptions === void 0 ? void 0 : localOptions.address_id;
              }

              if (_options2 && Object.keys(_options2).length > 0) {
                updateOrderOptions(_options2);
              } else {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  loading: false
                }));
              }

              _context.next = 47;
              return strategy.removeItem('options');

            case 47:
              _context.next = 50;
              break;

            case 49:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 50:
              _context.next = 57;
              break;

            case 52:
              _context.prev = 52;
              _context.t0 = _context["catch"](0);
              message = _context.t0 !== null && _context.t0 !== void 0 && (_err$message = _context.t0.message) !== null && _err$message !== void 0 && _err$message.includes('Internal error') ? 'INTERNAL_ERROR' : _context.t0.message;
              setAlert({
                show: true,
                content: [message]
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 57:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 52]]);
    }));

    return function refreshOrderOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      var _state$options, _state$options2;

      if ((_state$options = state.options) !== null && _state$options !== void 0 && _state$options.address && (_state$options2 = state.options) !== null && _state$options2 !== void 0 && _state$options2.address[prop]) {
        if (prop === 'location') {
          var _state$options3, _state$options4;

          values.push(address[prop].lat === ((_state$options3 = state.options) === null || _state$options3 === void 0 ? void 0 : _state$options3.address[prop].lat) && address[prop].lng === ((_state$options4 = state.options) === null || _state$options4 === void 0 ? void 0 : _state$options4.address[prop].lng));
        } else {
          var _state$options5;

          values.push(address[prop] === ((_state$options5 = state.options) === null || _state$options5 === void 0 ? void 0 : _state$options5.address[prop]));
        }
      } else {
        values.push(!address[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  /**
   * Change order address
   */


  var changeAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(addressId, params) {
      var optionsStorage, options, _params$address;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_typeof(addressId) === 'object')) {
                _context2.next = 9;
                break;
              }

              _context2.next = 3;
              return strategy.getItem('options', true);

            case 3:
              optionsStorage = _context2.sent;
              options = _objectSpread(_objectSpread(_objectSpread({}, state.options), optionsStorage), {}, {
                address: _objectSpread(_objectSpread({}, optionsStorage === null || optionsStorage === void 0 ? void 0 : optionsStorage.address), addressId)
              });
              _context2.next = 7;
              return strategy.setItem('options', options, true);

            case 7:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));
              return _context2.abrupt("return");

            case 9:
              if (!(params && params !== null && params !== void 0 && params.address && !checkAddress(params === null || params === void 0 ? void 0 : params.address))) {
                _context2.next = 12;
                break;
              }

              updateOrderOptions({
                address_id: params === null || params === void 0 ? void 0 : (_params$address = params.address) === null || _params$address === void 0 ? void 0 : _params$address.id
              });
              return _context2.abrupt("return");

            case 12:
              if (!(params && params !== null && params !== void 0 && params.isEdit)) {
                _context2.next = 17;
                break;
              }

              if (!(addressId !== state.options.address_id)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return");

            case 15:
              updateOrderOptions({
                address_id: addressId
              });
              return _context2.abrupt("return");

            case 17:
              updateOrderOptions({
                address_id: addressId
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeAddress(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Change order type
   */


  var changeType = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(type) {
      var options;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              options = _objectSpread(_objectSpread({}, state.options), {}, {
                type: type
              });

              if (!(state.options.type === type)) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              if (session.auth) {
                _context3.next = 7;
                break;
              }

              _context3.next = 6;
              return strategy.setItem('options', options, true);

            case 6:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));

            case 7:
              updateOrderOptions({
                type: type
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function changeType(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Change order moment
   */


  var changeMoment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(moment) {
      var momentUnix, momentFormatted, options;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              momentUnix = moment ? moment.getTime() / 1000 : null;
              momentFormatted = momentUnix ? _dayjs.default.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null;
              options = _objectSpread(_objectSpread({}, state.options), {}, {
                moment: momentFormatted
              });

              if (!(state.options.moment === momentFormatted)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return");

            case 5:
              if (session.auth) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return strategy.setItem('options', options, true);

            case 8:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));

            case 9:
              updateOrderOptions({
                moment: momentUnix
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function changeMoment(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */


  var updateOrderOptions = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(changes) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, carts, options, _err$message2, message;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!session.auth) {
                _context5.next = 25;
                break;
              }

              _context5.next = 3;
              return strategy.getItem('user-customer', true);

            case 3:
              customerFromLocalStorage = _context5.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, changes), {}, {
                user_id: userCustomerId || session.user.id
              });
              _context5.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context5.next = 10;
              return ordering.setAccessToken(session.token).orderOptions().save(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 10:
              _yield$ordering$setAc3 = _context5.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;

              if (!error) {
                carts = result.carts, options = _objectWithoutProperties(result, _excluded2);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), options);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context5.abrupt("return", !error);

            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](6);
              message = _context5.t0 !== null && _context5.t0 !== void 0 && (_err$message2 = _context5.t0.message) !== null && _err$message2 !== void 0 && _err$message2.includes('Internal error') ? 'INTERNAL_ERROR' : _context5.t0.message;
              setAlert({
                show: true,
                content: [message]
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context5.abrupt("return", false);

            case 25:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[6, 19]]);
    }));

    return function updateOrderOptions(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Add product to cart
   */


  var addProduct = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(product) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context6.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context6.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: product,
                user_id: userCustomerId || session.user.id
              };
              _context6.next = 9;
              return ordering.setAccessToken(session.token).carts().addProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc5 = _context6.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_added', product, result);
                events.emit('cart_updated', result);
                events.emit('product_added', product);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", !error);

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", false);

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 18]]);
    }));

    return function addProduct(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Remove product to cart
   */


  var removeProduct = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(product) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc7, _yield$ordering$setAc8, error, result;

      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context7.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context7.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: {
                  id: product.id,
                  code: product.code,
                  business_id: product.business_id
                },
                user_id: userCustomerId || session.user.id
              };
              _context7.next = 9;
              return ordering.setAccessToken(session.token).carts().removeProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc7 = _context7.sent;
              _yield$ordering$setAc8 = _yield$ordering$setAc7.content;
              error = _yield$ordering$setAc8.error;
              result = _yield$ordering$setAc8.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_removed', product, result);
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", !error);

            case 18:
              _context7.prev = 18;
              _context7.t0 = _context7["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", false);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 18]]);
    }));

    return function removeProduct(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Clear products of cart
   */


  var clearCart = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(uuid) {
      var customerFromLocalStorage, userCustomerId, body, response, _yield$response$json, error, result;

      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context8.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context8.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = JSON.stringify({
                uuid: uuid,
                user_id: userCustomerId || session.user.id
              });
              _context8.next = 9;
              return fetch("".concat(ordering.root, "/carts/clear"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 9:
              response = _context8.sent;
              _context8.next = 12;
              return response.json();

            case 12:
              _yield$response$json = _context8.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", !error);

            case 20:
              _context8.prev = 20;
              _context8.t0 = _context8["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", false);

            case 24:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 20]]);
    }));

    return function clearCart(_x8) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Update product to cart
   */


  var updateProduct = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(product) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc9, _yield$ordering$setAc10, error, result;

      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context9.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context9.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: product,
                user_id: userCustomerId || session.user.id
              };
              _context9.next = 9;
              return ordering.setAccessToken(session.token).carts().updateProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc9 = _context9.sent;
              _yield$ordering$setAc10 = _yield$ordering$setAc9.content;
              error = _yield$ordering$setAc10.error;
              result = _yield$ordering$setAc10.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_updated', product, result);
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", !error);

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", false);

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 18]]);
    }));

    return function updateProduct(_x9) {
      return _ref10.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var applyCoupon = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(couponData) {
      var _state$carts;

      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc11, _yield$ordering$setAc12, error, result;

      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (couponData.business_id) {
                _context10.next = 2;
                break;
              }

              throw new Error('`business_id` is required.');

            case 2:
              if (!(typeof couponData.coupon === 'undefined')) {
                _context10.next = 4;
                break;
              }

              throw new Error('`coupon` is required.');

            case 4:
              if (!(((_state$carts = state.carts["businessId:".concat(couponData.business_id)]) === null || _state$carts === void 0 ? void 0 : _state$carts.coupon) === couponData.coupon)) {
                _context10.next = 6;
                break;
              }

              return _context10.abrupt("return");

            case 6:
              _context10.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context10.next = 10;
              return strategy.getItem('user-customer', true);

            case 10:
              customerFromLocalStorage = _context10.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                business_id: couponData.business_id,
                coupon: couponData.coupon,
                user_id: userCustomerId || session.user.id
              };
              _context10.next = 15;
              return ordering.setAccessToken(session.token).carts().applyCoupon(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 15:
              _yield$ordering$setAc11 = _context10.sent;
              _yield$ordering$setAc12 = _yield$ordering$setAc11.content;
              error = _yield$ordering$setAc12.error;
              result = _yield$ordering$setAc12.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", !error);

            case 24:
              _context10.prev = 24;
              _context10.t0 = _context10["catch"](6);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", false);

            case 28:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[6, 24]]);
    }));

    return function applyCoupon(_x10) {
      return _ref11.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var changeDriverTip = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(businessId, driverTipRate) {
      var _state$carts2;

      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc13, _yield$ordering$setAc14, error, result;

      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (businessId) {
                _context11.next = 2;
                break;
              }

              throw new Error('`businessId` is required.');

            case 2:
              if (!(!driverTipRate && driverTipRate !== 0)) {
                _context11.next = 4;
                break;
              }

              throw new Error('`driverTipRate` is required.');

            case 4:
              if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts2 = state.carts["businessId:".concat(businessId)]) === null || _state$carts2 === void 0 ? void 0 : _state$carts2.driver_tip_rate) === driverTipRate)) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return");

            case 6:
              _context11.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context11.next = 10;
              return strategy.getItem('user-customer', true);

            case 10:
              customerFromLocalStorage = _context11.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                business_id: businessId,
                driver_tip_rate: driverTipRate,
                user_id: userCustomerId || session.user.id
              };
              _context11.next = 15;
              return ordering.setAccessToken(session.token).carts().changeDriverTip(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 15:
              _yield$ordering$setAc13 = _context11.sent;
              _yield$ordering$setAc14 = _yield$ordering$setAc13.content;
              error = _yield$ordering$setAc14.error;
              result = _yield$ordering$setAc14.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", !error);

            case 24:
              _context11.prev = 24;
              _context11.t0 = _context11["catch"](6);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", false);

            case 28:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[6, 24]]);
    }));

    return function changeDriverTip(_x11, _x12) {
      return _ref12.apply(this, arguments);
    };
  }();
  /**
   * Place cart
   */


  var placeCart = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(cardId, data) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc15, _yield$ordering$setAc16, error, result, orderObject;

      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context12.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context12.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, data), {}, {
                user_id: userCustomerId || session.user.id
              });
              _context12.next = 9;
              return ordering.setAccessToken(session.token).carts(cardId).place(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc15 = _context12.sent;
              _yield$ordering$setAc16 = _yield$ordering$setAc15.content;
              error = _yield$ordering$setAc16.error;
              result = _yield$ordering$setAc16.result;

              if (error) {
                _context12.next = 17;
                break;
              }

              if (result.status !== 1) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                delete state.carts["businessId:".concat(result.business_id)];
                orderObject = {
                  id: result.order.uuid,
                  business: {
                    name: result.business.name
                  },
                  total: result.total,
                  tax_total: result.tax,
                  delivery_zone_price: result.delivery_price
                };
                events.emit('order_placed', orderObject);
              }

              _context12.next = 20;
              break;

            case 17:
              setAlert({
                show: true,
                content: result
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return");

            case 20:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", {
                error: error,
                result: result
              });

            case 24:
              _context12.prev = 24;
              _context12.t0 = _context12["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", {
                error: true,
                result: [_context12.t0.message]
              });

            case 28:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[0, 24]]);
    }));

    return function placeCart(_x13, _x14) {
      return _ref13.apply(this, arguments);
    };
  }();
  /**
   * Confirm cart
   */


  var confirmCart = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(cardId, data) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc17, _yield$ordering$setAc18, error, result, cart;

      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context13.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context13.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, data), {}, {
                user_id: userCustomerId || session.user.id
              });
              _context13.next = 9;
              return ordering.setAccessToken(session.token).carts(cardId).confirm(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc17 = _context13.sent;
              _yield$ordering$setAc18 = _yield$ordering$setAc17.content;
              error = _yield$ordering$setAc18.error;
              result = _yield$ordering$setAc18.result;
              cart = _yield$ordering$setAc18.cart;

              if (!error) {
                if (result.status !== 1) {
                  state.carts["businessId:".concat(result.business_id)] = result;
                  events.emit('cart_updated', result);
                } else {
                  delete state.carts["businessId:".concat(result.business_id)];
                }
              } else if (cart) {
                state.carts["businessId:".concat(cart.business_id)] = cart;
                events.emit('cart_updated', cart);
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", {
                error: error,
                result: result
              });

            case 19:
              _context13.prev = 19;
              _context13.t0 = _context13["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", {
                error: true,
                result: [_context13.t0.message]
              });

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[0, 19]]);
    }));

    return function confirmCart(_x15, _x16) {
      return _ref14.apply(this, arguments);
    };
  }();
  /**
   * Reorder an order and get cart
   */


  var reorder = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(orderId) {
      var customerFromLocalStorage, userCustomerId, options, _yield$ordering$setAc19, _yield$ordering$setAc20, error, result;

      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context14.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context14.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              options = {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                },
                query: {
                  user_id: userCustomerId || session.user.id
                }
              };
              _context14.next = 9;
              return ordering.setAccessToken(session.token).orders(orderId).reorder(options);

            case 9:
              _yield$ordering$setAc19 = _context14.sent;
              _yield$ordering$setAc20 = _yield$ordering$setAc19.content;
              error = _yield$ordering$setAc20.error;
              result = _yield$ordering$setAc20.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_added', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context14.abrupt("return", {
                error: error,
                result: result
              });

            case 18:
              _context14.prev = 18;
              _context14.t0 = _context14["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context14.abrupt("return", {
                error: true,
                result: [_context14.t0.message]
              });

            case 22:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[0, 18]]);
    }));

    return function reorder(_x17) {
      return _ref15.apply(this, arguments);
    };
  }();

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      optionsLocalStorage = _useState8[0],
      setOptionsLocalStorage = _useState8[1];

  var getOptionFromLocalStorage = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var options;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return strategy.getItem('options', true);

            case 2:
              options = _context15.sent;
              setOptionsLocalStorage(options);

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function getOptionFromLocalStorage() {
      return _ref16.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (session.loading || languageState.loading) return;

    if (session.auth) {
      refreshOrderOptions();
    }
  }, [session.auth, session.loading, languageState.loading, session === null || session === void 0 ? void 0 : session.user]);
  (0, _react.useEffect)(function () {
    if (session.loading || configState.loading) return;

    if (!session.auth) {
      var _configState$configs2, _configState$configs3;

      getOptionFromLocalStorage();
      setState(_objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        options: {
          type: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.type) || orderTypes[configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.default_order_type) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value],
          moment: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.moment) || null,
          address: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.address) || {}
        }
      }));
    }
  }, [session.auth, session.loading, configState]);
  /**
   * Update carts from sockets
   */

  (0, _react.useEffect)(function () {
    var handleCartUpdate = function handleCartUpdate(cart) {
      if (cart.status === 1) {
        if (state.carts["businessId:".concat(cart.business_id)]) {
          delete state.carts["businessId:".concat(cart.business_id)];
        }
      } else {
        state.carts["businessId:".concat(cart.business_id)] = _objectSpread(_objectSpread({}, state.carts["businessId:".concat(cart.business_id)]), cart);
      }

      setState(_objectSpread({}, state));
    };

    var handleOrderOptionUpdate = function handleOrderOptionUpdate(_ref17) {
      var carts = _ref17.carts,
          options = _objectWithoutProperties(_ref17, _excluded3);

      var newCarts = {};
      carts.forEach(function (cart) {
        newCarts["businessId:".concat(cart.business_id)] = cart;
      });

      var newState = _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), options),
        carts: _objectSpread(_objectSpread({}, state.carts), newCarts)
      });

      setState(_objectSpread({}, newState));
    };

    socket.on('carts_update', handleCartUpdate);
    socket.on('order_options_update', handleOrderOptionUpdate);
    return function () {
      socket.off('carts_update', handleCartUpdate);
      socket.off('order_options_update', handleOrderOptionUpdate);
    };
  }, [state, socket]);
  /**
   * Join to carts room
   */

  (0, _react.useEffect)(function () {
    var _session$user2, _session$user3;

    if (!session.auth || session.loading) return;
    socket.join("carts_".concat(session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id));
    socket.join("orderoptions_".concat(session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id));
    return function () {
      var _session$user4, _session$user5;

      socket.leave("carts_".concat(session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.id));
      socket.leave("orderoptions_".concat(session === null || session === void 0 ? void 0 : (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id));
    };
  }, [socket, session]);
  var functions = {
    refreshOrderOptions: refreshOrderOptions,
    changeAddress: changeAddress,
    changeType: changeType,
    changeMoment: changeMoment,
    addProduct: addProduct,
    removeProduct: removeProduct,
    updateProduct: updateProduct,
    clearCart: clearCart,
    applyCoupon: applyCoupon,
    changeDriverTip: changeDriverTip,
    placeCart: placeCart,
    confirmCart: confirmCart,
    reorder: reorder,
    setAlert: setAlert,
    setConfirm: setConfirm
  };
  var copyState = JSON.parse(JSON.stringify(state));
  return /*#__PURE__*/_react.default.createElement(OrderContext.Provider, {
    value: [copyState, functions]
  }, Alert && /*#__PURE__*/_react.default.createElement(Alert, {
    open: alert.show,
    title: t('ERROR', 'Error'),
    onAccept: function onAccept() {
      return setAlert({
        show: false
      });
    },
    onClose: function onClose() {
      return setAlert({
        show: false
      });
    },
    content: alert.content
  }), children);
};
/**
 * Hook to get and update order state
 */


exports.OrderProvider = OrderProvider;

var useOrder = function useOrder() {
  var orderManager = (0, _react.useContext)(OrderContext);

  var warningMessage = function warningMessage() {
    console.warn('Must use OrderProvider to wrappe the app.');
  };
  /**
   * Functions to avoid fails
   */


  var functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage,
    reorder: warningMessage
  };
  return orderManager || [{}, functionsPlaceholders];
};

exports.useOrder = useOrder;