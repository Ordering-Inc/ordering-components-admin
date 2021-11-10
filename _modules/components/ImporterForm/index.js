"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterForm = void 0;

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

/**
 * Component to create importer form without UI component
 */
var ImporterForm = function ImporterForm(props) {
  var UIComponent = props.UIComponent;

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
    changes: {},
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      mappingState = _useState4[0],
      setMappingState = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      fieldList = _useState6[0],
      setFieldList = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isEdit = _useState8[0],
      setIsEdit = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      editState = _useState10[0],
      setEditState = _useState10[1];
  /**
  * Update form state data
  * @param {EventTarget} e Related HTML event
  */


  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};

    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  var handleChangeMappingInput = function handleChangeMappingInput(e, isMany) {
    var mappingData = {};

    if (isMany) {
      Object.values(e).map(function (obj) {
        mappingData = _objectSpread(_objectSpread({}, mappingData), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      mappingData = _defineProperty({}, e.target.name, e.target.value);
    }

    setMappingState(_objectSpread(_objectSpread({}, mappingState), mappingData));
  };

  var addNewField = function addNewField(key, value) {
    var field = _defineProperty({}, key, parseInt(value));

    setFieldList(_objectSpread(_objectSpread({}, fieldList), field));
    clearFieldForm();
  };

  var removeField = function removeField(val) {
    var _fieldList = _toConsumableArray(fieldList);

    var removedFieldList = _fieldList.filter(function (field) {
      return field.fieldName !== (val === null || val === void 0 ? void 0 : val.fieldName);
    });

    setFieldList(removedFieldList);
  };

  var handleChangeSelect = function handleChangeSelect(type, value) {
    var currentChanges = {};
    currentChanges = _defineProperty({}, type, value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));

    if (!isEdit) {
      setMappingState({});
      clearMappingForm();
    }
  };

  var clearMappingForm = function clearMappingForm() {
    document.getElementById('importer-form').reset();
  };

  var clearFieldForm = function clearFieldForm() {
    document.getElementById('field-form').reset();
  };

  var clearImorterForm = function clearImorterForm() {
    clearMappingForm();
    clearFieldForm();
    setMappingState({});
    setFieldList({});
  };

  var handleEditState = function handleEditState(seletedImpoter) {
    var _seletedImpoter$mappi, _seletedImpoter$mappi20, _seletedImpoter$mappi21, _seletedImpoter$mappi22, _seletedImpoter$mappi23;

    if ((seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type) !== 'sync_businesses') {
      handleChangeSelect('type', seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type);
    }

    var _fieldList = {};
    _fieldList = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi = seletedImpoter.mapping) === null || _seletedImpoter$mappi === void 0 ? void 0 : _seletedImpoter$mappi.fields;
    var _mappingState = {};

    if ((seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type) === 'sync_businesses') {
      var _seletedImpoter$mappi2, _seletedImpoter$mappi3, _seletedImpoter$mappi4, _seletedImpoter$mappi5, _seletedImpoter$mappi6, _seletedImpoter$mappi7;

      _mappingState = {
        id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi2 = seletedImpoter.mapping) === null || _seletedImpoter$mappi2 === void 0 ? void 0 : _seletedImpoter$mappi2.business_id,
        externalId: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi3 = seletedImpoter.mapping) === null || _seletedImpoter$mappi3 === void 0 ? void 0 : _seletedImpoter$mappi3.external_business_id,
        externalKey: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi4 = seletedImpoter.mapping) === null || _seletedImpoter$mappi4 === void 0 ? void 0 : _seletedImpoter$mappi4.external_business_key
      };
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        business_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi5 = seletedImpoter.mapping) === null || _seletedImpoter$mappi5 === void 0 ? void 0 : _seletedImpoter$mappi5.business_id,
        external_business_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi6 = seletedImpoter.mapping) === null || _seletedImpoter$mappi6 === void 0 ? void 0 : _seletedImpoter$mappi6.business_id,
        external_business_key: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi7 = seletedImpoter.mapping) === null || _seletedImpoter$mappi7 === void 0 ? void 0 : _seletedImpoter$mappi7.business_id
      }));
    }

    if ((seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type) === 'sync_categories') {
      var _seletedImpoter$mappi8, _seletedImpoter$mappi9, _seletedImpoter$mappi10, _seletedImpoter$mappi11, _seletedImpoter$mappi12, _seletedImpoter$mappi13;

      _mappingState = {
        id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi8 = seletedImpoter.mapping) === null || _seletedImpoter$mappi8 === void 0 ? void 0 : _seletedImpoter$mappi8.category_id,
        externalId: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi9 = seletedImpoter.mapping) === null || _seletedImpoter$mappi9 === void 0 ? void 0 : _seletedImpoter$mappi9.external_category_id,
        externalKey: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi10 = seletedImpoter.mapping) === null || _seletedImpoter$mappi10 === void 0 ? void 0 : _seletedImpoter$mappi10.external_category_key
      };
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        category_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi11 = seletedImpoter.mapping) === null || _seletedImpoter$mappi11 === void 0 ? void 0 : _seletedImpoter$mappi11.category_id,
        external_category_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi12 = seletedImpoter.mapping) === null || _seletedImpoter$mappi12 === void 0 ? void 0 : _seletedImpoter$mappi12.external_category_id,
        external_category_key: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi13 = seletedImpoter.mapping) === null || _seletedImpoter$mappi13 === void 0 ? void 0 : _seletedImpoter$mappi13.external_category_key
      }));
    }

    if ((seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type) === 'sync_products') {
      var _seletedImpoter$mappi14, _seletedImpoter$mappi15, _seletedImpoter$mappi16, _seletedImpoter$mappi17, _seletedImpoter$mappi18, _seletedImpoter$mappi19;

      _mappingState = {
        id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi14 = seletedImpoter.mapping) === null || _seletedImpoter$mappi14 === void 0 ? void 0 : _seletedImpoter$mappi14.product_id,
        externalId: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi15 = seletedImpoter.mapping) === null || _seletedImpoter$mappi15 === void 0 ? void 0 : _seletedImpoter$mappi15.external_product_id,
        externalKey: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi16 = seletedImpoter.mapping) === null || _seletedImpoter$mappi16 === void 0 ? void 0 : _seletedImpoter$mappi16.external_product_key
      };
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        product_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi17 = seletedImpoter.mapping) === null || _seletedImpoter$mappi17 === void 0 ? void 0 : _seletedImpoter$mappi17.category_id,
        external_product_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi18 = seletedImpoter.mapping) === null || _seletedImpoter$mappi18 === void 0 ? void 0 : _seletedImpoter$mappi18.external_category_id,
        external_product_key: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi19 = seletedImpoter.mapping) === null || _seletedImpoter$mappi19 === void 0 ? void 0 : _seletedImpoter$mappi19.external_category_key
      }));
    }

    setEditState(_objectSpread(_objectSpread({}, editState), {}, {
      name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
      slug: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.slug,
      type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type,
      mapping: _mappingState,
      fields: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi20 = seletedImpoter.mapping) === null || _seletedImpoter$mappi20 === void 0 ? void 0 : _seletedImpoter$mappi20.fields
    }));
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
        slug: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.slug,
        type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type
      })
    }));
    setFieldList(_fieldList);
    setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
      product_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi21 = seletedImpoter.mapping) === null || _seletedImpoter$mappi21 === void 0 ? void 0 : _seletedImpoter$mappi21.category_id,
      external_product_id: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi22 = seletedImpoter.mapping) === null || _seletedImpoter$mappi22 === void 0 ? void 0 : _seletedImpoter$mappi22.external_category_id,
      external_product_key: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi23 = seletedImpoter.mapping) === null || _seletedImpoter$mappi23 === void 0 ? void 0 : _seletedImpoter$mappi23.external_category_key
    }));
  };

  var handleCreateImporter = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var data, requestOptions, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              data = _objectSpread({}, formState.changes);
              _context.prev = 2;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify(data)
              };
              _context.next = 7;
              return fetch("".concat(ordering.root, "/importers"), requestOptions);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              } else {
                showToast(_ToastContext.ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'));
                clearImorterForm();
                setFormState({
                  loading: false,
                  changes: {},
                  result: {
                    error: false,
                    result: result
                  }
                });
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: [_context.t0.message]
                },
                loading: false
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 16]]);
    }));

    return function handleCreateImporter() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (Object.keys(mappingState).length !== 0) {
      var data = _objectSpread({}, mappingState);

      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          mapping: JSON.stringify(data)
        })
      }));
    }
  }, [mappingState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(fieldList).length !== 0) {
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        fields: fieldList
      }));
    }
  }, [fieldList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    mappingState: mappingState,
    fieldList: fieldList,
    handleChangeInput: handleChangeInput,
    handleChangeSelect: handleChangeSelect,
    handleChangeMappingInput: handleChangeMappingInput,
    addNewField: addNewField,
    removeField: removeField,
    isEdit: isEdit,
    clearImorterForm: clearImorterForm,
    setIsEdit: setIsEdit,
    editState: editState,
    handleCreateImporter: handleCreateImporter,
    handleEditState: handleEditState
  })));
};

exports.ImporterForm = ImporterForm;
ImporterForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ImporterForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};