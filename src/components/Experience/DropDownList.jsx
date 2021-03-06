import React from 'react';
import { useRef, useState } from 'react';
import '../../styles/components/Experience/dropDownList.scss'


export default function DropDownList(props) {
  const { title, children } = props
  const container = useRef()
  const [isOpenContent, setIsOpenContent] = useState(false)


  const togleContent = () => {
    setIsOpenContent(!isOpenContent)
  }


  return (
    <div className='c-dropDownList'>

      <div className='c-dropDownList-text'>
        <h4>{title}</h4>
        <svg className='arrow' onClick={togleContent} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isOpenContent ? <path d="M4 15L12 7L20 15L18 17L12 11L6 17L4 15Z" fill="#343434" /> : <path d="M6 7L12 13L18 7L20 9L12 17L4 9L6 7Z" fill="#343434" />}
        </svg>
      </div>

      <div className={`c-dropDownList-content ${isOpenContent && 'visibility'} `} ref={container}>
        {children}
      </div>


    </div>
  )
}


