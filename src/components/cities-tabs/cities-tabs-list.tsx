import { CitiesTabsItem } from './cities-tabs-item';

type Props = {
  selectedCity: string;
  onCityChange: (city: string) => void;
};

export function CitiesTabsList({ selectedCity, onCityChange }: Props) {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CitiesTabsItem
              key={city}
              cityName={city}
              isActive={selectedCity === city}
              onCityChange={onCityChange}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
