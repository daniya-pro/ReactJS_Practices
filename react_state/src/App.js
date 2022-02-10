import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  customeStyleLink = {
    backgroundColor: "lightblue",
    textDecoration: "underline",
  };
  render() {
    const number = this.state.number;
    return (
      <div>
        
        <h1> {number} </h1>
        <button>Plus</button>

        <button>Minus</button>
      </div>
    );
  }
}
export default App;
