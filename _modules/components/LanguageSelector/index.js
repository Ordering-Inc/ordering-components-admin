"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to manage LanguageSelector behavior without UI component
 */
var LanguageSelector = exports.LanguageSelector = function LanguageSelector(props) {
  var _languageState$langua3;
  var currentLanguage = props.currentLanguage,
    languages = props.languages,
    UIComponent = props.UIComponent;
  var _useState = (0, _react.useState)({
      loading: !languages,
      languages: languages,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    languageListState = _useState2[0],
    setLanguageListState = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 3),
    languageState = _useLanguage2[0],
    setLanguage = _useLanguage2[2].setLanguage;
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    languageSelected = _useState4[0],
    setLanguageSelected = _useState4[1];
  var requestsState = {};

  /**
   * This method is used for change the current language
   */
  var onChangeLanguage = function onChangeLanguage(code, fromSelector) {
    var language = languageListState.languages.find(function (language) {
      return language.code === code;
    });
    if (props.handlerCustomChangeLanguage) {
      props.handlerCustomChangeLanguage(language);
      setLanguageSelected(language);
      return;
    }
    props.onChangeLanguage && props.onChangeLanguage(language);
    setLanguage(language, fromSelector);
  };
  (0, _react.useEffect)(function () {
    if (languageState.loading) return;
    if ((languages === null || languages === void 0 ? void 0 : languages.length) > 0) {
      setLanguageListState(_objectSpread(_objectSpread({}, languageListState), {}, {
        loading: false,
        languages: languages
      }));
    } else {
      var _languages = languageState.languageList.filter(function (lang) {
        return lang.enabled;
      });
      setLanguageListState(_objectSpread(_objectSpread({}, languageListState), {}, {
        loading: false,
        languages: _languages
      }));
    }
    return function () {
      if (requestsState.languages) {
        requestsState.languages.cancel();
      }
    };
  }, [languageState]);

  /**
   * Selecting default if exist and there is not one in local storage
   */
  (0, _react.useEffect)(function () {
    var _languageState$langua;
    if (currentLanguage) {
      var language = languages.find(function (language) {
        return language.code === currentLanguage;
      });
      setLanguage(language);
      setLanguageSelected(language);
    } else if (!(languageState !== null && languageState !== void 0 && (_languageState$langua = languageState.language) !== null && _languageState$langua !== void 0 && _languageState$langua.code) || !(languageSelected !== null && languageSelected !== void 0 && languageSelected.code)) {
      var _languageState$langua2, _languageListState$la;
      var _language = languageState !== null && languageState !== void 0 && (_languageState$langua2 = languageState.language) !== null && _languageState$langua2 !== void 0 && _languageState$langua2.code ? languageState === null || languageState === void 0 ? void 0 : languageState.language : languageListState === null || languageListState === void 0 || (_languageListState$la = languageListState.languages) === null || _languageListState$la === void 0 ? void 0 : _languageListState$la.find(function (language) {
        return language.default;
      });
      if (_language) {
        setLanguage(_language);
        setLanguageSelected(_language);
      }
    }
  }, [languages, languageListState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentLanguage: props.handlerCustomChangeLanguage ? languageSelected === null || languageSelected === void 0 ? void 0 : languageSelected.code : languageState === null || languageState === void 0 || (_languageState$langua3 = languageState.language) === null || _languageState$langua3 === void 0 ? void 0 : _languageState$langua3.code,
    languagesState: languageListState,
    handleChangeLanguage: onChangeLanguage
  })));
};
LanguageSelector.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * currentLanguage, this must be containt current language to show in the app
   */
  currentLanguage: _propTypes.default.string,
  /**
   * languages, this array must be containt a list of available languages
   */
  languages: _propTypes.default.arrayOf(_propTypes.default.object),
  /**
   * Return language selected
   */
  onChangeLanguage: _propTypes.default.func,
  /**
   * handlerCustomChangeLanguage, handler change behavior
   */
  handlerCustomChangeLanguage: _propTypes.default.func,
  /**
   * Components types before language selector
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after language selector
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
LanguageSelector.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};