import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import DynamicIntroduction from '../components/DynamicIntroduction';
import HelpUs from '../components/Companies/HelpUs';

import MainImage from '../images/Companies/mainImage.png'
import '../styles/pages/Companies.scss'

export default function Companies() {

  const {file:{image}} = useStaticQuery(graphql`
  query getMainImageCompany {
    file(relativePath: {eq: "Companies/mainImage.png"}) {
      image: childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`)

  return (
    <main className='companies'>
      {/* <Introduction /> */}
      <DynamicIntroduction
      imagePath={MainImage}
      gtImage = {image}
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
