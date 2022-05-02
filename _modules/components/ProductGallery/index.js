"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductGallery = void 0;

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
 * Component to manage product extras behavior without UI component
 */
var ProductGallery = function ProductGallery(props) {
  var UIComponent = props.UIComponent,
      business = props.business,
      categoryId = props.categoryId,
      product = props.product,
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
    loading: false,
    gallery: [],
    photos: [],
    videos: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productGalleryState = _useState2[0],
      setProductGalleryState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    changes: {},
    itemId: null,
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      changesState = _useState4[0],
      setChangesState = _useState4[1];
  /**
   * Method to get the product gallery from API
   */


  var getProductGallery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content, photos, videos;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                photos = content.result.filter(function (item) {
                  return item.type === 1;
                });
                videos = content.result.filter(function (item) {
                  return item.type === 2;
                });
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  loading: false,
                  gallery: content.result,
                  photos: photos,
                  videos: videos
                }));
              } else {
                setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getProductGallery() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add new product gallery from API
   * @param {Object} params
   */


  var handleAddProductGalleryItem = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {
      var requestOptions, response, content, _content$result, _content$result2, gallery, updatedProduct;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: true
              }));
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(params)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery"), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  changes: {}
                }));
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_ADDED', 'Product gallery item added'));
                gallery = [].concat(_toConsumableArray(productGalleryState.gallery), [content.result]);

                if (((_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.type) === 1) {
                  setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                    gallery: gallery,
                    photos: [].concat(_toConsumableArray(productGalleryState.photos), [content.result])
                  }));
                }

                if (((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.type) === 2) {
                  setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                    gallery: gallery,
                    videos: [].concat(_toConsumableArray(productGalleryState.videos), [content.result])
                  }));
                }

                updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                  gallery: gallery
                });
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
              } else {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
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

    return function handleAddProductGalleryItem(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Medthod to update the product gallery from API
   */


  var handleUpdateProductGallery = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content, _content$result3, _content$result4, gallery, photos, videos, updatedProduct;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: true
              }));
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changesState === null || changesState === void 0 ? void 0 : changesState.changes)
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery/").concat(changesState === null || changesState === void 0 ? void 0 : changesState.itemId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  changes: {}
                }));
                gallery = productGalleryState.gallery.filter(function (item) {
                  if (item.id === content.result.id) {
                    Object.assign(item, content.result);
                  }

                  return true;
                });

                if (((_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.type) === 1) {
                  photos = productGalleryState.photos.filter(function (item) {
                    if (item.id === content.result.id) {
                      Object.assign(item, content.result);
                    }

                    return true;
                  });
                  setProductGalleryState(_objectSpread(_objectSpread({}, setProductGalleryState), {}, {
                    gallery: gallery,
                    photos: photos
                  }));
                }

                if (((_content$result4 = content.result) === null || _content$result4 === void 0 ? void 0 : _content$result4.type) === 2) {
                  videos = productGalleryState.videos.filter(function (item) {
                    if (item.id === content.result.id) {
                      Object.assign(item, content.result);
                    }

                    return true;
                  });
                  setProductGalleryState(_objectSpread(_objectSpread({}, setProductGalleryState), {}, {
                    gallery: gallery,
                    videos: videos
                  }));
                }

                updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                  gallery: gallery
                });
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_SAVED', 'Product gallery item saved'));
              } else {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
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

    return function handleUpdateProductGallery() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the product gallery item from API
   * @param {Number} itemId
   * @param {Number} type if photo or video
   */


  var handleDeteteProductGalleryItem = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(itemId, type) {
      var requestOptions, response, content, gallery, photos, videos, updatedProduct;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: true
              }));
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(categoryId, "/products/").concat(product.id, "/gallery/").concat(itemId), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  changes: {}
                }));
                gallery = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.gallery.filter(function (item) {
                  return item.id !== itemId;
                });

                if (type === 1) {
                  photos = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.photos.filter(function (photo) {
                    return photo.id !== itemId;
                  });
                  setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                    gallery: gallery,
                    photos: photos
                  }));
                }

                if (type === 2) {
                  videos = productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.videos.filter(function (video) {
                    return video.id !== itemId;
                  });
                  setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
                    gallery: gallery,
                    videos: videos
                  }));
                }

                updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                  gallery: gallery
                });
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
                showToast(_ToastContext.ToastType.Success, t('PRODUCT_GALLERY_ITEM_DELETED', 'Product gallery item deleted'));
              } else {
                setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
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

    return function handleDeteteProductGalleryItem(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Update product photo data
   * @param {File} file Image to change business photo
   */


  var handleChangeImage = function handleChangeImage(file, itemId) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        changes: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.changes), {}, {
          file: reader.result
        }),
        itemId: itemId
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var timeout = null;

  var handleChangeInput = function handleChangeInput(e, itemId) {
    if (!itemId) {
      handleChangeState(e, itemId);
      return;
    }

    e.persist();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      handleChangeState(e, itemId);
    }, 1000);
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeState = function handleChangeState(e, itemId) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value)),
      itemId: itemId
    }));
  };
  /**
   * Method to add new product from changes
   */


  var handleAddGalleryProduct = function handleAddGalleryProduct(_type) {
    var params = _objectSpread(_objectSpread({}, changesState.changes), {}, {
      type: _type
    });

    handleAddProductGalleryItem(params);
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0 || !(changesState !== null && changesState !== void 0 && changesState.itemId)) return;
    handleUpdateProductGallery();
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes]);
  (0, _react.useEffect)(function () {
    if (product !== null && product !== void 0 && product.gallery) {
      var photos = product === null || product === void 0 ? void 0 : product.gallery.filter(function (item) {
        return item.type === 1;
      });
      var videos = product === null || product === void 0 ? void 0 : product.gallery.filter(function (item) {
        return item.type === 2;
      });
      setProductGalleryState(_objectSpread(_objectSpread({}, productGalleryState), {}, {
        loading: false,
        gallery: product.gallery,
        photos: photos,
        videos: videos
      }));
    } else {
      getProductGallery();
    }
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productGalleryState: productGalleryState,
    changesState: changesState,
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleAddGalleryProduct: handleAddGalleryProduct,
    handleDeteteProductGalleryItem: handleDeteteProductGalleryItem
  })));
};

exports.ProductGallery = ProductGallery;
ProductGallery.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product gallery
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product gallery
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductGallery.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};