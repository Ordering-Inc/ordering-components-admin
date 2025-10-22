import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'
import { useEvent } from '../../contexts/EventContext'
import { useUtils } from '../../contexts/UtilsContext'

export const GoogleMaps = (props) => {
  const {
    googleReady,
    locations,
    mapControls,
    setErrors,
    isSetInputs,
    fixedLocation,
    handleChangeAddressMap,
    maxLimitLocation,
    businessMap,
    onBusinessClick,
    isHeatMap,
    isHeat,
    markerIcon,
    isFitCenter,
    handleChangeCenter,
    data,
    fillStyle,
    placeId,
    setDetails,
    onlyMarkerChangeCenter,
    disableAutoFit
  } = props

  const [{ optimizeImage }] = useUtils()
  const [events] = useEvent()
  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [markers, setMarkers] = useState([])
  const [boundMap, setBoundMap] = useState(null)
  const [heatMap, setHeatMap] = useState(null)
  const [markerCluster, setMarkerCluster] = useState(null)
  const [hasInitialFit, setHasInitialFit] = useState(false)

  const location = fixedLocation || props.location
  const center = { lat: location?.lat, lng: location?.lng }

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  const generateMarkers = (map) => {
    // Validación básica de locations
    if (!Array.isArray(locations)) {
      console.warn('Locations must be an array')
      return
    }

    const bounds = new window.google.maps.LatLngBounds()
    let businessesNear = 0

    // Filtrar ubicaciones inválidas
    const validLocations = locations.filter(loc =>
      loc && typeof loc.lat !== 'undefined' &&
      typeof loc.lng !== 'undefined' &&
      !isNaN(Number(loc.lat)) &&
      !isNaN(Number(loc.lng))
    )

    for (let i = 0; i < validLocations.length; i++) {
      let formatUrl = null
      if (i === 1 || businessMap) {
        formatUrl = optimizeImage(validLocations[i]?.icon, 'r_max')
      }
      if (isHeatMap && markerIcon) {
        formatUrl = markerIcon
      }
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(Number(validLocations[i].lat), Number(validLocations[i].lng)),
        map,
        title: validLocations[i]?.slug,
        icon: validLocations[i]?.icon
          ? {
            url: formatUrl || validLocations[i].icon,
            scaledSize: new window.google.maps.Size(45, 45)
          }
          : (isHeatMap
            ? {
              url: formatUrl,
              scaledSize: new window.google.maps.Size(40, 40)
            }
            : null)
      })
      if (businessMap) {
        const isNear = validateResult(googleMap, marker, marker.getPosition())
        if (isNear) {
          marker.addListener('click', () => onBusinessClick(validLocations[i]?.slug))
          bounds.extend(marker.position)
          setMarkers(markers => [...markers, marker])
          businessesNear = businessesNear + 1
        } else {
          marker.setMap(null)
        }
      } else {
        bounds.extend(marker.position)
        setMarkers(markers => [...markers, marker])
      }
    }
    businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES')
    if (disableAutoFit) {
      if (!hasInitialFit && map?.fitBounds) {
        map.fitBounds(bounds)
        setHasInitialFit(true)
      }
    } else {
      map?.fitBounds && map.fitBounds(bounds)
    }
    setBoundMap(bounds)
  }

  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  const geocodePosition = (pos) => {
    if (isSetInputs) {
      const geocoder = new window.google.maps.Geocoder()

      geocoder.geocode({ latLng: pos }, (results) => {
        if (results && results.length > 0 && results?.[0]?.address_components) {
          const addressObj = {}
          const cityFallback = results[0].address_components.find(component => component.types.includes('administrative_area_level_2'))
          for (const component of results[0].address_components) {
            const addressType = component.types[0]
            if (addressType === 'postal_code') {
              addressObj.zipcode = component.short_name
            }
            if (addressType === 'street_number') {
              addressObj.street_number = component.long_name
            }
            if (addressType === 'neighborhood') {
              addressObj.neighborhood = component.long_name
            }
            if (addressType === 'route') {
              addressObj.route = component.long_name
            }
            if (addressType === 'locality') {
              addressObj.city = component.long_name || cityFallback.long_name
              addressObj.locality = component.long_name
            }
            if (component.types?.includes('sublocality')) {
              addressObj.sublocality = component.long_name
            }
            if (addressType === 'country') {
              addressObj.country = component.long_name
              addressObj.country_code = component.short_name
            }
            if (addressType === 'administrative_area_level_1') {
              addressObj.state = component.long_name
              addressObj.state_code = component.short_name
            }
          }
          const address = {
            address: results[0].formatted_address,
            location: { lat: pos?.lat(), lng: pos?.lng() },
            ...addressObj
          }

          handleChangeAddressMap && handleChangeAddressMap(address)

          center.lat = address.location?.lat
          center.lng = address.location?.lng
        } else {
          googleMapMarker && googleMapMarker.setPosition(center)
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS')
        }
        if (center?.lat && center?.lng) {
          googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
        }
      })
    } else {
      const location = { lat: pos?.lat(), lng: pos?.lng() }
      handleChangeAddressMap && handleChangeAddressMap({
        location
      })
      center.lat = location?.lat
      center.lng = location?.lng
      if (location.lat && location.lng) {
        googleMap && googleMap.panTo(new window.google.maps.LatLng(location?.lat, location?.lng))
      }
    }
  }

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  const validateResult = (map, marker, curPos) => {
    const loc1 = new window.google.maps.LatLng(curPos?.lat(), curPos?.lng())
    const loc2 = new window.google.maps.LatLng(location?.lat, location?.lng)

    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2)

    if (businessMap) {
      const minimumBusinessDistance = 20000
      if (distance <= minimumBusinessDistance) return true
      return false
    }

    if (!maxLimitLocation) {
      onlyMarkerChangeCenter && handleChangeCenter(curPos)
      geocodePosition(curPos)
      return
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos)
      onlyMarkerChangeCenter && handleChangeCenter(curPos)
    } else if (center?.lat && center?.lng) {
      marker.setPosition(center)
      map.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION')
    }
  }

  useEffect(() => {
    if (googleReady && googleMap && googleMapMarker && isHeatMap && markerCluster) {
      heatMap && heatMap.setMap(heatMap.getMap() ? null : googleMap)
      if (heatMap.getMap()) {
        markerCluster.clearMarkers()
      } else {
        if (Array.isArray(markers)) {
          markerCluster.addMarkers(markers)
        }
      }
    }
  }, [isHeat])

  useEffect(() => {
    if (googleReady && googleMap && googleMapMarker && isFitCenter) {
      let timeoutId = null
      const listener = googleMap.addListener('center_changed', () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
          googleMapMarker.setPosition(googleMap.getCenter())
          handleChangeCenter && handleChangeCenter(googleMap.getCenter())
        }, 200)
      })
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        if (listener && window.google?.maps?.event) {
          window.google.maps.event.removeListener(listener)
        }
      }
    }
  }, [googleMapMarker])

  useEffect(() => {
    if (!googleReady || !window.google?.maps) return
    try {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom ?? mapControls.defaultZoom,
        center,
        zoomControl: mapControls?.zoomControl,
        streetViewControl: mapControls?.streetViewControl,
        fullscreenControl: mapControls?.fullscreenControl,
        mapTypeControl: mapControls?.mapTypeControl,
        mapTypeId: mapControls?.mapTypeId,
        mapTypeControlOptions: {
          style: window?.google?.maps?.MapTypeControlStyle?.HORIZONTAL_BAR || 'HORIZONTAL_BAR',
          position: window?.google?.maps?.ControlPosition?.TOP_LEFT || 'TOP_LEFT',
          ...mapControls?.mapTypeControlOptions
        }
      })

      let marker = null
      setGoogleMap(map)

      if (locations?.length) {
        if (businessMap) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center.lat, center.lng),
            map
          })
          setGoogleMapMarker(marker)
        }
        generateMarkers(map)
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center?.lat, center?.lng),
          map,
          opacity: isHeatMap ? 0 : 1
        })
        setGoogleMapMarker(marker)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center?.lat, center?.lng),
          map,
          draggable: !!mapControls?.isMarkerDraggable
        })
        setGoogleMapMarker(marker)
      }

      if (data) {
        data.forEach(zone => {
          if (zone.type === 1 && zone?.data?.center) {
            const circle = new window.google.maps.Circle({
              ...fillStyle,
              draggable: false,
              map: map,
              center: zone.data.center,
              radius: zone.data.radio
            })
            console.log(circle)
          }
          if (zone.type === 2 && Array.isArray(zone.data)) {
            const polygon = new window.google.maps.Polygon({
              ...fillStyle,
              draggable: false,
              map: map,
              paths: zone.data
            })
            console.log(polygon)
          }
        })
      }
    } catch (error) {
      console.error('Error initializing Google Maps:', error)
    }
  }, [googleReady])

  useEffect(() => {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', () => {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition())
        })

        window.google.maps.event.addListener(googleMapMarker, 'drag', () => {
          events.emit('map_is_dragging', true)
        })

        if (mapControls?.isMarkerDraggable) {
          window.google.maps.event.addListener(googleMap, 'drag', () => {
            !onlyMarkerChangeCenter && googleMapMarker.setPosition(googleMap.getCenter())
            events.emit('map_is_dragging', true)
          })
          if (!onlyMarkerChangeCenter) {
            window.google.maps.event.addListener(googleMap, 'dragend', () => {
              googleMapMarker.setPosition(googleMap.getCenter())
              validateResult(googleMap, googleMapMarker, googleMap.getCenter())
            })
          }
        }

        if (isHeatMap && !markerCluster && window.google.maps.visualization) {
          const locationsData = Array.isArray(locations) ? locations : []

          const _heatMap = new window.google.maps.visualization.HeatmapLayer({
            data: locationsData.map(location => {
              return new window.google.maps.LatLng(location?.lat, location?.lng)
            }),
            map: null,
            radius: 17
          })
          setHeatMap(_heatMap)

          if (window.MarkerClusterer) {
            const _markerCluster = new window.MarkerClusterer(googleMap, Array.isArray(markers) ? markers : [], {
              imagePath:
                'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            })
            setMarkerCluster(_markerCluster)
          }
        }

        return () => {
          window.google.maps.event.clearListeners(googleMapMarker, 'dragend')
          window.google.maps.event.clearListeners(googleMap, 'drag')
          window.google.maps.event.clearListeners(googleMap, 'dragend')
        }
      }
    }
  }, [googleMapMarker, googleMap, location])

  useEffect(() => {
    if (googleReady) {
      if (businessMap && googleMap) {
        generateMarkers(googleMap)
      }
      if (!(isHeatMap && locations?.length > 0)) {
        center.lat = location?.lat
        center.lng = location?.lng
        if (center.lat && center.lng) {
          googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center?.lat, center?.lng))
          googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
        }
      }
    }
  }, [location])

  useEffect(() => {
    let interval = null
    if (!businessMap && !disableAutoFit) {
      interval = setInterval(() => {
        if (googleReady && googleMap) {
          const driverLocation = locations[0]
          if (driverLocation) {
            const newLocation = new window.google.maps.LatLng(driverLocation?.lat, driverLocation?.lng)
            if (markers[0]) markers[0].setPosition(newLocation)
            markers.forEach(marker => boundMap.extend(marker.position))
            googleMap.fitBounds(boundMap)
          }
        }
      }, 1000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [locations, disableAutoFit])

  useEffect(() => {
    if (googleMap && placeId) {
      const request = { placeId }
      const service = new window.google.maps.places.PlacesService(googleMap)
      const callback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setDetails && setDetails(place)
        }
      }
      service.getDetails(request, callback)
    }
  }, [googleMap, placeId])

  return (
    googleReady && (
      <div
        id='map'
        ref={divRef}
        style={{ width: '70%', height: '50%', position: 'absolute' }}
      />
    )
  )
}

GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: PropTypes.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)

GoogleMapsMap.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: PropTypes.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: PropTypes.func
}
