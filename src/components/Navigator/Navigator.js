import React from "react";
// import { Container, Nav, Navbar } from "reactstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "components/Navigator/Navigator.scss";

import { Form } from "reactstrap";
import { FormControl, Button } from "react-bootstrap";
import OffCanvasCart from "components/OffCanvasCart/OffCanvasCart";

function Navigator() {
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <OffCanvasCart />
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Type here to search for features ..."
              className="mr-2"
              aria-label="Search"
            />
            <Button className="btn-search" variant="outline-success">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator;
