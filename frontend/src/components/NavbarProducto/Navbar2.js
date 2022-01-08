import React, { Component } from "react";
import { MenuItems2 } from "./MenuItems2";
import './Navbar2.css';

class NavBar2 extends Component {
  state = {clicked: false}

  render() {
    return (
      <nav className="NavbarItems">
        <a href = "/"> <h1 className="navbar-logo nav-links"> Store-T </h1> </a>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems2.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href= {item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar2;
