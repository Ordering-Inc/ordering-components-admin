"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWebhooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
 * Component to manage Busness webhook behavior without UI component
 */
var BusinessWebhooks = function BusinessWebhooks(props) {
  var UIComponent = props.UIComponent,
      business = props.business,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];
  /**
   * Default fuction to add a webhook
   */


  var handleUpdateAddClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content, _webhooks;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formState.changes)
              };
              _context.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/webhooks"), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              content = _context.sent;

              if (!(content !== null && content !== void 0 && content.error)) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: {},
                  result: content,
                  loading: false
                }));
                _webhooks = _toConsumableArray(business.webhooks);

                _webhooks.push(content === null || content === void 0 ? void 0 : content.result);

                handleSuccessUpdate && handleSuccessUpdate(_objectSpread(_objectSpread({}, business), {}, {
                  webhooks: _toConsumableArray(_webhooks)
                }));
                showToast(_ToastContext.ToastType.Success, t('WEBHOOK_ADDED', 'Webhook added'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: formState.changes,
                  result: content,
                  loading: false
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleUpdateAddClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChangeDelay = function handleChangeDelay(value, webhook) {
    var changes = _objectSpread(_objectSpread({}, webhook), {}, {
      delay: value
    });

    updateWebhook(changes, webhook === null || webhook === void 0 ? void 0 : webhook.id);
  };
  /**
   * Function to update a webhook
   */


  var updateWebhook = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(changes, id) {
      var requestOptions, response, content, _business$webhooks, _webhooks;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/webhooks/").concat(id), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!(content !== null && content !== void 0 && content.error)) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  result: content,
                  loading: false
                }));
                _webhooks = business === null || business === void 0 ? void 0 : (_business$webhooks = business.webhooks) === null || _business$webhooks === void 0 ? void 0 : _business$webhooks.map(function (webhook) {
                  var _content$result;

                  if (webhook.id === (content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.id)) {
                    var _content$result2;

                    return _objectSpread(_objectSpread({}, webhook), {}, {
                      delay: content === null || content === void 0 ? void 0 : (_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.delay
                    });
                  }

                  return webhook;
                });
                handleSuccessUpdate && handleSuccessUpdate(_objectSpread(_objectSpread({}, business), {}, {
                  webhooks: _toConsumableArray(_webhooks)
                }));
                showToast(_ToastContext.ToastType.Success, t('WEBHOOK_UPDATED', 'Webhook updated'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  result: content,
                  loading: false
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function updateWebhook(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * fuction to delete a webhook
   */


  var handleDeleteWebhook = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(id) {
      var requestOptions, response, content, _business$webhooks2, _webhooks, _business;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/webhooks/").concat(id), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!(content !== null && content !== void 0 && content.error)) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false
                }));
                _webhooks = business === null || business === void 0 ? void 0 : (_business$webhooks2 = business.webhooks) === null || _business$webhooks2 === void 0 ? void 0 : _business$webhooks2.filter(function (item) {
                  return item.id !== id;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  webhooks: _toConsumableArray(_webhooks)
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('WEBHOOK_DELETED', 'Webhook deleted'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  result: content,
                  loading: false
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context3.t0.message
                },
                loading: false
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeleteWebhook(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Update webhook data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update webhook data
   * @param {string} value selected data from select
   * @param {string} name current hook name
   */


  var handleChangeSelect = function handleChangeSelect(value, name) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, value))
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessTypeFormState: formState,
    handleChangeInput: handleChangeInput,
    handleChangeSelect: handleChangeSelect,
    hookFormState: formState,
    handleUpdateAddClick: handleUpdateAddClick,
    handleDeleteWebhook: handleDeleteWebhook,
    handleChangeDelay: handleChangeDelay
  })));
};

exports.BusinessWebhooks = BusinessWebhooks;
BusinessWebhooks.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object for a business
   */
  business: _propTypes.default.object,

  /**
   * Function to set a business state
   */
  handleSuccessUpdate: _propTypes.default.func,

  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessWebhooks.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};