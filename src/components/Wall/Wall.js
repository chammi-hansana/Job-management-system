import React, { useState, useEffect } from "react";
// import Post from "./Post/Post";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

export default function Wall() {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    var token = localStorage.getItem('token');
    var userData =  localStorage.getItem('userData');
    const dataObject = JSON.parse(userData);
    setToken(token);
    setUserData(dataObject);

    var URL = "http://localhost:8080/api/get-jobs"

    fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error(error));

  }, []);

  const applyHandler = (postId) => {
    // console.log("apply");
    // navigate("/apply");
    
    
      var URL = "http://localhost:8080/api/apply-job"
      var data = {
        user_id: userData._id,
        job_id: postId
      }
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log("data=======>",data)
          if (data.success) {
            Swal.fire({
              title: "New job req is created!",
              icon: "success",
              cancelButtonColor: "#C6DCE4",
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {

              } else if (result.isDenied) {
              }
            });
          } else {
            Swal.fire({
              title: "error!",
              text: data?.message,
              confirmButtonColor: "#C6DCE4",
              iconColor: "#F2D1D1",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          Swal.fire({
            title: "error!",
            text: error.message,
            confirmButtonColor: "#C6DCE4",
            iconColor: "#F2D1D1",
            icon: "error",
            confirmButtonText: "Ok",
          });
        })
      
  };
  console.log("data==>",data)
  return (
    <>
      <div
        style={{
          height: "88vh",
          width: "100%",
          background: "#EEEEEE",
          padding: "20px 15px",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://preview.colorlib.com/theme/olla/assets/img/hero/h1_hero1.jpg'",
            display: "flex",
            height: "87.9vh",
            width: "103vh",
            backgroundSize: "cover",
            //opacity:"0.8",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin: "-21px 2px 0px 796px",
            //position: "fixed",
          }}
        >
          <div
            style={{
              margin: "40px 10px 10px -650px",
              fontFamily: "Comic Sans MS",
              fontSize: "75px",
            }}
          >
            Recent Jobs
            <div
              style={{
                
                margin: "40px 80px 20px -100px",
                fontFamily: "Segoe UI",
                fontSize: "18px",
                textAlign: "justify",
                width: "100.8vh",
                height: '30.4vh',
              }}
            >
               A Construction Services Management System website is a valuable
              resource for job seekers in the construction industry. This website
              provides a centralized platform for construction companies to manage
              their projects and workforce efficiently, and it can also help job
              seekers find relevant job opportunities. 

              <br  /><p style={{
                marginTop: "35px"
              }}>Job seekers can easily search for job opportunities on
              a Construction Services Management System website.</p>
            </div>
          </div>

        </div>
        {/* <Post/> */}
      </div>
      <div>
        <div className="row" style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
          {data?.map((post, index) => (
            <div className="col-md-6" key={index}>
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
                      <h2>{post?.title}</h2>
                    </div>
                    <p>{post?.location}</p>
                    <p style={{ fontSize: "12px", marginTop: "-12px" }}>
                    {post?.date}{" "}
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>{moment(post?.created_date, "YYYYMMDD").fromNow()} <br />   {post?.desc}.</p>

                    <p style={{ fontSize: "15px", marginTop: "-8px" }}>Rs.{post?.salary} per day<br /> {post?.contact}</p>
                  </Card.Text>

                  {/* {location.pathname == "/FindJob" && ( */}
                    <Button
                      className="mt-2"
                      onClick={() => applyHandler(post?._id)}
                      variant="dark"
                    >
                      Apply
                    </Button>
                  {/* )} */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
