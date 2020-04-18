import * as React from 'react'
import icon from '../../static/img/maps_marker.svg'

const GOOGLE_MAP_API_KEY = 'AIzaSyDTQjatCqlyEhiYfMzuGrVw-CjdyiFHBts'
const center = { lat: 55.779470, lng: 38.472122 }
const markerPosition = { lat: 55.779670, lng: 38.472122 }
const mapStyles = {
  width: '100%',
  height: '500px'
}
const zoom = 17;

export const GMap = () => {
  const googleMapRef = React.createRef<HTMLDivElement>()
  const googleMap = React.useRef(null as unknown as any)
  const marker = React.useRef(null as unknown)

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current!, {
      zoom: zoom,
      center: center
    })

  const createMarker = () =>
    new window.google.maps.Marker({
      position: markerPosition,
      map: googleMap.current!,
      icon: icon
    })

  React.useEffect(() => {
    let googleMapScript = document.getElementById('google-map-script');
    if (googleMapScript && window.google.maps) {
      googleMap.current = createGoogleMap()
      marker.current = createMarker()
      return;
    }
    if (!googleMapScript) {
      let googleMapScript = document.createElement('script')
      googleMapScript.id = 'google-map-script'
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
      window.document.body.appendChild(googleMapScript)
      googleMapScript.addEventListener('load', () => {
        googleMap.current = createGoogleMap()
        marker.current = createMarker()
      })
    }
  })

  return (
    <div
      id='google-map'
      ref={googleMapRef}
      style={mapStyles}
    />
  )
}
