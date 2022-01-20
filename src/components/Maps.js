import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '180px',
  
};

const center = {
  lat: 55.6409746,
  lng: 12.0802932
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaX9LXDr6PgDQ3sv9CYFm7eeNTgDVEUPo"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <div className="px-3">
         <div className="text-center">
         <p className="text-lg">Område</p>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
            </div> 
      </div>
      
      
  ) : <></>
}

export default React.memo(Maps)