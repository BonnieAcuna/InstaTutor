import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Search from "../src/components/Search/index.js";
import Signup from "./pages/Signup/Signup"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Search />
          <Switch>
            <Route exact path = "/signup" component={Signup} />
          </Switch>
           {/* <Footer /> */}
        </div>
      </Router>
    );
  };
}

export default App;
