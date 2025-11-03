import { MapSection } from './map-section';
import { PlacesList } from './places-list';

export function CitiesContainer() {
  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <PlacesList placesCount={312} cityName='Amsterdam' />
        <MapSection />
      </div>
    </div>
  );
}
