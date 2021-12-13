"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductProperties = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage product properties behavior without UI component
 */
var ProductProperties = function ProductProperties(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      product = props.product,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      setFormTaxState = props.setFormTaxState,
      formTaxState = props.formTaxState,
      taxes = props.taxes,
      setTaxes = props.setTaxes;

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

  var _useState = (0, _react.useState)(product),
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

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      formTaxChanges = _useState6[0],
      setFormTaxChanges = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      taxToEdit = _useState8[0],
      setTaxToEdit = _useState8[1];

  var _useState9 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      alertState = _useState10[0],
      setAlertState = _useState10[1];
  /**
   * Method to update the product details from API
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {
      var changes, _yield$ordering$busin, _yield$ordering$busin2, error, result, categories, updatedBusiness;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
              _context.next = 6;
              return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 ? void 0 : productState.category_id).products(productState === null || productState === void 0 ? void 0 : productState.id).save(changes, {
                accessToken: session.token
              });

            case 6:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                setProductState(_objectSpread(_objectSpread({}, productState), result));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  changes: {}
                }));

                if (handleUpdateBusinessState) {
                  categories = business.categories.map(function (item) {
                    if (item.id === parseInt(product === null || product === void 0 ? void 0 : product.category_id)) {
                      var _products = item.products.map(function (prod) {
                        if (prod.id === (product === null || product === void 0 ? void 0 : product.id)) {
                          Object.assign(prod, result);
                        }

                        return prod;
                      });

                      return _objectSpread(_objectSpread({}, item), {}, {
                        products: _products
                      });
                    }

                    return item;
                  });
                  updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                    categories: categories
                  });
                  handleUpdateBusinessState(updatedBusiness);
                }

                showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
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

    return function handleUpdateClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to change the product peroperty
   */


  var handleClickProperty = function handleClickProperty(key, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, key, value))
    }));
  };

  var handleChangeTax = function handleChangeTax(name, value) {
    setFormTaxChanges(_objectSpread(_objectSpread({}, formTaxChanges), {}, _defineProperty({}, name, value)));
  };

  var handleSaveTax = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, inheritTax) {
      var _result;

      var result, response, _yield$response$json, tax, _response, _yield$_response$json, _tax;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!id) {
                _context2.next = 14;
                break;
              }

              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              _context2.next = 4;
              return fetch("".concat(ordering.root, "/taxes/").concat(id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.auth)
                },
                body: JSON.stringify(_objectSpread({}, formTaxChanges))
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context2.sent;
              tax = _yield$response$json.result;
              result = tax;
              setTaxes(_objectSpread(_objectSpread({}, taxes), {}, _defineProperty({}, "id:".concat(tax.id), {
                name: tax.name,
                description: tax.description,
                id: tax.id,
                rate: tax.rate,
                type: tax.type
              })));
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_TAX_SAVED', 'Product tax saved'));
              _context2.next = 24;
              break;

            case 14:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              _context2.next = 17;
              return fetch("".concat(ordering.root, "/taxes"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.auth)
                },
                body: JSON.stringify(inheritTax || formTaxChanges)
              });

            case 17:
              _response = _context2.sent;
              _context2.next = 20;
              return _response.json();

            case 20:
              _yield$_response$json = _context2.sent;
              _tax = _yield$_response$json.result;
              setTaxes(_objectSpread(_objectSpread({}, taxes), {}, _defineProperty({}, "id:".concat(_tax.id), {
                name: _tax.name,
                description: _tax.description,
                id: _tax.id,
                rate: _tax.rate,
                type: _tax.type
              })));
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_TAX_ADDED', 'Product tax added'));

            case 24:
              if (!((_result = result) === null || _result === void 0 ? void 0 : _result.error)) {
                _context2.next = 26;
                break;
              }

              return _context2.abrupt("return");

            case 26:
              setTaxToEdit(null);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSaveTax(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDeleteTax = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(id) {
      var response, _yield$response$json2, error, newTaxes;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
                loading: true
              }));

              if (!id) {
                _context3.next = 12;
                break;
              }

              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              _context3.next = 5;
              return fetch("".concat(ordering.root, "/taxes/").concat(id), {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.auth)
                }
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              _yield$response$json2 = _context3.sent;
              error = _yield$response$json2.error;

              if (!error) {
                newTaxes = taxes;
                delete newTaxes["id:".concat(id)];
                setTaxes(newTaxes);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_TAX_DELETED', 'Product tax deleted'));
              }

              setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
                loading: false
              }));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleDeleteTax(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setProductState(product);
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    taxes: taxes,
    formTaxState: formTaxState,
    taxToEdit: taxToEdit,
    alertState: alertState,
    setAlertState: setAlertState,
    formState: formState,
    handleClickProperty: handleClickProperty,
    handleChangeTax: handleChangeTax,
    setTaxToEdit: setTaxToEdit,
    handleSaveTax: handleSaveTax,
    handleDeleteTax: handleDeleteTax,
    handleUpdateClick: handleUpdateClick
  })));
};

exports.ProductProperties = ProductProperties;
ProductProperties.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product properties
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product properties
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product properties
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product properties
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductProperties.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};