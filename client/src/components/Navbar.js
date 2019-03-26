import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={ require('../logo.png')} width="30" height="30" className="d-inline-block align-top" alt=""></img>
      </a>
    </nav>
  );
}

export default Nav;
