import React from 'react'
import HeaderBanner from '../components/Headerbanner'
import NewDescription from '../components/Noticias/New/NewDescription'
import newsFund from '../images/headerBanner_1.jpg';

const NewPage = (props) => {

  const { pageContext } = props

  const { data } = pageContext

  return (
    <>

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
      />
    </>
  )
}

export default NewPage;
