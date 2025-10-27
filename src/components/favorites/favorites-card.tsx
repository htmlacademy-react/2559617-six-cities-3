import PlaceCard from "../place-card/place-card";

export default function FavoritesCard() {
    return (
        <PlaceCard isPremium={true} imageSrc="img/apartment-01.jpg" pricePerNight={120} rating={80} title="Beautiful &amp; luxurious apartment at great location" type="Apartment" />
  );
}
