import PlaceCard from "../place-card/place-card";

export default function FavoritesList() {
  return (
    <ul className="favorites__list">
        <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
            <div className="locations__item">
                <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
                </a>
            </div>
            </div>
            <div className="favorites__places">
                <PlaceCard isPremium={true} imageSrc="img/apartment-01.jpg" pricePerNight={120} rating={80} title="Beautiful &amp; luxurious apartment at great location" type="Apartment" />
            </div>
        </li>
    </ul>
  );
}
