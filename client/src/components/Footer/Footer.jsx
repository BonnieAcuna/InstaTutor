import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <Grid>
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
      </Grid>
    </footer>
  );
}

export default Footer;