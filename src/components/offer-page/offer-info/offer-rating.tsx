interface Props{
  rating: number;
}

export function OfferRating({rating}: Props){
    return(
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">4.8</span>
        </div>
    )
}