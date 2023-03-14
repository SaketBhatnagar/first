import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "No user",
      pass: "No user",
      login: true,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");

    console.log(this.state.uname);
    console.log(this.state.pass);
  };

  handleName = e => {
    e.target.value.split("").map(value => {
      if (value >= 0 && value <= 9) {
        console.log("Number not allowed");
      } else {
        console.log("it is alphabet");
      }
    });
  };
  handlePass = e => {
    this.setState({ pass: e.target.value });
  };

  render() {
    return (
      <section className="form-block">
        <div>
          <h2
            onClick={() => {
              this.setState({ login: true });
            }}
          >
            Login
          </h2>
          <h2
            onClick={() => {
              this.setState({ login: false });
            }}
          >
            Signup
          </h2>
        </div>

        {this.state.login ? (
          <LoginForm
            handleSubmit={this.handleSubmit}
            handlePass={this.handlePass}
            handleName={this.handleName}
          />
        ) : (
          <SignUp
            handleSubmit={this.handleSubmit}
            handlePass={this.handlePass}
            handleName={this.handleName}
          />
        )}
      </section>
    );
  }
}
