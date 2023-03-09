import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return(
    <nav className='navigation__menu'>
      
      <NavLink to={'/about'} className={({isActive}) => isActive ? 'about  current' : 'about'}></NavLink>

      <NavLink to={'/'} className={({isActive}) => isActive ? 'content  current' : 'content'}></NavLink>

      <NavLink to={'/documents'} className={({isActive}) => isActive ? 'documents  current' : 'documents'}></NavLink>

      <NavLink to={'/contacts'} className={({isActive}) => isActive ? 'contacts  current' : 'contacts'}></NavLink>

    </nav>
  )
}