import React from 'react';

import '../../../styles/components/News/New/NewDescription.scss'

export default function NewDescription (props){
  const {date, title, img, text, notification} = props

  return(
    <section className='newDescription'>
      {notification &&<h4 className='notification'>Convocatoria</h4>}
      <h2 className="newTitle">{title}</h2>
      <div className="date">{date}</div>
      <img src={img} alt="" />
      <p>{text}</p>
    </section>
  )
}