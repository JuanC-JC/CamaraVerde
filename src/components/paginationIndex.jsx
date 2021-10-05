import React from 'react';
import { Link } from 'gatsby';
import '../styles/paginationIndex.scss'


function indexOfPagination(pagination, currentPage, pages) {

  //si el numero de paginas es menor o igual que la cantidad de elementos a mostrar en pagination
  if (pages <= pagination) {

    return Array.from({ length: pages }, (_, i) => i + 1)

  } else {

    let puntoInicial = 1

    //si la pagina actual es menor o igual que la mitad de la paginacion si tengo para 5 bloques de vista para paginar entonces aplica si la pagina actual es menor /inferior a 3
    if (currentPage <= Math.ceil(pagination / 2)) {
      puntoInicial = 1
    }

    // paginas por delante de la pagina actual es mayor que la cantidad de paginas que puedo mostrar ?
    else if ((pages - currentPage) > Math.floor(pagination / 2)) {
      puntoInicial = currentPage - (Math.ceil(pagination / 2) - 1)
    }

    //pagino solo las ultimas n paginas que me permita mostrar la paginacion
    else {
      puntoInicial = pages - (pagination - 1)
    }


    return Array.from({ length: pagination }, (_, i) => i + puntoInicial)
  }
}

export default function PaginationIndex({ numbersPerView, indexPage, maxPages }) {

  console.log("paginacion", maxPages, indexOfPagination(numbersPerView, indexPage, 2));

  return (
    <div className="paginationIndex">

      {
        indexPage !== 1 &&
        <Link to=''>
          <div className='icon previous'></div>
        </Link>
      }

      {
        indexOfPagination(numbersPerView, indexPage, maxPages).map((_, index) => {
          return (
            <div key={index} className='indexNumber'>{index + 1}</div>
          )
        })
      }

      {
        indexPage !== maxPages &&

        <Link to={`/noticias/${indexPage + 1}`}>
          <div className='icon next'></div>
        </Link>

      }

    </div>
  )
}