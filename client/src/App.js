import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
import Features from "./components/Features";
import Search from "../src/components/Search/index.js";
import Body from "./components/Body";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
// import Wrapper from "./components/Wrapper";


class App extends Component {
//   state = {
//     tutors
//   };

//   removeTutor = id => {
//     const tutors = this.state.tutors.filter(tutor => tutor.id !== id);
//     this.setState({ tutors });
//   };

  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Search />
          <Features />

          {/* <Wrapper>

            {this.state.tutors.map(tutor => ( */}
          {/* //       removeTutor={this.removeTutor}

          //       image={tutor.image}
          //       name={tutor.name}
          //       subject={tutor.subject}

          //     />
          //   ))}
          // </Wrapper> */}
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};


export default App;
