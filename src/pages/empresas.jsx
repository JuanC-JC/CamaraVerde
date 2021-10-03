import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import DynamicIntroduction from '../components/DynamicIntroduction';
import HelpUs from '../components/Companies/HelpUs';

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

  console.log('informacion', data)

  return (
    <main className='companies'>
      <DynamicIntroduction
        imagePath={MainImage}
        gtImage={data.file.image}
        title={`¿Cómo puedo ayudar desde mi empresa?`}
        left={true}
        text={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque risus penatibus facilisi gravida.Consectetur vitae lacinia orci, 
        ipsum nisl dictumst scelerisque aliquet.At pellentesque neque varius in facilisis sed lectus.Rhoncus nunc semper et, nulla posuere diam
        volutpat vel.Orci tellus nulla sit sed tellus turpis.`}
      />

      <HelpUs />
    </main>
  );
};
