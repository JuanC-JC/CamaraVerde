import React from 'react';
import MainImage from '../../images/Companies/mainImage.png';
import DynamicIntroduction from '../DynamicIntroduction'

export default function Introduction() {
  return (

    <DynamicIntroduction
      imagePath={MainImage}
      image={MainImage}
      title={`¿Cómo puedo ayudar desde mi empresa?`}
      left={true}
      text={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque risus penatibus facilisi gravida.Consectetur vitae lacinia orci, 
        ipsum nisl dictumst scelerisque aliquet.At pellentesque neque varius in facilisis sed lectus.Rhoncus nunc semper et, nulla posuere diam
        volutpat vel.Orci tellus nulla sit sed tellus turpis.`}
    />

  );
};