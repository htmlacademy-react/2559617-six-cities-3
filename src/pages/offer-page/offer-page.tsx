// OfferPage.tsx
import { Header } from '../../components/header/header';
import { OfferGallery } from '../../components/offer-page/offer-gallery/offer-gallery';
import { OfferInfo } from '../../components/offer-page/offer-info/offer-info';
import { TOffer } from '../../types/offers';

type Props = {
  offers: TOffer[];
};

export function OfferPage({ offers }: Props): JSX.Element {
  const offer = offers[0];

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
