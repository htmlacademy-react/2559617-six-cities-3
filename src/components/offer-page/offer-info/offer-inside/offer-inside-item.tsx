interface Props {
  name: string;
}

export function OfferInsideItem({ name }: Props) {
  return (
    <li className='offer__inside-item'>{name}</li>
  );
}
