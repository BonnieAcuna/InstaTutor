import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' InstaTutor'}
    </Navbar.Brand>
    </nav>
  );
}

export default Nav;
