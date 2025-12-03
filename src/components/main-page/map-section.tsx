import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { TOffer } from '../../types/offers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
  offers: TOffer[];
};

export function MapSection({ offers }: Props) {
  const mapRef = useRef(null);
  const city = offers[0].city.location;
  const map = useMap(mapRef, city) ;
  const hoveredOfferId = useSelector((state: RootState) => state.hoveredOfferId);

  useEffect(() => {
    if (!map){
      return;
    }

    map.setView([city.latitude, city.longitude], city.zoom);

    map.eachLayer((layer) => {
      if (layer instanceof leaflet.Marker) {
        map.removeLayer(layer);
      }
    });

    offers.forEach((offer) => {
      const iconUrl = offer.id === hoveredOfferId ? '/img/pin-active.svg' : '/img/pin.svg';
      const icon = leaflet.icon({
        iconUrl,
        iconSize: [27, 39],
      });

      leaflet
        .marker([offer.location.latitude, offer.location.longitude], { icon })
        .addTo(map);
    });
  }, [map, offers, hoveredOfferId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{ height: '500px' }}
    />
  );
}
