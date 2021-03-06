import React from 'react'
import HeaderBanner from '../components/Headerbanner'
import newsFund from '../images/headerBanner_1.jpg';
import PaginationIndex from '../components/paginationIndex'
import NewCard from '../components/Home/NewCard';
import { translateDate } from '../utils/index';
import '../styles/templates/newsTemplates.scss';


export default function NewsTemplate(props) {

  const { pageContext } = props

  return (

    <>
      <HeaderBanner
        img={newsFund}
        title={'Noticias'}
        color={'light-green'}
      />

      <div className='newsContainer'>

        {
          pageContext.files.map(news => {
            return (
              <NewCard
                key={news.id}
                id={news.id}
                img={news.data.image}
                date={translateDate(news.data.date)}
                title={news.data.title}
                text={news.data.content}
                notification={news.data.convocatoria}
              />
            )
          })
        }
      </div>

      <PaginationIndex route='noticias' numbersPerView={5} indexPage={pageContext.indexPage} maxPages={pageContext.pages} />
    </>


  )
};
