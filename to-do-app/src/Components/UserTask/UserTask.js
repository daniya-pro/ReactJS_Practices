import React from "react";
import { database, database as db } from "../../Config/firebaseConfig";
import {ref, onValue} from "@firebase/database";
import { getAuth } from "@firebase/auth";


/**       */
class UserTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
task:''
        }
    }
    render() {
        const auth = getAuth();

// const userId = auth.currentUser.uid;
        onValue(ref(database, "Tasks"), (snapshot) => {
            const data = snapshot.val();
                      let key = Object.keys(data);
                       let TaskToDo=[]
// console.log(data,' i am from onValue ')
            key.forEach((e,i)=>{

TaskToDo.push(data[i])
            })
        
        this.setState({task:TaskToDo})})
        const { addTask } = this.props

        return (

            <div className="flex" style={{ flexDirection: 'column' }}>
          
            </div>

        )
    }

}
/**
 * <div className="flex"> <div className="menue"><div className="px4"></div>
                            <div className="px5"></div>
                            <div className="px45"></div></div><div style={{ marginLeft: '5px' }}><div className='checkdiv'><div className="check"></div></div> </div>
                            <div className="paddingaround"><p className="fonttext">Correct mail sending from</p><br /><span>{datestring}</span></div></div><br /><br /><br />
 */

export default UserTask