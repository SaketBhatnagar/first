import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "No user",
      pass: "No user",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");

    console.log(this.state.uname);
    console.log(this.state.pass);
  };
  // handleName = e => {
  //   this.setState({ uname: e.target.value });
  // };
  handleName = e => {
    e.target.value.split("").map(value => {
      if (value >= 0 && value <= 9) {
        console.log("Number not allowed");
      } else {
        console.log("it is alphabet");
      }
    });

    // this.setState({ uname: e.target.value });
  };
  handlePass = e => {
    // console.log(e.target.value);

    this.setState({ pass: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        Username <input type="text" id="uname" onChange={this.handleName} />
        <br />
        <br />
        <label htmlFor="password"></label>
        Password{" "}
        <input type="password" id="password" onChange={this.handlePass} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
