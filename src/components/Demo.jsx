import React from "react";
import Types from "prop-types";
const Demo = props => {
  console.log(props);
  return (
    <div>
      Demo
      <h1>Name : {props.name}</h1>
    </div>
  );
};

Demo.defaultProps = {
  name: "No User",
};

Demo.propTypes = {
  name: Types.string,
};

export default Demo;
