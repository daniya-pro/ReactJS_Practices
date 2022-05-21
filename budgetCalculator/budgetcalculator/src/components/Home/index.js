import React, { useState } from 'react';
import "./index.css"
function Home() {
    const [valueO, setValue] = useState({});
    console.log(valueO)
    return (
    <div>
        <h1 className="color-w">
            Budget Calculator
      </h1><div>
          </div> <div className="white-box">
      <div>
          <div className="flex space-around">
          <div>
                  charge
                <br/>  <input placeholder='e.g. 100' className="inputui" onchange={(e)=>{console.log(e.target)
                    
                    setValue({v1:e.value})}}/>
              </div><div>
                  Amount
                  <br/><input placeholder='e.g. 100' className="inputui" />
              </div>
          </div>
         <br/> <button className="submit" onClick={()=>{}}>SUBMIT</button>
     </div>          <br/><br/><br/>
 </div>
 <h1 className="color-w">TotalSpending:<span className="bgcolor-r">$ 0 </span></h1>
    </div> );
}
// onChange={(e)=>{setValue({v1:e.value})}}
export default Home;