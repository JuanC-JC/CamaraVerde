import React from 'react';
import '../styles/components/headerBanner.scss'

export default function HeaderBanner (props){
  const {img, title, color} = props
  return(
    <div className={`headerBanner headerBanner--${color}`}>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}