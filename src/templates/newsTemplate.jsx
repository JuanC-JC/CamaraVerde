import React from 'react'
import HeaderBanner from '../components/Headerbanner'
import NewDescription from '../components/Noticias/New/NewDescription'
import newsFund from '../images/headerBanner_1.jpg';
import {getSrc} from 'gatsby-plugin-image'

const NewPage = (props) => {

  const {pageContext} = props

  const {data} = pageContext

  console.log(data)
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
        img={data.galleryImages[0]}
      />
    </>
  )
}

export default NewPage;