import { createContext } from "react";

const DataStore = createContext({});
const Store = props => {
  return (
    <DataStore.Provider value={{ name: "chombi", age: 20 }}>
      {props.children}
    </DataStore.Provider>
  );
};

export { Store, DataStore };
