import React from 'react';
//componentes
import HeaderBanner from '../components/Noticias/Headerbanner';
import NewDescription from '../components/Noticias/New/NewDescription';
//estilos e imagenes
import '../styles/global.scss';
import newsFund from '../images/forest.jpg';


const noticias = {
  id: 1,
  date: '09 Ago 2021',
  notification: true,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tristique malesuada ipsum cursus. Suspendisse commodo sed in massa fusce suspendisse ullamcorper ornare. Eu pulvinar vestibulum, egestas nam eu. Lacus, purus ultrices orci, nulla. Quis pretium euismod at gravida in vitae euismod nec pulvinar. In pharetra mattis auctor ipsum amet pellentesque. Nec, urna, nisl mauris nulla arcu imperdiet. Sed quisque aliquet blandit duis varius sed. Dictum id aliquet ac tellus ullamcorper id.Lorem ut netus amet libero interdum amet non pharetra. Magna duis nisi dui elementum ac. Viverra lorem dignissim pellentesque gravida pellentesque dui purus. Pharetra gravida ornare quam ut praesent morbi rhoncus amet enim. Adipiscing sed sit posuere magna mattis purus elit in. Orci eget imperdiet ante ut ultrices lectus. Ut sodales habitant mattis pulvinar sit viverra at feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tristique malesuada ipsum cursus. Suspendisse commodo sed in massa fusce suspendisse ullamcorper ornare. Eu pulvinar vestibulum, egestas nam eu. Lacus, purus ultrices orci, nulla. Quis pretium euismod at gravida in vitae euismod nec pulvinar. In pharetra mattis auctor ipsum amet pellentesque. Nec, urna, nisl mauris nulla arcu imperdiet. Sed quisque aliquet blandit duis varius sed. Dictum id aliquet ac tellus ullamcorper id.Lorem ut netus amet libero interdum amet non pharetra. Magna duis nisi dui elementum ac.Viverra lorem dignissim pellentesque gravida pellentesque dui purus. Pharetra gravida ornare quam ut praesent morbi rhoncus amet enim. Adipiscing sed sit posuere magna mattis purus elit in. Orci eget imperdiet ante ut ultrices lectus. Ut sodales habitant mattis pulvinar sit viverra at feugiat`,
  img: newsFund
};





const NewPage = () => {
  return (
    <>
      <HeaderBanner
        img={newsFund}
        title={'Noticias'}
      />

      <NewDescription
        key={noticias.id}
        date={noticias.date}
        notification={noticias.notification}
        title={noticias.title}
        text={noticias.text}
        img={noticias.img}
      />
    </>
  )
}

export default NewPage;