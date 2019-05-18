import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Die from "./Die";
import RollDice from "./RollDice";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header />

        <div>
          <RollDice />
          <Die face="five" />
        </div>
      </div>
    );
  }
}

export default App;
