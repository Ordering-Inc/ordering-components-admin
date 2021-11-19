"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductExtraOptionDetails = function ProductExtraOptionDetails(props) {
  var UIComponent = props.UIComponent,
      business = props.business,
      extra = props.extra,
      option = props.option,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)({
    option: option,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      optionState = _useState2[0],
      setOptionState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    changes: {},
    result: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      changesState = _useState4[0],
      setChangesState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      editSubOptionId = _useState6[0],
      setEditSubOptionId = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      editErrors = _useState8[0],
      setEditErrors = _useState8[1];

  var _useState9 = (0, _react.useState)({
    changes: {},
    loading: false,
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      settingChangeState = _useState10[0],
      setSettingChangeState = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      conditionalOptions = _useState12[0],
      setConditionalOptions = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      conditionalSubOptions = _useState14[0],
      setConditionalSubOptions = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      conditionalOptionId = _useState16[0],
      setConditionalOptionId = _useState16[1];

  var _useState17 = (0, _react.useState)(extra),
      _useState18 = _slicedToArray(_useState17, 2),
      extraState = _useState18[0],
      setExtraState = _useState18[1];

  var _useState19 = (0, _react.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      conditionalSubOptionId = _useState20[0],
      setConditionalSubOptionId = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      isAddMode = _useState22[0],
      setIsAddMode = _useState22[1];
  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} id sub option id
   */


  var handleChangeInput = function handleChangeInput(e, id) {
    if (id === null) setIsAddMode(true);else setIsAddMode(false);

    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: _defineProperty({}, e.target.name, e.target.value)
      });
    }
  };
  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   * @param {Number} id sub option id
   */


  var handleChangeSubOptionEnable = function handleChangeSubOptionEnable(enabled, id) {
    if (id === null) setIsAddMode(true);else setIsAddMode(false);

    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
          enabled: enabled
        })
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      });
    }
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handleChangeSubOptionImage = function handleChangeSubOptionImage(file, id) {
    if (id === null) setIsAddMode(true);else setIsAddMode(false);
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    if (id === editSubOptionId) {
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
            image: reader.result
          })
        });
      };
    } else {
      setEditSubOptionId(id);

      reader.onload = function () {
        setChangesState({
          result: {},
          changes: {
            image: reader.result
          }
        });
      };
    }

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Method to update the business state
   * @param {Object} updatedExtra updated extra
   */


  var handleSuccessUpdateBusiness = function handleSuccessUpdateBusiness(updatedExtra) {
    if (handleUpdateBusinessState) {
      var updatedExtras = business.extras.filter(function (extra) {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra);
        }

        return true;
      });

      var businessState = _objectSpread(_objectSpread({}, business), {}, {
        extras: updatedExtras
      });

      var categories = businessState.categories.map(function (item) {
        var _products = item.products.map(function (prod) {
          var _extras = prod.extras.filter(function (extra) {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra);
            }

            return true;
          });

          return _objectSpread(_objectSpread({}, prod), {}, {
            extras: _extras
          });
        });

        var _item = _objectSpread(_objectSpread({}, item), {}, {
          products: _products
        });

        return _item;
      });

      var updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
        categories: categories
      });

      handleUpdateBusinessState(updatedBusiness);
    }
  };

  var handleSetConditionalOptions = function handleSetConditionalOptions(updatedExtra) {
    var extracedOptions = updatedExtra.options.filter(function (item) {
      return item.id !== option.id;
    });
    var _conditionalOptions = [];

    var _iterator = _createForOfIteratorHelper(extracedOptions),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var optionItem = _step.value;

        _conditionalOptions.push({
          value: optionItem.id,
          content: optionItem.name
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setConditionalOptions(_conditionalOptions);
  };

  var handleSetConditionalSubOptions = function handleSetConditionalSubOptions(updatedExtra, optionId) {
    var selectedOption = updatedExtra.options.find(function (item) {
      return item.id === optionId;
    });
    var _conditionalSubOptions = [];

    var _iterator2 = _createForOfIteratorHelper(selectedOption.suboptions),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var subOption = _step2.value;

        _conditionalSubOptions.push({
          value: subOption.id,
          content: subOption.name
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    setConditionalSubOptions(_conditionalSubOptions);
  };

  var handleSetDefaultCondition = function handleSetDefaultCondition(respectTo) {
    var _iterator3 = _createForOfIteratorHelper(extraState === null || extraState === void 0 ? void 0 : extraState.options),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;

        if (item !== null && item !== void 0 && item.suboptions) {
          var _iterator4 = _createForOfIteratorHelper(item.suboptions),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var subItem = _step4.value;

              if (subItem.id === respectTo) {
                setConditionalOptionId(item.id);
                setConditionalSubOptionId(subItem.id);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  /**
   * Method to save the new ingredient from API
   */


  var handleUpdateSubOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _changes, changes, key, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _changes = _objectSpread({}, changesState.changes);
              changes = {};

              for (key in _changes) {
                if (_changes[key] !== '') {
                  changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
                }
              }

              if (!(Object.keys(changes).length === 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
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
              _context.next = 10;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat(editSubOptionId), requestOptions);

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              content = _context.sent;
              setChangesState({
                changes: content.error ? changesState : {},
                result: content === null || content === void 0 ? void 0 : content.result
              });

              if (!content.error) {
                subOptions = optionState.option.suboptions.filter(function (subOption) {
                  if (subOption.id === content.result.id) {
                    Object.assign(subOption, content.result);
                  }

                  return true;
                });
                updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                  suboptions: subOptions
                });
                setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                  option: updatedOption,
                  loading: false
                }));
                options = extra.options.filter(function (option) {
                  if (option.id === updatedOption.id) {
                    Object.assign(option, updatedOption);
                  }

                  return true;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                  options: options
                });
                setExtraState(updatedExtra);
                handleSuccessUpdateBusiness(updatedExtra);
              }

              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function handleUpdateSubOption() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add new option from API
   */


  var handleAddOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _changes3, _changes4, _changes, changes, key, _changes5, _changes6, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _changes = _objectSpread({}, changesState.changes);
              changes = {};

              for (key in _changes) {
                if (_changes[key] !== '') {
                  changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
                }
              }

              if (!(!((_changes3 = changes) !== null && _changes3 !== void 0 && _changes3.name) || !((_changes4 = changes) !== null && _changes4 !== void 0 && _changes4.price))) {
                _context2.next = 7;
                break;
              }

              setEditErrors({
                name: !((_changes5 = changes) !== null && _changes5 !== void 0 && _changes5.name),
                price: !((_changes6 = changes) !== null && _changes6 !== void 0 && _changes6.price)
              });
              return _context2.abrupt("return");

            case 7:
              if (!(Object.keys(changes).length === 0)) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return");

            case 9:
              changes.enabled = true;
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
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
              _context2.next = 14;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions"), requestOptions);

            case 14:
              response = _context2.sent;
              _context2.next = 17;
              return response.json();

            case 17:
              content = _context2.sent;
              setChangesState({
                changes: content.error ? changesState : {},
                result: content === null || content === void 0 ? void 0 : content.result
              });

              if (!content.error) {
                subOptions = _toConsumableArray(optionState.option.suboptions);
                subOptions.push(content.result);
                updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                  suboptions: subOptions
                });
                setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                  option: updatedOption,
                  loading: false
                }));
                options = extra.options.filter(function (option) {
                  if (option.id === updatedOption.id) {
                    Object.assign(option, updatedOption);
                  }

                  return true;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                  options: options
                });
                setExtraState(updatedExtra);
                handleSuccessUpdateBusiness(updatedExtra);
              }

              _context2.next = 25;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](0);
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 22]]);
    }));

    return function handleAddOption() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the extra
   * @param {Number} subOptionId
   */


  var handleDeteteSubOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(subOptionId) {
      var requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat(subOptionId), requestOptions);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              content = _context3.sent;

              if (!content.error) {
                subOptions = optionState.option.suboptions.filter(function (subOption) {
                  return subOption.id !== subOptionId;
                });
                updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                  suboptions: subOptions
                });
                setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                  option: updatedOption,
                  loading: false
                }));
                options = extra.options.filter(function (option) {
                  if (option.id === updatedOption.id) {
                    Object.assign(option, updatedOption);
                  }

                  return true;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                  options: options
                });
                setExtraState(updatedExtra);
                handleSuccessUpdateBusiness(updatedExtra);
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function handleDeteteSubOption(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to handle the option setting
   * @param {String} name setting name
   * @param {Boolean} checked check state of option setting
   */


  var handleOptionSetting = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(name, checked) {
      var change;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              change = _defineProperty({}, name, checked);
              setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
                changes: change
              }));
              handleUpdateOption(change);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleOptionSetting(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to save the option from API
   * @param {Object} change
   */


  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(change) {
      var requestOptions, response, content, options, updatedExtra;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(change)
              };
              _context5.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id), requestOptions);

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();

            case 8:
              content = _context5.sent;

              if (!content.error) {
                setSettingChangeState({
                  changes: content.error ? settingChangeState.changes : {},
                  loading: false
                });
                setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                  option: _objectSpread(_objectSpread({}, optionState.option), content.result)
                }));
                options = extra.options.filter(function (option) {
                  if (option.id === content.result.id) {
                    Object.assign(option, content.result);
                  }

                  return true;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                  options: options
                });
                setExtraState(updatedExtra);
                handleSuccessUpdateBusiness(updatedExtra);
              }

              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
                loading: false,
                error: _context5.t0.message
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function handleUpdateOption(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to change the conditional option
   * @param {Number} optionId
   */


  var handleChangeConditionalOption = function handleChangeConditionalOption(optionId) {
    setConditionalOptionId(optionId);
    handleSetConditionalSubOptions(extraState, optionId);
  };
  /**
   * Method to change the conditional option
   * @param {Number} subOptionId
   */


  var handleChangeConditionalSubOption = function handleChangeConditionalSubOption(subOptionId) {
    handleUpdateOption({
      respect_to: subOptionId
    });
  };

  (0, _react.useEffect)(function () {
    if (conditionalOptionId) {
      handleSetConditionalOptions(extraState);
      handleSetConditionalSubOptions(extraState, conditionalOptionId);
      var selectedOption = extraState.options.find(function (item) {
        return item.id === option.id;
      });
      handleSetDefaultCondition(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.respect_to);
    }
  }, [extraState, conditionalOptionId]);
  (0, _react.useEffect)(function () {
    var _changesState$changes, _changesState$changes2;

    if (!Object.keys(changesState.changes).length) return;

    if ((changesState === null || changesState === void 0 ? void 0 : (_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.name) === '' || (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.price) === '') {
      var _changesState$changes3, _changesState$changes4;

      setEditErrors({
        name: (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes3 = changesState.changes) === null || _changesState$changes3 === void 0 ? void 0 : _changesState$changes3.name) === '',
        price: (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.price) === ''
      });
    } else {
      if (!isAddMode) {
        handleUpdateSubOption();
      }
    }
  }, [changesState, isAddMode]);
  (0, _react.useEffect)(function () {
    setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
      option: option
    }));
    handleSetConditionalOptions(extra);
    handleSetDefaultCondition(option === null || option === void 0 ? void 0 : option.respect_to);
  }, [option]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    optionState: optionState,
    changesState: changesState,
    editSubOptionId: editSubOptionId,
    editErrors: editErrors,
    settingChangeState: settingChangeState,
    handleChangeInput: handleChangeInput,
    handleChangeSubOptionImage: handleChangeSubOptionImage,
    handleChangeSubOptionEnable: handleChangeSubOptionEnable,
    handleDeteteSubOption: handleDeteteSubOption,
    handleOptionSetting: handleOptionSetting,
    conditionalOptions: conditionalOptions,
    conditionalSubOptions: conditionalSubOptions,
    conditionalOptionId: conditionalOptionId,
    conditionalSubOptionId: conditionalSubOptionId,
    handleChangeConditionalOption: handleChangeConditionalOption,
    handleChangeConditionalSubOption: handleChangeConditionalSubOption,
    handleAddOption: handleAddOption
  })));
};

exports.ProductExtraOptionDetails = ProductExtraOptionDetails;
ProductExtraOptionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product extra option details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product extra option details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtraOptionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};