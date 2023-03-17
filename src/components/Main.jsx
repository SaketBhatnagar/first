import { UseState, useState } from "react";
const Main = () => {
  let [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(prev => prev + 1);
    // setCount(count + 1);
  };
  let handleDecrement = () => {
    setCount(prev => prev - 1);
    // setCount(count - 1);
  };
  let handleReset = () => {
    setCount(prev => prev * 0);
    // setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Main;

// Ṛeact Provides 'useState' hook to implement state inside function components
// By using state hook , we store any type of literal
//
// useState  returns array of satte variable and it's function to update the state and re-render UI after state update;
// To use state and function , we have destructure it
// to set default value of state , we can pass value to useState("value") ;
