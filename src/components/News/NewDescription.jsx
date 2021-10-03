import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import '../../styles/components/News/NewDescription.scss'

export default function NewDescription(props) {
  const { date, title, img, text, notification, authorPost, linkPost } = props

  const newText = text.split('\n\n')

  return (
    <section className='newDescription'>

      {notification && <div className='notification'>Convocatoria</div>}

      <h2 className="newTitle">{title}</h2>

      <div className="date">{date}</div>

      <GatsbyImage className='newDescription__img' image={getImage(img)} alt={`imagen ${title}`} />

      <div className='content'>

        {newText.map(parrafo => (
          <>
            <p>
              {parrafo}
            </p>
            <br />
          </>
        ))}

      </div>

      <div className="newDescription__share">

        <div className="published">
          <p>Publicado por:</p>
          {linkPost  ?<Link className='postLink'to='' target='_blank'>{authorPost}</Link> :<p className='authorPost'>{authorPost}</p>}
        </div>

        <div className='share'>
          <p>Compartir: </p>
          <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.397 20.9969V12.8009H16.162L16.573 9.59193H13.397V7.54792C13.397 6.62192 13.655 5.98793 14.984 5.98793H16.668V3.12693C15.8487 3.03912 15.0251 2.99672 14.201 2.99993C11.757 2.99993 10.079 4.49193 10.079 7.23093V9.58593H7.33203V12.7949H10.085V20.9969H13.397Z" fill="#343434" />
          </svg>
          <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.633 7.99704C19.646 8.17204 19.646 8.34604 19.646 8.52004C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6202 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7078C4.9679 15.2071 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4489 4.29647 12.9544 3.70762 12.2337C3.11876 11.5131 2.79769 10.6107 2.799 9.68004V9.63004C3.336 9.92904 3.959 10.116 4.619 10.141C4.06609 9.77363 3.61272 9.27507 3.29934 8.68983C2.98596 8.1046 2.82231 7.4509 2.823 6.78704C2.823 6.03904 3.022 5.35304 3.371 4.75504C4.38314 6.00006 5.6455 7.01861 7.07634 7.7447C8.50717 8.4708 10.0746 8.88826 11.677 8.97004C11.615 8.67004 11.577 8.35904 11.577 8.04704C11.5767 7.518 11.6807 6.9941 11.8831 6.50528C12.0854 6.01647 12.3821 5.57232 12.7562 5.19823C13.1303 4.82414 13.5744 4.52745 14.0632 4.32512C14.5521 4.12279 15.076 4.01878 15.605 4.01904C16.765 4.01904 17.812 4.50504 18.548 5.29104C19.4498 5.11666 20.3145 4.78747 21.104 4.31804C20.8034 5.24886 20.1738 6.03815 19.333 6.53804C20.1328 6.44682 20.9144 6.2365 21.652 5.91404C21.1011 6.71714 20.4185 7.42139 19.633 7.99704V7.99704Z" fill="black" />
          </svg>
        </div>
        
      </div>
      
    </section>
  )
}