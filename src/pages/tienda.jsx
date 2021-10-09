import React from 'react';
import PageNotAvaliable from '../components/PageNotAvaliable';
import Seo from '../components/Seo'
//estilos e imagenes
import '../styles/global.scss';
import seoStore from '../images/seoStore.jpg'



export default function StorePage() {

  return (
    <>
      <Seo title={'Tienda'} image={seoStore} isPost description={'Nuestros productos están elaborados bajo un sistema circular y prácticas sostenibles'} />
      <PageNotAvaliable title={'Pronto disponible'} text={'Muy pronto conocerás más acerca de nuestros productos'} />
    </>
  )
}