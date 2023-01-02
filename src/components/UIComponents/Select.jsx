import React from "react";

import Select from "react-select";

export const SelectOptions = ({ options, onChange, id, className }) => {
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

export const SelectBandara = ({ options, onChange, id, defaultValue }) => {
  const data = [];
  options?.forEach(airport => {
    data.push({ label: airport.airportName, value: airport.id });
  });
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select form-select"
        defaultValue={defaultValue || 'Select'}
        isClearable={false} isSearchable={true}
        options={data} onChange={onChange} id={id}
      />
    </>
  );
};

export const SelectLokasi = ({ options, onChange, id, defaultValue }) => {
  const data = [];
  let provinsi = '';
  let negara = '';
  options?.forEach(airport => {
    const value1 = airport.city.split(', ');
    if (value1.length === 3) {
      provinsi = value1[1];
      negara = value1[2];
    } else {
      provinsi = value1[0];
      negara = value1[1];
    }
    const final = provinsi.concat(' (', negara, ')');

    data.push({ label: final, value: final });
  });
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select form-select"
        defaultValue={defaultValue || 'Select'}
        isClearable={false} isSearchable={true}
        options={data} onChange={onChange} id={id}
      />
    </>
  );
};
