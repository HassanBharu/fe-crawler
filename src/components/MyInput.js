import React, { Component } from "react";
import { crawlUrl } from "../api";

class MyInput extends Component {
  state = {
    input: null
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
        <button>Submit</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    crawlUrl();
  };
}

export default MyInput;
