import React from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

class MenueBar extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            showModal:false,
        }
    }

    render() {
        const { toggleAddTask } = this.props
const {showModal} = this.state
        return (
            <div className='datacon' style={{ display: "flex" }}>
                <div style={{ margin: '10px' }}>
                    <span className="lineb"></span>
                    <span style={{ marginLeft: "10px" }}>Work</span>
                </div>
                <div>
                    <div className="tooltip">
                        <button className="plus" onClick={() => this.setState({showModal:true})}>+</button>
                        <span className="tooltiptext">Add  Task</span>
                    </div>
                </div>
                <div>
                    <span className='grey' style={{ wordSpacing: "20px" }}>ALL Active Completed Primary
                    </span>
                </div>

{showModal &&<AddTaskModal closeModal={()=>this.setState({showModal:false})} />}
        </div>


        )
    }


}
export default MenueBar;