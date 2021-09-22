import React from 'react';

export default function DepartmentSVG({ id, handlerClick, path, selected }) {
  return (
    <>
      <path
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
          {/* <svg width="270" height="153" viewBox="0 0 270 153" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          {/* <path d="M0 2H197.588H265V148" stroke="#205033" stroke-width="3" />
          <circle cx="265" cy="148" r="5" fill="#205033" /> */}
          {/* </svg> */}

        </>
      }
    </>

  );
};
