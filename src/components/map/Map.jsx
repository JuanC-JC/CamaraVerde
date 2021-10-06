import React from "react";
import DepartmentSVG from "./Department";
import Country from "./Country";
import '../../styles/components/Map/Map.scss'

const Map = ({ selected, setSelection, departments }) => {


  return (
    <svg
      className='map'
      // width="538"
      // height="534"
      viewBox="0 0 538 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Country />
      {
        departments.map((department) => (
          <DepartmentSVG
            handlerClick={setSelection}
            key={department.name}
            id={department.name}
            path={department.path}
            selected={department.name == selected.name} />
        )
        )
      }

    </svg>
  );
};

export default Map;
