import React,{Component} from 'react'


class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
        
        <div className="navbar">
                <div>HOME</div>
                <div>TODOS</div>
                <div>SETTING</div>
                <div>SUPPORT</div>
                <div>LOGOUT</div>
            </div>

        )
    }
}

export default Topbar