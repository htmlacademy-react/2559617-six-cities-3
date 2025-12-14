import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeCity } from '../../store/action';
import { CitiesTabsList } from '../../components/cities-tabs/cities-tabs-list';
import { CitiesContainer } from '../../components/main-page/cities-container';
import { PageLayout } from '../../components/page-layout/PageLayout';

export function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);

  return (
    <PageLayout
      pageClassName="page page--gray page--main"
      mainClassName="page__main page__main--index"
      showHeaderNavigation
    >
      <CitiesTabsList
        selectedCity={city}
        onCityChange={(newCity) => dispatch(changeCity(newCity))}
      />
      <CitiesContainer />
    </PageLayout>
  );
}
