import './LoginForm.scss';



interface LoginFormProps {
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}



export const LoginForm: React.FC<LoginFormProps> = ({ showLoginForm, setShowLoginForm }) => {

  

  return(
    <div className={showLoginForm ? 'login__form' : 'login__form  off'}>
      <input className='login__form__email__input' type="text" />
      <input className='login__form__password__input' type="text" />
      <button className='login__form__button'>Войти</button>
      <button className='login__form__close' onClick={() => setShowLoginForm(() => false)}>	&#10006;</button>
    </div>
  )
}