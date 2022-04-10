import React, {Component} from 'react';
import style from "../Pages/index.css"
import img from "../Assets/logo.jpg"
import imag from "../Assets/logo2.jpg"
import Topbar from "../Components/TopBar/index.js";
import Profile from "../Components/Sidemenu/Profile.js";
import Categories from "../Components/Sidemenu/Categories.js";
import Friends from "../Components/Sidemenu/Friends.js";
import MenueBar from "../Components/MenueBar/MenueBar.js";
import { database } from "../Config/firebaseConfig";
import UserTask from "../Components/UserTask/UserTask";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            addTask: false
        }
    }
    toggleAddTask = (bool) => {
        this.setState({ addTask: bool })
    }


    render() {
        
        return (
            <div className="container">
                <div className="flex03">
                    <Profile/>
                    <Categories />
                    <Friends />


                </div>


                <div style={{ flex: "1" }}>
                    <Topbar />
                    <MenueBar toggleAddTask={this.toggleAddTask} />
                    <UserTask addTask={this.state.addTask} />
                </div>


            </div>
        )
    }
}

//  <div><button>Default Button</button></div> 
export default Home;
