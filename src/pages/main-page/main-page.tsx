import { useState } from 'react';
import { Header } from '../../components/header/header';
import { CitiesTabsList } from '../../components/cities-tabs/cities-tabs-list';
import { CitiesContainer } from '../../components/main-page/cities-container';
import { TOffer } from '../../types/offers';

type Props = {
  offers: TOffer[];
};

export function MainPage({offers}: Props): JSX.Element {
  const [activeCity, setActiveCity] = useState('Paris');

  const handleCityChange = (city: string) => {
    setActiveCity(city);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className='page page--gray page--main'>
      <Header showNavigation />
      <main className='page__main page__main--index'>
        <CitiesTabsList selectedCity={activeCity} onCityChange={handleCityChange} />
        <CitiesContainer offers={filteredOffers} selectedCity={activeCity} />
      </main>
    </div>
  );
}
