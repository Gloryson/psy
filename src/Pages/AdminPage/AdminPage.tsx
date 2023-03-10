import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminPage.scss';



export const AdminPage = () => {

  const [values, setValues] = useState({ url: '', title: '', text: '' });
  const navigate = useNavigate();


  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      }
    });
  }, [])



  const handleSendButton = () => {
    const db = getDatabase();
    const id = new Date().toISOString().replace(/\W/g, '');
    const note = { url: values.url, title: values.title, text : values.text };
    set(ref(db, id), note);
    setValues({ url: '', title: '', text: '' });
    alert('Успешно записано');
  }

  const handleSignOutButton = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/login');
    }).catch(() => {});
  }

  return(
    <section className='admin__page__container'>

      <input 
        className='admin__url__input' 
        type="text" 
        placeholder='Адрес изображения'
        value={values.url}
        onChange={(e) => setValues(state => ({...state, url: e.target.value}))}
      />

      <input 
        className='admin__title__input' 
        type="text" 
        placeholder='Заголовок'
        value={values.title}
        onChange={(e) => setValues(state => ({...state, title: e.target.value}))}
      />

      <textarea 
        className='admin__textarea' 
        placeholder='Текст'
        value={values.text}
        onChange={(e) => setValues(state => ({...state, text: e.target.value}))}
      />

      <button className='admin__send__button' onClick={handleSendButton}>Опубликовать</button>
      <button className='admin__signout__button' onClick={handleSignOutButton}>Выйти</button>
      
    </section>
  )
}