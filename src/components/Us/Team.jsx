import React from 'react';

import imgTeam_2 from '../../images/Nosotros/team/imgTeam_1.png';
import imgTeam_1 from '../../images/Nosotros/team/jessicaBetancur.jpg';
import imgTeam from '../../images/Nosotros/team/aidyRoa.jpeg'

import '../../styles/components/Us/Team.scss'


const teamList = [
  {
    name: 'Aidy Roa',
    img: imgTeam,
    profession: 'Ingeniera Ambiental',
    description: `Fundadora y Directora Ejecutiva de la Cámara Verde Amazorinoquía. Investigadora del
                  Observatorio Regional ODS de la Universidad de los Andes. Miembro activo del
                  Observatorio Popular de Género de Villavicencio, Columnista ocasional de El Cuarto
                  Mosquetero.`
  },
  {
    name: 'Jessica Betancur',
    img: imgTeam_1,
    profession: 'Ingeniera Ambiental',
    description:  `
                  Co-Fundadora y Directora de Tecnología de Información y Comunicación con Enfoque Ambiental.
                  Investigadora en temáticas de Ambiente, Mujer y Territorio del Observatorio Popular de Género de Villavicencio.
                  `
  },
  {
    name: 'Leidy Agudelo',
    img: imgTeam_2,
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
      <h2>Nuestro equipo</h2>
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
