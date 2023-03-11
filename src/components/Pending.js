import React from "react";
import NavigationBar from "./Navigation/Navbar";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Card from "react-bootstrap/Card";
export default function Pending() {
  
    return (
        <div> <NavigationBar /> 

<Card style={{ margin: "60px 4px 10px 120px",width: "70.8vh",
      height:'30.4vh',backgroundColor:'#BEF0CB'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>House builder</h2>
              {/* {location.pathname === "/Findjob" && (
                // <Button variant="danger" size="sm" style={{ margin: "50px 5px 0px 50px"  }}>
                //   Not selected
                // </Button>
              )} */}
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
          </Card.Body>
      </Card>

      <Card style={{ margin: "60px 4px 10px 120px",width: "70.8vh",
      height:'30.4vh',backgroundColor:'#BEF0CB'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
              {/* {location.pathname === "/Findjob" && (
                // <Button variant="danger" size="sm" style={{ margin: "50px 5px 0px 50px"  }}>
                //   Not selected
                // </Button>
              )} */}
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
          </Card.Body>
      </Card>
      <Card style={{ margin: "-500px 0px 10px 930px",width: "70.8vh",
      height:'30.4vh',backgroundColor:'#BEF0CB'}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
              {/* {location.pathname === "/Findjob" && (
                // <Button variant="danger" size="sm" style={{ margin: "50px 5px 0px 50px"  }}>
                //   Not selected
                // </Button>
              )} */}
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
          </Card.Body>
      </Card>




         
           <MDBDropdown style={{ margin: "-250px 5px 20px 700px",}}>
  <MDBDropdownToggle  tag='a' className='btn btn-success' style={{ height:'55px',width:'160px',fontSize:'25px' ,boxShadow:
                  "0 12px 10px 0 rgba(0,0,0,.24),0 17px 20px 0 rgba(0,0,0,.19)",}}>
  Pending
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem link href="http://localhost:3000/approval">Approval </MDBDropdownItem>
    <MDBDropdownItem link href="http://localhost:3000/reject">Reject</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>

        
         
        </div>





    );    
}