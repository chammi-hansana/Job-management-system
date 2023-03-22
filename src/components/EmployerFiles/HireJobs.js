import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Post from "../Wall/Post/Post";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import moment from "moment";

export default function HireJobs() {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    var token = localStorage.getItem('token');
    var userData = localStorage.getItem('userData');
    const dataObject = JSON.parse(userData);
    setToken(token);
    setUserData(dataObject);

    var URL = "http://localhost:8080/api/get-filtered-job-req"

    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    })
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error(error));

  }, []);

  const approveFunc = (reqId, jobId ) => {

    var URL = `http://localhost:8080/api/update-job-req/${reqId}`
    var data = {
      user_id: userData._id,
      job_id: jobId,
      status: "Approve"
    }
    fetch(URL, {
      method: 'PUT',
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
            title: "approved !",
            icon: "success",
            cancelButtonColor: "#C6DCE4",
            confirmButtonColor: "#C6DCE4",
            iconColor: "#F2D1D1",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              // navigate("/HireJobs");
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

  };

  const rejectFunc = (reqId, jobId ) => {
    var URL = `http://localhost:8080/api/update-job-req/${reqId}`
    var data = {
      user_id: userData._id,
      job_id: jobId,
      status: "Reject"
    }
    fetch(URL, {
      method: 'PUT',
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
            title: "Rejected !",
            icon: "success",
            cancelButtonColor: "#C6DCE4",
            confirmButtonColor: "#C6DCE4",
            iconColor: "#F2D1D1",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              // navigate("/HireJobs");
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
  };

  console.log("data", data)
  console.log("userData._id", userData?._id)
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="navbar-fixed-top">
          <Container>
            <Navbar.Brand href="#HireJobs">
              Construction Services Management System
            </Navbar.Brand>
            <Navbar.Brand
              id="#HireJobs"
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



        <div
          style={{
            display: "flex",
            margin: "40px 60px 0px 320px",
            fontFamily: "Segoe UI",
            fontSize: "18px",
            textAlign: "justify",
            width: "126.8vh",
            height: '30.4vh',
          }}
        >
          A Construction Services Management System website is a valuable resource for employers in the construction industry. This website provides a centralized platform for construction companies to manage their projects and workforce efficiently, and it can also help employers find and attract relevant job seekers.

          <br style={{
            marginTop: "25px"
          }} />The website is a valuable tool for employers in the construction industry, as it provides access to a wide range of job seekers and helps to streamline the hiring process.
        </div>
        <hr className="mt-0 mb-4" style={{ margin: "-510px 90px 0px 90px", }} />
        <div
          style={{
            margin: "20px 10px 10px 550px",
            fontFamily: "Comic Sans MS",
            fontSize: "65px",
          }}
        >
          Respond Posts

        </div>
      </div>
      <div>
        <div className="row">
        {data?.map((post, index) => (
            <div className="col-md-6" key={index}>
              <Card style={{
                margin: "30px 0px 10px 130px", width: "70.8vh",
                height: '35.9vh', backgroundColor: '#F9F9F9'
              }}>
                <Card.Body>
                  <Card.Title>
                    <div style={{ display: "blog" }}>
                      <h2>{post?.title}</h2>

                    </div>
                    <p>{post?.job_id?.title}</p>
                    <p style={{ fontSize: "12px", marginTop: "-12px" }}>
                    {moment(post?.created_date, "YYYYMMDD").fromNow()}{" "}
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>{post?.job_id?.desc}</p>
                  </Card.Text>
                  <Card.Title>
                    <div style={{ display: "blog" }}>
                      <h5>Seeker :{post?.user_id?.name}</h5>

                    </div>
                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>{post?.user_id?.email}<br /> {post?.user_id?.phone}
                    </p>
                  </Card.Title>

                  {location.pathname === "/HireJobs" && (
                    <Button variant="danger" size="mm" style={{ margin: "2px 5px 0px 340px" }} onClick={() => rejectFunc(post?._id, post?.job_id?._id)}>
                      Reject
                    </Button>
                  )}

                  {location.pathname === "/HireJobs" && (
                    <Button variant="primary" size="mm" style={{ margin: "-63px 5px 0px 30px" }} onClick={() => approveFunc(post?._id, post?.job_id?._id)}>
                      Approval
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//backgroundColor: '#ac2bac'
//<img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
