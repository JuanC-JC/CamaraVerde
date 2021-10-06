import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import MainImage from '../images/Nosotros/backgroundNosotros.png'
import DynamicIntroduction from '../components/DynamicIntroduction'
import Alcance from '../components/Us/Alcance'
import Pilares from '../components/Us/Pilares'
import Team from '../components/Us/Team'


import '../styles/pages/Us.scss'

export default function UsPage() {

  const { file: { image } } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Nosotros/backgroundNosotros.png"}) {
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
        gtImage={image}
        title={`Cámara Verde de la Amazorinoquía`}
        text={`Somos la FUNDACIÓN CÁMARA VERDE DE LA AMAZORINOQUÍA - CVA, organización social y ambiental sin Ánimo de Lucro, fundada y liderada por mujeres, con sede principal en la ciudad de Villavicencio y una red de profesionales a lo largo de los 10 departamentos que componen la Amazorinoquia Colombiana`}
      />
      <Alcance />
      <Pilares />
      <Team />
    </main >
  );
};
