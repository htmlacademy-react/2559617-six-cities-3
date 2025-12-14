import { useEffect, useState, useRef, RefObject } from 'react';
import leaflet, { Map as LeafletMap } from 'leaflet';

interface City {
  latitude: number;
  longitude: number;
  zoom: number;
}

function useMap(mapRef: RefObject<HTMLElement>, city: City): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: [city.latitude, city.longitude],
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city.latitude, city.longitude, city.zoom, mapRef.current]);

  return map;
}

export default useMap;
