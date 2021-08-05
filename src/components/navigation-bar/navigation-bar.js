import React, { useState } from "react";
import Passengers from "../passengers/passengers";
import Airlines from "../airlines/airlines";
import Settings from "../settings/settings";
import PostAirlines from "../post-airlines/post-airlines";
import SearchAirlines from "../search-airlines/search-airlines";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ProtectedRoutes from "./protected-route";

const NavigationBar = (props) => {
  
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
                <NavLink href="/post_airlines/">Post Airlines</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search_airlines/">Search Airlines</NavLink>
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
          <Route path="/post_airlines">
            <PostAirlines />
          </Route>
          <Route path="/search_airlines">
            <SearchAirlines />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ProtectedRoutes />
    </div>
  );
}

export default NavigationBar;
