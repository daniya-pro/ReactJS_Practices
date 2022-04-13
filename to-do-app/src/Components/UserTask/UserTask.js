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
   
    
componentDidMount(){
    let TaskToDo=[]

        // const auth = getAuth();
// const userId = auth.currentUser.uid;
        onValue(ref(database, "Tasks"), (snapshot) => {
            const data = snapshot.val();
            let key = Object.values(data);
// console.log(data,' i am from onValue ')
            console.log(key)
console.log(TaskToDo,"<==== task to do",'data==',data)
       var TaskLeft=  key.map((e)=> e.Task)   
     console.log(TaskLeft,'taskleft')     
var htmlArray=[]
TaskLeft.forEach((e)=>{
htmlArray.push(


<div className="flex"> <div className="menue"><div className="px4"></div>
                            <div className="px5"></div>
                            <div className="px45"></div></div><div style={{ marginLeft: '5px' }}><div className='checkdiv'><div className="check"></div></div> </div>
                            <div className="paddingaround"><p className="fonttext">{e}</p><br /><span>{"datestring"}</span></div><br/></div>



    
})})

this.setState({task:htmlArray})      
  console.log(this.state.task,'i am from onvalue..........',htmlArray)

}
    render() {
        console.log(this.state.task,'i am from render..........')

    const { addTask } = this.props

        return (

            <div className="flex" style={{ flexDirection: 'column' }}>
        {this.state.task}
            </div>

        )
    }

}
//[a,b,c,d]
//<div>a</div>
//<div> b</div></div>
/**
 *  */

export default UserTask