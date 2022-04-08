import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.ParentName} ${childName}`);
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Parent;
