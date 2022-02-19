import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import DynamicIntroduction from '../components/DynamicIntroduction';
import HelpUs from '../components/Companies/HelpUs';
import Seo from '../components/Seo'

import '../styles/pages/Companies.scss'

import MainImage from '../images/Companies/backgroundCompanies.png'

export default function Companies() {

  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: {regex: "/Companies/backgroundCompanies.png/"}) {
        image: childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const textDescription = `
      Con el objetivo que nuestras acciones por conservar y hacer un uso sostenible de la biodiversidad tengan un mayor impacto 
      en toda la población, realizamos alianzas con diferentes sectores entendiendo que la unión hace la fuerza. Por eso, si haces 
      parte de una organización,empresa, compañía, entre otras, te invitamos a que te comuniques con nosotros y conozcas nuestras 
      opciones para poder generar alianzas que propendan por el cuidado del medio ambiente.
  `

  return (
    <>
      <Seo title={'Empresarios Verdes'} image={MainImage} isPost description={textDescription} />
      <main className='companies'>
        <DynamicIntroduction
          imagePath={MainImage}
          gtImage={data.file.image}
          title={`¿Cómo puedo ayudar desde mi empresa?`}
          left={true}
          text={textDescription}
        />

        <HelpUs />
      </main>
    </>
  );
};
