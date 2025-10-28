import { OfferHostDescription } from './offer-host-description';
import { OfferHostUser } from './offer-host-user';

export function OfferHost() {
  return (
    <div className='offer__host'>
      <h2 className='offer__host-title'>Meet the host</h2>
      <OfferHostUser userPhoto='img/avatar-angelina.jpg' userName='Angelina' userStatus='Pro' />
      <OfferHostDescription />
    </div>
  );
}
