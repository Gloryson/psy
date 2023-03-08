import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {

  const [values, setValues] = useState({email: '', password: ''});
  const navigate = useNavigate();



  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/psy/admin')
      }
    });
  }, [])



  const handleLoginButton = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        navigate('/psy/admin')
      })
      .catch(() => {});
  }



  return(
    <section className='login__page__container'>

      <input 
        className='login__page__email__input' 
        type="email" 
        placeholder='Почта'
        onChange={(e) => setValues(state => ({...state, email: e.target.value}))}
      />

      <input 
        className='login__page__password__input' 
        type="password" 
        placeholder='Пароль'
        onChange={(e) => setValues(state => ({...state, password: e.target.value}))}
      />

      <button className='login__page__button' onClick={handleLoginButton}>Войти</button>
    </section>
  )
}