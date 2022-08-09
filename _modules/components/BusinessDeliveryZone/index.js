"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var BusinessDeliveryZone = function BusinessDeliveryZone(props) {
  var business = props.business,
      zone = props.zone,
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
    zone: zone
  }),
      _useState2 = _slicedToArray(_useState, 2),
      zoneState = _useState2[0],
      setZoneState = _useState2[1];

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
      kmlData = _useState6[0],
      setKmlData = _useState6[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState() {
    return setFormState({
      loading: false,
      changes: {},
      error: null
    });
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
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/deliveryzones/").concat(zone.id), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              content = _context.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  changes: {}
                }));
                zones = business.zones.filter(function (_zone) {
                  if ((_zone === null || _zone === void 0 ? void 0 : _zone.id) === zone.id) {
                    Object.assign(zone, content.result);
                  }

                  return true;
                });
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_SAVED', 'Delivery zone saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
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
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/deliveryzones"), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: {},
                  loading: false
                }));
                zones = [].concat(_toConsumableArray(business.zones), [content.result]);
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_ADDED', 'Delivery zone added'));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                error: _context2.t0.message,
                loading: false
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content, zones, _business;

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
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/deliveryzones/").concat(zone.id), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                zones = business.zones.filter(function (_zone) {
                  return (_zone === null || _zone === void 0 ? void 0 : _zone.id) !== zone.id;
                });
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false
                }));
                _business = _objectSpread(_objectSpread({}, business), {}, {
                  zones: zones
                });
                handleSuccessUpdate && handleSuccessUpdate(_business);
                showToast(_ToastContext.ToastType.Success, t('DELIVERYZONE_DELETED', 'Business delivery zone deleted'));
                props.onClose && props.onClose();
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
                error: [_context3.t0.message]
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeleteBusinessDeliveryZone() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to change the business dleivey zone name, price, minimum
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  /**
   * Method to change the form state
   * @param {Object} updatedChange changes to update
   */


  var handleChangeFormState = function handleChangeFormState(updatedChange) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), updatedChange)
    }));
  };

  var handleUploadKmlFiles = function handleUploadKmlFiles(files) {
    if (files.length === 1) {
      var reader = new window.FileReader();
      reader.readAsText(files[0]);

      reader.onload = function () {
        extractGoogleCoords(reader.result);
      };

      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };

  var extractGoogleCoords = function extractGoogleCoords(plainText) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(plainText, 'text/xml');
    var googlePolygons = [];
    var placeMarkName = '';

    if (xmlDoc.documentElement.nodeName === 'kml') {
      var _iterator = _createForOfIteratorHelper(xmlDoc.getElementsByTagName('Placemark')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
          var polygons = item.getElementsByTagName('Polygon');

          var _iterator2 = _createForOfIteratorHelper(polygons),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var polygon = _step2.value;
              var coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
              coords = coords.replace(/\n/g, ' ').replace(/\s+/g, ' ');
              var points = coords.split(' ');
              var googlePolygonsPaths = [];

              var _iterator3 = _createForOfIteratorHelper(points),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var point = _step3.value;
                  var coord = point.split(',');
                  googlePolygonsPaths.push({
                    lat: +coord[1],
                    lng: +coord[0]
                  });
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              googlePolygons.push(googlePolygonsPaths);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        error: t('INVALID_KML_FILE', 'Invalid KML file')
      }));
    }

    if (googlePolygons.length === 1) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          type: 2,
          name: placeMarkName,
          data: googlePolygons[0]
        })
      }));
      setKmlData(googlePolygons[0]);
    } else {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        error: t('INVALID_KML_FILE', 'Invalid KML file')
      }));
    }
  };

  (0, _react.useEffect)(function () {
    cleanFormState();
    setZoneState({
      zone: zone
    });
  }, [zone]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    zoneState: zoneState,
    formState: formState,
    kmlData: kmlData,
    handleChangeInput: handleChangeInput,
    handleChangeFormState: handleChangeFormState,
    handleDeleteBusinessDeliveryZone: handleDeleteBusinessDeliveryZone,
    handleUpdateBusinessDeliveryZone: handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone: handleAddBusinessDeliveryZone,
    handleUploadKmlFiles: handleUploadKmlFiles
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