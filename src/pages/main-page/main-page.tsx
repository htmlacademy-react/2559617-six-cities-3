import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { changeCity } from '../../store/action';
import { fetchOffers } from '../../store/api-actions';
import { CitiesTabsList } from '../../components/cities-tabs/cities-tabs-list';
import { CitiesContainer } from '../../components/main-page/cities-container';
import { PageLayout } from '../../components/page-layout/PageLayout';
import { Spinner } from '../../components/spinner/Spinner';

export function MainPage(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);
  const isOffersLoading = useSelector((state: RootState) => state.isOffersLoading);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

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
