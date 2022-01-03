import React from 'react';

import imgTeam_2 from '../../images/Nosotros/team/imgTeam_1.png';
import imgTeam_1 from '../../images/Nosotros/team/jessicaBetancur.jpg';
import imgTeam from '../../images/Nosotros/team/aidyRoa.jpeg'

import '../../styles/components/Us/Team.scss'
export default function Team() {
  return (
    <div className='team'>
      <h2>Nuestro Equipo</h2>
      <div className="team__cardsContainer">
        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam} alt="" />
            <div className="cardTeam__title">
              Aidy Roa
            </div>
          </div>

          <p className="cardTeam__text">
            <b>Ing. Ambiental</b>
            <br />
            Fundadora y Directora Ejecutiva de la Cámara Verde Amazorinoquía. Investigadora del
Observatorio Regional ODS de la Universidad de los Andes. Miembro activo del
Observatorio Popular de Género de Villavicencio, Columnista ocasional de El Cuarto
Mosquetero.
          </p>
        </div>

        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam_1} alt="" />
            <div className="cardTeam__title">
              Jessica Betancur
            </div>
          </div>

          <p className="cardTeam__text">
            <b>Ing. Ambiental</b>
            <br />
            Co-Fundadora y Directora de Tecnología de Información y Comunicación con enfoque ambiental, investigadora en la temática ambiente, mujer y territorio del observatorio popular de genero de Villavicencio,
          </p>
        </div>
        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam_2} alt="" />
            <div className="cardTeam__title">
              Leidy Agudelo
            </div>
          </div>

          <p className="cardTeam__text">
            <b>Administradora de empresas</b>
            <br />
            Co-Fundadora y directora Social, desplazada y víctima del conflicto armado, promotora de
            los derechos de las poblaciones de especial protección constitucional, minorías, poblaciones
            en situación de vulnerabilidad, exclusión y discriminación;
          </p>
        </div>
      </div>
    </div>
  );
};
