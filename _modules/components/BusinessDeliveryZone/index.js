"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZone = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

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

var BusinessDeliveryZone = function BusinessDeliveryZone(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
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
    zones: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessDeliveryZonesState = _useState2[0],
      setBusinessDeliveryZonesState = _useState2[1];

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

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      zoneId = _useState6[0],
      setZoneId = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isEdit = _useState10[0],
      setIsEdit = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isAddMode = _useState12[0],
      setIsAddMode = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isAddValid = _useState14[0],
      setIsAddValid = _useState14[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState() {
    return setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  };
  /**
   * Method to update the business delivery zone from API
   */


  var handleUpdateBusinessDeliveryZone = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var currentChanges, requestOptions, response, content, zones, _business;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              currentChanges = _objectSpread({}, formState.changes);
              currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
                data: JSON.stringify(formState.changes.data)
              });
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
                body: JSON.stringify(currentChanges)
              };
              _context.next = 8;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/deliveryzones/").concat(zoneId), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              content = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: content.result,
                loading: false
              }));

              if (!content.error) {
                zones = businessDeliveryZonesState.zones.filter(function (zone) {
                  if (zone.id === zoneId) {
                    Object.assign(zone, content.result);
                  }

                  return true;
                });
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, businessDeliveryZonesState), {}, {
                  loading: false,
                  zones: zones
                }));
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_SAVED', 'Delivery zone saved'));
              } else {
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, setBusinessDeliveryZonesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function handleUpdateBusinessDeliveryZone() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add new business delivery zone from API
   */


  var handleAddBusinessDeliveryZone = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _formState$changes, currentChanges, requestOptions, response, content, zones, _business;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              currentChanges = _objectSpread({}, formState.changes);
              currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
                data: JSON.stringify(formState.changes.data),
                type: ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.type) || 2,
                enabled: true,
                schedule: JSON.stringify([{
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }])
              });
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
                body: JSON.stringify(currentChanges)
              };
              _context2.next = 8;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/deliveryzones"), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: content.result,
                loading: false
              }));

              if (!content.error) {
                props.onClose && props.onClose();
                setIsAddMode(false);
                setIsAddValid(false);
                zones = [].concat(_toConsumableArray(businessDeliveryZonesState.zones), [content.result]);
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, businessDeliveryZonesState), {}, {
                  loading: false,
                  zones: zones
                }));
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_ADDED', 'Delivery zone added'));
              } else {
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, setBusinessDeliveryZonesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function handleAddBusinessDeliveryZone() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */


  var handleDeleteBusinessDeliveryZone = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(zoneId) {
      var requestOptions, response, content, zones, _business;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, businessDeliveryZonesState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/deliveryzones/").concat(zoneId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                zones = businessDeliveryZonesState.zones.filter(function (zone) {
                  return zone.id !== zoneId;
                });
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, businessDeliveryZonesState), {}, {
                  loading: false,
                  zones: zones
                }));
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_DELETED', 'Business delivery zone deleted'));
              } else {
                setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, setBusinessDeliveryZonesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, setBusinessDeliveryZonesState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeleteBusinessDeliveryZone(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to change the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */


  var handleChangeActiveState = function handleChangeActiveState(zoneId) {
    setZoneId(zoneId);
    var businessZone = businessDeliveryZonesState.zones.find(function (zone) {
      return zone.id === zoneId;
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        enabled: !businessZone.enabled
      })
    }));
  };
  /**
   * Method to change the business dleivey zone name, price, minimum
   * @param {EventTarget} e Related HTML event
   * @param {Number} zoneId id of business dleivery zone
   */


  var handleChangeInput = function handleChangeInput(e, zoneId) {
    setZoneId(zoneId);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  /**
   * Method to change the zone type
   * @param {Number} type zone type
   * @param {Number} zoneId id of business dleivery zone
   */


  var handleZoneType = function handleZoneType(type, zoneId) {
    setZoneId(zoneId);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        type: type
      })
    }));
  };
  /**
   * Method to change the zone type
   * @param {Object || Array} data zone type
   * @param {Number} zoneId id of business dleivery zone
   */


  var handleChangeZoneData = function handleChangeZoneData(data, zoneId) {
    setZoneId(zoneId);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        data: data
      })
    }));
  };

  (0, _react.useEffect)(function () {
    var _formState$changes2, _formState$changes3, _formState$changes4;

    if (!Object.keys(formState.changes).length) return;

    if (((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name) === '' || ((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.minimum) === '' || ((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.price) === '') {
      var _formState$changes5, _formState$changes6, _formState$changes7;

      setErrors({
        name: ((_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) === '',
        minimum: ((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.minimum) === '',
        price: ((_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.price) === ''
      });
    } else {
      if (!(isAddMode || isEdit)) {
        handleUpdateBusinessDeliveryZone();
      }
    }
  }, [formState.changes, isAddMode, isEdit]);
  (0, _react.useEffect)(function () {
    if (business === null || business === void 0 ? void 0 : business.zones) {
      setBusinessDeliveryZonesState(_objectSpread(_objectSpread({}, businessDeliveryZonesState), {}, {
        zones: business === null || business === void 0 ? void 0 : business.zones
      }));
    }
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    businessDeliveryZonesState: businessDeliveryZonesState,
    handleChangeInput: handleChangeInput,
    handleChangeActiveState: handleChangeActiveState,
    handleDeleteBusinessDeliveryZone: handleDeleteBusinessDeliveryZone,
    errors: errors,
    setErrors: setErrors,
    cleanErrors: function cleanErrors() {
      return setErrors({});
    },
    handleZoneType: handleZoneType,
    handleChangeZoneData: handleChangeZoneData,
    isEdit: isEdit,
    setIsEdit: setIsEdit,
    isAddMode: isAddMode,
    setIsAddMode: setIsAddMode,
    isAddValid: isAddValid,
    setIsAddValid: setIsAddValid,
    handleUpdateBusinessDeliveryZone: handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone: handleAddBusinessDeliveryZone,
    cleanFormState: cleanFormState
  })));
};

exports.BusinessDeliveryZone = BusinessDeliveryZone;
BusinessDeliveryZone.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessDeliveryZone.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};