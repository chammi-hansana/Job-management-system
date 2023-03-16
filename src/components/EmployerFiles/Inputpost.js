import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Post from "../Wall/Post/Post";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';


export default function Inputpost() {
  let navigate = useNavigate();
  const location = useLocation();
  const applyHandler = () => {
    navigate("/Inputpost");
    console.log("Inputpost");
  };

    return (
       
    <div>
      <Navbar bg="light" expand="lg" className="navbar-fixed-top">
        <Container>
          <Navbar.Brand href="#Findjob">
            Construction Services Management System
          </Navbar.Brand>
          <Navbar.Brand
            id="#Findjob"
            style={{
              color: "#0D638F",
              padding: "5px 200px 0px ",
              margin: "5px 2px",
              width: "20px",
              fontSize: "30px",
              fontFamily: "MV Boli",
            }}
          >
            {" "}
            Employer{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ padding: "5px 29px 10px 300px" }}
          >
            <Nav className="me-auto">
              <Nav.Link href="/HireJobs">HireJobs</Nav.Link>

              <Nav.Link href="/Inputpost">AddPost</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/login" style={{ color: "red" }}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          marginTop: "-2px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          position: "relative",
          backgroundPosition: "90%",
          //overflow:'hidden',
          //backgroundColor: '#D3E7EE',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbG9yJTIwZ3JhZGllbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
          height: "35vh",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1A120B",
            opacity: "40%",
            height: "35vh",
            width: "100%",
          }}
        ></div>
      </div>


      <Form style={{   textAlign:"left" , 
      fontfamily: 'Poppins',
      fontSize:'20px',
      padding: "18px 50px  ",
      margin: "-11px 15px 25px 450px",
      width: "90vh",
      height:'110.5vh',
      backgroundColor: '#D3CEDF',
      boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',
      
      
      }}>
      
      
          
        <div style={{textAlign:"center",fontSize:'40px',fontFamily: 'Segoe Print',}}>
        <p className="mb-4">Create New Post</p>
        </div>
        <div style={{fontSize:'15px'}}>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <div className="mb-2">
            <Form.Label>Job Role</Form.Label>
            <Form.Control type="text" placeholder="Enter your Job Role" />
          </div>
          <div className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your Address" />
          </div>
          <div className="mb-2">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter your Date" />
          </div>
          <div className="mb-2">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" placeholder="Enter your Duration" />
          </div>
          <div className="mb-3">
            <Form.Label>Details</Form.Label>
            <Form.Control type="text" placeholder="Enter your Details" />
          </div>
          <Form.Label>Salary</Form.Label>
          <InputGroup className="mb-3">
          
          <InputGroup.Text>Rs</InputGroup.Text>
            <Form.Control type="currency" placeholder="Enter your Salary" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <div className="mb-2">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter your Contact Number" />
          </div>
          <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
          
          
            <Button  style={{width:"380px",height:"50px",fontSize:'22px',textAlign:"center",padding:"10px 55px",margin:"10px 50px -30px 70px",backgroundColor: "#804674",
            borderRadius: "30px",fontFamily: "Segoe Print",}}
            className="mt-1"
            onClick={(e) => applyHandler(e)}
            variant="secondary"
          >
            Post
          </Button>{" "}
        </Form.Group>
        </div>
      </Form>
      </div>
  );
}
