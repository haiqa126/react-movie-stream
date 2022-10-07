import React from "react";

export default function Dropdown(props) {
  // should be wrapped into useCallback and moved out to custom hook
  function handleChange(event) {
    // please try to avoid using let or var. It's always better to write a code in immutable way with constants only
    let value = event.target.value;
    props.onSelectChange(value);
  }

  return (
    // using fragment is not mandatory
    <>
      <select onChange={handleChange}>
        {/*Please o not use null as string. Please check "selected" attribute*/}
        <option value="null">Please select year</option>;
        {props.data.map((value) => {
          // key is missing. Please see the console and you will see a lot of errors
          return <option value={value}>{value}</option>;
        })}
      </select>
    </>
  );
}
// All components should have propTypes in case you do not use typescript
// Please consider writing tests
// Please try to add eslint with airbnb rules at least
