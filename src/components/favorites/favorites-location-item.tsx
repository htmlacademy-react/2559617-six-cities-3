import FavoritesCard from "./favorites-card";

type Props = {
  city: string;
  offers: Array<any>;
};

export default function FavoritesLocationItem({ city, offers }: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoritesCard key={offer.id} {...offer} />
        ))}
      </div>
    </li>
  );
}
