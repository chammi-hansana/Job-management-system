import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-fixed-top"  >
      <Container>
        <Navbar.Brand href="#Findjob">Construction Services Management System</Navbar.Brand>
        <Navbar.Brand id="#Findjob"style={{ color: "#0D638F",
                padding: "5px 200px 0px",
               margin: "5px 2px",
                width: "20px",
                fontSize:"30px"
               }}> Job Seeker </Navbar.Brand>
        
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ padding: "5px 60px 10px 310px", }}>
          <Nav className="me-auto">
            <Nav.Link href="/Findjob">FindJob</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/login" style={{ color: "red" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
