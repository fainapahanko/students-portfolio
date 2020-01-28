import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class NavMenu extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Nav className="pl-4">
          <NavItem>
            <NavLink href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "20px" }} active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/add$student"
              style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "20px"}}
              active
            >
              Add Student
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              href="/add$project"
              style={{ textDecoration: "none" }}
              active
            >
              Add Project
            </NavLink>
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}

export default NavMenu;
