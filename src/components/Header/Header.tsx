import { Link } from 'react-router-dom';
import './Header.scss';



export const Header = () => {
  return(
    <header className='header'>
      <Link to={'about'}>
        <h1>Психолог Анатолий Болкунов</h1>
      </Link>
      <div className='input__container'>
        <input type="search" className='search__input'/>
        <button className='search__button'></button>
      </div>
      <div className='login__button__container'>
        <button className='login__button'>Войти</button>
      </div>
    </header>
  )
}