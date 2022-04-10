import React from 'react'

/* */
class Profile extends React.Component{    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props,"profile component")
        return (
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

        )}}
        export default Profile;