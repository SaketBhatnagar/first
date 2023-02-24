import React from "react";
import Search from "./components/Search";
import { data } from "./assests/Data";
const App = () => {
  return (
    <>
      <Search data={data} />
    </>
  );
};

export default App;
