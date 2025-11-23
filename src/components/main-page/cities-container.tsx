import { MapSection } from './map-section';
import { PlacesList } from './places-list';
import { TOffer } from '../../types/offers';

type Props = {
  offers: TOffer[];
};

export function CitiesContainer({offers}: Props): JSX.Element {
  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <PlacesList offers={offers} cityName='Amsterdam' />
        <div className="cities__right-section">
          <MapSection offers={offers} />
        </div>
      </div>
    </div>
  );
}
