import React from "react";
import NavigationBar from "./Navigation/Navbar";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Card from "react-bootstrap/Card";

export default function Approval() {
  
    return (
        <div>

           <NavigationBar /> 

           <Card style={{ margin: "60px 14px 10px 120px",width: "70.8vh",
      height:'35.4vh',backgroundColor:'#C0DEFF'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>House builder</h2>
              
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "12px", marginTop: "-12px" }}>
              12/12/2022 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>2 days <br/>   Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
           
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.8 000 per day<br/> 0713452390</p>
          </Card.Text>
          </Card.Body>
      </Card>

      <Card style={{ margin: "60px 14px 10px 120px",width: "70.8vh",
      height:'35.4vh',backgroundColor:'#C0DEFF'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
             
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "12px", marginTop: "-12px" }}>
              12/12/2023 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>2 days <br/>   Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
           
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.8 000 per day<br/> 0713452390</p>
          </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ margin: "-570px 0px 10px 930px",width: "70.8vh",
      height:'35.4vh',backgroundColor:'#C0DEFF'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
             
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "12px", marginTop: "-12px" }}>
              12/12/2023 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>2 days <br/>   Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
           
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.8 000 per day<br/> 0713452390</p>
          </Card.Text>
          </Card.Body>
      </Card>
















           <MDBDropdown style={{ margin: "-250px 5px 20px 700px",}}>
  <MDBDropdownToggle  tag='a' className='btn btn-primary' style={{ height:'55px',width:'160px',fontSize:'25px' ,boxShadow:
                  "0 12px 10px 0 rgba(0,0,0,.24),0 17px 20px 0 rgba(0,0,0,.19)",}}>
   Approval
  </MDBDropdownToggle>
  <MDBDropdownMenu>
        
    <MDBDropdownItem link href="http://localhost:3000/pending">Pending</MDBDropdownItem>
    <MDBDropdownItem link href="http://localhost:3000/reject">Reject</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>

        
         
        </div>





    );    
}
    