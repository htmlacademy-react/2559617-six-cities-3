import { FavoritesPlaceCard } from './favorites-place-card';

interface Place {
  isPremium?: boolean;
  imageSrc: string;
  pricePerNight: number;
  rating: number;
  title: string;
  type: string;
}

interface Props {
  cityName: string;
  places: Place[];
}

export function FavoritesCityGroup({ cityName, places }: Props): JSX.Element {
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>

      <div className='favorites__places'>
        {places.map((place) => (
          <FavoritesPlaceCard key={place.title} {...place} />
        ))}
      </div>
    </li>
  );
}
