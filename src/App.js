import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />

        {/* <Counter />
       <ListRendering />
       <ConditionalRendering />
       <Parent/>
       <EventBinding />
       <input type="text" placeholder="Enter text" />
       <button>Add Todo</button>
       <button>Clear Todo</button>
       <Greet name = "Bekele" heroName ="Batman">
       <p>This is the children</p>
       <button className=''>Submit</button>
       </Greet>
       <Welcome name = "Bekele" heroName ="Batman"/>
       <Message/>*/}
      </div>
    );
  }
}

export default App;
