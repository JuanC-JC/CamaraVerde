import React from 'react';
import { Link } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import '../../styles/components/Home/NewCard.scss'

export default function NewCard(props) {

  const { id, date, title, img, text, notification } = props;

  return (
    <div className='newCard'>

      {
        img &&
        <GatsbyImage
          className='newCard__img'
          image={getImage(img)}
          alt='imagen de noticia'
        />
      }

      <div className="newCard__text">
        {notification && <div className='notification'>Convocatoria</div>}
        <div className="date">{date}</div>
        <h4>{title}</h4>
        <p>{text}</p>
        <Link to={`/noticia/${id}`}><div className='more'>Leer más</div></Link>
      </div>

    </div>
  )

}


