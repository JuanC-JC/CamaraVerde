import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import ProjectDescription from '../components/Projects/ProjectDescription'

//estilos e imagenes
import '../styles/global.scss';
import experience_1 from '../images/Experience/Experience_1.png'
import experience_2 from '../images/Experience/Experience_2.png'
import experience_3 from '../images/Experience/Experience_3.png'
import newsFund from '../images/headerBanner_2.jpg'


const project =  { 
  id:1,
  date:'09 Ago 2021',
  title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tristique malesuada ipsum cursus. Suspendisse commodo sed in massa fusce suspendisse ullamcorper ornare. Eu pulvinar vestibulum, egestas nam eu. Lacus, purus ultrices orci, nulla. Quis pretium euismod at gravida in vitae euismod nec pulvinar. In pharetra mattis auctor ipsum amet pellentesque. Nec, urna, nisl mauris nulla arcu imperdiet. Sed quisque aliquet blandit duis varius sed. Dictum id aliquet ac tellus ullamcorper id.Lorem ut netus amet libero interdum amet non pharetra. Magna duis nisi dui elementum ac. Viverra lorem dignissim pellentesque gravida pellentesque dui purus. Pharetra gravida ornare quam ut praesent morbi rhoncus amet enim. Adipiscing sed sit posuere magna mattis purus elit in. Orci eget imperdiet ante ut ultrices lectus. Ut sodales habitant mattis pulvinar sit viverra at feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tristique malesuada ipsum cursus. Suspendisse commodo sed in massa fusce suspendisse ullamcorper ornare. Eu pulvinar vestibulum, egestas nam eu. Lacus, purus ultrices orci, nulla. Quis pretium euismod at gravida in vitae euismod nec pulvinar. In pharetra mattis auctor ipsum amet pellentesque. Nec, urna, nisl mauris nulla arcu imperdiet. Sed quisque aliquet blandit duis varius sed. Dictum id aliquet ac tellus ullamcorper id.Lorem ut netus amet libero interdum amet non pharetra. Magna duis nisi dui elementum ac.Viverra lorem dignissim pellentesque gravida pellentesque dui purus. Pharetra gravida ornare quam ut praesent morbi rhoncus amet enim. Adipiscing sed sit posuere magna mattis purus elit in. Orci eget imperdiet ante ut ultrices lectus. Ut sodales habitant mattis pulvinar sit viverra at feugiat`,
  galeria: [
    experience_1,
    experience_2,
    experience_3,
    experience_2
  ],
  team: [
    {
      name:'Aidy Roa',
      job:'Directora'
    },
    {
      name:'Aidy Roa',
      job:'Directora'
    },
    {
      name:'Aidy Roa',
      job:'Directora'
    }
  ]
};





const ProjectPage = ()=>{
  return(
    <>

      <HeaderBanner 
        img ={newsFund}
        title= {'Proyectos'} 
        color={'dark-green'}
      />

    <ProjectDescription
      key={project.id}
      date={project.date}
      title={project.title}
      text={project.text}
      galeria={project.galeria}
      team={project.team}
    />


    </>
  )
}

export default ProjectPage;