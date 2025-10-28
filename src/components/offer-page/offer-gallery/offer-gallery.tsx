import { OfferGalleryItem } from "./offer-gallery-item"

export function OfferGallery (){
    return(
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <OfferGalleryItem scrPhoto="img/room.jpg" />
            <OfferGalleryItem scrPhoto="img/apartment-01.jpg" />
            <OfferGalleryItem scrPhoto="img/apartment-02.jpg" />
            <OfferGalleryItem scrPhoto="img/apartment-03.jpg" />
            <OfferGalleryItem scrPhoto="img/studio-01.jpg" />
            <OfferGalleryItem scrPhoto="img/apartment-01.jpg" />
          </div>
        </div>
    )
}