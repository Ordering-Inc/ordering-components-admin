"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

var BusinessDetails = function BusinessDetails(props) {
  var asDashboard = props.asDashboard,
      business = props.business,
      businessId = props.businessId,
      propsToFetch = props.propsToFetch,
      UIComponent = props.UIComponent,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
      handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
      handleSucessAddBusiness = props.handleSucessAddBusiness;

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
    business: null,
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessState = _useState2[0],
      setBusinessState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionStatus = _useState4[0],
      setActionStatus = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      formState = _useState6[0],
      setFormState = _useState6[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };
  /**
   * Method to get business from API
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var fetchEndpoint, _yield$fetchEndpoint$, result, _business2;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              fetchEndpoint = asDashboard ? ordering.setAccessToken(session.token).businesses(businessId).asDashboard() : ordering.setAccessToken(session.token).businesses(businessId).select(propsToFetch);
              _context.next = 5;
              return fetchEndpoint.get();

            case 5:
              _yield$fetchEndpoint$ = _context.sent;
              result = _yield$fetchEndpoint$.content.result;
              _business2 = Array.isArray(result) ? null : result;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                business: _business2
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
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

    return function getBusinesses() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to change business enable/disable
   * @param {Boolean} enabled business enable state
   */


  var handleChangeActiveBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(enabled) {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context2.next = 5;
              return ordering.setAccessToken(session.token).businesses(businessId).save({
                enabled: enabled
              });

            case 5:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: _objectSpread(_objectSpread({}, businessState.business), result)
                }));
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
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

    return function handleChangeActiveBusiness(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete business from API
   */


  var handleDeleteBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: content.error ? content.result : null
              }));

              if (!content.error) {
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_DELETED', 'Business deleted'));
                handleSucessRemoveBusiness && handleSucessRemoveBusiness(businessId);
                props.onClose && props.onClose();
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function handleDeleteBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to duplicate business from API
   */


  var handleDuplicateBusiness = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/duplicate"), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: content.error ? content.result : null
              }));

              if (!content.error) {
                handleSucessAddBusiness && handleSucessAddBusiness(content === null || content === void 0 ? void 0 : content.result);
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_DUPLICATED', 'Business duplicated'));
              }

              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function handleDuplicateBusiness() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to delet the business owner
   */


  var handleDeleteBusinessOwner = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(owners) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, _businessState$busine, _owners, _business;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context5.next = 5;
              return ordering.setAccessToken(session.token).businesses(businessId).save({
                owners: owners
              });

            case 5:
              _yield$ordering$setAc3 = _context5.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                _owners = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.owners.filter(function (owner) {
                  return owners.includes(owner.id);
                });
                _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                  owners: _owners
                });
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: _business
                }));
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_OWNER_DELETED', 'Business owner deleted'));
              }

              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 13]]);
    }));

    return function handleDeleteBusinessOwner(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to delet the business owner
   */


  var handleAddBusinessOwner = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(owners, newOwner) {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _businessState$busine2, _owners, _business;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context6.next = 5;
              return ordering.setAccessToken(session.token).businesses(businessId).save({
                owners: owners
              });

            case 5:
              _yield$ordering$setAc5 = _context6.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: error ? result : null
              }));

              if (!error) {
                _owners = [].concat(_toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.owners), [newOwner]);
                _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                  owners: _owners
                });
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: _business
                }));
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_OWNER_ADDED', 'Business owner added'));
              }

              _context6.next = 16;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context6.t0.message]
              }));

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 13]]);
    }));

    return function handleAddBusinessOwner(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business from the API
   */


  var handleUpdateBusinessClick = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var response;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              _context7.next = 5;
              return ordering.businesses(businessId).save(formState.changes, {
                accessToken: session.token
              });

            case 5:
              response = _context7.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));

              if (!response.content.error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: _objectSpread(_objectSpread({}, businessState.business), response.content.result)
                }));
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
              }

              _context7.next = 13;
              break;

            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context7.t0.message
                },
                loading: false
              }));

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 10]]);
    }));

    return function handleUpdateBusinessClick() {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Method to add the business fields when new busines item is added
   */


  var handleSuccessAddBusinessItem = function handleSuccessAddBusinessItem(name, result) {
    var params = [].concat(_toConsumableArray(businessState === null || businessState === void 0 ? void 0 : businessState.business[name]), [result]);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };
  /**
   * Method to delete the business item from business
   */


  var handleSuccessDeleteBusinessItem = function handleSuccessDeleteBusinessItem(name, id) {
    var params = businessState === null || businessState === void 0 ? void 0 : businessState.business[name].filter(function (item) {
      return item.id !== id;
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };
  /**
   * Method to update the business
   */


  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);

    Object.assign(business, result);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };

  (0, _react.useEffect)(function () {
    if (!(businessState !== null && businessState !== void 0 && businessState.business)) return;
    handleSucessUpdateBusiness && handleSucessUpdateBusiness(businessState === null || businessState === void 0 ? void 0 : businessState.business);
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        loading: false,
        business: business
      }));
    } else {
      getBusinesses();
    }
  }, [businessId, business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessState: businessState,
    formState: formState,
    setFormState: setFormState,
    cleanFormState: cleanFormState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    handleDuplicateBusiness: handleDuplicateBusiness,
    handleDeleteBusiness: handleDeleteBusiness,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem
  })));
};

exports.BusinessDetails = BusinessDetails;
BusinessDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
  * This must be contains businessId to fetch
  */
  businessId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

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
BusinessDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'address', 'alcohol', 'city', 'city_id', 'description', 'delivery_price', 'distance', 'delivery_time', 'enabled', 'featured', 'food', 'gallery', 'groceries', 'header', 'laundry', 'logo', 'location', 'metafields', 'name', 'offers', 'open', 'owners', 'pickup_time', 'reviews', 'schedule', 'slug', 'types']
};