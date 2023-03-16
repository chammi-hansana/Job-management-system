import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Post from "../Wall/Post/Post";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HireJobs() {
  let navigate = useNavigate();
  const location = useLocation();

  const applyHandler = () => {
    console.log("Inputpost");
    navigate("/Inputpost");
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
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          height: "45vh",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1A120B",
            opacity: "60%",
            height: "45vh",
            width: "100%",
          }}
        ></div>
      </div>

      {/* {location.pathname === "/HireJobs" && (
        <Button
          class="btn btn-success"
          type="button"
          style={{
            margin: "20px 24px 8px 1280px",
            height: "68px",
            fontFamily: "Arial Rounded MT Bold",
            width: "190px",
            fontSize: "29px",
            backgroundColor: "#ff6550",
            borderRadius: "30px",
            boxShadow:
              "0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",
          }}
          className="mt-2"
          onClick={(e) => applyHandler(e)}
        >
          Add Post
        </Button>
      )} */}

<div
            style={{
              display: "flex",
              margin: "40px 60px 0px 320px",
              fontFamily: "Segoe UI",
              fontSize: "18px",
              textAlign: "justify",
              width: "126.8vh",
              height:'30.4vh',
            }}
          >
            A Construction Services Management System website is a valuable
            resource for job seekers in the construction industry. This website
            provides a centralized platform for construction companies to manage
            their projects and workforce efficiently, and it can also help job
            seekers find relevant job opportunities.
            
            <br style={{
              marginTop: "25px"
            }}/>Job seekers can easily search for job opportunities on
            a Construction Services Management System website.
          </div>
          <hr className="mt-0 mb-4" style={{ margin: "-510px 90px 0px 90px", }}/>
          <div
          style={{
            margin: "20px 10px 10px 550px",
            fontFamily: "Comic Sans MS",
            fontSize: "65px",
          }}
        >
          Respond Posts

          </div>

          <Card style={{ margin: "30px 0px 10px 130px",width: "70.8vh",
      height:'33.9vh',backgroundColor:'#F9F9F9'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
             
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "11px", marginTop: "-10px" }}>
              12/12/2022 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          {location.pathname === "/HireJobs" && (
                 <Button variant="danger" size="mm" style={{ margin: "2px 5px 0px 340px"  }}>
                  Reject
                </Button>
              )} 

         {location.pathname === "/HireJobs" && (
                 <Button variant="primary" size="mm" style={{ margin: "-63px 5px 0px 30px"  }}>
                 Approval
                </Button>
              )} 
          </Card.Body>
      </Card>
     
      
    </div>
  );
}

//backgroundColor: '#ac2bac'
//<img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
