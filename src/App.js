import React, { Component } from 'react';
import './App.css';
import Chart from "./Chart";


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
