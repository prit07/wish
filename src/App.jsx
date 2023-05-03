import React from "react";

function App(){
    let curdate = new Date(                 );
    curdate = curdate.getHours();
    let greeting = "";
    const cssStyle ={};
    
    if(curdate >= 1 && curdate <12 ){
       greeting =" Good morning";
       cssStyle.color = "green";
    }
    else if (curdate >= 12 && curdate <19 ){
      greeting ="Good Afternoon"
      cssStyle.color  = "orange";
    }
    else {
      greeting=" Good night";
      cssStyle.color  = "black";
    }

    return (
        <>
        <div>
        <h1>Hello sir,<span style={ cssStyle}>{greeting} </span></h1>
        </div>
        </>
    );
}
export default App;