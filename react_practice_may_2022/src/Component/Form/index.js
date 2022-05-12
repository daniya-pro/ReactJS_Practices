import React, { Component, useState} from 'react';

const Formhome=()=>{
const [state, setFirstName] = useState()

    return (
    <div>      

<form action="/action_page.php">
  <label>First name:</label><br/>
  <input type="text" onChange={e=>setFirstName(e.target.value)} value={firstName} /><br/><br/>
  <label>Last name:</label><br/>
  <input type="text"/><br/><br/>
  <label>Gmail:</label><br/>
  <input type="text"/><br/><br/>
  <label>Password:</label><br/>
  <input type="text"/><br/><br/>
  
  <input type="submit" value="Submit"/>
</form> </div>    

);
}







export default Formhome;