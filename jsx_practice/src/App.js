// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './App.css';

// class App extends Component {

//   render() {

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
class Helloworld extends Component {
  customeStyleLink={
backgroundColor:'lightblue',
textDecoration:'underline'
  }

  render() {
    return (
<a style={this.customeStyleLink}href={this.props.link}>{this.props.linkText}</a>
    )

  }



}


export default Helloworld;