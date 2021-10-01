import React from 'react';
import {getImage, GatsbyImage} from 'gatsby-plugin-image'

import '../../../styles/components/News/New/NewDescription.scss'

export default function NewDescription (props){
  const {date, title, img, text, notification} = props

  console.log(img)

  return(
    <section className='newDescription'>
      {notification &&<div className='notification'>Convocatoria</div>}
      <h2 className="newTitle">{title}</h2>
      <div className="date">{date}</div>
      <div className='content'>
        <GatsbyImage className='newDescription__img' image={getImage(img)}/>
        {/* <img src={img} alt="" /> */}
        {/* <GatsbyImage image={getImage(img)}/> */}
        {text}
      </div>
    </section>
  )
}