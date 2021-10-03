import React, {useState, useReducer, useEffect} from 'react';

const experiences = [
  {
    id:1,
    title:'titulo de experiencia',
    image:'imagen de experiencia'
  }
]


const usePagination = ({elements = [], activePage=1, initPageView = 1,  pagesPerView = 3 ,elementsPerView = 6}) =>{

  const [state, setState] = useState({
    activePage,
    initPageView,
    pagesPerView,
    elementsPerView,
    elements,
    elementsInView: elements.slice(elementsPerView * (activePage-1), elementsPerView * activePage),
  })


  return [state]

  //next
    //mover todo el bloque y seleccionar el primer elemento de ese bloque


  //previous
    //mover todo el bloque y seleccionar el ultimo elemento de ese bloque


  //

  //select element
  //si el nuevo indice es == initPageView + pagesPerView
    //ejecutar next

}


export default function Experiencies ({location}) {

  useEffect(()=>{
    console.log('inicializando',location)
  },location)


  const params = new URLSearchParams(location.search);
  const page = params.get('page');
  
  const test = usePagination({activePage:page})

  console.log(page)


  // const [statePagination,setStatePagination] = useState({

  // })

  //calcular cuantas paginas necesito... /si voy a mostrar 6
  //length // 6 -> 2 paginas por ejemplo

  //pagina actual 

  //numero de paginas en vista - 3

  //numero de pagina inicial

  //cambia el estado de la pagina actual, debo re renderizar (componentes) 

  // << 1 2 3 >> 

  //al seleccionar un bloque siguiente ? cambiar al menor valor del bloque?

  //  anterior << 4 5 6 >> siguiente


    return (
    <div className='experiences'>
      



    </div>
);
};