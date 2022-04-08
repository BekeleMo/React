import React from "react";

function Child(props) {
  return (
    <div>
     {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler('this is from child')}>Alert</button>
    </div>
  );
}

export default Child;
