import React, { Component } from "react";
import Demo from "./components/Demo";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 className="text-[10vw]"> App</h1>
        <Demo name="chomkdlkkhdjslkhjkdslkhjddsiuiudgdsksdk" />
      </div>
    );
  }
}
