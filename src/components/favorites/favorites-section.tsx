import { FavoritesCityGroup } from './favorites-city-group';

export function FavoritesSection() {
  return (
    <ul className='favorites__list'>
      <FavoritesCityGroup
        cityName='Amsterdam'
        places={[
          {
            isPremium: true,
            imageSrc: 'img/apartment-03.jpg',
            pricePerNight: 180,
            rating: 100,
            title: 'Nice, cozy, warm big bed apartment',
            type: 'Apartment',
          },
          {
            isPremium: false,
            imageSrc: 'img/room.jpg',
            pricePerNight: 80,
            rating: 80,
            title: 'Wood and stone place',
            type: 'Room',
          },
        ]}
      />

      <FavoritesCityGroup
        cityName='Cologne'
        places={[
          {
            isPremium: false,
            imageSrc: 'img/apartment-small-04.jpg',
            pricePerNight: 180,
            rating: 100,
            title: 'White castle',
            type: 'Apartment',
          },
        ]}
      />
    </ul>
  );
}
