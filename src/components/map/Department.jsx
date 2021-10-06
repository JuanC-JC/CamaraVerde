import React, { useRef, useEffect, useState } from 'react';

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
        class='departmentVector'
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

// TODO: Optimizar este render :c
const DepartmentSelector = ({ box }) => {

  const elemento = useRef(null)
  const [positions, setPositions] = useState({ x: 0, y: 0 })


  useEffect(() => {
    if (box && elemento.current) {
      document.querySelector('.map').appendChild(elemento.current)
    }
  }, [box])

  useEffect(() => {

    if (box) {
      setPositions({
        x: box.x + (box.width / 2),
        y: box.y + (box.height / 2 - 10),
      })
    }
  }, [box])


  return (
    <g id='svgPointerMap' ref={elemento}>

      {
        positions.x > 0 &&
        <>
          <circle cx={positions.x} cy={positions.y} r="7" fill="#205033" />
          <path d={`M${positions.x},${positions.y} L${positions.x},${100} L${0},${100}`} stroke="#205033" strokeWidth='2' />
        </>
      }
    </g>
  )

}