import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";


export default function Post() {
  let navigate = useNavigate();
  const location = useLocation();

  const applyHandler = () => {
    console.log("apply");
    navigate("/apply");
  };
  return (
    <>


      <Card style={{ margin: "50px 34px 10px 80px",width: "82.8vh",
      height:'35.4vh',backgroundColor:'#FFDFAF'}}>
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

          {location.pathname === "/Findjob" && (
            <Button
              className="mt-2"
              onClick={(e) => applyHandler(e)}
              variant="dark"
            >
              Apply
            </Button>
          )}

         
        </Card.Body>
      </Card>


      <Card style={{ margin: "-260px 34px 15px 780px",width: "82.8vh",
      height:'35.4vh',backgroundColor:'#FFDFAF'}}>
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

          {location.pathname === "/Findjob" && (
            <Button
              className="mt-2"
              onClick={(e) => applyHandler(e)}
              variant="dark"
            >
              Apply
            </Button>
          )}

         
        </Card.Body>
      </Card>
      
    </>
  );
}
