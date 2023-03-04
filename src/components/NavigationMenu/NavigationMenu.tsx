import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {

  const location = useLocation();

  const setClasses = (element: string): string => {
    if (element === location.pathname.slice(1)) {
      return element + '  current'
    }
    return element;
  }
  
  return(
    <nav className='navigation__menu'>

      <Link to={'about'}>
        <div className={setClasses('about')}></div>
      </Link>

      <Link to={'content'}>
        <div className={setClasses('content')}></div>
      </Link>

      <Link to={'documents'}>
        <div className={setClasses('documents')}></div>
      </Link>

      <Link to={'contacts'}>
        <div className={setClasses('contacts')}></div>
      </Link>
      
    </nav>
  )
}