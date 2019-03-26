import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
// import Features from "./pages/Features";
// import Body from "./pages/Body";

class App extends Component {
render() {
    return (
      <div>
        <Navbar />
        
        {/* <Features /> */}
        {/* <Body>
          
        </Body>
         */}
      </div>
    );
  };
}

export default App;
