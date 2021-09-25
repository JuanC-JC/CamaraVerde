import React from 'react';
import '../../styles/components/Project/ProjectDescription.scss'

export default function ProjectDescription (props){
  const {title, date, text, imgs, team}=props
  return(
    <div className='projectDescription'>
      <div className='date'>{date}</div>
      <h2>{title}</h2>
      <p>{text}</p>

      <div className='c-gallery'>
        <h3>Galeria</h3>
      </div>

      <div className='c-team'>
        <h3>Ficha Tecnica</h3>
        
        <div className='c-team-names'>
          {
            team.map(person=>
              <div className='person'>
                <div className='team-name'>{person.name}</div>
                <div className='team-job'>{person.job}</div>
              </div>
              )
          }
        </div>
      </div>



    </div>
  )
} 