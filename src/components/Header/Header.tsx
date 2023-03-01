import './Header.scss';



export const Header = () => {
  return(
    <header className='header'>
      <h1>Психолог Анатолий Болкунов</h1>
      <div className='input__container'>
        <input type="search" className='search__input'/>
        <button className='search__button'></button>
      </div>
      <button className='login__button'>Войти</button>
    </header>
  )
}