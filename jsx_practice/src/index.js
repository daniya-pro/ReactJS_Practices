import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Helloworld from './App';
// import Method from './Method';
import Clock from './clock';

import reportWebVitals from './reportWebVitals';
// var h1 =React.createElement("h1",null,'hello woeld')
ReactDOM.render(
 <div>
{/* <Helloworld link='https://www.google.com' linkText='Google'/>
 <Helloworld link='https://www.facebook.com' linkText='facebook'/>
 <Helloworld link='https://www.youtube.com' linkText='youtube'/><Method/> */}
    <Clock/> 
 </div>,document.getElementById('root')
);

// <React.StrictMode>
// <App />
// </React.StrictMode>,
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

