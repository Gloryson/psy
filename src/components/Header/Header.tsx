import { Link, useLocation } from 'react-router-dom';
import './Header.scss';



export const Header = () => {

  const location = useLocation();

  return(
    <header className='header'>
      <Link to={'/about'}>
        <div className='header__logo'></div>
      </Link>
      <Link to={'/login'}>
        <button className={location.pathname === '/admin' ? 'off' : 'login__button'}>Войти</button>
      </Link>
    </header>
  )
}