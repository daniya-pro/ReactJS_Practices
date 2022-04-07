import { Component } from "react"
import { Link } from "react-router-dom";
import {homePath,contactPath,aboutPath} from "../../Router/Paths"

import "./index.css"
class Home extends Component{
render(){
    return(
    
        <div  >
            <h1 style={{textAlign:"center",fontSize:50}}>Home</h1>
            <hr style={{height:10,backgroundColor:"gainsboro"}}/>
            <hr style={{height:10,backgroundColor:"gainsboro"}}/>
<br/>

            <Link style={{fontSize:30}} to={homePath}>Home</Link>
<br/>
            <Link style={{fontSize:30}} to={contactPath}>Contact</Link>
<br/>
            <Link style={{fontSize:30}} to={aboutPath}>About</Link>
</div>
    
    )
}

}

export default Home;