import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import { Link } from "react-router-dom";

function BaseNavbar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand to="/">TTGS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={ Link } to="/login">Login</Nav.Link>
      <Nav.Link as={ Link } to="/register">Register</Nav.Link>
      <Nav.Link as={ Link } to="/products">Products</Nav.Link>
      <Nav.Link as={ Link } to="/products/new">New Product</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Nav>
    <Nav.Link as={ Link } to="/cart"><CartButton /></Nav.Link>
  </Nav>
  </Container>
</Navbar>
  )
}

export default BaseNavbar