import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Test from "./components/Test";
import Welcome from "./components/Welcome";

function App() {
  const [name,setName] = useState('Gül')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('Betül')
    setAge(27)
  }

  return (
    <div>
    <p>{name} is {age} years old</p>

    <button onClick={handleClick}>Click on me</button>
    </div>

  
  )
}

export default App;
