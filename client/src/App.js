import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "../src/components/Search/index.js";

class App extends Component {
render() {
    return (
      <div>
        <Navbar />
        <Search />
        {/* <Footer /> */}
      </div>
    );
  };
}

export default App;
