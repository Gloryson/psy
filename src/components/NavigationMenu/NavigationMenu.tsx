import { Link } from 'react-router-dom';
import './NavigationMenu.scss';



export const NavigationMenu = () => {
  return(
    <nav className='navigation__menu'>

      <Link to={'about'}>
        <div className='about'></div>
      </Link>

      <Link to={'content'}>
        <div className='content'></div>
      </Link>

      <Link to={'documents'}>
        <div className='documents'></div>
      </Link>

      <Link to={'contacts'}>
        <div className='contacts'></div>
      </Link>
      
    </nav>
  )
}