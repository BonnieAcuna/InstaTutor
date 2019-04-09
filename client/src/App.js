import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import UserView from "./pages/UserView/userView";
import Features from "./components/Features";
import Body from "./pages/Body";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch/index";
import axios from "axios"


import API from './utils/API';

class App extends Component {
  state = {
    user: {},
    email: "",
    password: "",
    loggedIn: false
  }

  updateUser = () => {
    API.getCurrentUser()
      .then((res) => {
        console.log(res.data)
        this.setState({
          user: res.data.user,
          loggedIn: true
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  loginOnClick = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    axios.post("/auth/login", { email, password })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("jwtToken", res.data.token);
        if (res.data.success){
          this.updateUser();
        }
        // this.setState({
        //   success: res.data.success
        // });
      })
      .catch(err => console.log(err))
  }

  logOutOnClick = () => {
    axios.get("/auth/logout")
      .then( res =>{
        localStorage.removeItem("jwtToken");
        this.setState({
          user:{},
          loggedIn: false
        });
        window.location.reload();
      })
      .catch(err=>{
        console.log(err)
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            user={this.state.user}
            email={this.state.email}
            password={this.state.password}
            loggedIn={this.state.loggedIn}
            handleInputChange={this.handleInputChange}
            loginOnClick={this.loginOnClick}
            logOutOnClick={this.logOutOnClick}
          />
          {/* <Route path={new RegExp("^(?!.*(/register)).*$")} component={Features} /> */}
          <Features/>
          <Switch>
            <Route exact path="/" render={(props) => <Body updateUser={this.updateUser} {...props} />} />
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
