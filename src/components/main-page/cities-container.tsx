import { PlacesList } from './places-list';
import { MapSection } from './map-section';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function CitiesContainer(): JSX.Element {
  const city = useSelector((state: RootState) => state.city);
  const offers = useSelector((state: RootState) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <PlacesList/>
        <div className="cities__right-section">
          <MapSection offers={filteredOffers} />
        </div>
      </div>
    </div>
  );
}
