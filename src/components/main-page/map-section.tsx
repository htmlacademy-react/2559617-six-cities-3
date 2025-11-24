import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { TOffer } from '../../types/offers';

type Props = {
  offers: TOffer[];
};

export function MapSection({ offers }: Props) {
  const mapRef = useRef(null);
  const city = offers[0].city.location;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      
      map.setView([city.latitude, city.longitude], city.zoom);

      map.eachLayer((layer) => {
      if (layer instanceof leaflet.Marker) {
        map.removeLayer(layer);
      }
    });

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{ height: '500px' }}
    />
  );
}
