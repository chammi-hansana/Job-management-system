import React, { useState, useEffect } from "react";
import NavigationBar from "./Navigation/Navbar";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Card from "react-bootstrap/Card";
import moment from "moment";

export default function Reject() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    var token = localStorage.getItem('token');
    setToken(token);

    var URL = "http://localhost:8080/api/get-job-req"

    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    })
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error(error));

  }, []);

  return (
    <>
      <div>
      <NavigationBar />

        <MDBDropdown style={{ margin: "0px 5px 20px 700px", }}>
          <MDBDropdownToggle tag='a' className='btn btn-danger' style={{
            height: '55px', width: '160px', fontSize: '25px', boxShadow:
              "0 12px 10px 0 rgba(0,0,0,.24),0 17px 20px 0 rgba(0,0,0,.19)",
          }}>
            Reject
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link href="http://localhost:3000/approval">Approval </MDBDropdownItem>
            <MDBDropdownItem link href="http://localhost:3000/pending">Pending</MDBDropdownItem>

          </MDBDropdownMenu>
        </MDBDropdown>



      </div>
      <div className="row">
        {data?.map((post, index) => {
          if (post?.status === "Reject") {
            return <div className="col-md-6" key={index}>
              <Card style={{
                margin: "60px 14px 10px 120px", width: "70.8vh",
                height: '35.4vh', backgroundColor: '#F7A4A4'
              }}>
                <Card.Body>
                  <Card.Title>
                    <div style={{ display: "blog" }}>
                      <h2>{post?.job_id?.title}</h2>

                    </div>
                    <p>{post?.job_id?.desc}</p>
                    <p style={{ fontSize: "12px", marginTop: "-12px" }}>
                      {post?.job_id?.date}{" "}
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>{moment(post?.created_date, "YYYYMMDD").fromNow()} <br />   {post?.job_id?.details}</p>

                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.{post?.job_id?.salary} per day<br /> {post?.job_id?.location}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>;
          }
          return null;
        })}
      </div>
    </>
  );
}

