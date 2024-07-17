"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAutocompleteInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to make an input with Google Autocomplete
 * @param {object} props Props of AutocompleteInput component
 */
var AutocompleteInput = function AutocompleteInput(props) {
  var googleReady = props.googleReady,
    onChangeAddress = props.onChangeAddress,
    types = props.types,
    fields = props.fields,
    countryCode = props.countryCode,
    childRef = props.childRef;
  var inputRef = (0, _react.useRef)();
  var inputProps = {};
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (['googleReady', 'apiKey', 'onChangeAddress', 'setValue', 'childRef', 'countryCode', 'types', 'fields'].indexOf(key) === -1) {
      inputProps[key] = value;
    }
  });
  var options = {
    types: types,
    fields: fields
  };
  if (countryCode !== '*') {
    options.componentRestrictions = {
      country: countryCode
    };
  }
  (0, _react.useEffect)(function () {
    var _window$google;
    if (googleReady && onChangeAddress && (_window$google = window.google) !== null && _window$google !== void 0 && (_window$google = _window$google.maps) !== null && _window$google !== void 0 && (_window$google = _window$google.places) !== null && _window$google !== void 0 && _window$google.Autocomplete) {
      var autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
      autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        var postalCode = null;
        var _iterator = _createForOfIteratorHelper(place.address_components),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var component = _step.value;
            var addressType = component.types[0];
            if (addressType === 'postal_code') {
              postalCode = component.short_name || component.long_name;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var address = {
          address: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          },
          utc_offset: place.utc_offset_minutes,
          map_data: {
            library: 'google',
            place_id: place.place_id
          }
        };
        if (postalCode) {
          address.zipcode = postalCode;
        }
        onChangeAddress(address);
      });
    }
  }, [googleReady]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      if (inputRef.current.attributes.autocomplete && inputRef.current.attributes.autocomplete.value === (props.autoComplete || 'new-field')) clearInterval(interval);
      inputRef.current.setAttribute('autocomplete', props.autoComplete || 'new-field');
    }, 100);
    return function () {
      return clearInterval(interval);
    };
  });
  return /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, {
    autoComplete: props.autoComplete || 'new-field',
    disabled: !props.googleReady,
    ref: function ref(e) {
      inputRef.current = e;
      childRef && childRef(e);
    },
    onFocus: function onFocus() {
      return inputRef.current.setAttribute('autocomplete', props.autoComplete || 'new-field');
    }
  }));
};
AutocompleteInput.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,
  /**
   * Fields for Google autocomplete
   * @see fields https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields
   */
  fields: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * types for Google autocomplete
   * @see types https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.types
   */
  types: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * types for Google autocomplete
   * @see countryCode https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions.country
   */
  countryCode: _propTypes.default.string,
  /**
   * Function to get address when this changed
   * @param {object} address New address
   */
  onChangeAddress: _propTypes.default.func
};
AutocompleteInput.defaultProps = {
  types: [],
  fields: ['place_id', 'formatted_address', 'geometry', 'utc_offset_minutes', 'address_components'],
  countryCode: '*'
};
var GoogleAutocompleteInput = exports.GoogleAutocompleteInput = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(AutocompleteInput);