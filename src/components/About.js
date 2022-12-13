import React from "react";
import { Image } from "react-bootstrap";
import NavigationBar from "./Navigation/Navbar";


export default function About() {
  return (
    <div>
      <NavigationBar />
      

      <div 
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1599995903128-531fc7fb694b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')",
          height:'130vh',
          width:'230vh',
          marginTop:'-2px',
          fontSize:'50px',
          backgroundSize: 'cover',
          position:'-moz-initial',
          backgroundRepeat: 'no-repeat',
          color: "black",
          margin: "5px auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        
        <h1>About</h1>

       
        </div>
    </div>
  );
}
