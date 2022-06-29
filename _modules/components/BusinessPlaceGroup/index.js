"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPlaceGroup = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessPlaceGroup = function BusinessPlaceGroup(props) {
  var UIComponent = props.UIComponent,
      placeGroup = props.placeGroup,
      businessId = props.businessId,
      handleSuccessAddPlaceGroup = props.handleSuccessAddPlaceGroup,
      handleSuccessUpdatePlaceGroup = props.handleSuccessUpdatePlaceGroup,
      handleSuccessDeletePlaceGroup = props.handleSuccessDeletePlaceGroup,
      handleUpdateSelectedPlaceGroup = props.handleUpdateSelectedPlaceGroup;

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
    loading: false,
    places: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      placeList = _useState2[0],
      setPlaceList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
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

  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, _defineProperty({}, e.target.name, e.target.value));

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: currentChanges
    }));
  };
  /**
  * Method to add the campaign in the campaign list
  * @param {Object} result campaign to add
  */


  var handleSuccessAddPlace = function handleSuccessAddPlace(result) {
    var places = [].concat(_toConsumableArray(placeList.places), [result]);
    setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
      places: places
    }));
  };
  /**
   * Method to update the place list
   */


  var handleSuccessUpdatePlace = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(result) {
      var _placeList$places;

      var updatedPlaceList;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              updatedPlaceList = placeList === null || placeList === void 0 ? void 0 : (_placeList$places = placeList.places) === null || _placeList$places === void 0 ? void 0 : _placeList$places.map(function (place) {
                if ((result === null || result === void 0 ? void 0 : result.id) === (place === null || place === void 0 ? void 0 : place.id)) {
                  return _objectSpread(_objectSpread({}, place), result);
                }

                return place;
              });
              setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
                places: updatedPlaceList
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSuccessUpdatePlace(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to delete place
   */


  var handleSuccessDeletePlace = function handleSuccessDeletePlace(placeId) {
    var _placeList$places2;

    var updatedPlaceList = placeList === null || placeList === void 0 ? void 0 : (_placeList$places2 = placeList.places) === null || _placeList$places2 === void 0 ? void 0 : _placeList$places2.filter(function (place) {
      return place.id !== placeId;
    });
    setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
      places: updatedPlaceList
    }));
  };

  var getMultiPlaceCheckStatus = function getMultiPlaceCheckStatus() {
    var isChecked = true;
    placeList.places.forEach(function (placeGroup) {
      if (!placeGroup.enabled) isChecked = false;
    });
    return isChecked;
  };
  /**
   * Method to add new place group from API
   */


  var handleAddPlaceGroup = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formState === null || formState === void 0 ? void 0 : formState.changes)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/place_groups"), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));
                handleSuccessAddPlaceGroup && handleSuccessAddPlaceGroup(_objectSpread(_objectSpread({}, content.result), {}, {
                  enabled: true
                }));
                showToast(_ToastContext.ToastType.Success, t('PLACE_ADDED', 'Place added'));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleAddPlaceGroup() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Function to update place group data
   */


  var handleUpdatePlaceGroup = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formState === null || formState === void 0 ? void 0 : formState.changes)
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/place_groups/").concat(placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));
                handleUpdateSelectedPlaceGroup && handleUpdateSelectedPlaceGroup(content.result);
                handleSuccessUpdatePlaceGroup && handleSuccessUpdatePlaceGroup(content.result);
                showToast(_ToastContext.ToastType.Success, t('PLACE_SAVED', 'Place saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
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

    return function handleUpdatePlaceGroup() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete a place group
   */


  var handleDeletePlaceGroup = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/place_groups/").concat(placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                handleSuccessDeletePlaceGroup && handleSuccessDeletePlaceGroup(placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id);
                showToast(_ToastContext.ToastType.Success, t('PLACE_DELETED', 'Place deleted'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleDeletePlaceGroup() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Function to get placeList from API
   */


  var getPlaceList = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var requestOptions, response, content, _placesList;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context5.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/places"), requestOptions);

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();

            case 8:
              content = _context5.sent;
              _placesList = content === null || content === void 0 ? void 0 : content.result.filter(function (item) {
                return item.place_group_id === (placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id);
              });

              if (!content.error) {
                setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
                  loading: false,
                  places: _placesList
                }));
              } else {
                setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
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

    return function getPlaceList() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Function to update place data
   */


  var handleChangePlaceEnabled = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(placeId, changes, isMulti) {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
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
              _context6.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/places/").concat(placeId), requestOptions);

            case 6:
              response = _context6.sent;
              _context6.next = 9;
              return response.json();

            case 9:
              content = _context6.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: null
                }));
                !isMulti && handleSuccessUpdatePlace(content.result);
                showToast(_ToastContext.ToastType.Success, t('OPTION_UPDATED', 'Option updated'));
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context6.next = 16;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: _context6.t0.message
              }));

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 13]]);
    }));

    return function handleChangePlaceEnabled(_x2, _x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleMultiPlaceChangeEnabled = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var _placeList$places3;

      var allPromise, isChecked, updatedPlaceList;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              allPromise = [];
              isChecked = getMultiPlaceCheckStatus();
              placeList.places.forEach(function (place) {
                allPromise.push(new Promise(function (resolve, reject) {
                  resolve(handleChangePlaceEnabled(place.id, {
                    enabled: !isChecked
                  }, true));
                }));
              });
              _context7.next = 5;
              return Promise.all(allPromise);

            case 5:
              updatedPlaceList = placeList === null || placeList === void 0 ? void 0 : (_placeList$places3 = placeList.places) === null || _placeList$places3 === void 0 ? void 0 : _placeList$places3.map(function (place) {
                return _objectSpread(_objectSpread({}, place), {}, {
                  enabled: !isChecked
                });
              });
              setPlaceList(_objectSpread(_objectSpread({}, placeList), {}, {
                places: updatedPlaceList
              }));

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleMultiPlaceChangeEnabled() {
      return _ref7.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
    if (placeGroup) getPlaceList();
  }, [placeGroup === null || placeGroup === void 0 ? void 0 : placeGroup.id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    placeList: placeList,
    handleChangeInput: handleChangeInput,
    handleAddPlaceGroup: handleAddPlaceGroup,
    handleUpdatePlaceGroup: handleUpdatePlaceGroup,
    handleDeletePlaceGroup: handleDeletePlaceGroup,
    handleSuccessAddPlace: handleSuccessAddPlace,
    handleSuccessUpdatePlace: handleSuccessUpdatePlace,
    handleSuccessDeletePlace: handleSuccessDeletePlace,
    handleChangePlaceEnabled: handleChangePlaceEnabled,
    getMultiPlaceCheckStatus: getMultiPlaceCheckStatus,
    handleMultiPlaceChangeEnabled: handleMultiPlaceChangeEnabled
  })));
};

exports.BusinessPlaceGroup = BusinessPlaceGroup;
BusinessPlaceGroup.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before delivery zones
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after delivery zones
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessPlaceGroup.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};