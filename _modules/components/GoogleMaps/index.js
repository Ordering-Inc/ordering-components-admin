"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMapsMap = exports.GoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
var _EventContext = require("../../contexts/EventContext");
var _UtilsContext = require("../../contexts/UtilsContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var GoogleMaps = exports.GoogleMaps = function GoogleMaps(props) {
  var googleReady = props.googleReady,
    locations = props.locations,
    mapControls = props.mapControls,
    setErrors = props.setErrors,
    isSetInputs = props.isSetInputs,
    fixedLocation = props.fixedLocation,
    handleChangeAddressMap = props.handleChangeAddressMap,
    maxLimitLocation = props.maxLimitLocation,
    businessMap = props.businessMap,
    onBusinessClick = props.onBusinessClick,
    isHeatMap = props.isHeatMap,
    isHeat = props.isHeat,
    markerIcon = props.markerIcon,
    isFitCenter = props.isFitCenter,
    handleChangeCenter = props.handleChangeCenter,
    data = props.data,
    fillStyle = props.fillStyle,
    placeId = props.placeId,
    setDetails = props.setDetails,
    onlyMarkerChangeCenter = props.onlyMarkerChangeCenter,
    disableAutoFit = props.disableAutoFit;
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var divRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    googleMap = _useState2[0],
    setGoogleMap = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    googleMapMarker = _useState4[0],
    setGoogleMapMarker = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    markers = _useState6[0],
    setMarkers = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    boundMap = _useState8[0],
    setBoundMap = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    heatMap = _useState10[0],
    setHeatMap = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    markerCluster = _useState12[0],
    setMarkerCluster = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    hasInitialFit = _useState14[0],
    setHasInitialFit = _useState14[1];
  var location = fixedLocation || props.location;
  var center = {
    lat: location === null || location === void 0 ? void 0 : location.lat,
    lng: location === null || location === void 0 ? void 0 : location.lng
  };

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  var generateMarkers = function generateMarkers(map) {
    // Validación básica de locations
    if (!Array.isArray(locations)) {
      console.warn('Locations must be an array');
      return;
    }
    var bounds = new window.google.maps.LatLngBounds();
    var businessesNear = 0;

    // Filtrar ubicaciones inválidas
    var validLocations = locations.filter(function (loc) {
      return loc && typeof loc.lat !== 'undefined' && typeof loc.lng !== 'undefined' && !isNaN(Number(loc.lat)) && !isNaN(Number(loc.lng));
    });
    var _loop = function _loop(i) {
      var _validLocations$i2, _validLocations$i3;
      var formatUrl = null;
      if (i === 1 || businessMap) {
        var _validLocations$i;
        formatUrl = optimizeImage((_validLocations$i = validLocations[i]) === null || _validLocations$i === void 0 ? void 0 : _validLocations$i.icon, 'r_max');
      }
      if (isHeatMap && markerIcon) {
        formatUrl = markerIcon;
      }
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(Number(validLocations[i].lat), Number(validLocations[i].lng)),
        map: map,
        title: (_validLocations$i2 = validLocations[i]) === null || _validLocations$i2 === void 0 ? void 0 : _validLocations$i2.slug,
        icon: (_validLocations$i3 = validLocations[i]) !== null && _validLocations$i3 !== void 0 && _validLocations$i3.icon ? {
          url: formatUrl || validLocations[i].icon,
          scaledSize: new window.google.maps.Size(45, 45)
        } : isHeatMap ? {
          url: formatUrl,
          scaledSize: new window.google.maps.Size(40, 40)
        } : null
      });
      if (businessMap) {
        var isNear = validateResult(googleMap, marker, marker.getPosition());
        if (isNear) {
          marker.addListener('click', function () {
            var _validLocations$i4;
            return onBusinessClick((_validLocations$i4 = validLocations[i]) === null || _validLocations$i4 === void 0 ? void 0 : _validLocations$i4.slug);
          });
          bounds.extend(marker.position);
          setMarkers(function (markers) {
            return [].concat(_toConsumableArray(markers), [marker]);
          });
          businessesNear = businessesNear + 1;
        } else {
          marker.setMap(null);
        }
      } else {
        bounds.extend(marker.position);
        setMarkers(function (markers) {
          return [].concat(_toConsumableArray(markers), [marker]);
        });
      }
    };
    for (var i = 0; i < validLocations.length; i++) {
      _loop(i);
    }
    businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES');
    if (disableAutoFit) {
      if (!hasInitialFit && map !== null && map !== void 0 && map.fitBounds) {
        map.fitBounds(bounds);
        setHasInitialFit(true);
      }
    } else {
      (map === null || map === void 0 ? void 0 : map.fitBounds) && map.fitBounds(bounds);
    }
    setBoundMap(bounds);
  };

  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  var geocodePosition = function geocodePosition(pos) {
    if (isSetInputs) {
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({
        latLng: pos
      }, function (results) {
        var _results$;
        if (results && results.length > 0 && results !== null && results !== void 0 && (_results$ = results[0]) !== null && _results$ !== void 0 && _results$.address_components) {
          var _address$location, _address$location2;
          var addressObj = {};
          var cityFallback = results[0].address_components.find(function (component) {
            return component.types.includes('administrative_area_level_2');
          });
          var _iterator = _createForOfIteratorHelper(results[0].address_components),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _component$types;
              var component = _step.value;
              var addressType = component.types[0];
              if (addressType === 'postal_code') {
                addressObj.zipcode = component.short_name;
              }
              if (addressType === 'street_number') {
                addressObj.street_number = component.long_name;
              }
              if (addressType === 'neighborhood') {
                addressObj.neighborhood = component.long_name;
              }
              if (addressType === 'route') {
                addressObj.route = component.long_name;
              }
              if (addressType === 'locality') {
                addressObj.city = component.long_name || cityFallback.long_name;
                addressObj.locality = component.long_name;
              }
              if ((_component$types = component.types) !== null && _component$types !== void 0 && _component$types.includes('sublocality')) {
                addressObj.sublocality = component.long_name;
              }
              if (addressType === 'country') {
                addressObj.country = component.long_name;
                addressObj.country_code = component.short_name;
              }
              if (addressType === 'administrative_area_level_1') {
                addressObj.state = component.long_name;
                addressObj.state_code = component.short_name;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var address = _objectSpread({
            address: results[0].formatted_address,
            location: {
              lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
              lng: pos === null || pos === void 0 ? void 0 : pos.lng()
            }
          }, addressObj);
          handleChangeAddressMap && handleChangeAddressMap(address);
          center.lat = (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat;
          center.lng = (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng;
        } else {
          googleMapMarker && googleMapMarker.setPosition(center);
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS');
        }
        if (center !== null && center !== void 0 && center.lat && center !== null && center !== void 0 && center.lng) {
          googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
        }
      });
    } else {
      var _location = {
        lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
        lng: pos === null || pos === void 0 ? void 0 : pos.lng()
      };
      handleChangeAddressMap && handleChangeAddressMap({
        location: _location
      });
      center.lat = _location === null || _location === void 0 ? void 0 : _location.lat;
      center.lng = _location === null || _location === void 0 ? void 0 : _location.lng;
      if (_location.lat && _location.lng) {
        googleMap && googleMap.panTo(new window.google.maps.LatLng(_location === null || _location === void 0 ? void 0 : _location.lat, _location === null || _location === void 0 ? void 0 : _location.lng));
      }
    }
  };

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  var validateResult = function validateResult(map, marker, curPos) {
    var loc1 = new window.google.maps.LatLng(curPos === null || curPos === void 0 ? void 0 : curPos.lat(), curPos === null || curPos === void 0 ? void 0 : curPos.lng());
    var loc2 = new window.google.maps.LatLng(location === null || location === void 0 ? void 0 : location.lat, location === null || location === void 0 ? void 0 : location.lng);
    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2);
    if (businessMap) {
      var minimumBusinessDistance = 20000;
      if (distance <= minimumBusinessDistance) return true;
      return false;
    }
    if (!maxLimitLocation) {
      onlyMarkerChangeCenter && handleChangeCenter(curPos);
      geocodePosition(curPos);
      return;
    }
    if (distance <= maxLimitLocation) {
      geocodePosition(curPos);
      onlyMarkerChangeCenter && handleChangeCenter(curPos);
    } else if (center !== null && center !== void 0 && center.lat && center !== null && center !== void 0 && center.lng) {
      marker.setPosition(center);
      map.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION');
    }
  };
  (0, _react.useEffect)(function () {
    if (googleReady && googleMap && googleMapMarker && isHeatMap && markerCluster) {
      heatMap && heatMap.setMap(heatMap.getMap() ? null : googleMap);
      if (heatMap.getMap()) {
        markerCluster.clearMarkers();
      } else {
        if (Array.isArray(markers)) {
          markerCluster.addMarkers(markers);
        }
      }
    }
  }, [isHeat]);
  (0, _react.useEffect)(function () {
    if (googleReady && googleMap && googleMapMarker && isFitCenter) {
      googleMap.addListener('center_changed', function () {
        var timeOUt = setTimeout(function () {
          googleMapMarker.setPosition(googleMap.getCenter());
          handleChangeCenter && handleChangeCenter(googleMap.getCenter());
        }, 200);
        return function () {
          return clearTimeout(timeOUt);
        };
      });
    }
  }, [googleMapMarker]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      var _location$zoom, _window, _window2;
      var map = new window.google.maps.Map(divRef.current, {
        zoom: (_location$zoom = location.zoom) !== null && _location$zoom !== void 0 ? _location$zoom : mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: ((_window = window) === null || _window === void 0 || (_window = _window.google) === null || _window === void 0 || (_window = _window.maps) === null || _window === void 0 || (_window = _window.MapTypeControlStyle) === null || _window === void 0 ? void 0 : _window.HORIZONTAL_BAR) || 'HORIZONTAL_BAR',
          position: ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.google) === null || _window2 === void 0 || (_window2 = _window2.maps) === null || _window2 === void 0 || (_window2 = _window2.ControlPosition) === null || _window2 === void 0 ? void 0 : _window2.TOP_LEFT) || 'TOP_LEFT'
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      var marker = null;
      setGoogleMap(map);
      if (locations !== null && locations !== void 0 && locations.length) {
        if (businessMap) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center.lat, center.lng),
            map: map
          });
          setGoogleMapMarker(marker);
        }
        generateMarkers(map);
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
          map: map,
          opacity: isHeatMap ? 0 : 1
        });
        setGoogleMapMarker(marker);
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
          map: map,
          draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
        });
        setGoogleMapMarker(marker);
      }
      if (data) {
        data.forEach(function (zone) {
          var _zone$data;
          if (zone.type === 1 && zone !== null && zone !== void 0 && (_zone$data = zone.data) !== null && _zone$data !== void 0 && _zone$data.center) {
            var circle = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
              draggable: false,
              map: map,
              center: zone.data.center,
              radius: zone.data.radio
            }));
            console.log(circle);
          }
          if (zone.type === 2 && Array.isArray(zone.data)) {
            var polygon = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
              draggable: false,
              map: map,
              paths: zone.data
            }));
            console.log(polygon);
          }
        });
      }
    }
  }, [googleReady]);
  (0, _react.useEffect)(function () {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', function () {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition());
        });
        window.google.maps.event.addListener(googleMapMarker, 'drag', function () {
          events.emit('map_is_dragging', true);
        });
        if (mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable) {
          window.google.maps.event.addListener(googleMap, 'drag', function () {
            !onlyMarkerChangeCenter && googleMapMarker.setPosition(googleMap.getCenter());
            events.emit('map_is_dragging', true);
          });
          if (!onlyMarkerChangeCenter) {
            window.google.maps.event.addListener(googleMap, 'dragend', function () {
              googleMapMarker.setPosition(googleMap.getCenter());
              validateResult(googleMap, googleMapMarker, googleMap.getCenter());
            });
          }
        }
        if (isHeatMap && !markerCluster && window.google.maps.visualization) {
          var locationsData = Array.isArray(locations) ? locations : [];
          var _heatMap = new window.google.maps.visualization.HeatmapLayer({
            data: locationsData.map(function (location) {
              return new window.google.maps.LatLng(location === null || location === void 0 ? void 0 : location.lat, location === null || location === void 0 ? void 0 : location.lng);
            }),
            map: null,
            radius: 17
          });
          setHeatMap(_heatMap);
          if (window.MarkerClusterer) {
            var _markerCluster = new window.MarkerClusterer(googleMap, Array.isArray(markers) ? markers : [], {
              imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            setMarkerCluster(_markerCluster);
          }
        }
        return function () {
          window.google.maps.event.clearListeners(googleMapMarker, 'dragend');
          window.google.maps.event.clearListeners(googleMap, 'drag');
          window.google.maps.event.clearListeners(googleMap, 'dragend');
        };
      }
    }
  }, [googleMapMarker, googleMap, location]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      if (businessMap && googleMap) {
        generateMarkers(googleMap);
      }
      if (!(isHeatMap && (locations === null || locations === void 0 ? void 0 : locations.length) > 0)) {
        center.lat = location === null || location === void 0 ? void 0 : location.lat;
        center.lng = location === null || location === void 0 ? void 0 : location.lng;
        if (center.lat && center.lng) {
          googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
          googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
        }
      }
    }
  }, [location]);
  (0, _react.useEffect)(function () {
    if (!businessMap && !disableAutoFit) {
      var interval = setInterval(function () {
        if (googleReady && googleMap) {
          var driverLocation = locations[0];
          if (driverLocation) {
            var newLocation = new window.google.maps.LatLng(driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lat, driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lng);
            if (markers[0]) markers[0].setPosition(newLocation);
            markers.forEach(function (marker) {
              return boundMap.extend(marker.position);
            });
            googleMap.fitBounds(boundMap);
          }
        }
      }, 1000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, [locations, disableAutoFit]);
  (0, _react.useEffect)(function () {
    if (googleMap && placeId) {
      var request = {
        placeId: placeId
      };
      var service = new window.google.maps.places.PlacesService(googleMap);
      var callback = function callback(place, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setDetails && setDetails(place);
        }
      };
      service.getDetails(request, callback);
    }
  }, [googleMap, placeId]);
  return googleReady && /*#__PURE__*/_react.default.createElement("div", {
    id: "map",
    ref: divRef,
    style: {
      width: '70%',
      height: '50%',
      position: 'absolute'
    }
  });
};
GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: _propTypes.default.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var GoogleMapsMap = exports.GoogleMapsMap = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GoogleMaps);
GoogleMapsMap.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: _propTypes.default.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};