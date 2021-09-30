import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import DocumentDescription from '../components/Documents/DocumentsDescription';
//estilos e imagenes
import '../styles/global.scss';
import newsFund from '../images/headerBanner_3.jpg'; 




const NewPage = ()=>{
  return(
    <>

      <HeaderBanner 
        img ={newsFund}
        title= {'Documentos'} 
        color={'light-orange'}
      />

      <DocumentDescription></DocumentDescription>

    </>
  )
}

export default NewPage;