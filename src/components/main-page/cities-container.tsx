import { MapSection } from './map-section';
import { PlacesList } from './places-list';
import { TOffer } from '../../types/offers';

type Props = {
  offers: TOffer[];
  selectedCity: string;
};

export function CitiesContainer({ offers, selectedCity }: Props): JSX.Element {
  const filteredOffers = offers.filter(
    (offer) => offer.city.name === selectedCity
  );

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <PlacesList offers={filteredOffers} cityName={selectedCity} />
        <div className="cities__right-section">
          <MapSection offers={filteredOffers} />
        </div>
      </div>
    </div>
  );
}

