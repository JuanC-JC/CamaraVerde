import React, {useCallback, useState} from 'react';
import { Link } from 'gatsby';
import '../styles/paginationIndex.scss'

// si tengo 5 paginas y 5 paginaciones - sin flechas
// 2 paginas y 5 paginaciones - sin flechas

//de aca en adelante todas son superiores al numero de paginas
// osea lleva las dos flechas o flecha inicial o flecha final


//lleva flecha final si el punto de inicio es 1 >

//lleva las dos feclas si super la mitad de la paginacion y a su vez quedan mas paginas que en la paginacion disponible

//lleva flecha inicial ya que no quedan mas paginas por mostar que paginacion diponible ejemplo tengo 30 paginas  y estoy parado en la 29 ( 26 27 28 29 30)

function indexOfPagination(pagination, currentPage, pages) {


  console.log(pagination, currentPage, pages)
  //si el numero de paginas es menor o igual que la cantidad de elementos a mostrar en pagination
  if (pages <= pagination) {

    return {type:'without', list:Array.from({ length: pages }, (_, i) => i + 1)}

  } else {

    let puntoInicial = 1

    let type

    // si la pagina actual es menor que la mitad de mis bloque de paginacion significa que estoy en el inicio significa que aun no debo paginar
    // un bloque diferente y siguo empezando desde el 1
    if (currentPage <= Math.ceil(pagination / 2)) {
      type = 'initial'
      puntoInicial = 1
    }

    // si el numero de paginas restantes (tomando como punto de partida la pagina donde estoy actualmente) es mayor que la mitad de mis bloques de paginacion 
    //Example: tengo 20 paginas, 5 bloques de pagionacion, estoy ubicado en la pagina 4 , significa que desde la 4 quedan 16 paginas por mostrar
    //(2 3 x 5 6)
    //example: tengo 20 paginas, 5 bloques de paginacion en la pagina 18 significa que me quedan 2 paginas por mostrar
    //(16 17 x 19 20)
    //example: tengo 20 paginas, 5 bloques de pagionacion y estoy en la pagina 17, me quedan 3 paginas por mostrar
    //(15 16 x 18 19)

    //si te das cuenta este caso aplica si el currente page tiene al menos 2 paginas por delante de el (que en este caso es por que tenemos 5 bloques de paginacion)
    
    //si tenemos bloques de paginacion pares, como 6 bloques el elemento no queda centrado (acuerdate de la mediana)

    //(14 15 x 16 17 19)

    else if ((pages - currentPage) >= Math.floor(pagination / 2)) {
      type = 'middle'
      puntoInicial = currentPage - (Math.ceil(pagination / 2) - 1)
    }

    //cuando los anteriores dos filtros no aplican significa que tengo menos de 2 paginas por delante de mi y por ende llegue al final
    //(16 17 18 x 20)
    //en este punto ya no ubico el currentPage en el centro por que ya no es posible
    //(16 17 18 19 20 )
    else {
      type = 'end'
      puntoInicial = pages - (pagination - 1)
    }


    return {type, list:Array.from({ length: pagination }, (_, i) => i + puntoInicial)}
  }
}

export default function PaginationIndex({ route, numbersPerView, indexPage, maxPages }) {


  console.log(indexOfPagination(numbersPerView, indexPage, maxPages))

  const [pagination, setPagination] = useState(indexOfPagination(numbersPerView, indexPage, maxPages))
  const [positionPagination, setPositionPagination] = useState(indexPage)

  const previousPagination = useCallback(() => {

    setPositionPagination(positionPagination-1)
    setPagination((indexOfPagination(numbersPerView, positionPagination-1, maxPages)))

  },[positionPagination]) 



  const nextPagination = useCallback(() => {

    setPositionPagination(positionPagination+1)
    setPagination((indexOfPagination(numbersPerView, positionPagination+1, maxPages)))

  },[positionPagination]) 




  return (
    <div className="paginationIndex">

        {
          (pagination.type === "end" || pagination.type === 'middle') &&
            <div onClick={previousPagination} className='icon previous'></div>
        }

      {
        pagination.list.map((index) => {
          return (
            <Link to={`/${route}/${index}`} key={index} className={`indexNumber ${ index == indexPage && 'indexNumber--selected'}`}>{index}</Link>
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
