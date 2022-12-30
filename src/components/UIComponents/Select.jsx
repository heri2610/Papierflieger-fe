import React from "react";

import Select from "react-select";

export const SelectOptions = ({ options, onChange, id, className }) => {
  console.log(options);
  const data = [];
  options?.forEach(airport => {
    data.push({ label: airport.city, value: airport.id });
  });
  return (
    <>
      <Select className="basic-single" classNamePrefix="select form-select" defaultValue={data[0]} isClearable={false} isSearchable={true} name="color" options={data} onChange={onChange} id={id} />
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
