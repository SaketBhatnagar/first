import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        <h3>Signup</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name"></label>
          Name <input type="text" id="uname" onChange={this.props.handleName} />
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
