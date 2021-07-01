"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPaymethods = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessPaymethods = function BusinessPaymethods(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      defaultSandboxRequiredGateways = props.defaultSandboxRequiredGateways;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessPaymethodsState = _useState2[0],
      setBusinessPaymethodsState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paymethodsList = _useState4[0],
      setPaymethodsList = _useState4[1];

  var sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr'];

  var _useState5 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionState = _useState6[0],
      setActionState = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      changesState = _useState8[0],
      setChangesState = _useState8[1];
  /**
   * Clean formState
   */


  var cleanChangesState = function cleanChangesState(values) {
    return setChangesState(_objectSpread({}, values));
  };
  /**
   * Method to get paymethods from API
   */


  var getBusinessPaymethods = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: result
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getBusinessPaymethods() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get paymethods from API
   */


  var getAllPaymethods = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(ordering.root, "/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              _yield$response$json2 = _context2.sent;
              result = _yield$response$json2.result;
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: result
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getAllPaymethods() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to create the business paymethod option from API
   * @param {*} paymethodId paymethod id to create
   */


  var handleCreateBusinessPaymentOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(paymethodId) {
      var paymethod, params, requestOptions, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              paymethod = paymethodsList.paymethods.find(function (_paymethod) {
                return _paymethod.id === paymethodId;
              });
              params = {
                enabled: true,
                paymethod_id: paymethodId,
                sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
              };
              _context3.prev = 2;
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
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
              _context3.next = 7;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods"), requestOptions);

            case 7:
              response = _context3.sent;
              _context3.next = 10;
              return response.json();

            case 10:
              content = _context3.sent;

              if (!content.error) {
                setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
                  paymethods: [].concat(_toConsumableArray(businessPaymethodsState.paymethods), [_objectSpread(_objectSpread({}, content.result), {}, {
                    paymethod: paymethod
                  })])
                }));
                setActionState({
                  loading: false,
                  result: {
                    error: false
                  }
                });
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](2);
              setActionState({
                result: {
                  error: true,
                  result: _context3.t0.message
                },
                loading: false
              });

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 14]]);
    }));

    return function handleCreateBusinessPaymentOption(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */


  var handleUpdateBusinessPaymethodOpton = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(paymethodId, options) {
      var requestOptions, response, content, updatedPaymethods;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(options)
              };
              _context4.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(paymethodId), requestOptions);

            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response.json();

            case 8:
              content = _context4.sent;
              setChangesState(content.error ? changesState : {});

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                updatedPaymethods = businessPaymethodsState.paymethods.filter(function (paymethod) {
                  if (paymethod.id === paymethodId) {
                    Object.assign(paymethod, content.result);
                  }

                  return true;
                });
                setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
                  paymethods: updatedPaymethods
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setActionState({
                result: {
                  error: true,
                  result: _context4.t0.message
                },
                loading: false
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleUpdateBusinessPaymethodOpton(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the business paymethod option from API
   * @param {Number} paymethodId id to delete the business paymethod
   */


  var handleDeleteBusinessPaymethodOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(paymethodId) {
      var businessPaymethodId, requestOptions, response, content, updatedPaymethods;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              businessPaymethodId = businessPaymethodsState.paymethods.find(function (paymethod) {
                return paymethod.paymethod_id === paymethodId;
              }).id;
              _context5.prev = 1;
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(businessPaymethodId), requestOptions);

            case 6:
              response = _context5.sent;
              _context5.next = 9;
              return response.json();

            case 9:
              content = _context5.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                updatedPaymethods = businessPaymethodsState.paymethods.filter(function (paymethod) {
                  return paymethod.paymethod_id !== paymethodId;
                });
                setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
                  paymethods: updatedPaymethods
                }));
              }

              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](1);
              setActionState({
                result: {
                  error: true,
                  result: _context5.t0.message
                },
                loading: false
              });

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 13]]);
    }));

    return function handleDeleteBusinessPaymethodOption(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to handle payment enabled state
   * @param {Number} paymethodId id of payment method
   */


  var handleClickPayment = function handleClickPayment(paymethodId) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === paymethodId;
    });

    if (found) {
      var businessPaymethod = businessPaymethodsState.paymethods.find(function (paymethod) {
        return paymethod.paymethod.id === paymethodId;
      });
      handleUpdateBusinessPaymethodOpton(businessPaymethod.id, {
        enabled: !businessPaymethod.enabled
      });
    } else {
      handleCreateBusinessPaymentOption(paymethodId);
    }
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} sandbox value if sandbox data is or not
   */


  var handleChangeInput = function handleChangeInput(e, sandbox) {
    if (sandbox) {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data_sandbox: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data_sandbox), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    } else {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    }
  };
  /**
   * Method to control the sanbox enable state
   */


  var handleChangeSandbox = function handleChangeSandbox() {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      sandbox: !(changesState === null || changesState === void 0 ? void 0 : changesState.sandbox)
    }));
  };
  /**
   * Method to save the form state
   * @param {Number} paymethodId id to save the change state
   */


  var handleSaveClick = function handleSaveClick(paymethodId) {
    var _changes, _changes2;

    var changes = _objectSpread({}, changesState);

    if ((_changes = changes) === null || _changes === void 0 ? void 0 : _changes.data) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data: JSON.stringify(changes.data)
      });
    }

    if ((_changes2 = changes) === null || _changes2 === void 0 ? void 0 : _changes2.data_sandbox) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data_sandbox: JSON.stringify(changes.data_sandbox)
      });
    }

    handleUpdateBusinessPaymethodOpton(paymethodId, changes);
  };

  (0, _react.useEffect)(function () {
    getAllPaymethods();
    getBusinessPaymethods();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessPaymethodsState: businessPaymethodsState,
    paymethodsList: paymethodsList,
    handleClickPayment: handleClickPayment,
    actionState: actionState,
    handleDeleteBusinessPaymethodOption: handleDeleteBusinessPaymethodOption,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  })));
};

exports.BusinessPaymethods = BusinessPaymethods;
BusinessPaymethods.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessPaymethods.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};