import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Signup() {
  let navigate = useNavigate();

  
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Job seeker", value: "1" },
    { name: "Employer", value: "2" },
  ];

  const loginHandler = (e) => {
    navigate("/Findjob");
    console.log("login");
  };
  return (
    <>
 <div 
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
          height:'100.5vh',
          width:'130.3vh',
          backgroundSize:'cover',
          //opacity:"0.8",
          backgroundRepeat: 'no-repeat',
          backgroundPosition:"center",
          margin: "-1px 2px 0px 630px",
          position:"fixed",
         
                 
        }}
      >
      </div>
      <Form style={{   textAlign:"left" , 
      fontfamily: 'Poppins',
      fontSize:'20px',
      padding: "8px 50px  ",
      margin: "1px 15px 2px 1px",
      width: "90vh",
      height:'99.5vh',
      backgroundColor: 'white',
      boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',
      
      }}>
      
      
          
        <div style={{textAlign:"center",fontSize:'60px'}}>
        <p className="mb-2">Signup</p>
        </div>
        <div style={{fontSize:'15px'}}>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
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
            <Form.Label style={{ marginRight: "20px",}}>User type</Form.Label>
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
          
          <div style={{textAlign:"left",fontSize:'20px'}}>
          Already registered <a href="/login" > Login </a></div>

          <Button  style={{width:"380px",height:"50px",fontSize:'19px',textAlign:"center",padding:"10px 55px",margin:"70px 30px 10px 50px"}}
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
