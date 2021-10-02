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
          Promover mecanismos para aumentar la capacidad en la conservación, protección, planificación y gestión eficaz en relación con
          el cambio climático en la Amazorinoquia haciendo particular hincapié en las mujeres, niñas, niños y población vulnerable.
        </p>
      </div>
      <div className="alcanceCard">
        <div className="alcanceCard__img">
          <img src={VisionIcon} alt="" />
          <h2>Visión</h2>
        </div>
        <p className="alcanceCard__text">
          Ser una organización referente y canal prioritario para la mejora continua en la cultura, la educación, la sensibilización y la capacidad
          humana e institucional respecto acciones que mitigen el cambio climático y promuevan los ods en la Amazorinoquía Colombiana
        </p>
      </div>
    </section>
  );
};
