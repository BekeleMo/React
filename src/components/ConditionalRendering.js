import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  // Conditional rendering in react
  //    1. If/else
  //    2. Element variable
  //    3. Ternary conditional oprator
  //    4. Short circuit oprator

  render() {
// This is If/esle rendering
    //if (this.state.isLoggedIn) {
    //   return <div>Welcome Bek</div>;
    // } else {
    //  return <div>Welcome Guest</div>;
    // }

// This is Element variable methode
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Bekele</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

 // This is Ternary conditional oprator methode
    return this.state.isLoggedIn ? (
      <div>Welcome Bekele</div>
    ) : (
      <div>Welcome Guest</div>
    );

 // This is Short circuit oprator methode
    // return this.state.isLoggedIn && <div>Welcome Bekele</div>;
  }
}

export default ConditionalRendering;
