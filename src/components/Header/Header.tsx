import { Link } from 'react-router-dom';
import './Header.scss';



export const Header = () => {
  return(
    <header className='header'>
      <Link to={'about'}>
        <div className='header__logo'></div>
      </Link>
      <button className='login__button'>Войти</button>
    </header>
  )
}