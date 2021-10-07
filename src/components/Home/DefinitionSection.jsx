import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import shape from '../../images/Home/shapeDefinitionSection.svg';

import '../../styles/components/Home/DefinitionSection.scss'

//TODO: COLOCAR EL NOMBRE DEL AVE EN EL ALT 
export default function Definition() {
  return (
    <section className='c-definition'>

      <div className='c-definition__text'>

        <img src={shape} alt='shape sección de definicion'/>

        <div className='definition__text'>
          <h3>Lorem Ipsum Task</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra integer tristique nibh nisl libero sed sit aenean. Suspendisse egestas erat vitae placerat egestas magna ipsum tortor et. Euismod leo nunc mauris sed suspendisse. Eget purus, sollicitudin amet ultricies in. Augue donec ut vitae, sagittis arcu.</p>
        </div>

      </div>

      <StaticImage
        className='definition__ilustration'
        src='../../images/Home/ilustrationBird.png'
        placeholder='blurred'
        alt='imagen ave (Colocar Nombre)' />

    </section>
  )
}


