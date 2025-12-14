import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { TOffer } from '../../types/offers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CITY_CENTERS } from '../../const';

type Props = {
  offers: TOffer[];
};

export function MapSection({ offers }: Props) {
  const mapRef = useRef<HTMLElement | null>(null);

  const activeCityName = offers[0].city.name;
  const hoveredOfferId = useSelector((state: RootState) => state.hoveredOfferId);

  const hoveredOffer = offers.find((offer) => offer.id === hoveredOfferId);
  
  const mapCenter = hoveredOffer
    ? hoveredOffer.location
    : CITY_CENTERS[activeCityName] ?? offers[0].city.location;

  const map = useMap(mapRef, mapCenter);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (!map) return;

    map.setView([mapCenter.latitude, mapCenter.longitude], mapCenter.zoom);

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    markersRef.current = offers.map((offer) => {
      const iconUrl = offer.id === hoveredOfferId
        ? '/img/pin-active.svg'
        : '/img/pin.svg';
      const marker = leaflet.marker([offer.location.latitude, offer.location.longitude], {
        icon: leaflet.icon({ iconUrl, iconSize: [27, 39] }),
      });
      marker.addTo(map);
      return marker;
    });
  }, [map, offers, mapCenter, hoveredOfferId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{ height: '500px' }}
    />
  );
}
