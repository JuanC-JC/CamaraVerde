import React, {useCallback, useState, useRef} from 'react';
import { Link } from 'gatsby';
import '../styles/paginationIndex.scss'

function indexOfPagination(pagination, currentPage, pages) {

  if (pages <= pagination) {

    return {type:'without', list:Array.from({ length: pages }, (_, i) => i + 1)}

  } else {

    let puntoInicial = 1
    let type

    if (currentPage <= Math.ceil(pagination / 2)) {
      type = 'initial'
      puntoInicial = 1
    }
    
    else if ((pages - currentPage) > Math.floor(pagination / 2)) {
      type = 'middle'
      puntoInicial = currentPage - (Math.ceil(pagination / 2) - 1)
    }

    else {
      type = 'end'
      puntoInicial = pages - (pagination - 1)
    }


    return {type, list:Array.from({ length: pagination }, (_, i) => i + puntoInicial)}
  }
}

function movePagination(pagination,currentPage,pages){

  //currentPage es el inicio de la base
  if(pages <= pagination){
    return {type:'without', list:Array.from({ length: pages }, (_, i) => i + 1)}
  }

  else{
    let puntoInicial = 1
    let type

    if(currentPage === 1){
      type = 'initial'
      puntoInicial = 1
    }

    else if((pages - currentPage) >= pagination){
      type = 'middle'
      puntoInicial = currentPage

    }else{
      type = 'end'
      puntoInicial = pages - (pagination -1)
    }

    return {type, list:Array.from({ length: pagination }, (_, i) => i + puntoInicial)}


  }
}

export default function PaginationIndex({ route, numbersPerView, indexPage, maxPages }) {


  const [pagination, setPagination] = useState(indexOfPagination(numbersPerView, indexPage, maxPages))
  const [positionPagination, setPositionPagination] = useState(indexPage)

  const elementos = useRef([])

  const previousPagination = () => {

    setPositionPagination(positionPagination-1)
    setPagination(movePagination(numbersPerView,pagination.list[0] - 1, maxPages))

  }



  const nextPagination = () => {

    setPositionPagination(positionPagination+1)
    setPagination(movePagination(numbersPerView,pagination.list[0] +1 , maxPages))
  }


  return (
    <div className="paginationIndex">

        {
          (pagination.type === "end" || pagination.type === 'middle') &&
            <div onClick={previousPagination} className='icon previous'></div>
        }

      {
        pagination.list.map((index,i) => {
          return (
            <Link ref={nodo => elementos.current[i] = nodo} to={`/${route}/${index}`} key={index} className={`indexNumber ${ index == indexPage && 'indexNumber--selected'}`}>{index}</Link>
          )
        })
      }

      {
        (pagination.type === 'initial' || pagination.type === 'middle') &&
          <div onClick={nextPagination} className='icon next'></div>
      }


    </div>
  )
}
