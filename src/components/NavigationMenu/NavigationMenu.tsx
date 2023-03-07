import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {

  const location = useLocation();

  const setNavLinkClasses = (element: string): string => {
    if (element === location.pathname.slice(1)) {
      return element ? element + '  current' : 'content  current';
    }
    return element ? element : 'content';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return(
    <nav className='navigation__menu'>

      <Link to={'about'}>
        <div className={setNavLinkClasses('about')}></div>
      </Link>

      <Link to={'/'}>
        <div className={setNavLinkClasses('')}></div>
      </Link>

      <Link to={'documents'}>
        <div className={setNavLinkClasses('documents')}></div>
      </Link>

      <Link to={'contacts'}>
        <div className={setNavLinkClasses('contacts')}></div>
      </Link>
      
    </nav>
  )
}