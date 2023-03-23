import { createContext, useState } from "react";

const TStore = createContext([
  {
    id: 1,
    title: "NO Todo",
    description: "NO Todo",
  },
]);

export { TStore };
const TodoStore = props => {
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: "NO Todo",
      description: "NO Todo",
    },
  ]);

  let [id, setId] = useState(100);
  const handleCreate = (title, description) => {
    setId(id + 10);
    setTodos([...todos, { id: id, title, description }]);
    console.log(todos);
  };
  const handleRead = () => {};
  const handleUpdate = () => {};
  const handleDelete = () => {};

  return (
    <TStore.Provider
      value={{ todos, handleCreate, handleDelete, handleRead, handleUpdate }}
    >
      {props.children}
    </TStore.Provider>
  );
};

export default TodoStore;
