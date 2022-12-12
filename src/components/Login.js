import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

  const loginHandler = (e) => {
    navigate("/home");
    console.log("login");
  };
  return (
    <>
    
      <Form style={{ textAlign:"left" , 
      fontfamily: 'Poppins',
     padding: "70px 25px 40px",
     margin: "90px 550px",
     width: "420px",
       backgroundColor: 'hsl(218deg 50% 91%)',
     borderRadius:"50px",
     boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',
      
      }}>

        <div style={{textAlign:"center"}}>
        <h1 className="mb-4" >Login </h1>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
           <div className="mb-2">
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control type="pasword" placeholder="Password" />
          
          <div style={{textAlign:"right"}}>
          
            Forgot <a href="#">password?</a>
          
          </div>
          </div>
          <a href="/sign-up" > Signup</a>
          
          <Button  style={{width:"280px",height:"40px",textAlign:"center",padding:"5px 10px",margin:"40px 00px 0px 50px"}}
            className="mt-8"
            onClick={(e) => loginHandler(e)}
            variant="primary"
            
          >
            Login
          </Button>{" "}
          
        </Form.Group>
      </Form>
      
    </>
    
  );
}
