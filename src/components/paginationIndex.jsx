import React from 'react';
import { Link } from 'gatsby';
import '../styles/paginationIndex.scss'

export default function PaginationIndex () {
  return(
    <div className="paginationIndex">
      <Link to=''>
        <div className='icon previous'></div>
      </Link>

      <div className='indexNumber'>1</div>
      <div className='indexNumber'>2</div>
      <div className='indexNumber'>3</div>

      <Link to=''>
        <div className='icon next'></div>
      </Link>
    </div>
  )
}