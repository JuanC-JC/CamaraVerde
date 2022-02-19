import React, { useState } from 'react';
import { Link, navigate } from 'gatsby'
import mobileLogo from '../images/Header/mobileLogo.png'
import desktopLogo from '../images/Header/desktopLogo.png'
import burguerMenu from '../images/Header/burguerMenu.png'

import '../styles/header.scss'

export default function Header() {


  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)


  const toggleMenu = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile)
  }

  return (
    <header className='header'>

      <Link to='/'><img className='header__mobileLogo' src={mobileLogo} alt='Logo camara verde' /></Link>

      <img onClick={() => navigate('/')} className='header__desktopLogo' src={desktopLogo} alt='Logo camara verde' />

      <nav className={`header__navigation ${isOpenMenuMobile && 'header__navigation--visibility'}`}>
        <ul>
          <li>
            <Link onClick={toggleMenu} to='/nosotros'>Nosotros</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to='/empresas' >Empresarios Verdes</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to='/tienda'>Tienda</Link>
          </li>
        </ul>
      </nav>

      <div className="header__buttons">
        <Link 
          className="button button--small button--orange" 
          to='https://docs.google.com/forms/d/e/1FAIpQLSfgpIpq7Uk4ETJIrgivgWxvCGoFfm0FOz8AwHVgCaya9r0APw/viewform'
          target='_blank'
          >
            Alerta verde
          </Link>
        <Link className="button button--small " to='/'>Apoyanos</Link>
      </div>

      <img onClick={toggleMenu} className='header__burguerMenu' src={burguerMenu} alt='Logo camara verde' />

    </header>
  );

};
