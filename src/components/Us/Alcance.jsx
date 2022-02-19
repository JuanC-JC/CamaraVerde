import React from 'react';
import MisionIcon from '../../images/Nosotros/MisionIcon.svg'
import VisionIcon from '../../images/Nosotros/VisionIcon.svg'

import '../../styles/components/Us/Alcance.scss'

export default function Alcance() {
  return (
    <section className='alcance'>
      <div className="alcanceCard">
        <div className="alcanceCard__img">
          <img src={MisionIcon} alt="" />
          <h2>Misión</h2>
        </div>
        <p className="alcanceCard__text">
          Diseñamos, promovemos y ejecutamos proyectos, actividades y mecanismos de participación ambiental con el fin de ampliar la capacidad de conservación,
          protección, planificación y gestión eficaz de los recursos ambientales en relación con el cambio climático en la Amazorinoquía, haciendo particular énfasis
          en las mujeres, niñas, niños y población vulnerable de los territorios.
        </p>
      </div>
      <div className="alcanceCard">
        <div className="alcanceCard__img">
          <img src={VisionIcon} alt="" />
          <h2>Visión</h2>
        </div>
        <p className="alcanceCard__text">
          Ser una organización referente para la mejora continua de la cultura y la educación ambiental, así como un canal prioritario en la sensibilización,
          la capacidad humana e institucional, respecto a acciones que mitiguen el cambio climático y promuevan los ODS en la Amazorinoquía colombiana.
        </p>
      </div>
    </section>
  );
};
