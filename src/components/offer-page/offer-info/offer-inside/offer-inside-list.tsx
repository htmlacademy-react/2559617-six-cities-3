import { OfferInsideItem } from "./offer-inside-item";

export function OfferInsideList(){
    return(
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            <OfferInsideItem name="Wi-Fi" />
            <OfferInsideItem name="Washing machine" />
            <OfferInsideItem name="Towels" />
            <OfferInsideItem name="Heating" />
            <OfferInsideItem name="Coffee machine" />
            <OfferInsideItem name="Baby seat" />
            <OfferInsideItem name="Kitchen" />
            <OfferInsideItem name="Dishwasher" />
            <OfferInsideItem name="Cabel TV" />
            <OfferInsideItem name="Fridge" />
          </ul>
        </div>
    )
}