import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decerement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is: {count}</p>
      <button onClick={decerement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
