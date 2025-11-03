import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';


export function NotFoundPage() {
  return (
    <div className='page'>
      <Header />
      <p style={{ textAlign: 'center' }}>Такой страницы у нас нет, зато есть много классных отелей. Найти их можно <Link to='/'><span style={{ color: '#6e5192' }}>на главной странице.</span></Link></p>
    </div>
  );
}
