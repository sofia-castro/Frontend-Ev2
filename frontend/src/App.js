import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar/NavBar.js";
import Navbar2 from "./components/NavbarProducto/Navbar2.js";
import Body from "./components/Body/Body.js";
import IngresarProducto from "./components/IngresarProducto/IngresarProducto.js";

function App() {
  return (
    <Router>
      <div className="App">
          
        <Switch>
        <Route path="/" exact >
          <Navbar />
            <Body />
          </Route>
          <Route path="/ingresarProducto" >
          <Navbar2 />
            <IngresarProducto />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
