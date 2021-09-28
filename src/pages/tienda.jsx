import React from 'react';
//componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import Store from '../components/Store/Store'

//estilos e imagenes
import '../styles/global.scss';



export default function StorePage (){
  return(
    <>
      {/* <Header/> */}
      <Store/>
      {/* <Footer/> */}
    </>
  )
}