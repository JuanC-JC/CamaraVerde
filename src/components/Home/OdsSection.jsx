import React from 'react';
import imageODS from '../../images/imageObjetivosDesarollo.jpg'
import { Link } from 'gatsby'
import '../../styles/components/Home/OdsSection.scss'

export default function Ods() {
  return (
    <div className='ods'>
      <img src={imageODS} alt="Imagen de objetivos de desarrollo sostenible" />
      <Link target='_blank' to='https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/'>
        <button className="button button--orange">Conoce más</button>
      </Link>
    </div>
  );
};
