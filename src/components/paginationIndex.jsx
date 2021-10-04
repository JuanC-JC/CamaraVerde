import React from 'react';
import { Link } from 'gatsby';
import '../styles/paginationIndex.scss'

export default function PaginationIndex () {
  return(
    <div className="paginationIndex">
      <Link to='' className='previous'>
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2L15 7L20 12L19 14L12 7L19 0L20 2Z" fill="black"/>
        <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="black"/>
      </svg>

      </Link>

      <div className='indexNumber'>1</div>
      <div className='indexNumber'>2</div>
      <div className='indexNumber'>3</div>

      <Link to='' className='next'>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2L5 7L0 12L1 14L8 7L1 0L0 2Z" fill="black"/>
          <path d="M12 2L17 7L12 12L13 14L20 7L13 0L12 2Z" fill="black"/>
        </svg>
      </Link>
    </div>
  )
}