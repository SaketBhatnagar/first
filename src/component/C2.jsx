import React from "react";
import { DataStore } from "../api/Store";
const C2 = () => {
  return (
    <div>
      <h1>C2 Component</h1>

      <DataStore.Consumer>
        {value => {
          return (
            <>
              <h2>Name : {value.name}</h2>
              <h2>Age : {value.age}</h2>
            </>
          );
        }}
      </DataStore.Consumer>
    </div>
  );
};

export default C2;
