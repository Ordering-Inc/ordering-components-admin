"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetatils = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage product details edit form behavior without UI component
 */
var ProductDetatils = function ProductDetatils(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      productId = props.productId,
      categoryId = props.categoryId,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

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

  var _useState = (0, _react.useState)({
    loading: false,
    product: null,
    error: null
  }),
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

  var _useState5 = (0, _react.useState)({
    ingredients: {},
    options: {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      productCart = _useState6[0],
      setProductCart = _useState6[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };
  /**
   * Method to get the product from API
   */


  var getProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.businesses(business.id).categories(categoryId).products(productId).get();

            case 4:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                setProductState({
                  loading: false,
                  product: result,
                  error: null
                });
              } else {
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getProduct() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update the product details from API
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {
      var _productState$product, _productState$product2, changes, _yield$ordering$busin3, _yield$ordering$busin4, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
              _context2.next = 6;
              return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 ? void 0 : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.category_id).products(productState === null || productState === void 0 ? void 0 : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.id).save(changes, {
                accessToken: session.token
              });

            case 6:
              _yield$ordering$busin3 = _context2.sent;
              _yield$ordering$busin4 = _yield$ordering$busin3.content;
              error = _yield$ordering$busin4.error;
              result = _yield$ordering$busin4.result;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: error ? formState.changes : {},
                result: result,
                loading: false
              }));

              if (!error) {
                handleSuccessUpdate(result);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
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
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function handleUpdateClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
  * Method to edit a product
  */


  var handleDeleteProduct = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _productState$product3, _productState$product4, _yield$ordering$busin5, _yield$ordering$busin6, error, result, _categories;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context3.next = 5;
              return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt((_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.category_id)).products((_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.id).delete();

            case 5:
              _yield$ordering$busin5 = _context3.sent;
              _yield$ordering$busin6 = _yield$ordering$busin5.content;
              error = _yield$ordering$busin6.error;
              result = _yield$ordering$busin6.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: result
                  }
                }));

                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);

                  _categories.forEach(function iterate(category) {
                    var _productState$product5;

                    if (category.id === ((_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.category_id)) {
                      var _products = category.products.filter(function (_product) {
                        return _product.id !== productState.product.id;
                      });

                      category.products = _toConsumableArray(_products);
                    }

                    Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                  });

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                    categories: _categories
                  }));
                }

                showToast(_ToastContext.ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context3.t0
                }
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function handleDeleteProduct() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to change the product enabled state
   */


  var handleChangeProductActiveState = function handleChangeProductActiveState() {
    var _productState$product6;

    var params = {
      enabled: !(productState !== null && productState !== void 0 && (_productState$product6 = productState.product) !== null && _productState$product6 !== void 0 && _productState$product6.enabled)
    };
    handleUpdateClick(params);
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  /**
   * Update credential data
   * @param {Object} changes Related HTML event
   */


  var handleChangeFormState = function handleChangeFormState(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handlechangeImage = function handlechangeImage(file, isSeo) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, isSeo ? 'seo_image' : 'images', reader.result))
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */


  var initProductCart = function initProductCart(product) {
    var _props$productCart, _props$productCart2, _props$productCart3, _props$productCart4;

    var ingredients = {};

    for (var key in product.ingredients) {
      var ingredient = product.ingredients[key];
      ingredients["id:".concat(ingredient.id)] = {
        selected: true
      };
    }

    var newProductCart = _objectSpread(_objectSpread({}, props.productCart), {}, {
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: ((_props$productCart = props.productCart) === null || _props$productCart === void 0 ? void 0 : _props$productCart.ingredients) || ingredients,
      options: ((_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.options) || {},
      comment: ((_props$productCart3 = props.productCart) === null || _props$productCart3 === void 0 ? void 0 : _props$productCart3.comment) || null,
      quantity: ((_props$productCart4 = props.productCart) === null || _props$productCart4 === void 0 ? void 0 : _props$productCart4.quantity) || 1
    });

    newProductCart.unitTotal = getUnitTotal(newProductCart);
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
    setProductCart(newProductCart);
  };
  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */


  var getUnitTotal = function getUnitTotal(productCart) {
    var _props$product3;

    var subtotal = 0;

    for (var i = 0; i < ((_props$product = props.product) === null || _props$product === void 0 ? void 0 : (_props$product$extras = _props$product.extras) === null || _props$product$extras === void 0 ? void 0 : _props$product$extras.length); i++) {
      var _props$product, _props$product$extras, _props$product2;

      var extra = (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.extras[i];

      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;

        var option = extra.options[j];

        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options$, _productCart$options$2;

          var suboption = option.suboptions[k];

          if ((_productCart$options$ = productCart.options["id:".concat(option.id)]) !== null && _productCart$options$ !== void 0 && (_productCart$options$2 = _productCart$options$.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options$2 !== void 0 && _productCart$options$2.selected) {
            var suboptionState = productCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
            var quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1;
            var price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price;
            subtotal += price * quantity;
          }
        }
      }
    }

    return ((_props$product3 = props.product) === null || _props$product3 === void 0 ? void 0 : _props$product3.price) + subtotal;
  };
  /**
   * Check if option must show
   * @param {object} option Option to check
   */


  var showProductOption = function showProductOption(option) {
    var showOption = true;

    if (option.respect_to) {
      showOption = false;

      if (productCart.options) {
        var options = productCart.options;

        for (var key in options) {
          var _option$suboptions$;

          var _option = options[key];

          if ((_option$suboptions$ = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions$ !== void 0 && _option$suboptions$.selected) {
            showOption = true;
            break;
          }
        }
      }
    }

    return showOption;
  };
  /**
   * Function to update the product state
   */


  var handleSuccessUpdate = function handleSuccessUpdate(updatedProduct) {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
    }));

    if (handleUpdateBusinessState) {
      var _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);

      _categories.forEach(function iterate(category) {
        var _productState$product7;

        if (category.id === ((_productState$product7 = productState.product) === null || _productState$product7 === void 0 ? void 0 : _productState$product7.category_id)) {
          var _products = category.products.map(function (_product) {
            if (_product.id === productState.product.id) {
              return _objectSpread(_objectSpread({}, _product), updatedProduct);
            }

            return _product;
          });

          category.products = _toConsumableArray(_products);
        }

        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });

      var updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
        categories: _categories
      });

      handleUpdateBusinessState(updatedBusiness);
    }
  };

  (0, _react.useEffect)(function () {
    if (props.product) {
      setProductState(_objectSpread(_objectSpread({}, productState), {}, {
        product: props.product
      }));
      initProductCart(props.product);
    } else {
      if (productId && categoryId) {
        getProduct();
      }
    }
  }, [props.product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    productCart: productCart,
    formState: formState,
    cleanFormState: cleanFormState,
    handleChangeProductActiveState: handleChangeProductActiveState,
    handleChangeInput: handleChangeInput,
    handlechangeImage: handlechangeImage,
    handleUpdateClick: handleUpdateClick,
    handleDeleteProduct: handleDeleteProduct,
    showProductOption: showProductOption,
    handleChangeFormState: handleChangeFormState,
    handleSuccessUpdate: handleSuccessUpdate
  })));
};

exports.ProductDetatils = ProductDetatils;
ProductDetatils.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductDetatils.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};