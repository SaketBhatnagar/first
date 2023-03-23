import React, { useContext } from "react";
import { TStore } from "../api/TodoStore";

const DisplayTodo = () => {
  const { todos } = useContext(TStore);

  return (
    <section className="shadow-sky-200 p-[2vw] mt-[2vw]">
      <article>
        {todos.map(value => {
          return (
            <div className="border-[3px] rounded-lg shadow-lg shadow-sky-200 p-[2vw]">
              <h1>Title : {value.title}</h1>
              <h2>Description : {value.description}</h2>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayTodo;
