import { Header } from '../../components/header/header';
import { CitiesTabsList } from '../../components/cities-tabs/cities-tabs-list';
import { CitiesContainer } from '../../components/main-page/cities-container';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeCity } from '../../store/action';

export function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  const city = useSelector((state: RootState) => state.city);

  const handleCityChange = (newCity: string) => {
    dispatch(changeCity(newCity));
  };

  return (
    <div className='page page--gray page--main'>
      <Header showNavigation />
      <main className='page__main page__main--index'>
        <CitiesTabsList selectedCity={city} onCityChange={handleCityChange} />
        <CitiesContainer />
      </main>
    </div>
  );
}
