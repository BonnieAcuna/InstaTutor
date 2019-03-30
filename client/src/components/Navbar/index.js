import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={ require('../../logoNoTitle.png')} width="50" height="50" className="d-inline-block align-top" alt=""></img>
      </a>
      InstaTutor
    </nav>
  );
}

export default Nav;