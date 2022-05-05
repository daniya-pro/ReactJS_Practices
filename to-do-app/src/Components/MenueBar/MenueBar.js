import React from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

class MenueBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    render() {
        const { toggleAddTask } = this.props
        const { showModal } = this.state
        return (
            <div className='datacon'>
                <div className="m-10px">
                    <span className="m-10px">Work</span>
                </div>
                <div>
                    <div className="tooltip">
                        <button className="plus" onClick={() => this.setState({ showModal: true })}>+</button>
                        <span className="tooltiptext">Add  Task</span>
                    </div>
                </div>
                <div>
                    <span className='grey'><span className="AllHover" onClick={()=>{}}> ALL </span> <span className="ActiveHover"> Active </span>
                    <span className="CompletedHover"> Completed </span>
                    <span className="PrimaryHover"> Primary </span>
                    </span>
                </div>

                {showModal && <AddTaskModal closeModal={() => this.setState({ showModal: false })} />}
            </div>


        )
    }


}
export default MenueBar;