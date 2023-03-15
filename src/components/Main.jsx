import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "mojombo",
    };
  }

  componentDidMount() {
    try {
      fetch(`https://api.github.com/users/${this.state.name}`).then(data =>
        data.json().then(res => {
          console.log(res);
          this.setState({ data: res });
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.data.map(value => {
          return (
            <div key={value.id}>
              <img src={value.avatar_url} alt={value.login} width="300px" />
              <h1>{value.login}</h1>
            </div>
          );
        })} */}

        {/* {this.state.data.map(value => {
          return (
            <div key={value.id} className="card">
              <h2>Name :{value.name}</h2>
              <h2>Email :{value.email}</h2>
            </div>
          );
        })} */}
      </div>
    );
  }
}
