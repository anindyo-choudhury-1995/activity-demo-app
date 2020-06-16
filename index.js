import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
