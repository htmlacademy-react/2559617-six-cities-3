import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { OfferGallery } from '../../components/offer-page/offer-gallery/offer-gallery';
import { OfferInfo } from '../../components/offer-page/offer-info/offer-info';
import { MapSection } from '../../components/main-page/map-section';
import { NearPlaces } from '../../components/offer-page/near-places/near-places';
import { NotFoundPage } from '../not-found-page/not-found.page';
import { PageLayout } from '../../components/page-layout/PageLayout';

export function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const offers = useSelector((state: RootState) => state.offers);
  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout mainClassName="page__main page__main--offer">
      <section className="offer">
        <OfferGallery />
        <OfferInfo offer={offer} />
        <MapSection offers={[offer]} />
        <NearPlaces />
      </section>
    </PageLayout>
  );
}
