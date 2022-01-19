import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class NavBar extends Component {
  state = {clicked: false}

  render() {
    return (
      <nav className="NavbarItems">
        <a href = "/"> <h1 className="navbar-logo nav-links"> Store-T(2022) </h1> </a>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems.map((item, index) => {
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

export default NavBar;
