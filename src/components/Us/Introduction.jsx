import React from 'react';
import MainImage from '../../images/Nosotros/MainImage.png';
import '../../styles/components/Us/Introduction.scss';

export default function Introduction() {
  return (
    <section className="us__introduction">

      <svg preserveAspectRatio="none" viewBox="0 0 657 457" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path id='svgPathUsDesktop' d="M657 0H88.5C88.5 0 378.5 83.5 442.5 242C506.5 400.5 657 457 657 457V0Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="685.5" y1="36.5" x2="511.5" y2="352" gradientUnits="userSpaceOnUse">
            <stop stop-color="#427843" />
            <stop offset="0.505208" stop-color="#548D4C" />
            <stop offset="1" stop-color="#75B45B" />
          </linearGradient>
        </defs>

        <defs>
          <clipPath id="svgPathUsMobile">

            <path d="M659 1H2C182.854 101.192 197.159 63.3647 382.1 164.572C567.041 265.779 642.025 395.423 659 458V1Z" stroke="black" />
          </clipPath>
        </defs>

        <image xlinkHref={MainImage} alt="" />
      </svg>

      <div className="us__introductionInfoContainer">
        <div className="us__introductionText">

          <h1>Cámara Verde <br /> amazorinoquia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus penatibus facilisi gravida. Consectetur vitae lacinia orci, ipsum nisl dictumst scelerisque aliquet. At pellentesque neque varius in facilisis sed lectus. Rhoncus nunc semper et, nulla posuere diam volutpat vel. Orci tellus nulla sit sed tellus turpis.</p>
        </div>

        <div className='us__introductionImg'>
          <img src={MainImage} alt='Imagen acerca de nosotros' />
        </div>
      </div>

    </section>
  );
};
