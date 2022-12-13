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
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "blog" }}>
              <h3>House builder</h3>
              {location.pathname === "/profile" && (
                <Button variant="danger" size="sm" style={{ margin: "3px 5px 0px 500px"  }}>
                  Not selected
                </Button>
              )}
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

          {location.pathname === "/home" && (
            <Button
              className="mt-4"
              onClick={(e) => applyHandler(e)}
              variant="primary"
            >
              Apply
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
