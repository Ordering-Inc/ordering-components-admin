"use strict";

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  var UIComponent = props.UIComponent,
      handleSuccessAdd = props.handleSuccessAdd,
      handleSuccessUpdateImporter = props.handleSuccessUpdateImporter,
      selectedImporter = props.selectedImporter;

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

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      metafieldList = _useState8[0],
      setMetaFieldList = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isEdit = _useState10[0],
      setIsEdit = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      editState = _useState12[0],
      setEditState = _useState12[1];
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

  var removeField = function removeField(fieldKey) {
    var _fieldList = _objectSpread({}, fieldList);

    delete _fieldList[fieldKey];
    setFieldList(_fieldList);
  };

  var addNewMetaField = function addNewMetaField(key, value) {
    var field = _defineProperty({}, key, parseInt(value));

    setMetaFieldList(_objectSpread(_objectSpread({}, metafieldList), field));
    clearFieldForm();
  };

  var removeMetaField = function removeMetaField(metaFieldKey) {
    var _metafieldList = _objectSpread({}, metafieldList);

    delete _metafieldList[metaFieldKey];
    setMetaFieldList(_metafieldList);
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
    if (document.getElementById('importer-form')) {
      document.getElementById('importer-form').reset();
    }
  };

  var clearFieldForm = function clearFieldForm() {
    if (document.getElementById('field-form')) {
      document.getElementById('field-form').reset();
    }
  };

  var clearImorterForm = function clearImorterForm() {
    clearMappingForm();
    clearFieldForm();
    setMappingState({});
    setFieldList({});
    setEditState({});
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  };

  var handleEditState = function handleEditState(seletedImpoter) {
    var _seletedImpoter$mappi, _seletedImpoter$mappi2;

    var _metafieldList = {};
    _metafieldList = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi = seletedImpoter.mapping) === null || _seletedImpoter$mappi === void 0 ? void 0 : _seletedImpoter$mappi.metafields;

    if (_typeof(_metafieldList) === 'object' && _metafieldList !== null) {
      setMetaFieldList(_metafieldList);
    }

    var _fieldList = {};
    _fieldList = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi2 = seletedImpoter.mapping) === null || _seletedImpoter$mappi2 === void 0 ? void 0 : _seletedImpoter$mappi2.fields;

    if (_typeof(_fieldList) === 'object' && _fieldList !== null) {
      setFieldList(_fieldList);
    }

    var _mappingState = {};
    _mappingState = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.mapping;
    setMappingState(_mappingState);
    setEditState(_objectSpread(_objectSpread({}, editState), {}, {
      name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
      slug: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.slug,
      type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type,
      mapping: _mappingState,
      fields: _fieldList,
      metafields: _metafieldList
    }));
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
        // slug: seletedImpoter?.slug,
        type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type
      })
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

                if (handleSuccessAdd) {
                  handleSuccessAdd(result);
                }

                if (props.onClose) {
                  props.onClose();
                }
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
  /**
   * Function to update importer
   */


  var editImporter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var data, requestOptions, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              data = _objectSpread({}, formState.changes);
              _context2.prev = 2;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify(data)
              };
              _context2.next = 7;
              return fetch("".concat(ordering.root, "/importers/").concat(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.id), requestOptions);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

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
                handleSuccessUpdateImporter && handleSuccessUpdateImporter(result);
                props.onClos && props.onClos();
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: [_context2.t0.message]
                },
                loading: false
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 16]]);
    }));

    return function editImporter() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (Object.keys(metafieldList).length !== 0) {
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        metafields: metafieldList
      }));
    }
  }, [metafieldList]);
  (0, _react.useEffect)(function () {
    if (Object.keys(fieldList).length !== 0) {
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        fields: fieldList
      }));
    }
  }, [fieldList]);
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

  var downloadCSV = function downloadCSV() {
    var allowedBusinessImporters = {
      business_id: 10,
      external_business_id: 120,
      name: 'House mine',
      logo: '"https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_100,c_limit/v1539095959/crya6ibldlsz4hjyo03e.jpg"',
      email: 'test@ordering.co',
      slug: 'test_slug',
      header: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/bqvntsurh8opknu58z9f/1534196989.jpg"',
      about: 'test about',
      address: '"5th Avenue, New York, NY, USA"',
      location: '"{""lat"":40.7552112,""lng"":-73.982322}"',
      timezone: 'America/New_York',
      description: 'test description',
      cellphone: '123123123123',
      phone: '123123',
      featured: 1,
      enabled: 1,
      front_layout: 'food',
      seo_image: '"https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_100,c_limit/v1539095959/crya6ibldlsz4hjyo03e.jpg"',
      seo_title: 'seo title',
      seo_description: 'seo description',
      category_id: 10,
      external_category_id: 120,
      external_parent_category_id: 130,
      product_id: 10,
      image: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/wmpfkcedo4y2kwxcamve/1534167067.png"',
      rank: 10,
      parent_category_id: 20,
      external_product_id: 100,
      price: 10,
      images: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/lx0zuprnuozhqmaa97jj/1534200630.jpg"',
      sku: 'test_sku',
      inventoried: 1,
      quantity: 10,
      upselling: 1,
      in_offer: 1,
      offer_price: 10,
      offer_rate: 0,
      offer_rate_type: 1,
      offer_include_options: 1,
      tax_id: 10,
      fee_id: 10,
      estimated_person: '"test person"',
      barcode: '"0123456789"',
      barcode_alternative: '"0123"',
      seo_keywords: 'test key',
      hide_special_instructions: 1,
      maximum_per_order: 2,
      minimum_per_order: 1
    };

    var _mappingState = _objectSpread({}, mappingState);

    var fields = _objectSpread({}, _mappingState.fields);

    delete _mappingState.fields;

    var csvFields = _objectSpread(_objectSpread({}, _mappingState), fields);

    var values = Object.values(csvFields);
    var max = Math.max.apply(Math, _toConsumableArray(values));
    var csvHeaders = Array(max + 1).fill('');
    var csvRow1 = Array(max + 1).fill('');
    var csvRow2 = Array(max + 1).fill('');

    for (var key in csvFields) {
      var fieldName = key.replaceAll('_', ' ');
      csvHeaders[csvFields[key]] = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      csvRow1[csvFields[key]] = allowedBusinessImporters[key] || ' ';
      var integerKeys = ['busines_id', 'external_business_id', 'category_id', 'external_category_id', 'external_parent_category_id', 'product_id', 'rank', 'external_product_id'];
      var uniqueKeys = ['slug', 'name', 'sku', 'seo_keywords'];

      if (integerKeys.includes(key)) {
        csvRow2[csvFields[key]] = allowedBusinessImporters[key] + 1;
      } else if (uniqueKeys.includes(key)) {
        csvRow2[csvFields[key]] = allowedBusinessImporters[key] + '_2';
      } else {
        csvRow2[csvFields[key]] = allowedBusinessImporters[key] || ' ';
      }
    }

    var rows = [csvHeaders, csvRow1, csvRow2];
    var csvContent = rows.map(function (e) {
      return e.join(',');
    }).join('\n');
    var link = document.createElement('a');
    link.download = 'example.csv';
    var blob = new Blob(["\uFEFF", csvContent], {
      type: 'text/csv'
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = function () {
      link.href = reader.result;
      link.click();
    };
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    mappingState: mappingState,
    fieldList: fieldList,
    metafieldList: metafieldList,
    editState: editState,
    isEdit: isEdit,
    handleChangeInput: handleChangeInput,
    handleChangeSelect: handleChangeSelect,
    handleChangeMappingInput: handleChangeMappingInput,
    addNewField: addNewField,
    removeField: removeField,
    addNewMetaField: addNewMetaField,
    removeMetaField: removeMetaField,
    clearImorterForm: clearImorterForm,
    setIsEdit: setIsEdit,
    handleCreateImporter: handleCreateImporter,
    handleEditState: handleEditState,
    editImporter: editImporter,
    downloadCSV: downloadCSV
  })));
};

exports.ImporterForm = ImporterForm;
ImporterForm.propTypes = {
  /**
   * Function to update importer list
   */
  handleSuccessUpdateImporter: _propTypes.default.func,

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