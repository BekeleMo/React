import React from "react";

// This is the stateless function component
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} your hero name is {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
