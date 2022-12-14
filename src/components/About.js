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
          height:'190vh',
          width:'210vh',
          marginTop:'-2px',
          backgroundColor:"red",
          backgroundSize: 'cover',
          opacity:"0.6",
          backgroundRepeat: 'no-repeat',
          color: "black",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <h1 
        style={{
          fontSize:'100px',margin: "30px 400px 40px 50px",color:"black",fontFamily:"Verdana",}} >About
          
       </h1>
        </div>
    </div>
  
  );
}
