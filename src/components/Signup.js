import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Signup() {
  let navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Job seeker", value: "1" },
    { name: "Employer", value: "2" },
  ];

  const loginHandler = (e) => {
    navigate("/home");
    console.log("login");
  };
  return (
    <>
      <Form style={{ margin: "5% 40%", 
      fontfamily: 'Poppins',
      alignItems: "center",
       textAlign:"left" , 
     padding: "70px 25px 40px",
     margin: "90px 550px",
     width: "440px",
       backgroundColor: 'hsl(218deg 50% 91%)',
     borderRadius:"50px",
     boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',
      
      
          
      }}>
        <div style={{textAlign:"center"}}>
        <h1 className="mb-4">Signup</h1>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Enter your phone" />
          </div>
          <div className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </div>
          <div className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </div>
          <div className="mb-2">
            <Form.Label style={{ marginRight: "20px" ,}}>User type</Form.Label>
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
            <Form.Control type="pasword" placeholder="Password" />
          </div>

          Already registered <a href="/login" > Login </a>
          <Button  style={{width:"300px",height:"40px",textAlign:"center",padding:"5px 5px",margin:"50px 10px 0px 50px"}}
            className="mt-4"
            onClick={(e) => loginHandler(e)}
            variant="primary"
          >
            Signup
          </Button>{" "}
        </Form.Group>
      </Form>
    </>
  );
}
