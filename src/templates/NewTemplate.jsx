import React from 'react'
import HeaderBanner from '../components/Headerbanner'
import NewDescription from '../components/News/NewDescription'
import newsFund from '../images/headerBanner_1.jpg';
import SEO from '../components/Seo';

const NewPage = (props) => {

  const { pageContext } = props

  
  const { data } = pageContext
  
  return (
    <>

      <SEO title={data.title} image={data.image} isPost/>
      <HeaderBanner
        img={newsFund}
        title={'Noticias'}
        color={'light-green'}
      />

      <NewDescription
        key={data.id}
        date={data.date}
        notification={data.convocatoria}
        title={data.title}
        text={data.content}
        img={data.image}
        authorPost={data.post.name}
        linkPost={data.post.link}
      />
    </>
  )
}

export default NewPage;
