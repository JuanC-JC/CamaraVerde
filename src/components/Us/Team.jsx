import React from 'react';

import leidyAgudeloImg from '../../images/Nosotros/team/agudeloBetancur.jpg';
import jessicaBetancurImg from '../../images/Nosotros/team/jessicaBetancur.jpg';
import aidyRoaImg from '../../images/Nosotros/team/aidyRoa.jpeg'

import '../../styles/components/Us/Team.scss'


const teamList = [
  {
    name: 'Aidy Roa',
    img: aidyRoaImg,
    profession: 'Ingeniera Ambiental',
    description: `Fundadora y Directora Ejecutiva de la Cámara Verde Amazorinoquía. Investigadora del
                  Observatorio Regional ODS de la Universidad de los Andes. Miembro activo del
                  Observatorio Popular de Género de Villavicencio, Columnista ocasional de El Cuarto
                  Mosquetero.`
  },
  {
    name: 'Jessica Betancur',
    img: jessicaBetancurImg,
    profession: 'Ingeniera Ambiental',
    description:  `
                  Co-Fundadora y Directora de Tecnología de Información y Comunicación con Enfoque Ambiental.
                  Investigadora en temáticas de Ambiente, Mujer y Territorio del Observatorio Popular de Género de Villavicencio.
                  `
  },
  {
    name: 'Leidy Agudelo',
    img: leidyAgudeloImg,
    profession: 'Admin. de Empresas',
    description: `
                  Co-Fundadora y Directora Social, desplazada y víctima del conflicto armado, promotora de los derechos de las poblaciones
                  de especial protección constitucional, minorías, poblaciones en situaciones de vulnerabilidad, exclusión y discriminación.
    `
  }
]
export default function Team() {
  return (
    <div className='team'>
      <h2>Nuestro Equipo</h2>
      <div className="team__cardsContainer">

        {
          teamList.map(member => (
            <div className="cardTeam">
            <div className="cardTeam__imgContainer">
              <img src={member.img} alt="" />
              <div className="cardTeam__title">
                {member.name}
              </div>
            </div>
  
            <p className="cardTeam__text">
              <b>{member.profession}</b>
              <br />
              {
                member.description
              }
            </p>
          </div>  
          ))
        }
      </div>
    </div>
  );
};
