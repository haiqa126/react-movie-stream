import React from "react";

export default function Dropdown(props) {
  function handleChange(event) {
    let value = event.target.value;
    props.onSelectChange(value);
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value="null">Please select year</option>;
        {props.data.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </>
  );
}
