import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

import DynamicIntroduction from '../components/DynamicIntroduction'
import Alcance from '../components/Us/Alcance'
import Pilares from '../components/Us/Pilares'
import Team from '../components/Us/Team'

import MainImage from '../images/Nosotros/mainImage.png'

import '../styles/pages/Us.scss'

export default function UsPage() {

  const {file:{image}} = useStaticQuery(graphql`
  query getMainImageIntroduction {
    file(relativePath: {eq: "Nosotros/mainImage.png"}) {
      image: childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`)

  return (

    <main className='us'>
      <DynamicIntroduction
        imagePath={MainImage}
        gtImage = {image}
        title={`Cámara Verde de la Amazorinoquía`}
        text={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque risus penatibus facilisi gravida.Consectetur vitae lacinia orci, 
          ipsum nisl dictumst scelerisque aliquet.At pellentesque neque varius in facilisis sed lectus.Rhoncus nunc semper et, nulla posuere diam
          volutpat vel.Orci tellus nulla sit sed tellus turpis.`}
      />
      <Alcance />
      <Pilares />
      <Team />
    </main >
  );
};
