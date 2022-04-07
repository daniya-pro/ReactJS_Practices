import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import {homePath,contactPath,aboutPath} from "./Paths"

// import Contact from "../pages/Contact";

class Router extends Component{
render(){return(
<BrowserRouter>
<Routes path={homePath}>
    <Route index element={<Home/>}/>
    <Route path={contactPath} element={<Contact/>}/>
    <Route path={aboutPath} element={<About/>}/>
    </Routes>
    
    </BrowserRouter>

    )}


}

export default Router;