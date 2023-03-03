import React, { Component } from "react";
import Demo from "./components/Demo";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      remove: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ remove: !this.state.remove });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1 className="text-[10vw]"> App</h1>

        {this.state.remove ? <Demo></Demo> : "hello"}
      </div>
    );
  }
}
