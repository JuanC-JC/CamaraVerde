import React from 'react';
import '../../styles/components/Us/Pilares.scss'

import imgPilar_1 from '../../images/Nosotros/pilares/imgPilar_1.jpg'
import imgPilar_2 from '../../images/Nosotros/pilares/imgPilar_2.jpg'
import imgPilar_3 from '../../images/Nosotros/pilares/imgPilar_3.jpg'

export default function Pilares() {
  return (
    <section className='pilares'>

      <h2>Descripción de lineas pilares</h2>

      <div className="pilarCard pilarCard--red">
        <img src={imgPilar_1} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>5 - Igualdad de genero</h3>
          <p>Vestibulum id auctor in integer. Facilisi at varius eros integer non nibh id euismod.
            Luctus nunc sed nibh in vitae venenatis sit porttitor. Enim erat sed eget nulla vitae gravida.
            Urna, id suspendisse id nibh non dignissim accumsan.
          </p>
        </div>

        {/* <button class='button button--white'>Ver mas</button> */}
      </div>

      <div className="pilarCard pilarCard--yellow pilarCard--right">
        <img src={imgPilar_2} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>11 - Ciudad y comunidades sostenibles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

        {/* <button class='button button--white'>Ver mas</button> */}
      </div>

      <div className="pilarCard pilarCard--green">
        <img src={imgPilar_3} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>13 - Acción por el clima</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

        {/* <button class='button button--white'>Ver mas</button> */}
      </div>
    </section>
  );
};
