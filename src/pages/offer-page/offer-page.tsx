import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { OfferGallery } from '../../components/offer-page/offer-gallery/offer-gallery';
import { OfferInfo } from '../../components/offer-page/offer-info/offer-info';
import { TOffer } from '../../types/offers';
import { NotFoundPage } from '../not-found-page/not-found.page';

type Props = {
  offers: TOffer[];
};

export function OfferPage({ offers }: Props): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--offer'>
        <section className='offer'>
          <OfferGallery />
          <OfferInfo offer={offer} />
          {/* <OfferMap />
          <NearPlaces /> */}
        </section>
      </main>
    </div>
  );
}
