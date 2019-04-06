import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
// import Search from "../src/components/Search/index.js";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import UserView from "./pages/UserView/userView"
import Features from "./components/Features";
import Body from "./pages/Body";
import NoMatch from "./pages/NoMatch/index";


class App extends Component {


  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
         
          <Features />

          
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/user/:userid" component={UserView} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
           <Footer />
        </div>
      </Router>
    );
  };
};


export default App;
