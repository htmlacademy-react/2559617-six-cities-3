import { NearPlacesCard } from "./near-place-card";

export function NearPlaces(){
    return(
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
                <NearPlacesCard isPremium={false} imageSrc="img/room.jpg" pricePerNight={80} rating={80} title="Wood and stone place" type="Room" />
                <NearPlacesCard isPremium={false} imageSrc="img/apartment-02.jpg" pricePerNight={132} rating={80} title="Canal View Prinsengracht" type="Apartment" />
                <NearPlacesCard isPremium={true} imageSrc="img/apartment-03.jpg" pricePerNight={180} rating={100} title="Nice, cozy, warm big bed apartment" type="Apartment" />
            </div>
          </section>
        </div>
    )
}