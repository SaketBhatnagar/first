import React, { useContext } from "react";
import { TStore } from "../api/TodoStore";

const DisplayTodo = () => {
  const { todos, handleDelete, handleUpdate } = useContext(TStore);

  return (
    <section className="shadow-sky-200 p-[2vw] mt-[2vw]">
      <article className="flex gap-3">
        {todos.map(value => {
          return (
            <div
              className="border-[3px] rounded-lg  sm:text-[7vw] lg:text-[6vw] xl:text-[2vw] border-sky-700 shadow-lg  flex flex-col
              gap-7
              
              
              
              
              shadow-sky-200 p-[2vw]"
              key={value.title}
            >
              <div>
                <h1>Title : {value.title}</h1>
                <h2>Description : {value.description}</h2>
              </div>
              <div className="flex justify-between">
                <button
                  className="border-2 border-red-600 rounded-md hover:bg-red-200"
                  onClick={() => handleDelete(value.id)}
                >
                  ❌
                </button>
                <button
                  className="border-2 border-red-600 rounded-md p-[0.3vw] hover:bg-red-200"
                  onClick={() => handleDelete(value.id)}
                >
                  Done
                </button>

                <button
                  className="border-2 border-sky-500 rounded-md hover:bg-sky-200"
                  onClick={() => handleUpdate(value.id)}
                >
                  ✏️
                </button>
              </div>
              <div>
                <h3>Created on :{value.data}</h3>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayTodo;
