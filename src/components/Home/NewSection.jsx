import React from 'react';
import NewCard from './NewCard';
import {useStaticQuery, graphql} from 'gatsby';

import '../../styles/components/Home/NewSection.scss';
import photoNew from '../../images/bosque.jpg'

const news = [
  {
    id: 1,
    date: '09 Ago 2021',
    notification: true,
    title: 'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: "../../images/bosque.jpg"
  },
  {
    id: 2,
    date: '09 Ago 2021',
    notification: false,
    title: 'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: "../../images/bosque.jpg"
  },
  {
    id: 3,
    date: '09 Ago 2021',
    notification: true,
    title: 'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: "../../images/bosque.jpg"
  },
  {
    id: 4,
    date: '09 Ago 2021',
    notification: false,
    title: 'Consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate egestas bibendum in odio.',
    img: "../../images/bosque.jpg"
  },
]



export default function NewSection() {

  const {files:{nodos}} = useStaticQuery(graphql`
  query getNews {
    files: allMdx(filter: {fileAbsolutePath: {regex: "/noticias/"}}, limit: 4) {
      nodos: nodes {
        id
        data: frontmatter {
          convocatoria
          date
          title
          content
          galleryImages {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)

  const data = nodos

  console.log(data)

  return (
    <section className='c-new'>

      <h2>Noticias</h2>
      <div onClick={()=>{console.log(news)}} className='news'>
        {/* {
          news.map( report =>
            <NewCard
              key={report.id}
              id={report.id}
              img={data.data.galleryImages[0]}
              date={report.date}
              title={report.title}
              text={report.text}
              notification={report.notification}
            />
          )
        } */}
        {
          data.map( (report,index) =>
            <NewCard
              key={report.id}
              id={index+1}
              img={report.data.galleryImages}
              date={report.data.date}
              title={report.data.title}
              text={report.data.content}
              notification={report.convocatoria}
            />
          )
        }
      </div>
      <button className='button button--orange'>Ver más noticias</button>

    </section>
  )
}

//TODO: TE VOY A MATAR OPR COLOCAR ESE SISTEMA DE INDICE, SABIENDO
//QUE PUEDES HACER SELECTORES COMO FIRST-CHILD O NTH-CHILD() EN CSS