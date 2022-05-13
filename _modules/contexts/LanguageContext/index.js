"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLanguage = exports.LanguageProvider = exports.LanguageContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../ApiContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
var LanguageContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */

exports.LanguageContext = LanguageContext;

var LanguageProvider = function LanguageProvider(_ref) {
  var _state$language4;

  var children = _ref.children,
      strategy = _ref.strategy;

  var _useState = (0, _react.useState)({
    loading: true,
    dictionary: {},
    languageList: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
  /**
   * Load language from localstorage and set state or load default language
   */


  var setLanguageFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var language;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return strategy.getItem('language', true);

            case 2:
              language = _context.sent;

              if (language) {
                setState(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    language: language
                  });
                });
                apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setLanguageFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 2),
      ordering = _useApi2[0],
      apiHelper = _useApi2[1];

  var refreshTranslations = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$trans, _yield$ordering$trans2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context2.next = 4;
              return ordering.translations().asDictionary().get();

            case 4:
              _yield$ordering$trans = _context2.sent;
              _yield$ordering$trans2 = _yield$ordering$trans.content;
              error = _yield$ordering$trans2.error;
              result = _yield$ordering$trans2.result;
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  loading: false,
                  dictionary: error ? {} : result
                });
              });
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  loading: false
                });
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function refreshTranslations() {
      return _ref3.apply(this, arguments);
    };
  }();

  var setLanguage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(language) {
      var _state$language;

      var _yield$ordering$langu, _yield$ordering$langu2, error, result, defaultLanguage, _languageList;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!language || language.id === ((_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.id))) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return ordering.languages(language.id).save({
                default: true
              });

            case 5:
              _yield$ordering$langu = _context3.sent;
              _yield$ordering$langu2 = _yield$ordering$langu.content;
              error = _yield$ordering$langu2.error;
              result = _yield$ordering$langu2.result;

              if (error) {
                _context3.next = 16;
                break;
              }

              defaultLanguage = {
                id: result.id,
                code: result.code,
                rtl: result.rtl
              };
              _context3.next = 13;
              return strategy.setItem('language', defaultLanguage, true);

            case 13:
              _languageList = state.languageList.filter(function (_language) {
                if (_language.id === language.id) {
                  Object.assign(_language, language);
                }

                return true;
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                language: defaultLanguage,
                languageList: _languageList
              }));
              apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);

            case 16:
              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](2);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 21:
              location.reload();

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 18]]);
    }));

    return function setLanguage(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var refreshLanguages = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$ordering$langu3, _yield$ordering$langu4, error, result, _defaultLanguage, defaultLanguage;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context4.next = 4;
              return ordering.languages().get();

            case 4:
              _yield$ordering$langu3 = _context4.sent;
              _yield$ordering$langu4 = _yield$ordering$langu3.content;
              error = _yield$ordering$langu4.error;
              result = _yield$ordering$langu4.result;

              if (error) {
                _context4.next = 15;
                break;
              }

              _defaultLanguage = result.find(function (language) {
                return language.default;
              });
              defaultLanguage = {
                id: _defaultLanguage.id,
                code: _defaultLanguage.code,
                rtl: _defaultLanguage.rtl
              };
              _context4.next = 13;
              return strategy.setItem('language', defaultLanguage, true);

            case 13:
              apiHelper.setLanguage(defaultLanguage === null || defaultLanguage === void 0 ? void 0 : defaultLanguage.code);
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  loading: false,
                  language: defaultLanguage,
                  languageList: result
                });
              });

            case 15:
              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 17]]);
    }));

    return function refreshLanguages() {
      return _ref5.apply(this, arguments);
    };
  }();

  var updateLanguageListState = function updateLanguageListState(updatedLanguage) {
    var _languageList = state.languageList.filter(function (language) {
      if (language.id === updatedLanguage.id) {
        Object.assign(language, updatedLanguage);
      }

      return true;
    });

    setState(_objectSpread(_objectSpread({}, state), {}, {
      languageList: _languageList
    }));
  };
  /**
   * Refresh translation when change language from ordering
   */


  (0, _react.useEffect)(function () {
    var _state$language2, _state$language3;

    if (!(ordering !== null && ordering !== void 0 && ordering.project)) return;

    if ((_state$language2 = state.language) !== null && _state$language2 !== void 0 && _state$language2.code && ((_state$language3 = state.language) === null || _state$language3 === void 0 ? void 0 : _state$language3.code) === ordering.language) {
      refreshTranslations();
    }
  }, [(_state$language4 = state.language) === null || _state$language4 === void 0 ? void 0 : _state$language4.code, ordering === null || ordering === void 0 ? void 0 : ordering.project, ordering.language]);
  (0, _react.useEffect)(function () {
    setLanguageFromLocalStorage();
    if (!(ordering !== null && ordering !== void 0 && ordering.project)) return;
    refreshLanguages();
  }, [ordering === null || ordering === void 0 ? void 0 : ordering.language, ordering === null || ordering === void 0 ? void 0 : ordering.project]);

  var t = function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (state === null || state === void 0 ? void 0 : state.dictionary) && Object.keys(state === null || state === void 0 ? void 0 : state.dictionary).length > 0 && state.dictionary[key] || fallback || key;
  };

  var functions = {
    setLanguage: setLanguage,
    updateLanguageListState: updateLanguageListState,
    refreshTranslations: refreshTranslations
  };
  return /*#__PURE__*/_react.default.createElement(LanguageContext.Provider, {
    value: [state, t, functions]
  }, children);
};
/**
 * Hook to get and update language state
 */


exports.LanguageProvider = LanguageProvider;

var useLanguage = function useLanguage() {
  var languageManager = (0, _react.useContext)(LanguageContext);
  return languageManager || [{}, function (key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return fallback || key;
  }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }))];
};

exports.useLanguage = useLanguage;