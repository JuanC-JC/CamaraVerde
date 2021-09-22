import React from 'react';
import New from './New';

import '../../styles/components/Home/NewSection.scss';
import photoNew from '../../images/Experience/Experience_1.png'

const news = [
  { 
    date:'09 Ago 2021',
    notification:true,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio...',
    img: photoNew
  },
  { 
    date:'09 Ago 2021',
    notification:false,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio...',
    img: photoNew
  },
  { 
    date:'09 Ago 2021',
    notification:false,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio...',
    img: photoNew
  },
  { 
    date:'09 Ago 2021',
    notification:false,
    title:'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio...',
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
            <New
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