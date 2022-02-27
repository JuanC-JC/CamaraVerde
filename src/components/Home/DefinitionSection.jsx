import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import shape from '../../images/Home/shapeDefinitionSection.svg';

import '../../styles/components/Home/DefinitionSection.scss'

export default function Definition() {
  return (
    <section className='c-definition'>

      <div className='c-definition__text'>

        <img src={shape}  alt='shape background' />

        <div className='definition__text'>
          <h3>En la <b>Fundación Cámara Verde de la Amazorinoquía - CVA</b></h3>
          <p>
            Trabajamos en la consolidación de procesos orientados en la seguridad y soberanía alimentaria, la cultura de paz y equidad, 
            la construcción de ciudades y comunidades sostenibles, la gobernanza ambiental y el ordenamiento territorial con enfoque en equidad de género.
          </p>
        </div>

      </div>

      <StaticImage
        className='definition__ilustration'
        src='../../images/Home/ilustrationBird.png'
        placeholder='blurred'
        alt='Image Gallito de las rocas (Rupicola peruvianus)'
        title='Gallito de las rocas (Rupicola peruvianus)'
         />

    </section>
  )
}


