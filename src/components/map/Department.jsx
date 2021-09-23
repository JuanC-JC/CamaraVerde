import React, { useRef, useEffect, useState, useCallback } from 'react';

export default function DepartmentSVG({ id, handlerClick, path, selected }) {

  const elemento = useRef(null)
  const [box, setBox] = useState(null)


  useEffect(() => {
    setBox(elemento.current.getBBox())
  }, [])

  return (
    <>
      <path
        ref={elemento}
        id={id}
        onClick={handlerClick}
        d={path}
        fill="#00985F"
        stroke="white"
      />

      {
        selected &&
        <>
          <path
            id={'departmentClone'}
            d={path}
            fill="#00985F"
            stroke="white"
          />

          <DepartmentSelector box={box} />
        </>
      }
    </>

  );
};


const DepartmentSelector = ({ box }) => {

  const elemento = useRef(null)
  const [positions, setPositions] = useState({ x: 0, y: 0 })

  // const handleResize = useCallback(() => {
  //   console.log(type)
  //   setType(window.innerWidth);
  // }, [type]);

  // useEffect(() => {

  //   window.addEventListener('resize', handleResize)

  //   return (() => window.removeEventListener('resize', handleResize))
  // }, [])




  // useEffect(() => {
  //   if (elemento.current) {
  //     document.querySelector('.map').appendChild(elemento.current)
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log(elemento.current)
  // })


  useEffect(() => {
    if (elemento.current) {
      console.log(elemento.current)
      setPositions({
        x: box.x + (box.width / 2),
        y: box.y + (box.height / 2 - 7)
      })

    }
  }, [])

  if (box) {
    return (
      <g ref={elemento}>
        <circle cx={positions.x} cy={positions.y} r="7" fill="#205033" />
        <path d={`M${positions.x},${positions.y} L${positions.x},${250} L${0},${250}`} stroke="#205033" strokeWidth='2' />
      </g>
    )
  }

  return null
}