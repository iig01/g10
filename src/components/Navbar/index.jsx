import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "webbrain",
    };
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
