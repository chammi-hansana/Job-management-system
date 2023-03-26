import React, { useState , useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Post from "../Wall/Post/Post";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from "sweetalert2";

export default function Inputpost() {
  let navigate = useNavigate();
  const location = useLocation();
  const initialSate = {
    user_id: "",
    title: "",
    desc: "",
    date: "",
    location: "",
    check: "",
    salary: "",
    details: "",
    duration: "",
    contact: ""
  }
  const [postdata, setPostData] = useState(initialSate);
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    var token = localStorage.getItem('token');
    var userData =  localStorage.getItem('userData');
    const dataObject = JSON.parse(userData);
    setToken(token);
    setUserData(dataObject);
  }, []);

  const applyHandler = () => {
    if (userData._id) {
      if (postdata.title) {
        if (postdata.desc) {
          if (postdata.date){
            if (postdata.duration) {
              if (postdata.details) {
                if (postdata.salary) {
                  if (postdata.contact) {
                    if (postdata.location) {
                      if (postdata.check == "on") {
                        setErrorMsg("")
                      } else {
                        setErrorMsg("Please tick privacy policy")
                      }
                    } else {
                      setErrorMsg("Please enter location")
                    }
                  } else {
                    setErrorMsg("Please enter contact")
                  }
                } else {
                  setErrorMsg("Please enter salary")
                }
              } else {
                setErrorMsg("Please enter details")
              }
            } else {
              setErrorMsg("Please enter duration")
            }
          }else {
            setErrorMsg("Please enter date")
          }
        } else {
          setErrorMsg("Please enter address")
        }
      } else {
        setErrorMsg("Please enter title")
      }
    } else {
      setErrorMsg("Invalid User id")
    }
    if (userData._id && postdata.title && postdata.desc && postdata.date && postdata.duration && postdata.details && postdata.salary && postdata.contact && postdata.location) {
      var URL = "http://localhost:8080/api/add-job"
      var data = {
        user_id: userData._id,
        title: postdata.title,
        desc: postdata.desc,
        date: postdata.date,
        location: postdata.location,
        details: postdata.details,
        salary: postdata.salary,
        duration: postdata.duration,
        contact: postdata.contact
      }
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            Swal.fire({
              title: "Successfully Created !",
              icon: "success",
              cancelButtonColor: "#C6DCE4",
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/HireJobs");
              } else if (result.isDenied) {
              }
            });
          } else {
            Swal.fire({
              title: "error!",
              text: data?.message,
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Swal.fire({
            title: "error!",
            text: error.message,
            confirmButtonColor: "#C6DCE4",
            iconColor: "#F2D1D1",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }

  };
  const logoutFunc = () => {
    localStorage.clear();
  }
  return (

    <div>
      <Navbar bg="light" expand="lg" className="navbar-fixed-top">
        <Container>
          <Navbar.Brand href="#Hirejobs">
            Construction Services Management System
          </Navbar.Brand>
          <Navbar.Brand
            id="#Hirejobs"
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
              <Nav.Link href="/EmpAbout">About</Nav.Link>
              <Nav.Link href="/login" style={{ color: "red" }} onClick={() => logoutFunc()}>
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


      <Form style={{
        textAlign: "left",
        fontfamily: 'Poppins',
        fontSize: '20px',
        padding: "18px 50px  ",
        margin: "-11px 15px 25px 450px",
        width: "90vh",
        height: '120.5vh',
        backgroundColor: '#D3CEDF',
        boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',


      }}>



        <div style={{ textAlign: "center", fontSize: '40px', fontFamily: 'Segoe Print', }}>
          <p className="mb-4">Create New Post</p>
        </div>
        <div style={{ fontSize: '15px' }}>
          <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            {
              errorMsg?.length > 1 ?
                <div className="mb-2 border border-danger " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Form.Label className="text-danger text-center">{errorMsg}</Form.Label>
                </div>
                : null
            }
            <div className="mb-2">
              <Form.Label>Job Role</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your Job Role" 
                onChange={(e) =>
                  setPostData({ ...postdata, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your Address" 
                onChange={(e) =>
                  setPostData({ ...postdata, desc: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Enter your Date" 
                onChange={(e) =>
                  setPostData({ ...postdata, date: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label>Duration</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter your Duration" 
                onChange={(e) =>
                  setPostData({ ...postdata, duration: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your Details" 
                onChange={(e) =>
                  setPostData({ ...postdata, details: e.target.value })
                }
              />
            </div>
            <Form.Label>Salary</Form.Label>
            <InputGroup className="mb-3">

              <InputGroup.Text>Rs</InputGroup.Text>
              <Form.Control 
                type="currency" 
                placeholder="Enter your Salary" 
                onChange={(e) =>
                  setPostData({ ...postdata, salary: e.target.value })
                }
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <div className="mb-2">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control 
                type="phone" 
                placeholder="Enter your Contact Number" 
                onChange={(e) =>
                  setPostData({ ...postdata, contact: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="phone" 
                placeholder="Enter your Location" 
                onChange={(e) =>
                  setPostData({ ...postdata, location: e.target.value })
                }
              />
            </div>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Check me out" 
                onChange={(e) =>
                  setPostData({ ...postdata, check: e.target.value })
                }
              />
            </Form.Group>


            <Button style={{
              width: "380px", height: "50px", fontSize: '22px', textAlign: "center", padding: "10px 55px", margin: "10px 50px -30px 70px", backgroundColor: "#804674",
              borderRadius: "30px", fontFamily: "Segoe Print",
            }}
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
