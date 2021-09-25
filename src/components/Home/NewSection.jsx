import React from 'react';
import NewCard from './NewCard';

import '../../styles/components/Home/NewSection.scss';
import photoNew from '../../images/bosque.jpg'

const news = [
  { 
    id:1,
    date:'09 Ago 2021',
    notification:true,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: photoNew
  },
  { 
    id:2,
    date:'09 Ago 2021',
    notification:false,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',    
    img: photoNew
  },
  { 
    id:3,
    date:'09 Ago 2021',
    notification:true,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: photoNew
  },
  { 
    id:4,
    date:'09 Ago 2021',
    notification:false,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: photoNew
  },
]



export default function NewSection (){
  return(
    <section class='c-new'>

      <h2>Noticias</h2>
      <div className='news'>
        {
          news.map( report =>
            <NewCard
              key={report.id}
              id={report.id}
              img={report.img}
              date={report.date}
              title={report.title}
              text={report.text}
              notification={report.notification}
            />
          )
        }
      </div>
      <button className='button button--orange'>Ver más noticias</button>

    </section>
  )
}