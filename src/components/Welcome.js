import React, { Component } from "react";

// This is the statefull class component
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.name} your hero name is {this.props.heroName}
      </h1>
      </div>
    );
  }
}
export default Welcome;