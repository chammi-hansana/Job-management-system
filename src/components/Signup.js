import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Swal from "sweetalert2";

export default function Signup() {
  let navigate = useNavigate();
  const initialSate = {
    name: "",
    phone: "",
    age: "",
    address: "",
    email: "",
    password: ""
  }
  const [regData, setRegData] = useState(initialSate);
  const [errorMsg, setErrorMsg] = useState("");

  const [radioValue, setRadioValue] = useState("Seeker");

  const radios = [
    { name: "Job seeker", value: "Seeker" },
    { name: "Employer", value: "Employer" },
  ];

  const loginHandler = (e) => {
    if (regData.name) {
      if (regData.phone) {
        if (regData.age) {
          if (regData.address) {
            if (regData.email) {
              if (regData.password) {
                setErrorMsg("")
              } else {
                setErrorMsg("Please enter your password")
              }
            } else {
              setErrorMsg("Please enter your email")
            }
          } else {
            setErrorMsg("Please enter your address")
          }
        } else {
          setErrorMsg("Please enter your age")
        }
      } else {
        setErrorMsg("Please enter your phone")
      }
    } else {
      setErrorMsg("Please enter your name")
    }
    if (regData.address && regData.age && regData.email && regData.name && regData.password && regData.phone && radioValue) {
      var URL = "http://localhost:8080/api/register"
      var data = {
        name: regData.name,
        phone: regData.phone,
        age: regData.age,
        address: regData.address,
        email: regData.email,
        userType: radioValue,
        password: regData.password
      }
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          if (data.success) {
            Swal.fire({
              title: "Successfully Registered !",
              icon: "success",
              cancelButtonColor: "#C6DCE4",
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/Login");
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

  return (
    <>
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
          height: '100.5vh',
          width: '130.3vh',
          backgroundSize: 'cover',
          //opacity:"0.8",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          margin: "-1px 2px 0px 630px",
          position: "fixed",


        }}
      >
      </div>
      <Form style={{
        textAlign: "left",
        fontfamily: 'Poppins',
        fontSize: '20px',
        padding: "8px 50px  ",
        margin: "1px 15px 2px 1px",
        width: "90vh",
        height: '115.5vh',
        backgroundColor: 'white',
        boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',

      }}>



        <div style={{ textAlign: "center", fontSize: '60px' }}>
          <p className="mb-2">Signup</p>
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) =>
                  setRegData({ ...regData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter your phone"
                onChange={(e) =>
                  setRegData({ ...regData, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                onChange={(e) =>
                  setRegData({ ...regData, age: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                onChange={(e) =>
                  setRegData({ ...regData, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                onChange={(e) =>
                  setRegData({ ...regData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <Form.Label style={{ marginRight: "20px", }}>User type</Form.Label>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-success" : "outline-primary"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
            <div className="mb-2">
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setRegData({ ...regData, password: e.target.value })
                }
              />
            </div>

            <div style={{ textAlign: "left", fontSize: '20px' }}>
              Already registered <a href="/login" > Login </a></div>

            <Button style={{ width: "380px", height: "50px", fontSize: '19px', textAlign: "center", padding: "10px 55px", margin: "70px 30px 10px 50px" }}
              className="mt-5"
              onClick={(e) => loginHandler(e)}
              variant="primary"
            >
              Signup
            </Button>{" "}
          </Form.Group>
        </div>
      </Form>


    </>
  );
}
