import { Component } from "react";
import style from "../Pages/index.css"
import img from "../assets/logo.jpg"
import imag from "../assets/logo2.jpg"
class Home extends Component {
    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dayNames = ["monday", "tuesday", "wedneday", "thursday", "friday", "saturday", "sunday"]
        const month = monthNames[new Date().getMonth()];
        const day = dayNames[new Date().getDay()];
        var date = new Date().getDate()
        var year = new Date().getFullYear()
        var datestring = day + " " + date + " " + month + " " + year
        return (
            <div className="container">
                <div className="flex03">
                    <div className="bold" style={{ width: "100%", textAlign: 'center', padding: "20px" }}><br /><span className="bgimage"></span>
                        <br /> <span className="font">admin</span><br />
                        <span className="grey">g.alex00@bk.ru</span><br /><br /><br />
                        <div><div className="flex w-100 space-ar">
                            <div className="font02">4<div className="grey font03">To Do</div></div>
                            <div className="font02">1     <div className="font03 grey">Completed</div></div>
                            <div className="font02">0
                                <div className="font03 grey">Primary</div></div>
                        </div>
                        </div></div>
                    <div className="b-top bold" style={{ width: "100%", padding: "20px" }}><br /><h4 className="center">Categories</h4>
                        <div className="dispflex">
                            <div className="blueline"></div><br /><br /><span>Work</span></div><br /><br /></div>
                    <div className="w-100 center" style={{ borderTop: "1px solid #c2bbc1" }}><br /><h3>Friends</h3><br /><br /><div className="bgimg"></div></div>
                </div>


                <div style={{ flex: "1" }}>
                    <div className="navbar">
                        <div>HOME</div>
                        <div>TODOS</div>
                        <div>SETTING</div>
                        <div>SUPPORT</div>
                        <div>LOGOUT</div>

                    </div>

                    <div className='datacon' style={{ display: "flex" }}><div style={{ margin: '10px' }}><span className="lineb"></span><span style={{ marginLeft: "10px" }}>Work</span>   </div><div><div className="tooltip plus"><span >+</span>
  <span className="tooltiptext">Add  Task</span>
</div>
 </div>
                        <div> <span className='grey' style={{ wordSpacing: "20px" }}>ALL Active Completed Primary</span></div> </div><div className="flex" style={{ flexDirection: 'column' }}>

                    </div>
                </div></div>
        )
    }
}

//  <div><button>Default Button</button></div> 
export default Home;
/**
 * <div className="flex"> <div className="menue"><div className="px4"></div>
                            <div className="px5"></div>
                            <div className="px45"></div></div><div style={{ marginLeft: '5px' }}><div className='checkdiv'><div className="check"></div></div> </div>
                            <div className="paddingaround"><p className="fonttext">Correct mail sending from</p><br /><span>{datestring}</span></div></div><br /><br /><br />
 */