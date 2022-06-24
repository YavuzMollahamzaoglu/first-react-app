
import React from "react";

function ClickEvent(){
    const data ="Yavuz Molla"
    function apple(){
        alert("Hello from apple")
    }
    return(
        <div>
            <h1>Hello World!</h1>
            <button onClick={apple}>Click me</button>
            <h1>{data}</h1>
            <button onClick={() =>alert("Hmm ok!")}>Click me</button>
        </div>
    )

}
export default ClickEvent;