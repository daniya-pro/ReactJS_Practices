import React from 'react'


class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="navbar">
                <Profile/>
              <Categories/>
               <Friend />
            </div>

        )
    }
}

export default SideMenu