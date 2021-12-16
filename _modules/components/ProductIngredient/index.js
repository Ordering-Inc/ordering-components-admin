"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductIngredient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage product ingredient behavior without UI component
 */
var ProductIngredient = function ProductIngredient(props) {
  var business = props.business,
      product = props.product,
      UIComponent = props.UIComponent,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

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
    product: product,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productState = _useState2[0],
      setProductState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      changesState = _useState4[0],
      setChangesState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAddMode = _useState6[0],
      setIsAddMode = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      editIngredientId = _useState8[0],
      setEditIngredientId = _useState8[1];
  /**
   * Method to change the ingredient name
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e, ingredientId) {
    setEditIngredientId(ingredientId);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  /**
   * Method to save the new ingredient from API
   */


  var handleAddIngredient = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, requestOptions, response, content, ingredients, updatedProduct, categories, updatedBusiness;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Object.keys(changesState).length === 0)) {
                _context.next = 3;
                break;
              }

              setIsAddMode(false);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              changes = {
                business_id: business === null || business === void 0 ? void 0 : business.id,
                category_id: product === null || product === void 0 ? void 0 : product.category_id,
                product_id: product === null || product === void 0 ? void 0 : product.id
              };
              changes = _objectSpread(_objectSpread({}, changes), changesState);
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 11;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(product === null || product === void 0 ? void 0 : product.category_id, "/products/").concat(product.id, "/ingredients"), requestOptions);

            case 11:
              response = _context.sent;
              _context.next = 14;
              return response.json();

            case 14:
              content = _context.sent;

              if (!content.error) {
                setChangesState({});
                setIsAddMode(false);

                if (productState !== null && productState !== void 0 && productState.product.ingredients) {
                  ingredients = [].concat(_toConsumableArray(productState === null || productState === void 0 ? void 0 : productState.product.ingredients), [content.result]);
                } else {
                  ingredients = [content.result];
                }

                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  ingredients: ingredients
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  loading: false,
                  product: updatedProduct
                }));

                if (handleUpdateBusinessState) {
                  categories = business.categories.map(function (item) {
                    if (item.id === parseInt(product === null || product === void 0 ? void 0 : product.category_id)) {
                      var _products = item.products.map(function (prod) {
                        if (prod.id === (product === null || product === void 0 ? void 0 : product.id)) {
                          Object.assign(prod, updatedProduct);
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

                showToast(_ToastContext.ToastType.Success, t('INGREDIENT_SAVED', 'Ingredient saved'));
              }

              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 18]]);
    }));

    return function handleAddIngredient() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to save the new ingredient from API
   */


  var handleUpdateIngredient = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, requestOptions, response, content, ingredients, updatedProduct, categories, updatedBusiness;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              changes = {
                business_id: business === null || business === void 0 ? void 0 : business.id,
                category_id: product === null || product === void 0 ? void 0 : product.category_id,
                product_id: product === null || product === void 0 ? void 0 : product.id
              };
              changes = _objectSpread(_objectSpread({}, changes), changesState);
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 8;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(product === null || product === void 0 ? void 0 : product.category_id, "/products/").concat(product.id, "/ingredients/").concat(editIngredientId), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;

              if (!content.error) {
                setChangesState({});
                ingredients = productState === null || productState === void 0 ? void 0 : productState.product.ingredients.filter(function (ingredient) {
                  if (ingredient.id === editIngredientId) {
                    Object.assign(ingredient, content.result);
                  }

                  return true;
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  ingredients: ingredients
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  loading: false,
                  product: updatedProduct
                }));

                if (handleUpdateBusinessState) {
                  categories = business.categories.map(function (item) {
                    if (item.id === parseInt(product === null || product === void 0 ? void 0 : product.category_id)) {
                      var _products = item.products.map(function (prod) {
                        if (prod.id === (product === null || product === void 0 ? void 0 : product.id)) {
                          Object.assign(prod, updatedProduct);
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

                showToast(_ToastContext.ToastType.Success, t('INGREDIENT_SAVED', 'Ingredient saved'));
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function handleUpdateIngredient() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the product ingredient
   * @param {Number} ingredientId id to delete the ingredient
   */


  var handleDeleteIngredient = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(ingredientId) {
      var requestOptions, response, content, ingredients, updatedProduct, categories, updatedBusiness;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(product === null || product === void 0 ? void 0 : product.category_id, "/products/").concat(product.id, "/ingredients/").concat(ingredientId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                ingredients = productState === null || productState === void 0 ? void 0 : productState.product.ingredients.filter(function (ingredient) {
                  return ingredient.id !== ingredientId;
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  ingredients: ingredients
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  loading: false,
                  product: updatedProduct
                }));

                if (handleUpdateBusinessState) {
                  categories = business.categories.map(function (item) {
                    if (item.id === parseInt(product === null || product === void 0 ? void 0 : product.category_id)) {
                      var _products = item.products.map(function (prod) {
                        if (prod.id === (product === null || product === void 0 ? void 0 : product.id)) {
                          Object.assign(prod, updatedProduct);
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

                showToast(_ToastContext.ToastType.Success, t('INGREDIENT_DELETED', 'Ingredient deleted'));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeleteIngredient(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to open the ingredient add form
   */


  var handleOpenAddForm = function handleOpenAddForm() {
    setIsAddMode(true);
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(changesState).length > 0 && !isAddMode && editIngredientId) {
      handleUpdateIngredient();
    }
  }, [changesState, isAddMode, editIngredientId]);
  (0, _react.useEffect)(function () {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: product
    }));
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    changesState: changesState,
    isAddMode: isAddMode,
    handleChangeInput: handleChangeInput,
    handleOpenAddForm: handleOpenAddForm,
    handleDeleteIngredient: handleDeleteIngredient,
    handleAddIngredient: handleAddIngredient
  })));
};

exports.ProductIngredient = ProductIngredient;
ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product ingredient
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product ingredient
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product ingredient
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product ingredient
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductIngredient.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};