import React from 'react';
import { getImage, GatsbyImage, getSrc } from 'gatsby-plugin-image'

import '../../../styles/components/News/New/NewDescription.scss'

export default function NewDescription(props) {
  const { date, title, img, text, notification } = props

  return (
    <section className='newDescription'>
      {notification && <div className='notification'>Convocatoria</div>}
      <h2 className="newTitle">{title}</h2>
      <div className="date">{date}</div>
      <div className='content'>
        <GatsbyImage className='newDescription__img' image={getImage(img)} alt={`imagen ${title}`} />
        {text}
      </div>
    </section>
  )
}