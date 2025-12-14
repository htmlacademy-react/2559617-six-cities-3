import { PlaceCard } from './place-card';
import { PlacesSorting } from './places-sorting';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeSort } from '../../store/action';

export function OfferList(): JSX.Element {
  const city = useSelector((state: RootState) => state.city);
  const offers = useSelector((state: RootState) => state.offers);
  const sortType = useSelector((state: RootState) => state.sortType);
  const dispatch = useDispatch();

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {filteredOffers.length} place{filteredOffers.length !== 1 && 's'} to stay in {city}
      </b>

      <PlacesSorting sortType={sortType} setSortType={(type) => dispatch(changeSort(type))} />

      <div className='cities__places-list places__list tabs__content'>
        {filteredOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </section>
  );
}
