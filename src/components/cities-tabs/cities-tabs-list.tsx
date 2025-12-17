import { CitiesTabsItem } from './cities-tabs-item';
import { CITIES } from '../../const';

type Props = {
  selectedCity: string;
  onCityChange: (city: string) => void;
};

export function CitiesTabsList({ selectedCity, onCityChange }: Props) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <CitiesTabsItem
              key={city.id}
              cityName={city.name}
              isActive={selectedCity === city.name}
              onCityChange={onCityChange}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
