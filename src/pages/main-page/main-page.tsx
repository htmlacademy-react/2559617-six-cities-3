import { Header } from '../../components/header/header';
import { CitiesTabsList } from '../../components/cities-tabs/cities-tabs-list';
import { CitiesContainer } from '../../components/main-page/cities-container';

export function MainPage() {
  return (
    <div className='page page--gray page--main'>
      <Header showNavigation />
      <main className='page__main page__main--index'>
        <CitiesTabsList />
        <CitiesContainer />
      </main>
    </div>
  );
}
