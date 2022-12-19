import React, { useState } from "react";

import Select from "react-select";

// const Checkbox = ({ children, ...props }) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

export const SelectOptions =  ({options, onChange, id, className}) => {
console.log(options)
  const data = []
  options?.forEach(airport => {
    data.push({label:airport.city, value: airport.id})
  });
  return (
    <>
      <Select className="basic-single" classNamePrefix="select form-select" defaultValue={data[0]} isClearable={true} isSearchable={true} name="color" options={data} onChange={onChange} id={id} />
      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          zIndex: 99,
          marginTop: "1em",
        }}
      >
      </div>
    </>
  );
};
