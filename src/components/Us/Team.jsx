import React from 'react';

import imgTeam_1 from '../../images/Nosotros/team/imgTeam_1.png';

import '../../styles/components/Us/Team.scss'
export default function Team() {
  return (
    <div className='team'>
      <h2>Nuestro Equipo</h2>
      <div className="team__cardsContainer">
        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam_1} alt="" />
            <div className="cardTeam__title">
              Ludwig Van Beethoven
            </div>
          </div>

          <p className="cardTeam__text">
            Ing. Ambiental
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus massa aliquam in enim suspendisse
          </p>
        </div>
        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam_1} alt="" />
            <div className="cardTeam__title">
              Ludwig Van Beethoven
            </div>
          </div>

          <p className="cardTeam__text">
            Ing. Ambiental
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus massa aliquam in enim suspendisse
          </p>
        </div>
        <div className="cardTeam">
          <div className="cardTeam__imgContainer">
            <img src={imgTeam_1} alt="" />
            <div className="cardTeam__title">
              Ludwig Van Beethoven
            </div>
          </div>

          <p className="cardTeam__text">
            Ing. Ambiental
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus massa aliquam in enim suspendisse
          </p>
        </div>
      </div>
    </div>
  );
};
