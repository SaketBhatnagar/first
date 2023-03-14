import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        <h3>Login</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name"></label>
          Username{" "}
          <input type="text" id="uname" onChange={this.props.handleName} />
          <br />
          <br />
          <label htmlFor="password"></label>
          Password{" "}
          <input
            type="password"
            id="password"
            onChange={this.props.handlePass}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </article>
    );
  }
}
