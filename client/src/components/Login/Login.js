import React from "react";
//import { Input } from "../Form/index";
//import { Container, Row } from "../../components/Grid/index";
import "./style.scss";

export default function Login(props) {
  return (
    <div className="text-center login">
    <h2>Log In</h2>
      <input className="col-md-10"
        value={props.email}
        onChange={props.handleInputChange}
        name="email"
        placeholder="Email"
      />
      <input className="col-md-10"
        type="password"
        value={props.password}
        onChange={props.handleInputChange}
        name="password"
        placeholder="Password"
      />
      <button
        //style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
        onClick={() => props.loginOnClick(props.email, props.password)}
      >
        Log In
      </button>
    </div>
  );
}