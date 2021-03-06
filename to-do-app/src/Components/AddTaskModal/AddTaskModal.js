import Modal from 'react-modal';
import React, { Component } from 'react';
import { database } from "../../Config/firebaseConfig";

import { ref, set, get, push, child } from "@firebase/database"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

class AddTaskModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    getDate() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        var dayNames = ["monday", "tuesday", "wedneday", "thursday", "friday", "saturday", "sunday"]


        const month = monthNames[new Date().getMonth()];


        const day = dayNames[new Date().getDay()];


        var date = new Date().getDate()


        var year = new Date().getFullYear()


        var datestring = day + " " + date + " " + month + " " + year
        return datestring
    }

    submitHandle = async () => {

        const { closeModal } = this.props


        try {
            if (this.state.text.trim() !== '') {
                const db = database;

                let data = await push(ref(db, 'Tasks'), {
                    Task: this.state.text,
                    NewDate: this.getDate(),
                    visiblityOn: "All"

                })
                if (typeof closeModal == "function") closeModal()
                // console.log(this.state.text,)
            }
        } catch (e) {
        }

    }
    render() {
        const { closeModal } = this.props

        const closeFunc = () => typeof closeModal == "function" && closeModal()
        return (
            <Modal
                isOpen={true}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={closeFunc}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='x' onClick={closeFunc}>
                    x
                </button>

                <div>Task Name: </div>
                <br />
                <form>
                    <input className='ui-Input' value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />

                </form>
                <br />
                <br />
                <div className='flex btn-cont'>
                    <div>
                        <button className='Enter' onClick={this.submitHandle}>Enter</button>
                    </div>
                    <div>
                        <button className='Close' onClick={closeFunc}>Close</button>
                    </div>
                </div>

            </Modal>
        )
    }
}

export default AddTaskModal