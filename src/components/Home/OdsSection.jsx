import React from 'react';
import imageODS from '../../images/imageObjetivosDesarollo.jpg'

import '../../styles/components/Home/OdsSection.scss'

export default function Ods() {
  return (
    <div className='ods'>
      <img src={imageODS} alt="Imagen de objetivos de desarrollo sostenible" />
    </div>
  );
};
