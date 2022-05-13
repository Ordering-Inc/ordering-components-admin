"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

var PointsWalletBusinessList = function PointsWalletBusinessList(props) {
  var UIComponent = props.UIComponent,
      pointWallet = props.pointWallet,
      propsToFetch = props.propsToFetch,
      handleUpdateWalletBusiness = props.handleUpdateWalletBusiness,
      handleAddWalletBusiness = props.handleAddWalletBusiness,
      handleDeleteWalletBusiness = props.handleDeleteWalletBusiness,
      setSelectedBusinessList = props.setSelectedBusinessList;

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
    loading: true,
    error: null,
    businesses: [],
    pagination: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessList = _useState2[0],
      setBusinessList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionState = _useState4[0],
      setActionState = _useState4[1];
  /**
   * Update business data
   * @param {Number} businessId id of business
   * @param {String} name name of business
   * @param {Boolean} name status of checkbox
   */


  var handleCheckBox = function handleCheckBox(businessId, name, checked) {
    var changes = _defineProperty({}, name, checked);

    if (!pointWallet) {
      handleUpdateBusinessList(businessId, changes);
    } else {
      updateLoyalty(businessId, changes);
    }
  };
  /**
   * Update business data
   * @param {Number} businessId id of business
   * @param {String} name name of business
   * @param {Boolean} name status of checkbox
   */


  var handleChangeSwitch = function handleChangeSwitch(businessId, checked) {
    if (!pointWallet) {
      var updatedBusinesses = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.map(function (business) {
        if (businessId === business.id) {
          return _objectSpread(_objectSpread({}, business), {}, {
            wallet_enabled: checked
          });
        }

        return business;
      });
      setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
        businesses: updatedBusinesses
      }));
      return;
    }

    if (checked) {
      var _businessList$busines;

      var selectedBusiness = businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.find(function (business) {
        return business.id === businessId;
      });

      if (selectedBusiness) {
        var data = {
          business_id: businessId,
          redeems: selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.redeems,
          accumulates: selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.accumulates,
          loyalty_plan_id: pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id
        };
        addLoyaltyBusiness(data);
      }
    } else {
      deleteLoyaltyBusiness(businessId);
    }
  };
  /**
   * Method to update the business list
   */


  var handleUpdateBusinessList = function handleUpdateBusinessList(id, changes) {
    var businesses = businessList.businesses.map(function (business) {
      if (business.id === id) {
        return _objectSpread(_objectSpread({}, business), changes);
      }

      return business;
    });
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to update business status
   */


  var handleUpdateBusinessState = function handleUpdateBusinessState(result, enabled) {
    var businesses = businessList.businesses.map(function (business) {
      if (business.id === result.business_id) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, business), {}, {
          wallet_enabled: enabled
        }, !enabled && {
          redeems: false
        }), !enabled && {
          accumulates: false
        }), !enabled && {
          redemption_rate: null
        }), !enabled && {
          accumulation_rate: null
        });
      }

      return business;
    });
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to update the loyalty data
   */


  var updateLoyalty = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(businessId, changes) {
      var requestOptions, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
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
              _context.next = 6;
              return fetch("".concat(ordering.root, "/loyalty_plans/").concat(pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id, "/businesses/").concat(businessId), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('WALLET_BUSINESS_UPDATED', 'Wallet business updated'));
                setActionState({
                  loading: false,
                  error: null
                });
                handleUpdateWalletBusiness && handleUpdateWalletBusiness(result);
                handleUpdateBusinessList(businessId, changes);
              } else {
                setActionState({
                  loading: false,
                  error: result
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

    return function updateLoyalty(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add the loyalty business data
   */


  var addLoyaltyBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(data) {
      var requestOptions, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(data)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/loyalty_plans/").concat(pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id, "/businesses"), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('WALLET_BUSINESS_ENABLED', 'Wallet business enabled'));
                setActionState({
                  loading: false,
                  error: null
                });
                handleAddWalletBusiness && handleAddWalletBusiness(result);
                handleUpdateBusinessState(result, true);
              } else {
                setActionState({
                  loading: false,
                  error: result
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

    return function addLoyaltyBusiness(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the loyalty business data
   */


  var deleteLoyaltyBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(businessId) {
      var requestOptions, response, _yield$response$json3, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
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
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/loyalty_plans/").concat(pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id, "/businesses/").concat(businessId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('WALLET_BUSINESS_DISABLED', 'Wallet business disabled'));
                setActionState({
                  loading: false,
                  error: null
                });
                handleDeleteWalletBusiness && handleDeleteWalletBusiness(result);
                handleUpdateBusinessState(result, false);
              } else {
                setActionState({
                  loading: false,
                  error: result
                });
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              setActionState({
                loading: false,
                error: _context3.t0.message
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }));

    return function deleteLoyaltyBusiness(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get business types from API
   */


  var getBusinessTypes = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _businessList;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              fetchEndpoint = ordering.businesses().asDashboard().select(propsToFetch);
              _context4.next = 5;
              return fetchEndpoint.get();

            case 5:
              _yield$fetchEndpoint$ = _context4.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              error = _yield$fetchEndpoint$2.error;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;

              if (!error) {
                _businessList = [];
                _businessList = result.map(function (business) {
                  var walletBusiness = pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.businesses.find(function (item) {
                    return item.business_id === business.id;
                  });

                  if (walletBusiness) {
                    return _objectSpread(_objectSpread({}, business), {}, {
                      redeems: walletBusiness === null || walletBusiness === void 0 ? void 0 : walletBusiness.redeems,
                      accumulates: walletBusiness === null || walletBusiness === void 0 ? void 0 : walletBusiness.accumulates,
                      wallet_enabled: true,
                      redemption_rate: walletBusiness === null || walletBusiness === void 0 ? void 0 : walletBusiness.redemption_rate,
                      accumulation_rate: walletBusiness === null || walletBusiness === void 0 ? void 0 : walletBusiness.accumulation_rate,
                      loyalty_plan_id: pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id
                    });
                  }

                  return _objectSpread(_objectSpread({}, business), {}, {
                    redeems: false,
                    accumulates: false,
                    wallet_enabled: false,
                    loyalty_plan_id: pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.id,
                    redemption_rate: null,
                    accumulation_rate: null
                  });
                });
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  businesses: _businessList,
                  pagination: pagination
                }));
              } else {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context4.t0 || (_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.toString()) || (_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message)]
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function getBusinessTypes() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var controller = new AbortController();
    getBusinessTypes();
    return controller.abort();
  }, []);
  (0, _react.useEffect)(function () {
    setSelectedBusinessList(_toConsumableArray(businessList === null || businessList === void 0 ? void 0 : businessList.businesses));
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.businesses]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessList: businessList,
    handleCheckBox: handleCheckBox,
    handleUpdateBusinessList: handleUpdateBusinessList,
    handleChangeSwitch: handleChangeSwitch
  })));
};

exports.PointsWalletBusinessList = PointsWalletBusinessList;
PointsWalletBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * pointWallet, this must be contains an object
   */
  pointWallet: _propTypes.default.object,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

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
PointsWalletBusinessList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
};