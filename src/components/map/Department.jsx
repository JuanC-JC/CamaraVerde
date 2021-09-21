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
        <path
          id={'departmentClone'}
          d={path}
          fill="#00985F"
          stroke="white"
        />
      }
    </>

  );
};
