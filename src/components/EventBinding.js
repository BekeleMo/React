import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }

  clickEvent = () => {
    this.setState({
      message: "Welcome",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* binding in the render methode */}
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/* Event binding using arrow function in the render methode 'best option when we use parameter' */}
        <button onClick={() => this.clickHandler()}>Click</button>
        {/* binding in the constructor 'best option'*/}
        <button onClick={this.clickHandler}>Click</button>
        {/* Class property as arrow functions*/}
        <button onClick={this.clickEvent}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
