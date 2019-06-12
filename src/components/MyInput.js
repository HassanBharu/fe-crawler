import React, { Component } from "react";
import { crawlUrl } from "../api";

class MyInput extends Component {
  state = {
    input: null
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="enter full url"
          required={true}
          onChange={this.handleChange}
          type="text"
        />
        <button>Submit</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    crawlUrl(this.state.input);
  };
}

export default MyInput;
