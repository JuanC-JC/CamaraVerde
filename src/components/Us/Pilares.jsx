import React from 'react';
import '../../styles/components/Us/Pilares.scss'

import gender from '../../images/Nosotros/pilares/gender.jpg'
import sostenibility from '../../images/Nosotros/pilares/sostenibility.jpg'
import climate from '../../images/Nosotros/pilares/climate.jpg'

export default function Pilares() {
  return (
    <section className='pilares'>

      <h2>Descripción de lineas pilares</h2>

      <div className="pilarCard pilarCard--red">
        <img src={gender} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>5 - Igualdad de genero</h3>
          <p>Vestibulum id auctor in integer. Facilisi at varius eros integer non nibh id euismod.
            Luctus nunc sed nibh in vitae venenatis sit porttitor. Enim erat sed eget nulla vitae gravida.
            Urna, id suspendisse id nibh non dignissim accumsan.
          </p>
        </div>

      </div>

      <div className="pilarCard pilarCard--yellow pilarCard--right">
        <img src={sostenibility} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>11 - Ciudad y comunidades sostenibles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

      </div>

      <div className="pilarCard pilarCard--green">
        <img src={climate} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>13 - Acción por el clima</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

      </div>
    </section>
  );
};
