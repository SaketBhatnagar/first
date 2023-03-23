import React from "react";
import TodoStore from "./api/TodoStore";
import Form from "./components/Form";
import DisplayTodo from "./components/DisplayTodo";
const App = () => {
  return (
    <TodoStore>
      <Form></Form>
      <DisplayTodo />
    </TodoStore>
  );
};

export default App;
