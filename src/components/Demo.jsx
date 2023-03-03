import React, { Component } from "react";

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      name: "chombi",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setInterval(() => {
    //   this.setState({ name: this.state.name + 1 });
    // }, 6000);
  }

  componentWillUnmount() {
    console.log("component removed from Real DOM");
    alert("removed");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    console.log("render");
    return (
      <div>
        <form>
          Name <input type="text" className="border-spacing-3" />
          <br />
          Password <input type="text" className="border-spacing-3" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
