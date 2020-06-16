import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <div className="Logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
