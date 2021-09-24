import React from 'react';
//componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/Noticias/Headerbanner';
//estilos e imagenes
import '../styles/global.scss';
import newsFund from '../images/forest.jpg'; 


const New = ()=>{
  return(
    <>
      <Header/>
      <HeaderBanner img ={newsFund} title= {'Noticias'}/>
      <Footer/>
    </>
  )
}

export default New;