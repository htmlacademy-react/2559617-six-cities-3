import { PlaceCard } from './place-card';
import { PlacesSorting } from './places-sorting';
import { TOffer } from '../../types/offers';

type Props = {
  cityName: string;
  offers: TOffer[];
};

export function PlacesList({ cityName, offers }: Props): JSX.Element {
  const placesCount = offers.length;

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {placesCount} place to stay in {cityName}
      </b>

      <PlacesSorting />

      <div className='cities__places-list places__list tabs__content'>
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
