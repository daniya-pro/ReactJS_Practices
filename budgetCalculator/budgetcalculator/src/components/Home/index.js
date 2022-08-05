import React, { useState } from "react";
import "./index.css";
function Home() {
  const [amount, setAmount] = useState("");
  const [chargeTitle, setCharges] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");
  const [Toremove,settoremove]=useState([])
  console.log("submittedData", submittedData);

  const submit = () => {
    if (!amount) return setError("Please write amount bigger than 0");
    if (!chargeTitle.length) return setError("please fill the charges input");

    let previousData = submittedData || [];
    let newData = previousData.concat([{ amount, chargeTitle ,id:new Date().getTime()}]);

    setSubmittedData(newData);

    setAmount("");
    setCharges("");
  };

  return (
    <div>
      {error && (
        <div className="flex jcc">
          <p className="w50 errorText p50">{error}</p>
        </div>
      )}

      <h1 className="color-w">Budget Calculator</h1>
      <div></div>
      { }
      <div className="white-box">
        <div className="theflexbox">
          <div className="flex space-around">
            <div>
              charge
              <br />{" "}
              <input
                placeholder="e.g. 100"
                className="inputui"
                value={chargeTitle}
                onChange={(e) => {
                  setCharges(e.target.value);
                }}
              />
            </div>
            <div>
              Amount
              <br />
              <input
                placeholder="e.g. 100"
                className="inputui"
                value={amount}
                onChange={(e) => {
                  setAmount(parseInt(e.target.value) || "");
                }}
              />
            </div>
          </div>
          <br />{" "}
          <button className="submit" onClick={submit}>
            SUBMIT
          </button>
        </div>
        <br />
        {submittedData ? (
          submittedData.map((d, i) => {
            console.log(d,'id')

            return (
              <div key={i} className="flex center jcc">
                <div className="flex w50 space-around p50 bb">
                  <span className="charge">{d.chargeTitle}</span>{" "}
                  <span className="rb wc amount">${d.amount}</span>{" "}
                  <span>
                    <button className="edit" onClick={()=>{ 
                      setAmount(d.amount)
                      setCharges(d.chargeTitle)
setSubmittedData(
submittedData.filter((data)=>{
  return data.id!==d.id



}))
                    }}>Edit</button>
                    <button className="delete" onClick={()=>{setSubmittedData(
submittedData.filter((data)=>{
  return data.id!==d.id



}))
         }}>Delete</button>
                  </span>
                </div>
              </div>
            );
       
        
          })
        ) : (
          <div></div>
        )}{" "}
        <br />
        <br />
        <br />
      </div>
      <h1 className="color-w">
        TotalSpending:<span className="bgcolor-r">$ 0 </span>
      </h1>
    </div>
  );
}
//setValue({v1:e.target.value})
//**<div className="flex center jcc"><div className="flex w50 space-around p50 bb"><span>sp0</span> <span className="rb wc">$09</span> <span>✏️🗑</span></div></div> */
// onChange={(e)=>{setValue({v1:e.value})}}
//e {amount: 44, chargeTitle: 'g'}amount: 44chargeTitle: "g"[[Prototype]]: Object i 3
export default Home;
