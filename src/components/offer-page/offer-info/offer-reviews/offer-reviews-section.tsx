import { OfferReviewForm } from "./offer-review-form/offer-review-form";
import { OfferReviewsList } from "./offer-reviews-list/offer-reviews-list";

export function OfferReviews(){
    return(
        <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <OfferReviewsList />
            <OfferReviewForm />
        </section>
    )
}