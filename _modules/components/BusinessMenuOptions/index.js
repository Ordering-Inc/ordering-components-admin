"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessMenuOptions = function BusinessMenuOptions(props) {
  var business = props.business,
      menu = props.menu,
      UIComponent = props.UIComponent,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)({
    loading: false,
    error: null,
    menu: menu || {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessMenuState = _useState2[0],
      setBusinessMenuState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      orderTypeState = _useState6[0],
      setOrderTypeSate = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedProductsIds = _useState8[0],
      setSelectedProductsIds = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedCopyDays = _useState10[0],
      setSelectedCopyDays = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      schedule = _useState12[0],
      setSchedule = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      openAddScheduleIndex = _useState14[0],
      setOpenAddScheduleInex = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isConflict = _useState16[0],
      setIsConflict = _useState16[1];

  var _useState17 = (0, _react.useState)({
    open: {
      hour: 0,
      minute: 0
    },
    close: {
      hour: 23,
      minute: 59
    }
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      addScheduleTime = _useState18[0],
      setAddScheduleTime = _useState18[1];
  /**
   * Clean selectedCopyDays
   */


  var cleanSelectedCopyDays = function cleanSelectedCopyDays() {
    return setSelectedCopyDays([]);
  };
  /**
   * Update business menu name and comment
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */


  var handleCheckOrderType = function handleCheckOrderType(orderType) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, orderType, !orderTypeState[orderType]))
    }));
    setOrderTypeSate(_objectSpread(_objectSpread({}, orderTypeState), {}, _defineProperty({}, orderType, !orderTypeState[orderType])));
  };
  /**
   * Method to control category selection
   * @param {*} categoryId category id
   */


  var handleClickCategory = function handleClickCategory(categoryId) {
    var businessCategoryProducts = business.categories.find(function (category) {
      return category.id === categoryId;
    }).products;
    var businessCategoryProductsIds = businessCategoryProducts.reduce(function (ids, product) {
      return [].concat(_toConsumableArray(ids), [product.id]);
    }, []);

    var _selectedProductsIds = _toConsumableArray(selectedProductsIds);

    if (businessCategoryProductsIds.every(function (elem) {
      return selectedProductsIds.includes(elem);
    })) {
      _selectedProductsIds = _selectedProductsIds.filter(function (el) {
        return !businessCategoryProductsIds.includes(el);
      });
    } else if (businessCategoryProductsIds.some(function (elem) {
      return selectedProductsIds.includes(elem);
    })) {
      _selectedProductsIds = [].concat(_toConsumableArray(selectedProductsIds), _toConsumableArray(businessCategoryProductsIds));
      _selectedProductsIds = _toConsumableArray(new Set(_selectedProductsIds));
    } else {
      _selectedProductsIds = [].concat(_toConsumableArray(selectedProductsIds), _toConsumableArray(businessCategoryProductsIds));
    }

    setSelectedProductsIds(_selectedProductsIds);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        products: JSON.stringify(_selectedProductsIds)
      })
    }));
  };
  /**
   * Method to control category selection
   * @param {Number} categoryId category id
   */


  var handleCheckCategory = function handleCheckCategory(categoryId) {
    var businessCategoryProducts = business.categories.find(function (category) {
      return category.id === categoryId;
    }).products;
    var businessCategoryProductsIds = businessCategoryProducts.reduce(function (ids, product) {
      return [].concat(_toConsumableArray(ids), [product.id]);
    }, []);
    var result;

    if (businessCategoryProductsIds.every(function (elem) {
      return selectedProductsIds.includes(elem);
    })) {
      result = 'all';
    } else if (businessCategoryProductsIds.some(function (elem) {
      return selectedProductsIds.includes(elem);
    })) {
      result = 'some';
    } else {
      result = 'nothing';
    }

    return result;
  };
  /**
   * Method to control prodcut selection
   * @param {Number} productId product id
   */


  var handleCheckProduct = function handleCheckProduct(productId) {
    var _selectedProductsIds = _toConsumableArray(selectedProductsIds);

    if (_selectedProductsIds.includes(productId)) {
      _selectedProductsIds = _selectedProductsIds.filter(function (id) {
        return id !== productId;
      });
    } else {
      _selectedProductsIds.push(productId);
    }

    setSelectedProductsIds(_selectedProductsIds);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        products: JSON.stringify(_selectedProductsIds)
      })
    }));
  };
  /**
   * Method to control the business schedule time enable state
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleScheduleTimeActiveState = function handleScheduleTimeActiveState(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(schedule);

    _schedule[daysOfWeekIndex].enabled = !_schedule[daysOfWeekIndex].enabled;
    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        schedule: JSON.stringify(_schedule)
      })
    }));
  };
  /**
   * Method to check valid schedule time
   */


  var isConflictScheduleTime = function isConflictScheduleTime(lapses, index, value) {
    for (var i = 0; i < lapses.length; i++) {
      if (i !== index) {
        if (convertMinutes(lapses[i].open) <= value && convertMinutes(lapses[i].close) >= value) {
          return true;
        }
      }
    }

    return false;
  };

  var convertMinutes = function convertMinutes(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;
    return hour * 60 + minute;
  };
  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {Number} index index of schedule time
   * @param {String} value changed value
   */


  var handleChangeTime = function handleChangeTime(daysOfWeekIndex, isOpen, isHour, index, value) {
    var _schedule = _toConsumableArray(schedule);

    var conflict;

    if (isOpen) {
      if (isHour) {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, index, convertMinutes({
          hour: parseInt(value),
          minute: _schedule[daysOfWeekIndex].lapses[index].open.minute
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value);
        }
      } else {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, index, convertMinutes({
          hour: _schedule[daysOfWeekIndex].lapses[index].open.hour,
          minute: parent(value)
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value);
        }
      }
    } else {
      if (isHour) {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, index, convertMinutes({
          hour: parseInt(value),
          minute: _schedule[daysOfWeekIndex].lapses[index].close.minute
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value);
        }
      } else {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, index, convertMinutes({
          hour: _schedule[daysOfWeekIndex].lapses[index].close.hour,
          minute: parent(value)
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value);
        }
      }
    }

    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        schedule: JSON.stringify(_schedule)
      }
    }));
  };
  /**
   * Method to delete the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Number} index index of schedule time
   */


  var handleDeleteScheduleTime = function handleDeleteScheduleTime(daysOfWeekIndex, index) {
    var _schedule = _toConsumableArray(schedule);

    _schedule[daysOfWeekIndex].lapses.splice(index, 1);

    setSchedule(_schedule);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        schedule: JSON.stringify(_schedule)
      }
    }));
  };
  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {String} value changed value
   */


  var handleChangeAddScheduleTime = function handleChangeAddScheduleTime(daysOfWeekIndex, isOpen, isHour, value) {
    var _schedule = _toConsumableArray(schedule);

    var conflict;

    if (isOpen) {
      if (isHour) {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
          hour: parseInt(value),
          minute: addScheduleTime.open.minute
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            open: _objectSpread(_objectSpread({}, addScheduleTime.open), {}, {
              hour: parseInt(value)
            })
          }));
        }
      } else {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
          hour: addScheduleTime.open.hour,
          minute: parseInt(value)
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            open: _objectSpread(_objectSpread({}, addScheduleTime.open), {}, {
              minute: parseInt(value)
            })
          }));
        }
      }
    } else {
      if (isHour) {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
          hour: parseInt(value),
          minute: addScheduleTime.close.minute
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            close: _objectSpread(_objectSpread({}, addScheduleTime.close), {}, {
              hour: parseInt(value)
            })
          }));
        }
      } else {
        conflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
          hour: addScheduleTime.close.hour,
          minute: parseInt(value)
        }));

        if (conflict) {
          setIsConflict(true);
        } else {
          setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
            close: _objectSpread(_objectSpread({}, addScheduleTime.close), {}, {
              minute: parseInt(value)
            })
          }));
        }
      }
    }
  };
  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleAddScheduleTime = function handleAddScheduleTime(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(schedule);

    var openConflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
      hour: addScheduleTime.open.hour,
      minute: addScheduleTime.open.minute
    }));
    var closeConflict = isConflictScheduleTime(_schedule[daysOfWeekIndex].lapses, null, convertMinutes({
      hour: addScheduleTime.close.hour,
      minute: addScheduleTime.close.minute
    }));

    if (openConflict || closeConflict) {
      setIsConflict(true);
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime);

      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });

      setSchedule(_schedule);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          schedule: JSON.stringify(_schedule)
        }
      }));
    }
  };
  /**
   * Method to update the busienss menu option from API
   */


  var handleUpdateBusinessMenuOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content, _business;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formState === null || formState === void 0 ? void 0 : formState.changes)
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menu === null || menu === void 0 ? void 0 : menu.id), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: {
                  error: false,
                  result: content.result
                },
                loading: false
              }));

              if (!content.error) {
                props.onClose() && props.onClose();
                _business = _objectSpread({}, business);

                _business.menus.filter(function (menu) {
                  if (menu.id === content.result.id) {
                    Object.assign(menu, content.result);
                  }

                  return true;
                });

                handleUpdateBusinessState && handleUpdateBusinessState(_business);
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context.t0.message
                }
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleUpdateBusinessMenuOption() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to add the busienss menu option from API
   */


  var handleAddBusinessMenuOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _formState$changes, changes, requestOptions, response, content, _business, _menu, products;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread({}, formState.changes);

              if (!((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.schedule)) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
                    schedule: JSON.stringify(schedule)
                  })
                }));
                changes = _objectSpread(_objectSpread({}, changes), {}, {
                  schedule: JSON.stringify(schedule)
                });
              }

              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 7;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus"), requestOptions);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              content = _context2.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: {
                  error: content.error,
                  result: content.result
                },
                loading: false
              }));

              if (!content.error) {
                props.onClose() && props.onClose();
                _business = _objectSpread({}, business);
                _menu = _objectSpread(_objectSpread({}, content.result), {}, {
                  enabled: true
                });
                products = business.categories.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return _menu.products.includes(product.id);
                });
                _menu = _objectSpread(_objectSpread({}, _menu), {}, {
                  products: products
                });

                _business.menus.push(_menu);

                handleUpdateBusinessState && handleUpdateBusinessState(_business);
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context2.t0.message
                }
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function handleAddBusinessMenuOption() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */


  var handleSelectCopyTimes = function handleSelectCopyTimes(index, daysOfWeekIndex) {
    var _selectedCopyDays = _toConsumableArray(selectedCopyDays);

    if (!_selectedCopyDays.includes(index)) {
      _selectedCopyDays.push(index);
    } else {
      _selectedCopyDays = _selectedCopyDays.filter(function (el) {
        return el !== index;
      });
    }

    setSelectedCopyDays(_selectedCopyDays);

    var _schedule = _toConsumableArray(schedule);

    if (_selectedCopyDays.length) {
      var _iterator = _createForOfIteratorHelper(_selectedCopyDays),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var copyDay = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_schedule[copyDay].lapses),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var laps = _step2.value;

              _schedule[daysOfWeekIndex].lapses.push(laps);
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

      setSchedule(_schedule);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          schedule: JSON.stringify(_schedule)
        }
      }));
    }
  };

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
    setBusinessMenuState(_objectSpread(_objectSpread({}, businessMenuState), {}, {
      menu: menu || {}
    }));
    setOrderTypeSate({
      delivery: menu === null || menu === void 0 ? void 0 : menu.delivery,
      pickup: menu === null || menu === void 0 ? void 0 : menu.pickup,
      eatin: menu === null || menu === void 0 ? void 0 : menu.eatin,
      curbside: menu === null || menu === void 0 ? void 0 : menu.curbside,
      driver_thru: menu === null || menu === void 0 ? void 0 : menu.driver_thru
    });

    if (Object.keys(menu).length) {
      var _selectedProductsIds = menu.products.reduce(function (ids, product) {
        return [].concat(_toConsumableArray(ids), [product.id]);
      }, []);

      setSelectedProductsIds(_selectedProductsIds);
      setSchedule(menu === null || menu === void 0 ? void 0 : menu.schedule);
    } else {
      setSelectedProductsIds([]);
      setSchedule([{
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
      }]);
      setOrderTypeSate({
        delivery: false,
        pickup: false,
        eatin: false,
        curbside: false,
        driver_thru: false
      });
    }
  }, [menu]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMenuState: businessMenuState,
    formState: formState,
    selectedProductsIds: selectedProductsIds,
    handleChangeInput: handleChangeInput,
    handleCheckOrderType: handleCheckOrderType,
    handleCheckCategory: handleCheckCategory,
    handleClickCategory: handleClickCategory,
    handleCheckProduct: handleCheckProduct,
    handleUpdateBusinessMenuOption: handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption: handleAddBusinessMenuOption,
    scheduleTimes: schedule,
    addScheduleTime: addScheduleTime,
    setAddScheduleTime: setAddScheduleTime,
    handleScheduleTimeActiveState: handleScheduleTimeActiveState,
    handleChangeTime: handleChangeTime,
    handleDeleteScheduleTime: handleDeleteScheduleTime,
    handleChangeAddScheduleTime: handleChangeAddScheduleTime,
    handleAddScheduleTime: handleAddScheduleTime,
    openAddScheduleIndex: openAddScheduleIndex,
    setOpenAddScheduleInex: setOpenAddScheduleInex,
    isConflict: isConflict,
    setIsConflict: setIsConflict,
    selectedCopyDays: selectedCopyDays,
    cleanSelectedCopyDays: cleanSelectedCopyDays,
    handleSelectCopyTimes: handleSelectCopyTimes
  })));
};

exports.BusinessMenuOptions = BusinessMenuOptions;
BusinessMenuOptions.propTypes = {
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
BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};