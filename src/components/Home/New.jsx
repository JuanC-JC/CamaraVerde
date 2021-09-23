import React from 'react';
import '../../styles/components/Home/New.scss'

export default function New (props){

  const {id,date,title, img, text, notification} = props;



  return(
    <div className='new' id={`id_${id}`}>

      <img src={img} alt="" />

      <div className="new__text">
          {notification &&<h4 className='notification'>Convocatoria</h4>}
          <div className="date">{date}</div>
          <h4>{title}</h4>
          <p>{text}</p>
          <div className='more'>Ver más</div>
      </div>

    </div>
  )

}

//TODO si le doy click a ver más me direcciona su respetiva página

