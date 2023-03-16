import React from "react";
import { Button, Form } from "react-bootstrap";


export default function ApplicationForm() {
  const applyHandler = () => {
    console.log("apply");
  };
  return (
    <div>
      <Form style={{margin: ' 5% 10%'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Enter your phone" />
          </div>
         
          <div className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </div>

          <div className="mb-2">
            <Form.Label>Expected Salary</Form.Label>
            <Form.Control type="number" placeholder="Enter your expected salary" />
          </div>
          
          <Button
            className="mt-4"
            onClick={(e) => applyHandler(e)}
            variant="primary"
          >
            Apply
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
}
