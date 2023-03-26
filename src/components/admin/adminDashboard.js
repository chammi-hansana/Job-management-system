import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";

export default function Admin() {
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        var token = localStorage.getItem('token');
        setToken(token);

        var URL = "http://localhost:8080/api/get-all-users"

        fetch(URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },

        })
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error));

    }, []);

    const deleteUser = (userId) => {
       
          
            var URL = "http://localhost:8080/api/delete-user"
            var data = {
              user_id: userId
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
                if (data.success) {
                  Swal.fire({
                    title: "Deleted Successfully !",
                    icon: "success",
                    cancelButtonColor: "#C6DCE4",
                    confirmButtonColor: "#C6DCE4",
                    iconColor: "#F2D1D1",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
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
              });
          
    }
    const logoutFunc = () => {
        localStorage.clear();
    }
    return (
        <>

            <Navbar bg="dark" expand="lg" className="navbar-fixed-top"  >
                <Container>
                    <Navbar.Brand href="#Findjob" style={{
                        color: "#F5F5F5",fontSize: "15px", }}>Construction Services Management System</Navbar.Brand>
                    <Navbar.Brand id="#Findjob" style={{
                         color: "#F5F5F5",
                         padding: "5px 300px 0px ",
                         margin: "5px 2px",
                         width: "20px",
                         fontSize: "40px",
                         fontFamily: 'Segoe Print'
                    }}> Admin </Navbar.Brand>



                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ padding: "5px 50px 10px 300px",color: "#FF0303",fontSize: "21px", }}>
                        <Nav className="me-auto">
                            <Nav.Link href="/login" style={{ color: "red" }} onClick={() => logoutFunc()}>
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data?.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{user?.name}</th>
                            <td >{user?.phone}</td>
                            <td >{user?.age}</td>
                            <td >{user?.address}</td>
                            <td >{user?.email}</td>
                            <td >{user?.userType}</td>
                            <td ><button type="button" className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}
