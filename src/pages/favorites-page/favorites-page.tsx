import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/header';
import { FavoritesPageEmpty } from '../../components/favorites/favorites-empty';
import { FavoritesSection } from '../../components/favorites/favorites-section';

export function FavoritesPage(): JSX.Element {
  const offers = useSelector((state: RootState) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavourite);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        {favoriteOffers.length === 0 ? (
          <FavoritesPageEmpty />
        ) : (
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesSection offers={favoriteOffers} />
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
