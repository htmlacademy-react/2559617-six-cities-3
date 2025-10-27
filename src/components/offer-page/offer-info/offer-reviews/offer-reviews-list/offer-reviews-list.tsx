import { OfferReviewsItem } from "./offer-reviews-item";

export function OfferReviewsList(){
    return(
        <ul className="reviews__list">
            <OfferReviewsItem userPhoto="img/avatar-max.jpg" userName="Max" userRating={80} date="April 2019" userText="A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th cen" />
        </ul>
    )
}