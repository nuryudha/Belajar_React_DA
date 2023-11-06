import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
function Navigator(props) {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href="https://www.google.com/" target="_blank">
            {!props.navbarValue ? "About" : props.navbarValue}
          </Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigator;
