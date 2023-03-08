import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {

  const location = useLocation();

  const setNavLinkClasses = (element: string): string => {
    if (element === location.pathname.slice(5)) {
      return element ? element + '  current' : 'content  current';
    }
    return element ? element : 'content';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return(
    <nav className='navigation__menu'>

      <Link to={'psy/about'}>
        <div className={setNavLinkClasses('about')}></div>
      </Link>

      <Link to={'psy/'}>
        <div className={setNavLinkClasses('')}></div>
      </Link>

      <Link to={'psy/documents'}>
        <div className={setNavLinkClasses('documents')}></div>
      </Link>

      <Link to={'psy/contacts'}>
        <div className={setNavLinkClasses('contacts')}></div>
      </Link>
      
    </nav>
  )
}