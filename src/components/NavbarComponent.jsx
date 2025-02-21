import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { FaSearch, FaYoutube } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FaYoutube color="red" size={30} /> YouTube 
        </Navbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl type="search" placeholder="Search" className="me-2" />
          <FaSearch color="white" size={20} />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
