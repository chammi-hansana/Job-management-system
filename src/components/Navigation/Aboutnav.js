import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Aboutnav from "react-bootstrap/Aboutnav";


export default function NavigationBar() {
  return (
    <Aboutnav bg="light" expand="lg" className="subnavbar-fixed-top"  >
      <Container>
        <Aboutnav.Brand href="#About">Construction Services Management System</Aboutnav.Brand>
        <Aboutnav.Brand id="#About"style={{ color: "#0D638F",
                padding: "5px 200px 0px",
               margin: "5px 2px",
                width: "20px",
                fontSize:"30px"
               }}> About </Aboutnav.Brand>
        
        

        <Aboutnav.Toggle aria-controls="basic-subnavbar-nav" />
        <Aboutnav.Collapse id="basic-subnavbar-nav" style={{ padding: "5px 60px 10px 310px", }}>
          <Nav className="me-auto">
            <Nav.Link href="/Findjob">FindJob</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/login" style={{ color: "red" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Aboutnav.Collapse>
      </Container>
    </Aboutnav>
  );
}
