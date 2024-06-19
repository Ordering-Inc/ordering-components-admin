"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessZoneGoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
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
var BusinessZoneGoogleMaps = exports.BusinessZoneGoogleMaps = function BusinessZoneGoogleMaps(props) {
  var apiKey = props.apiKey,
    mapControls = props.mapControls,
    clearState = props.clearState,
    location = props.location,
    type = props.type,
    data = props.data,
    fillStyle = props.fillStyle,
    infoContentString = props.infoContentString,
    handleData = props.handleData,
    setClearState = props.setClearState,
    isAddMode = props.isAddMode,
    greenFillStyle = props.greenFillStyle,
    businessZones = props.businessZones,
    kmlData = props.kmlData,
    disabled = props.disabled,
    distance = props.distance,
    isDriverGroup = props.isDriverGroup;
  if (!apiKey) {
    console.warn('Prop `apiKey` is required to use Google Maps components.');
  }
  var divRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    googleMap = _useState2[0],
    setGoogleMap = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    googleMapMarker = _useState4[0],
    setGoogleMapMarker = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    circleZone = _useState6[0],
    setCircleZone = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    distanceBased = _useState8[0],
    setDistanceBased = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    polygonZone = _useState10[0],
    setPolygonZone = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    infoWindow = _useState12[0],
    setInfoWindow = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    drawingManager = _useState14[0],
    setDrawingManager = _useState14[1];
  var center = location ? {
    lat: location === null || location === void 0 ? void 0 : location.lat,
    lng: location === null || location === void 0 ? void 0 : location.lng
  } : mapControls === null || mapControls === void 0 ? void 0 : mapControls.defaultPosition;
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    googleReady = _useState16[0],
    setGoogleReady = _useState16[1];
  var units = {
    mi: 1609,
    km: 1000
  };

  /**
   * Method to control the data when center of circle is changed.
   */
  var onCircleCenterChanged = function onCircleCenterChanged() {
    handleData({
      center: {
        lat: circleZone.getCenter().lat(),
        lng: circleZone.getCenter().lng()
      },
      radio: circleZone.getRadius() / 1000
    });
  };

  /**
   * Method to control the data when radius of circle is changed.
   */
  var onCircleRadiusChanged = function onCircleRadiusChanged() {
    handleData(_objectSpread(_objectSpread({}, data), {}, {
      radio: circleZone.getRadius() / 1000
    }));
  };

  /**
   * Method to control the data when polygon is changed.
   */
  var onPoygonPathChanged = function onPoygonPathChanged() {
    var data = [];
    var _iterator = _createForOfIteratorHelper(polygonZone.getPath().getArray()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;
        var position = {
          lat: pos.lat(),
          lng: pos.lng()
        };
        data.push(position);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    handleData(data);
  };

  /**
   * Listening method when overlay is completed.
   * @param {EventTarget} event
   */
  var overlayCompleteListener = function overlayCompleteListener(event) {
    setClearState(false);
    drawingManager.setMap(null);
    if (type === 1) {
      setCircleZone(event.overlay);
      infoWindow && infoWindow.open(googleMap);
    } else {
      setPolygonZone(event.overlay);
    }
  };

  /**
   * listening info string change
   */
  (0, _react.useEffect)(function () {
    if (googleReady && infoWindow) {
      infoWindow.setContent(infoContentString);
      if (data !== null && data !== void 0 && data.center) {
        infoWindow.setPosition(data.center);
      }
      if (data !== null && data !== void 0 && data.distance) {
        infoWindow.setPosition(center);
      }
    }
  }, [infoWindow, infoContentString, data, googleReady]);
  (0, _react.useEffect)(function () {
    if (circleZone) {
      handleData({
        center: {
          lat: circleZone.getCenter().lat(),
          lng: circleZone.getCenter().lng()
        },
        radio: circleZone.getRadius() / 1000
      });
      window.google.maps.event.addListener(circleZone, 'center_changed', onCircleCenterChanged);
      window.google.maps.event.addListener(circleZone, 'radius_changed', onCircleRadiusChanged);
    }
  }, [circleZone]);
  (0, _react.useEffect)(function () {
    var _data$distance, _data$distance2;
    if (distanceBased && !clearState && data !== null && data !== void 0 && data.distance && (data === null || data === void 0 || (_data$distance = data.distance) === null || _data$distance === void 0 ? void 0 : _data$distance.toString().slice(-1)) !== '.') {
      handleData(_objectSpread(_objectSpread({}, data), {}, {
        distance: distanceBased.getRadius() / units[data === null || data === void 0 ? void 0 : data.unit]
      }));
    }
    if (distanceBased && clearState || distanceBased && !clearState && data !== null && data !== void 0 && data.distance && (data === null || data === void 0 || (_data$distance2 = data.distance) === null || _data$distance2 === void 0 ? void 0 : _data$distance2.toString().slice(-1)) === '.') {
      handleData(data);
    }
  }, [distanceBased]);
  (0, _react.useEffect)(function () {
    if (polygonZone) {
      var _data = [];
      var _iterator2 = _createForOfIteratorHelper(polygonZone.getPath().getArray()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pos = _step2.value;
          var position = {
            lat: pos.lat(),
            lng: pos.lng()
          };
          _data.push(position);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      handleData(_data);
      window.google.maps.event.addListener(polygonZone, 'mouseup', onPoygonPathChanged);
    }
  }, [polygonZone]);
  (0, _react.useEffect)(function () {
    if (drawingManager) {
      drawingManager.addListener('overlaycomplete', overlayCompleteListener);
    }
  }, [drawingManager]);

  /**
   * clear all the shapes
   */
  (0, _react.useEffect)(function () {
    var _window$google;
    if (!((_window$google = window.google) !== null && _window$google !== void 0 && _window$google.maps)) return;
    if (clearState) {
      var _window$google$maps;
      if (circleZone) {
        circleZone.setMap(null);
        setCircleZone(null);
        infoWindow && infoWindow.close();
      }
      if (polygonZone) {
        polygonZone.setMap(null);
        setPolygonZone(null);
      }
      if (distanceBased) {
        distanceBased.setMap(null);
        setDistanceBased(null);
      }
      if (drawingManager) {
        drawingManager.setMap(null);
      }
      if ((_window$google$maps = window.google.maps) !== null && _window$google$maps !== void 0 && (_window$google$maps = _window$google$maps.drawing) !== null && _window$google$maps !== void 0 && _window$google$maps.DrawingManager) {
        var _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: isDriverGroup !== null && isDriverGroup !== void 0 ? isDriverGroup : disabled && type !== 5,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: (isDriverGroup !== null && isDriverGroup !== void 0 ? isDriverGroup : disabled && type !== 5) && type === 1 ? [window.google.maps.drawing.OverlayType.CIRCLE] : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: true
          }),
          polygonOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: false
          })
        });
        setDrawingManager(_drawingManager);
        _drawingManager.setMap(googleMap);
      }
    }
  }, [clearState, type]);

  /**
   * Fit map
   */
  (0, _react.useEffect)(function () {
    if (!googleReady || !googleMap) return;
    var bounds = new window.google.maps.LatLngBounds();
    if (circleZone) {
      bounds.union(circleZone.getBounds());
      googleMap.fitBounds(bounds);
    }
    if (distanceBased) {
      bounds.union(distanceBased.getBounds());
      googleMap.fitBounds(bounds);
    }
    if (polygonZone && Array.isArray(data)) {
      var _iterator3 = _createForOfIteratorHelper(data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var position = _step3.value;
          bounds.extend(position);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      googleMap.fitBounds(bounds);
    }
  }, [googleReady, data, type, googleMap, circleZone, polygonZone, distanceBased]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      center.lat = location === null || location === void 0 ? void 0 : location.lat;
      center.lng = location === null || location === void 0 ? void 0 : location.lng;
      if (center.lat && center.lng) {
        googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      }
    }
  }, [location]);
  (0, _react.useEffect)(function () {
    if (!googleMap || !Array.isArray(kmlData) || !isAddMode) return;
    var polygon = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
      draggable: false,
      map: googleMap,
      paths: kmlData
    }));
    polygon.setMap(googleMap);
    var bounds = new window.google.maps.LatLngBounds();
    var _iterator4 = _createForOfIteratorHelper(kmlData),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var position = _step4.value;
        bounds.extend(position);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    googleMap.fitBounds(bounds);
    setPolygonZone(polygon);
  }, [isAddMode, kmlData, googleMap]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      var _location$zoom, _window$google$maps2;
      var map = new window.google.maps.Map(divRef.current, {
        zoom: (_location$zoom = location === null || location === void 0 ? void 0 : location.zoom) !== null && _location$zoom !== void 0 ? _location$zoom : mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      var marker = null;
      setGoogleMap(map);
      marker = isDriverGroup ? null : new window.google.maps.Marker({
        position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
        map: map,
        draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
      });
      setGoogleMapMarker(marker);
      if (data) {
        var _infoWindow = new window.google.maps.InfoWindow({
          content: infoContentString,
          position: data.center
        });
        setInfoWindow(_infoWindow);
        if (type === 1 && data !== null && data !== void 0 && data.center) {
          var circle = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
            editable: disabled,
            draggable: true,
            map: map,
            center: data.center,
            radius: data.radio * 1000
          }));
          setCircleZone(circle);
          _infoWindow.open(map);
        }
        if (type === 2 && Array.isArray(data)) {
          var polygon = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
            editable: disabled,
            draggable: false,
            map: map,
            paths: data
          }));
          setPolygonZone(polygon);
        }
        if (type === 5 && data !== null && data !== void 0 && data.distance) {
          var newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
            editable: false,
            center: center,
            radius: data.distance * units[data === null || data === void 0 ? void 0 : data.unit]
          }));
          newCircleZone.setMap(map);
          setDistanceBased(newCircleZone);
          _infoWindow.open(map);
        }
      }
      if ((_window$google$maps2 = window.google.maps) !== null && _window$google$maps2 !== void 0 && (_window$google$maps2 = _window$google$maps2.drawing) !== null && _window$google$maps2 !== void 0 && _window$google$maps2.DrawingManager) {
        var _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: isDriverGroup !== null && isDriverGroup !== void 0 ? isDriverGroup : disabled && type !== 5,
          drawingMode: type === 1 ? window.google.maps.drawing.OverlayType.CIRCLE : type === 2 ? window.google.maps.drawing.OverlayType.POLYGON : null,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: (isDriverGroup !== null && isDriverGroup !== void 0 ? isDriverGroup : disabled && type !== 5) && type === 1 ? [window.google.maps.drawing.OverlayType.CIRCLE] : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: true
          }),
          polygonOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: false
          })
        });
        setDrawingManager(_drawingManager);
        _drawingManager.setMap(map);
      }
      if (isAddMode) {
        var bounds = new window.google.maps.LatLngBounds();
        var _iterator5 = _createForOfIteratorHelper(businessZones),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _deliveryZone$data, _deliveryZone$data2, _deliveryZone$data3;
            var deliveryZone = _step5.value;
            if (deliveryZone.type === 1 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data = deliveryZone.data) !== null && _deliveryZone$data !== void 0 && _deliveryZone$data.center && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data2 = deliveryZone.data) !== null && _deliveryZone$data2 !== void 0 && _deliveryZone$data2.radio) {
              var _newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
                editable: false,
                center: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.center,
                radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.radio) * 1000
              }));
              _newCircleZone.setMap(map);
              bounds.union(_newCircleZone.getBounds());
              map.fitBounds(bounds);
            }
            if (deliveryZone.type === 5 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data3 = deliveryZone.data) !== null && _deliveryZone$data3 !== void 0 && _deliveryZone$data3.distance) {
              var _deliveryZone$data4;
              var _newCircleZone2 = new window.google.maps.Circle(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
                editable: false,
                center: center,
                radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.distance) * units[deliveryZone === null || deliveryZone === void 0 || (_deliveryZone$data4 = deliveryZone.data) === null || _deliveryZone$data4 === void 0 ? void 0 : _deliveryZone$data4.unit]
              }));
              _newCircleZone2.setMap(map);
              bounds.union(_newCircleZone2.getBounds());
              map.fitBounds(bounds);
            }
            if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.type) === 2 && Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
              var newPolygonZone = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
                editable: false,
                paths: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data
              }));
              newPolygonZone.setMap(map);
              if (Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
                var _iterator6 = _createForOfIteratorHelper(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var position = _step6.value;
                    bounds.extend(position);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                map.fitBounds(bounds);
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, [googleReady, distance, type]);

  /**
   * append google map script
   */
  (0, _react.useEffect)(function () {
    if (!apiKey) {
      return;
    }
    var checker = null;
    if (window.document.getElementById('__googleMapsScriptId')) {
      if (typeof google !== 'undefined') {
        setGoogleReady(true);
      } else {
        checker = setInterval(function () {
          if (typeof google !== 'undefined') {
            setGoogleReady(true);
            clearInterval(checker);
          }
        }, 100);
      }
      return;
    }
    window.googleAsyncInit = function () {
      setGoogleReady(true);
    };
    var js = window.document.createElement('script');
    js.id = '__googleMapsScriptId';
    js.async = true;
    js.defer = true;
    js.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&libraries=places,geometry,visualization,drawing&callback=googleAsyncInit");
    window.document.body.appendChild(js);
    return function () {
      if (checker) {
        clearInterval(checker);
      }
    };
  }, [apiKey]);
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
BusinessZoneGoogleMaps.propTypes = {
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
BusinessZoneGoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
BusinessZoneGoogleMaps.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired
};