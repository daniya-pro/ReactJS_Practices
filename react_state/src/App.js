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

  plus=()=>{
    const number = this.state.number;

    this.setState({number:number+1})
  }
  minus =()=>{
const number = this.state.number;

if(number > 0) this.setState({number:number-1})

  }

  render() {
    const number = this.state.number;
    return (
      <div>
        
        <h1> {number} </h1>
        <button onClick={this.plus}>Plus</button>

        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
