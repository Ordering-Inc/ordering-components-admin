"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSharedMenuProductDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _ToastContext = require("../../contexts/ToastContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessSharedMenuProductDetails = function BusinessSharedMenuProductDetails(props) {
  var menu = props.menu,
      product = props.product,
      UIComponent = props.UIComponent,
      business = props.business,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

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
    error: null,
    product: product || {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productState = _useState2[0],
      setProductState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      timeoutState = _useState6[0],
      setTimeoutState = _useState6[1];
  /**
   * Method to update the business shared menu product
   * @param {Object} changes changes to update
   */


  var handleUpdateBusinessSharedMenuProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(changes) {
      var requestOptions, response, content, updatedProduct, menusShared, _business;

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
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menu.id, "/products/").concat(product.id), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              content = _context.sent;

              if (!content.error) {
                updatedProduct = _objectSpread({}, content.result);
                delete updatedProduct.id;
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
                }));
                menusShared = business.menus_shared.filter(function (sharedMenu) {
                  var products = sharedMenu.products.map(function (_product) {
                    if (_product.id === product.id) {
                      return Object.assign(_product, updatedProduct);
                    }

                    return _product;
                  });
                  sharedMenu.products = _toConsumableArray(products);
                  return true;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  menus_shared: menusShared
                });
                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
                setFormState({
                  loading: false,
                  changes: {},
                  error: null
                });
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.resulut
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleUpdateBusinessSharedMenuProduct(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update extra state
   * @param {Number} extraId extra id
   * @param {Boolean} enabled enabled state
   */


  var handleUpdateExtra = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(extraId, enabled) {
      var requestOptions, response, content, updatedExtras, updatedProduct, menusShared, _business;

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
                body: JSON.stringify({
                  enabled: enabled
                })
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menu.id, "/extras/").concat(extraId), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                updatedExtras = productState.product.extras.filter(function (extra) {
                  if (extra.id === extraId) {
                    extra.enabled = enabled;
                  }

                  return true;
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  extras: updatedExtras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
                }));
                menusShared = business.menus_shared.filter(function (sharedMenu) {
                  var products = sharedMenu.products.map(function (_product) {
                    if (_product.id === product.id) {
                      return Object.assign(_product, updatedProduct);
                    }

                    return _product;
                  });
                  sharedMenu.products = _toConsumableArray(products);
                  return true;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  menus_shared: menusShared
                });
                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
                setFormState({
                  loading: false,
                  changes: {},
                  error: null
                });
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.resulut
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleUpdateExtra(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to update option state
   * @param {Number} optionId option id
   * @param {Boolean} enabled enabled state
   */


  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(optionId, enabled) {
      var requestOptions, response, content, updatedExtras, updatedProduct, menusShared, _business;

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
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  enabled: enabled
                })
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menu.id, "/options/").concat(optionId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                updatedExtras = productState.product.extras.filter(function (extra) {
                  var options = extra.options.map(function (option) {
                    if (option.id === optionId) {
                      return _objectSpread(_objectSpread({}, option), {}, {
                        enabled: enabled
                      });
                    }

                    return option;
                  });
                  extra.options = _toConsumableArray(options);
                  return true;
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  extras: updatedExtras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
                }));
                menusShared = business.menus_shared.filter(function (sharedMenu) {
                  var products = sharedMenu.products.map(function (_product) {
                    if (_product.id === product.id) {
                      return Object.assign(_product, updatedProduct);
                    }

                    return _product;
                  });
                  sharedMenu.products = _toConsumableArray(products);
                  return true;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  menus_shared: menusShared
                });
                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
                setFormState({
                  loading: false,
                  changes: {},
                  error: null
                });
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.resulut
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
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

    return function handleUpdateOption(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to update suboption state
   * @param {Number} suboptionId suboption id
   * @param {Boolean} enabled enabled state
   */


  var handleUpdateSuboption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(suboptionId, enabled) {
      var requestOptions, response, content, updatedExtras, updatedProduct, menusShared, _business;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
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
                body: JSON.stringify({
                  enabled: enabled
                })
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menu.id, "/suboptions/").concat(suboptionId), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                updatedExtras = productState.product.extras.filter(function (extra) {
                  var options = extra.options.filter(function (option) {
                    var suboptions = option.suboptions.map(function (suboption) {
                      if (suboption.id === suboptionId) {
                        return _objectSpread(_objectSpread({}, suboption), {}, {
                          enabled: enabled
                        });
                      }

                      return suboption;
                    });
                    option.suboptions = _toConsumableArray(suboptions);
                    return true;
                  });
                  extra.options = _toConsumableArray(options);
                  return true;
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  extras: updatedExtras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
                }));
                menusShared = business.menus_shared.filter(function (sharedMenu) {
                  var products = sharedMenu.products.map(function (_product) {
                    if (_product.id === product.id) {
                      return Object.assign(_product, updatedProduct);
                    }

                    return _product;
                  });
                  sharedMenu.products = _toConsumableArray(products);
                  return true;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  menus_shared: menusShared
                });
                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
                setFormState({
                  loading: false,
                  changes: {},
                  error: null
                });
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.resulut
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleUpdateSuboption(_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleChangeInput = function handleChangeInput(e) {
    e.persist();
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
    clearTimeout(timeoutState);
    setTimeoutState(setTimeout(function () {
      handleUpdateBusinessSharedMenuProduct(_defineProperty({}, e.target.name, e.target.value));
    }, 750));
  };

  var handleChangeItem = function handleChangeItem(itemChange) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), itemChange)
    }));
    handleUpdateBusinessSharedMenuProduct(itemChange);
  };

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {},
      error: null
    }));
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: product || {}
    }));
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    formState: formState,
    handleUpdateBusinessSharedMenuProduct: handleUpdateBusinessSharedMenuProduct,
    handleChangeInput: handleChangeInput,
    handleChangeItem: handleChangeItem,
    handleUpdateExtra: handleUpdateExtra,
    handleUpdateOption: handleUpdateOption,
    handleUpdateSuboption: handleUpdateSuboption
  })));
};

exports.BusinessSharedMenuProductDetails = BusinessSharedMenuProductDetails;
BusinessSharedMenuProductDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business shared menu product details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after business shared menu product details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before business shared menu product details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after business shared menu product details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessSharedMenuProductDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};