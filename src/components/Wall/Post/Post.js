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
      <Card
        style={{
          margin: "50px 34px 10px 80px",
          width: "82.8vh",
          height: "45.4vh",
          backgroundColor: "#FFDFAF",
        }}
      >
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>Electrician</h2>
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "12px", marginTop: "-12px" }}>
              12/12/2022 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>5 days <br/>   Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
           
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.10 000 per day<br/> 0113452390</p>
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

      <Card
        style={{
          margin: "-330px 34px 15px 780px",
          width: "82.8vh",
          height: "45.4vh",
          backgroundColor: "#FFDFAF",
        }}
      >
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h2>House builder</h2>
            
            </div>
            <p>Efito Solutions Pvt. Ltd.</p>
            <p style={{ fontSize: "11px", marginTop: "-12px" }}>
              12/12/2022 12:30PM{" "}
            </p>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>2 days <br/>   Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
           
            <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.8 000 per day<br/> 0713452390</p>
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
