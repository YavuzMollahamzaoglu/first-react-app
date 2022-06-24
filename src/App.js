import Content from "./components/Content";
import React from "react";
import ClickEvent from "./components/ClickEvent";

function App() {
  /*const handleClick = (e) => {
    console.log("hello,ninjas", e);
  };
  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };
*/
  return (
    <ClickEvent />
    /*<div>
      <h2>Homepage</h2>
      <button onClick={handleClick()}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        Click me again
      </button>
    </div>*/
  );
}

export default App;
