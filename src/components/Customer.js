import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Passengers from './passengers';
import Airlines from './airlines';
import Settings from './settings';

const Customer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Welcome..!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/passengers/">Passengers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/airlines/">Airlines</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/settings/">Settings</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/passengers">
          <Passengers />
          </Route>
          <Route path="/airlines">
            <Airlines />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



export default Customer;