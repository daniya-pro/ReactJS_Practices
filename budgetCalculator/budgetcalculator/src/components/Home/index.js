import React, { useState } from "react";
import "./index.css";
function Home() {
  const [amount, setAmount] = useState('');
  const [chargeTitle, setCharges] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");
  console.log("submittedData", submittedData);

  const submit = () => {
    if (!amount)
      return setError("Please write amount bigger than 0");
 if(!chargeTitle.length)
 return setError("please fill the charges input")

    let previousData = submittedData || [];
    let newData = previousData.concat([{ amount, chargeTitle }]);

    setSubmittedData(newData);
  };

  return (
    <div>
                  {error && <p className="errorText">{error}</p>}

      <h1 className="color-w">Budget Calculator</h1>
      <div></div>
      {}
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
                  setAmount(parseInt(e.target.value)||'');
                }}
              />
            </div>
          </div>
       
          <br />{" "}
          <button className="submit" onClick={submit}>
            SUBMIT
          </button>
        </div>{" "}
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
// onChange={(e)=>{setValue({v1:e.value})}}
export default Home;
