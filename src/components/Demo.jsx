import { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super();
    this.name = props.name;
    this.state = {
      name: "chombu",
    };
    this.count = 0;
  }

  componentDidMount() {
    // this.state.name = "sjhsjgsj";
    this.setState({ name: "chombu22222" });
    this.setState({ name: "chombu2289768776" });
    console.log("componentDidmount running.....");
  }
  render() {
    console.log("render running");
    return (
      <>
        <h1>Demo Class Component</h1>
        <h2>{this.name}</h2>
        <h2>{this.state.name}</h2>
      </>
    );
  }
}

export default Demo;
