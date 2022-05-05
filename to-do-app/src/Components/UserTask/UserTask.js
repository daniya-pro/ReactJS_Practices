import React from "react";
import { database, database as db } from "../../Config/firebaseConfig";
import { ref, onValue, set , get, child } from "@firebase/database";
import { getAuth } from "@firebase/auth";


/**       */
class UserTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }
    getUpdatedb(keyId,dateText,tasks){

        set(ref(database, "Tasks/"+keyId), {
           
NewDate:dateText,
Task:tasks,
visiblityOn:"Active"


          })

    }
    getValuedb(taskText,dateText) {
        get(child(ref(database), "Tasks")).then((d) => {
            var keysofOB = Object.keys(d.val())
            keysofOB.map((e) => {
                // console.log('d.val()[e] ===>',d.val()[e],)


                 

                if (d.val()[e].Task===taskText) {
 console.log(e)

this.getUpdatedb(e,dateText,taskText)
                }
            })
            //     console.log(Object.keys(d.val()),'hh')
            //     keysofOB.map((e,i) =>{
            // console.log(e.Task,i,d.val(),e)

            //     })
            //     })

        })
        console.log(taskText,dateText)
    }
    componentDidMount() {
        let TaskToDo = []

        // const auth = getAuth();
        // const userId = auth.currentUser.uid;
        onValue(ref(database, "Tasks"), (snapshot) => {
            const data = snapshot.val();
            let key = Object.values(data);
            // console.log(data,' i am from onValue ')
            console.log(key)
            console.log(TaskToDo, "<==== task to do", 'data==', data)
            var TaskLeft = key.map((e) => [e.Task, e.NewDate])
            console.log(TaskLeft, 'taskleft')
            var htmlArray = []
            var allDates = []
            TaskLeft.forEach((e) => {

                htmlArray.push(


                    <div className="flex"> <div className="menue" onClick={()=>{console.log(this)}}>
                        <div className="px2">

                        </div>
                        <div className="px2">

                        </div>
                        <div className="px2 point1">

                        </div>
            <div><ul  className="drdown-cont">
    <li className="drdown-namecont"><a href="#" className="drdown-name">Two</a>
      <ul className="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
  </ul></div> 
                        </div>
                       
                        <div className="ml-5">
                            <div className='checkdiv' onClick={() => { this.getValuedb(e[0],e[1]) }}>
                                <div className="check">
                                    </div>
                                    </div> 
                                    </div>
                        <div className="paddingaround"><p className="fonttext">{e[0]}</p><br /><span><span className="fw-300">This task was created on</span> <span className="fw-500">{e[1]}</span></span></div><br /><br /><br /></div>




                )
                console.log(e, 'e')
            })
            this.setState({ task: htmlArray })
            console.log(this.state.task, 'i am from onvalue..........', data)
        })

    }
    render() {
        console.log(this.state.task, 'i am from render..........')

        const { addTask } = this.props

        return (

            <div className="flex column">

                {this.state.task}
            </div>

        )
    }
/*<select style="background: #009966; color: #FFF;">
  <option value='0' style="background: white; color: black;">Protect my email</option>
  <option value='1' style="background: white; color: black;">Show email on advert</option>
</select>*/
}


export default UserTask