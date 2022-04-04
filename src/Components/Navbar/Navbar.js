import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Navbars = () => {
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" >
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">L A P T O P</Navbar.Brand>
          <Nav className=" ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
       
  
       
      </>
    );
};

export default Navbars;