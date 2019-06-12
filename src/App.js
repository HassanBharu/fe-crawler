import React, { Component } from "react";
import Chart from "./Chart";
import "./App.css";

class App extends Component {
  state = {
    array: []
  };
  render() {
    return (
      <div>
        <Chart />
      </div>
    );
  }
}

export default App;
