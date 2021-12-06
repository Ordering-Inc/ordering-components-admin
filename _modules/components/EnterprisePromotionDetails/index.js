"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDetails = void 0;

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionDetails = function EnterprisePromotionDetails(props) {
  var promotion = props.promotion,
      promotionsList = props.promotionsList,
      UIComponent = props.UIComponent,
      handleSuccessUpdatePromotions = props.handleSuccessUpdatePromotions,
      handleSuccessAddPromotion = props.handleSuccessAddPromotion;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    promotion: promotion,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      promotionState = _useState2[0],
      setPromotionState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionState = _useState6[0],
      setActionState = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isAddMode = _useState8[0],
      setIsAddMode = _useState8[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState() {
    return setFormState({
      loading: false,
      changes: {}
    });
  };
  /**
   * Update business promotion image data
   * @param {File} file Image to change business promotion image
   */


  var handleChangeImage = function handleChangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          image: reader.result
        })
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


  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  /**
   * Update parameter data
   * @param {changes} changes parameters to change
   */


  var handleChangeItem = function handleChangeItem(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };
  /**
   * Method to change the sites
   */


  var handleChangeSites = function handleChangeSites(checked, siteId) {
    var _formState$changes;

    var sites = [];

    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.sites) {
      var _formState$changes2;

      sites = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.sites);
    } else {
      sites = promotion === null || promotion === void 0 ? void 0 : promotion.sites.reduce(function (ids, site) {
        return [].concat(_toConsumableArray(ids), [site.id]);
      }, []);
    }

    if (checked) {
      sites.push(siteId);
    } else {
      sites = sites.filter(function (id) {
        return id !== siteId;
      });
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: sites
      })
    }));
  };
  /**
   * Default fuction for business profile workflow
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, requestOptions, response, content, updatedPromotions;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState({
                loading: true,
                error: null
              });
              changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

              if (changes !== null && changes !== void 0 && changes.schedule) {
                changes.schedule = JSON.stringify(changes.schedule);
              }

              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 8;
              return fetch("".concat(ordering.root, "/offers/").concat(promotion.id), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              content = _context.sent;

              if (!content.error) {
                setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
                  promotion: content.result
                }));
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));

                if (handleSuccessUpdatePromotions) {
                  updatedPromotions = promotionsList.filter(function (_promotion) {
                    if (_promotion.id === promotion.id) {
                      Object.assign(_promotion, content.result);
                    }

                    return true;
                  });
                  handleSuccessUpdatePromotions(updatedPromotions);
                }

                cleanFormState();
                showToast(_ToastContext.ToastType.Success, t('PROMOTION_SAVED', 'Promotion saved'));
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setActionState({
                loading: false,
                error: _context.t0.message
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function handleUpdateClick() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add new promotion from API
   */


  var handleAddPromotion = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState({
                loading: true,
                error: null
              });
              changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

              if (changes !== null && changes !== void 0 && changes.schedule) {
                changes.schedule = JSON.stringify(changes.schedule);
              }

              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 8;
              return fetch("".concat(ordering.root, "/offers"), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                handleSuccessAddPromotion && handleSuccessAddPromotion(content.result);
                showToast(_ToastContext.ToastType.Success, t('PROMOTION_ADDED', 'Promotion added'));
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setActionState({
                loading: false,
                error: _context2.t0.message
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function handleAddPromotion() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (Object.keys(promotion).length === 0) {
      setIsAddMode(true);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          enabled: true,
          auto: false,
          public: true,
          condition_type: 1,
          type: 1,
          target: 1,
          rate_type: 1,
          stackable: false // products: [{ id: 220, is_condition: true }],
          // businesses: [3],
          // categories: [11]

        }
      }));
    } else {
      setIsAddMode(false);
      cleanFormState();
    }

    setPromotionState(_objectSpread(_objectSpread({}, promotionState), {}, {
      promotion: promotion
    }));
  }, [promotion]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: isAddMode,
    promotionState: promotionState,
    formState: formState,
    actionState: actionState,
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion,
    handleChangeItem: handleChangeItem,
    handleChangeSites: handleChangeSites
  })));
};

exports.EnterprisePromotionDetails = EnterprisePromotionDetails;
EnterprisePromotionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
EnterprisePromotionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};