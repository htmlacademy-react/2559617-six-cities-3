interface Props {
  scrPhoto: string;
}

export function OfferGalleryItem({ scrPhoto }: Props) {
  return (
    <div className='offer__image-wrapper'>
      <img className='offer__image' src={scrPhoto} alt='Photo studio' />
    </div>
  );
}
