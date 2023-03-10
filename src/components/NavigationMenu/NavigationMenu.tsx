import { NavLink } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {

  return(
    <nav className='navigation__menu'>  
      <NavLink to={'/about'} className='about'></NavLink>
      <NavLink to={'/'} className='content'></NavLink>
      <NavLink to={'/documents'} className='documents'></NavLink>
      <NavLink to={'/contacts'} className='contacts'></NavLink>
    </nav>
  )
}