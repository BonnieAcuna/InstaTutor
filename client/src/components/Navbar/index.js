import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";
import Navlogin from "../Navlogin/Navlogin";


function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <img src={require('../../logoNoTitle.png')} width="70" height="60" className="d-inline-block align-top" alt=""></img>
      </Link>
      <Link className="navbar-brand titleName" to="/">InstaTutor</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
          {!props.loggedIn ?
          <Link className="nav-item nav-link active" to="/signup">Sign up <span className="sr-only">(current)</span></Link> :
          <Link className="nav-item nav-link active" to={`/dashboard/${props.user._id}`}>Dashboard</Link>
          }
        </div>
      </div>
      <div className="d-flex flex-row-reverse bd-highlight">
        {(props.user.firstName) ? props.user.firstName :
          <Navlogin
            email={props.email}
            password={props.password}
            handleInputChange={props.handleInputChange}
            loginOnClick={props.loginOnClick}
          />
        }
      </div>
      <div className="d-flex flex-row-reverse bd-highlight">
        {(props.loggedIn) ? <div><button className="btn btn-danger"  style={{ float: "right", marginBottom: "40px", marginLeft: "30px" }} onClick={props.logOutOnClick}>Log Out</button></div>:
          <div></div>}
      </div>
    </nav>
  );
}

export default Nav;