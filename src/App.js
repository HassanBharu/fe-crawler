import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Header from "./components/Header";
import MyInput from "./components/MyInput";

class App extends Component {
  state = {
    array: []
  };
  render() {
    return (
      <div>
        <Header />
        <MyInput />
        <Chart />
      </div>
    );
  }
}

export default App;
