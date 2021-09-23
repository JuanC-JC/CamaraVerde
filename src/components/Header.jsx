import React, { useState } from 'react';
import { Link } from 'gatsby'
import mobileLogo from '../images/mobileLogo.png'
import desktopLogo from '../images/desktopLogo.png'
import burguerMenu from '../images/burguerMenu.png'

import '../styles/header.scss'

export default function Header() {


  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)


  const toggleMenu = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile)
  }

  return (
    <header className='header'>

      <img className='header__mobileLogo' src={mobileLogo} alt='Logo camara verde' />

      <img className='header__desktopLogo' src={desktopLogo} alt='Logo camara verde' />

      <nav className={`header__navigation ${isOpenMenuMobile && 'header__navigation--visibility'}`}>
        <ul>
          <li>
            <Link to='#Nosotros'>Nosotros</Link>
          </li>
          <li>
            <Link to='#Nosotros' >Empresarios Verdes</Link>
          </li>
          <li>
            <Link to='#Nosotros'>Tienda</Link>
          </li>
        </ul>
      </nav>

      <div className="header__buttons">
        <Link className="button button--small button--orange" to='/'>Alerta verde</Link>
        <Link className="button button--small " to='/'>Apoyanos</Link>
      </div>

      <img onClick={toggleMenu} className='header__burguerMenu' src={burguerMenu} alt='Logo camara verde' />

    </header>
  );

};
