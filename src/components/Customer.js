import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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
            <About />
          </Route>
          <Route path="/airlines">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Dashboard />
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Customer;