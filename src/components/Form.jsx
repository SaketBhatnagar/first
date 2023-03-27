import React, { useContext, useState, useRef, useEffect } from "react";
import { TStore } from "../api/TodoStore";
const Form = () => {
  let data = useContext(TStore);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  let titleRef = useRef();
  let descRef = useRef();

  useEffect(() => {
    data.setTitle0(titleRef);
    data.setDesc(descRef);
  }, []);

  return (
    <section className="flex justify-center pt-[3vw]">
      <form
        className="flex justify-center"
        onSubmit={e => {
          e.preventDefault();
          data.handleCreate(title, description, titleRef, descRef);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Title..."
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500"
          onChange={e => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          type="text"
          name=""
          id=""
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500"
          placeholder="Description..."
          onChange={e => setDescription(e.target.value)}
          ref={descRef}
        />
        <button className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500 bg-sky-200  hover:bg-sky-300">
          ➕
        </button>
      </form>
    </section>
  );
};

export default Form;
