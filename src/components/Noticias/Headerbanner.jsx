import React from 'react';
import '../../styles/components/News/headerBanner.scss'

export default function HeaderBanner (props){
  const {img, title} = props
  return(
    <div className='headerBanner'>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}