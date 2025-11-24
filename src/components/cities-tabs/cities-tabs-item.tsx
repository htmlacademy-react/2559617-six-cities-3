type Props = {
  cityName: string;
  isActive: boolean;
  onCityChange: (city: string) => void;
};

export function CitiesTabsItem({ cityName, isActive, onCityChange }: Props) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onCityChange(cityName);
        }}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}
