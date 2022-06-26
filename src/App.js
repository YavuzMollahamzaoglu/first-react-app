import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [button, setButton] = useState("User");

  useEffect(() => {
    console.log(`Basılan button ${button}`);
  },[button]);

  useEffect(() =>{
    console.log(count)
  },[count])
  return (
    <div>
      <div>
        <button onClick={() => setButton("User")}>User</button>
        <button onClick={() => setButton("Comments")}>Comments</button>
        <button onClick={() => setButton("Posts")}>Posts</button>
        <h1>{button}</h1>
      </div>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <h1></h1>
    </div>
  );
}
export default App;
