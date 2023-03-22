import React from "react";
import C1 from "./component/C1";
import C2 from "./component/C2";
import { Store } from "./api/Store";
const App = () => {
  return (
    <Store>
      <C1 />
      <C2 />
    </Store>
  );
};

export default App;
