import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClick2("Yavuz")}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>
      </p>
    </main>
  );
};
export default Content;
