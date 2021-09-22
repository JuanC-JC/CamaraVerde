import React from 'react';

import '../../styles/components/Home/DonateSection.scss';

import donateBackground from '../../images/donateBackground.png';


export default function DonateSection (){
  return(
    <section className='c-donate'>

      <div className='c-donate__definition'>

        <img 
          className='definition__image'
          src={donateBackground} 
          alt="Selva con el logo" 
          />    

        <div className="definition__text">
          <h2>¿Te gustaría ayudarnos?</h2>
          <p>Al igual que tú, muchas personas alrededor del mundo buscan una solución para proteger la vida silvestre, detener la deforestación, promover energías renovables y empoderar a las comunidades para la conservación de sus recursos. Puedes hacer parte de esta comunidad de más de 6 millones de miembros en 100 países.</p>
          <button className='button button--orange'>Realiza una donación</button>
        </div>    

      </div>

      <div className='c-donate__options'> 
        <h3>¿Qué puedes hacer para ayudarnos?</h3>
        <div className='donate__options'>
          {/* componentes */}
        </div>
      </div>

    </section>
  )
}