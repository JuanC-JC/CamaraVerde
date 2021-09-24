import React from 'react';
import '../../styles/components/Us/Pilares.scss'

import imgPilar_1 from '../../images/Nosotros/pilares/imgPilar_1.png'

export default function Pilares() {
  return (
    <section className='pilares'>

      <h2>Descripción de lineas pilares</h2>

      <div className="pilarCard pilarCard--red">
        <img src={imgPilar_1} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>5-Igualdad de genero</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

      </div>

      <div className="pilarCard pilarCard--yellow pilarCard--right">
        <img src={imgPilar_1} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>5-Igualdad de genero</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

      </div>

      <div className="pilarCard pilarCard--green">
        <img src={imgPilar_1} alt="Imagen linea pilar igualdad de genero" />


        <div className="pilarCard__text">
          <h3>5-Igualdad de genero</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dapibus sed ac condimentum non. Sed sem turpis euismod viverra
            nam ut in in vitae.
          </p>
        </div>

      </div>
    </section>
  );
};
