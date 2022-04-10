import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,favoritecolor: "red"};
      console.log('construtor')
    
    }
    componentWillUnmount() {
      console.log("The component named Header is about to be unmounted.");
    }
    componentWillMount() {

      console.log('component will mount')


    }
    componentDidMount() {
      console.log('component did mount')
    }
    
    componentDidUpdate() {
     console.log('component did update')
    }
    
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    console.log('component is rendered')

    return (
      <div>
        <div id="div1"></div>
        <div id="div2"></div>
        <h1>{this.state.number} </h1>
        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>
      </div>
    );
  }
}
export default App;
