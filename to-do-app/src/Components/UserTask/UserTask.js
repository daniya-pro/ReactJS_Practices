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
   
    
//     componentDidMount(e){      
//           this.setState({task:e})
// console.log(e)}
    render() {
        let TaskToDo=[]

        const auth = getAuth();
// const userId = auth.currentUser.uid;
        onValue(ref(database, "Tasks"), (snapshot) => {
            const data = snapshot.val();
                      let key = Object.keys(data);
// console.log(data,' i am from onValue ')
            key.forEach((e,i)=>{

TaskToDo.push(data[e])
            })

    })
  var TaskLeft=  TaskToDo.map((e)=> e.Task            )
    const { addTask } = this.props

        return (

            <div className="flex" style={{ flexDirection: 'column' }}>
        
            </div>

        )
    }

}
//[a,b,c,d]
//<div>a</div>
//<div> b</div></div>
/**
 * <div className="flex"> <div className="menue"><div className="px4"></div>
                            <div className="px5"></div>
                            <div className="px45"></div></div><div style={{ marginLeft: '5px' }}><div className='checkdiv'><div className="check"></div></div> </div>
                            <div className="paddingaround"><p className="fonttext">Correct mail sending from</p><br /><span>{datestring}</span></div></div><br /><br /><br />
 */

export default UserTask