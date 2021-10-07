import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import '../styles/components/Generic/DynamicIntroduction.scss';

export default function DynamicIntroduction({ title, imagePath, image, text, left, gtImage }) {

  return (
    <section className={`dynamicIntroduction ${left && 'dynamicIntroduction--left'}`}>

      <svg preserveAspectRatio="none" viewBox="0 0 660 459" fill="none" xmlns="http://www.w3.org/2000/svg">

        {
          left ?
            <path id='svgPathUsDesktop' d="M0 0H568.5C568.5 0 278.5 83.5 214.5 242C150.5 400.5 0 457 0 457V0Z" fill="url(#paint0_linear)" />
            :
            <path id='svgPathUsDesktop' d="M660 0H91.5C91.5 0 381.5 83.5 445.5 242C509.5 400.5 660 457 660 457V0Z" fill="url(#paint0_linear)" />

        }
        <defs>
          <linearGradient id="paint0_linear" x1="685.5" y1="36.5" x2="511.5" y2="352" gradientUnits="userSpaceOnUse">
            <stop stopColor="#427843" />
            <stop offset="0.505208" stopColor="#548D4C" />
            <stop offset="1" stopColor="#75B45B" />
          </linearGradient>
        </defs>

        <defs>
          <clipPath id="svgPathUsMobile">
            {
              left ?
                <path d="M1.00006 1H658C477.146 101.192 462.841 63.3647 277.9 164.572C92.9595 265.779 17.9754 395.423 1.00006 458V1Z" stroke="black" />
                :
                <path d="M659 1H2C182.854 101.192 197.159 63.3647 382.1 164.572C567.041 265.779 642.025 395.423 659 458V1Z" stroke="black" />
            }
          </clipPath>
        </defs>

        <image xlinkHref={imagePath} alt="" />

      </svg>

      <div className="dynamicIntroduction__infoContainer">
        <div className="dynamicIntroduction__text">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{__html:text}}></p>

        </div>

        <div className='dynamicIntroduction__img'>
          <GatsbyImage
            image={getImage(gtImage)}
            alt='Imagen acerca de nosotros'
            className='img'
          />
        </div>
      </div>

    </section>
  );
};