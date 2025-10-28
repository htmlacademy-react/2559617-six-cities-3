import { PlaceCard } from "./place-card";
import {PlacesSorting} from "./places-sorting";

type PlacesListProps = {
    placesCount: number;
    cityName: string;
}

export function PlacesList({placesCount, cityName }:PlacesListProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in {cityName}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        <PlaceCard isPremium={true} imageSrc="img/apartment-01.jpg" pricePerNight={120} rating={80} title="Beautiful &amp; luxurious apartment at great location" type="Apartment" />
        <PlaceCard isPremium={false} imageSrc="img/room.jpg" pricePerNight={80} rating={80} title="Wood and stone place" type="Room" />
        <PlaceCard isPremium={false} imageSrc="img/apartment-02.jpg" pricePerNight={132} rating={80} title="Canal View Prinsengracht" type="Apartment" />
        <PlaceCard isPremium={true} imageSrc="img/apartment-03.jpg" pricePerNight={180} rating={100} title="Nice, cozy, warm big bed apartment" type="Apartment" />
        <PlaceCard isPremium={false} imageSrc="img/room.jpg" pricePerNight={80} rating={80} title="Wood and stone place" type="Room" />      
      </div>
    </section>
  );
}
