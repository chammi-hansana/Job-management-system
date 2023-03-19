import React, { useState , useEffect} from "react";
import NavigationBar from "../Navigation/Navbar";

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Profile() {

  const [userData, setUserData] = useState();

  useEffect(() => {
    var userData =  localStorage.getItem('userData');
    const dataObject = JSON.parse(userData);
    setUserData(dataObject);
  }, []);

  console.log("userData",userData)
  return (
    <div>
      <NavigationBar />

     

      <section
        className="vh-10"
        style={{
          backgroundColor: "#f4f5f7",
          margin: "auto",
          backgroundSize: "cover",
          height: "89vh",
        }}
      >
        <MDBContainer className="py-5 h-100 ">
          <MDBRow className="justify-content-left align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard
                className="mb-3"
                style={{
                  borderRadius: ".5rem",
                  background:
                    "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
                  width: "50vh",
                  height: "60vh",
                  margin: "-30px 62px 0px -30px",
                }}
              >
                <MDBRow className="g-0">
                  <MDBCol
                    md="10"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "90px", margin: "10px 20px 0px 70px" }}
                      fluid
                    />
                    <MDBTypography
                      tag="h2"
                      style={{
                        margin: "-15px 25px 20px 80px",
                        fontSize: "35px",
                      }}
                    >
                      Hi, {userData?.name}!
                    </MDBTypography>
                    <MDBCardText
                      style={{ margin: "-5px 5px 20px 60px", fontSize: "25px" }}
                    >
                      {userData?.userType}
                    </MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>{" "}
                </MDBRow>
              </MDBCard>{" "}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBCol md="8">
          <MDBCardBody
            className="p-6"
            style={{
              width: "580px",
              margin: "-500px 62px 10px 700px",
              fontSize: "20px",
            }}
          >
            <MDBTypography
              tag="h6"
              style={{ fontSize: "60px", fontFamily: "Comic Sans MS" }}
            >
              Who am I ?
            </MDBTypography>
            <hr className="mt-0 mb-4" />
            <MDBRow className="pt-1">
              <MDBCol size="6" className="mb-3">
                <MDBTypography tag="h9">Name - {userData?.name}</MDBTypography>
              </MDBCol>
            </MDBRow>

            <MDBCol size="6" className="mb-4">
              <MDBTypography tag="h9">Address : {userData?.address}</MDBTypography>
            </MDBCol>
            <MDBCol size="6" className="mb-3">
              <MDBTypography tag="h9">Contact No : {userData?.phone}</MDBTypography>
            </MDBCol>

            <MDBCol size="6" className="mb-3">
              <MDBTypography tag="h9">Age : {userData?.age}</MDBTypography>
            </MDBCol>

            <MDBCol size="6" className="mb-3">
              <MDBTypography tag="h9">User Type : {userData?.userType}</MDBTypography>
            </MDBCol>

            <div className="d-flex justify-content-start">
              <a href="#!">
                <MDBIcon fab icon="facebook me-3" size="lg" />
              </a>
              <a href="#!">
                <MDBIcon fab icon="twitter me-3" size="lg" />
              </a>
              <a href="#!">
                <MDBIcon fab icon="instagram me-3" size="lg" />
              </a>
            </div>
          </MDBCardBody>
        </MDBCol>
      </section>

      <MDBDropdown style={{ margin: "-580px 5px 20px 1260px" }}>
        <MDBDropdownToggle
          tag="a"
          className="btn btn-warning"
          style={{
            height: "52px",
            width: "160px",
            fontSize: "25px",
            boxShadow:
              "0 12px 10px 0 rgba(0,0,0,.24),0 17px 20px 0 rgba(0,0,0,.19)",
          }}
        >
          Profile
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link href="http://localhost:3000/approval">
            Approval{" "}
          </MDBDropdownItem>

          <MDBDropdownItem link href="http://localhost:3000/pending">
            Pending
          </MDBDropdownItem>
          <MDBDropdownItem link href="http://localhost:3000/reject">
            Reject
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}
