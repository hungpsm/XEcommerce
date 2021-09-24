import React from "react";
// import { Container, Nav, Navbar } from "reactstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "components/Navigator/Navigator.scss";

import { Form } from "reactstrap";
import { FormControl, Button } from "react-bootstrap";
import OffCanvasCart from "components/OffCanvasCart/OffCanvasCart";
import { useSelector } from "react-redux";

function Navigator() {
  const count = useSelector((state) => state.qtyCard.value);
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Type here to search for features ..."
              className="mr-2"
              aria-label="Search"
            />
            <div className="cart-qtycart">
              <Button className="btn-search" variant="outline-success">
                Search
              </Button>
              <span className="item-qtycart"> {count} </span>
            </div>
            <OffCanvasCart></OffCanvasCart>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator;
