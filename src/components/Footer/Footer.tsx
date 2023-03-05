import { Link } from "react-router-dom";
import './Footer.scss';




export const Footer = () => {
  return(
    <footer className='footer__container'>
      <div className='social__links'>
        <Link to={'https://vk.com/bolkunovpsy'} className='vk'></Link>
        <Link to={'https://www.instagram.com/bolkunovpsy/'} className='instagram'></Link>
        <Link to={'https://t.me/bolkunovpsy'} className='telegram'></Link>
      </div>
      <div className='phone__and__mail'>
        <a href='tel:+375292660636'>+375 29 266 06 36</a>
        <a href='mailto:balkunou.av@gmail.com'>balkunou.av@gmail.com</a>
      </div>
      <h1>ИП БОЛКУНОВ АНАТОЛИЙ ВАЛЕРЬЕВИЧ УНП 591286678</h1>
    </footer>
  )
}