import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("initial")
  const [num, setNum] = useState(1);
  useEffect(function(){
    console.log("Effect")
  },[message, num])

  return(
    <div>
      <h1>Effect</h1>
      {message}
      <button onClick = {() => {
        setMessage("Hi!")
      } } >Change</button>
      {num}
      <button onClick={() => {setNum(5)}}>num</button>

    </div>
  )
}
export default App;
