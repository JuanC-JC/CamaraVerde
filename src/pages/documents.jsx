import React from 'react';
//componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/Headerbanner';
import DocumentDescription from '../components/Documents/DocumentsDescription';
//estilos e imagenes
import '../styles/global.scss';
import newsFund from '../images/headerBanner_3.jpg'; 




const NewPage = ()=>{
  return(
    <>
      <Header/>

      <HeaderBanner 
        img ={newsFund}
        title= {'Documentos'} 
        color={'light-orange'}
      />

      <DocumentDescription></DocumentDescription>

      <Footer/>
    </>
  )
}

export default NewPage;