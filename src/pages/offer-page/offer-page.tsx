import {Header} from "../../components/header/header"
import { NearPlaces } from "../../components/offer-page/near-places/near-places"
import { OfferGallery } from "../../components/offer-page/offer-gallery/offer-gallery"
import { OfferMap } from "../../components/offer-page/offer-map"
import { OfferInfo } from "../../components/offer-page/offer-info/offer-info"

export default function OfferPage() {
    return (
    <div className="page">
        <Header/>
        <main className="page__main page__main--offer">
            <section className="offer">
                <OfferGallery />
                <OfferInfo />
                <OfferMap />
                <NearPlaces />
            </section>
      </main>
    </div>
    )
}