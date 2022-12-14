import React from "react";
import NavigationBar from "../Navigation/Navbar";
import Post from "../Wall/Post/Post";

export default function Profile() {
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          margin: "1px auto",
          justifyContent: "center",
          display: "flex",
          backgroundColor: '#D3E7EE',
        }}
      >
        <div id="left-pane" style={{width: '400px',height:"450px" ,margin: '70px 200px 100px 100px',
              padding:"35px 50px 100px 50px",
              backgroundColor: '#7097A8',
              borderRadius:"50px",
              boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',}}>
            
            <p
            style={{
              fontSize:'38px',margin: "10px 2px 20px 20px",fontFamily:"fantasy"}} >Hi, Saranga!</p>

          <div style={{fontSize:'19px' ,margin: '29px 20px 10px 8px',fontFamily:"monospace" }}>  
            <p>Name: Saranga Perera</p>
            <p>Age: 32</p>
            <p>Address : Galle</p>
            <p>Contact No:0768904563</p>
            <p>User Type: Job Seeker</p>
            </div> 
       
        </div>
        <div id="right-pane" style={{width: '70%',margin: "10px auto",}}>
          <h2 className="mb-4">Applied Jobs</h2>
          <div style={{width: '80%'}}>
          <Post />
          <Post />
          <Post />
          </div>
          
        </div>
      </div>
    </div>
  );
}
