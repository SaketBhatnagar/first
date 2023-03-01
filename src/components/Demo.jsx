import React from "react";
import Types from "prop-types";
const Demo = props => {
  console.log(props);
  return (
    <div className="bg-slate-700 text-white p-[20px] text-[24px] flex justify-center hover:bg-slate-400">
      <span className=" p-[5px] border-b-[2px] block border-yellow-300 mb-[20px]">
        {" "}
        Demo
      </span>
      <h1 className="">Name : {props.name}</h1>
    </div>
  );
};

Demo.defaultProps = {
  name: "No User",
};

Demo.propTypes = {
  name: Types.string.isRequired,
};

export default Demo;
