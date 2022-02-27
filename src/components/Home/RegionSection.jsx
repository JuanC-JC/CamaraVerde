import React, { useState, useEffect, useCallback } from "react";
import Map from "../Map/Map";
import "../../styles/components/Home/RegionSection.scss";
import { departments } from './departments'


export default function RegionSection() {

  const findDepartment = useCallback((dpt) => {
    return departments.find(department => department.name == dpt)
  })

  const [selectedDepartment, setSelectedDepartment] = useState(findDepartment('Amazonas'))
  const [selectedInfo, setSelectedInfo] = useState('description')


  const setSelection = (e) => {
    const department = findDepartment(e.target.id)

    if (selectedDepartment !== department) {
      setSelectedDepartment(findDepartment(e.target.id))

      document.querySelector('.info__parrafoInfo').animate({
        maxHeight: ['0px', '230px'],
      }, { duration: 500, easing: 'ease-in-out' });
    }
  }


  const setSelectInfo = (type) => {

    const typeInfo = type.dataset.typeinfo

    if (typeInfo !== selectedInfo) {
      setSelectedInfo(typeInfo)

      document.querySelector('.info__parrafoInfo').animate({
        maxHeight: ['0px', '230px'],
      }, 500);
    }
  }

  return (
    <section className='region'>

      <h2>Nuestra región</h2>

      <div className="region__container">
        <div className="region__info">
          <div className="info__text">
            <h3>{selectedDepartment.name}</h3>
            <div className='info__parrafoInfo'>
              <p className='preventResizeFont'>{selectedDepartment.info[selectedInfo]}</p>
            </div>
          </div>

          <div className="info__grahpicsItems">

            <svg onClick={(e) => setSelectInfo(e.currentTarget)} data-typeinfo='description' className={`info__graphic ${selectedInfo === 'description' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#205033" stroke-width="2"/>
              <path d="M10 15.1C10 15.1 12.325 12 17.75 12C23.175 12 25.5 15.1 25.5 15.1V36.8C25.5 36.8 23.175 35.25 17.75 35.25C12.325 35.25 10 36.8 10 36.8V15.1Z" stroke="#205033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.5 15.1C25.5 15.1 27.825 12 33.25 12C38.675 12 41 15.1 41 15.1V36.8C41 36.8 38.675 35.25 33.25 35.25C27.825 35.25 25.5 36.8 25.5 36.8V15.1Z" stroke="#205033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              
            </svg>

            <svg onClick={(e) => setSelectInfo(e.currentTarget)} data-typeinfo='hydrography' className={`info__graphic ${selectedInfo === 'hydrography' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M15.4703 23.6667C14.5062 25.339 13.9991 27.2356 14 29.1659C14.0009 31.0962 14.5097 32.9923 15.4754 34.6637C16.4411 36.3351 17.8296 37.723 19.5015 38.6879C21.1733 39.6528 23.0697 40.1608 25 40.1608C26.9303 40.1608 28.8267 39.6528 30.4985 38.6879C32.1704 37.723 33.5589 36.3351 34.5246 34.6637C35.4903 32.9923 35.9991 31.0962 36 29.1659C36.0009 27.2356 35.4938 25.339 34.5297 23.6667L25.0018 9L15.4685 23.6667H15.4703Z" stroke="#205033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg onClick={(e) => setSelectInfo(e.currentTarget)} data-typeinfo='fauna' className={`info__graphic ${selectedInfo === 'fauna' && 'info__graphic--selected'}`} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M25.1144 46.5V41C16.6144 39 4.94995 28.8 25.35 4" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M24.85 46.5V41C33.35 39 44.7484 28.8 24.3484 4" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M24.8496 41V16" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M19.3496 28.5L24.8496 34L30.3496 28.5" stroke="#2a5b4b" strokeWidth="2" />
              <path d="M19.3496 18.5L24.8496 24L30.3496 18.5" stroke="#2a5b4b" strokeWidth="2" />
            </svg>

          </div>
        </div>

        <Map
          selected={selectedDepartment}
          departments={departments}
          setSelection={setSelection}
        />

      </div>
    </section>
  )
}




