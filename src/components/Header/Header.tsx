import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../LoginForm/LoginForm';
import './Header.scss';



export const Header = () => {

  const [showLoginForm, setShowLoginForm] = useState(false);

  return(
    <>
      <header className='header'>
        <Link to={'about'}>
          <div className='header__logo'></div>
        </Link>
        <button className='login__button' onClick={() => setShowLoginForm(() => true)}>Войти</button> 
      </header>

      <LoginForm 
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
    </>
  )
}