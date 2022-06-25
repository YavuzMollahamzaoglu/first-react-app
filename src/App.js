
import React,{useState,useEffect} from "react";

function App(){
  const [count, setCount] = useState(0);

  useEffect(() =>{
    document.title = `Button ${count} times clicked`;
  }
  )
  return(
    <div>
      <p>Button {count} times clicked</p>
      <button onClick ={() =>setCount(count+1)}>Click</button>
      
    </div>
  )
}
export default App;
