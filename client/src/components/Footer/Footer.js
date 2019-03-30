import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <div>
        <Nav justified>
          <NavItem
            eventKey={1}>
            About Us
          </NavItem>

          <NavItem
            eventKey={2}>
            Contact Us
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © Clean Code Crew 2019
        </div>
      </div>
    </footer>
  );
}

export default Footer;