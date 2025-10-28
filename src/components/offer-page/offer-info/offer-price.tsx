interface Props {
  price: number;
}

export function OfferPrice({ price }: Props) {
  return (
    <div className='offer__price'>
      <b className='offer__price-value'>&euro;{price}</b>
      <span className='offer__price-text'>&nbsp;night</span>
    </div>
  );
}
