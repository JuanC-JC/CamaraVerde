import React from 'react';
import pajaros from '../../images/birdsHome.png';
import iconDesktop from '../../images/iconDesktop.svg';

import '../../styles/components/Home/IntroSection.scss'

export default function IntroSection() {
  return (
    <section className="intro">

      <svg className='intro__backgroundDesktop' preserveAspectRatio="none" viewBox="0 0 1440 689" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 615.5V0H1439.5V99.5C1307.5 322 975 78.5 782 387.5C651.373 596.638 516.333 652.5 455.5 666.5C220.5 720.582 71.5 661.5 0 615.5Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="345" y1="-5.21772e-07" x2="346.5" y2="686" gradientUnits="userSpaceOnUse">
            <stop stop-color="#28574B" />
            <stop offset="1" stop-color="#498A42" />
          </linearGradient>
        </defs>
      </svg>

      <svg className='intro__backgroundMobile' preserveAspectRatio="none" width="320" height="403" viewBox="0 0 320 403" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H320V375C320 375 251.713 403 159.502 403C67.2897 403 0 375 0 375V0Z" fill="url(#paint1_linear)" />
        <defs>
          <linearGradient id="paint1_linear" x1="160" y1="0" x2="160" y2="403" gradientUnits="userSpaceOnUse">
            <stop stop-color="#24524C" />
            <stop offset="1" stop-color="#498A42" />
          </linearGradient>
        </defs>
      </svg>

      <div className="intro__text">

        <div className="intro__textCompanyLogo">

          <img src={iconDesktop} alt="icono camara verde amazorinoquia" />

          <h1>Cámara <br /> verde  de la <br /> Amazorinoquia</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum aliquam elit faucibus cursus. Egestas massa magna porttitor eget.</p>

        <div className="intro__buttons">
          <button className="button button--small button--orange">Apoyanos</button>
          <button className="button button--small">Alerta verde</button>
          <button className="button button--small button--outline">Contactanos</button>
        </div>
      </div>



      <img className='intro__ilustration' src={pajaros} alt="" />
    </section>
  );
};
