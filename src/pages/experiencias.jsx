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

  const params = new URLSearchParams(location.search);
  const page = params.get('page');
  
  const test = usePagination({activePage:page})

    return (
    <div className='experiences'>
      



    </div>
);
};