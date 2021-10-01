import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import '../../styles/components/Home/NewCard.scss'

export default function NewCard (props){

  const {id,date,title, img, text, notification} = props;

  console.log(img)

  return(
    <div className='new' id={`id_${id}`}>
      
      <GatsbyImage 
        className='new__img'
        image={getImage(img)} 
        alt='imagen de noticia'/>

      <div className="new__text">
          {notification &&<div className='notification'>Convocatoria</div>}
          <div className="date">{date}</div>
          <h4>{title}</h4>
          <p>{text}</p>
          <div className='more'>Ver más</div>
      </div>

    </div>
  )

}


