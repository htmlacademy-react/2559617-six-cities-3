import { OfferFeatures } from './offer-features';
import { OfferHost } from './offer-host/offer-host-section';
import { OfferInsideList } from './offer-inside/offer-inside-list';
import { OfferName } from './offer-name';
import { OfferPremiumMark } from './offer-premium-mark';
import { OfferPrice } from './offer-price';
import { OfferRating } from './offer-rating';
import { OfferReviews } from './offer-reviews/offer-reviews-section';

export function OfferInfo() {
  return (
    <div className='offer__container container'>
      <div className='offer__wrapper'>
        <OfferPremiumMark />
        <OfferName offerName='Beautiful &amp; luxurious studio at great location' />
        <OfferRating rating={80} />
        <OfferFeatures />
        <OfferPrice price={120} />
        <OfferInsideList />
        <OfferHost />
        <OfferReviews />
      </div>
    </div>
  );
}
