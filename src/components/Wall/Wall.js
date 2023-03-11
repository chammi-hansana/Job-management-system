import React from "react";
import Post from "./Post/Post";

export default function Wall() {
  return (
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
              display: "flex",
              margin: "40px 60px 0px -100px",
              fontFamily: "Segoe UI",
              fontSize: "18px",
              textAlign: "justify",
              width: "96.8vh",
              height:'30.4vh',
            }}
          >
            A Construction Services Management System website is a valuable
            resource for job seekers in the construction industry. This website
            provides a centralized platform for construction companies to manage
            their projects and workforce efficiently, and it can also help job
            seekers find relevant job opportunities.
            
            <br style={{
              marginTop: "25px"
            }}/>Job seekers can easily search for job opportunities on
            a Construction Services Management System website.
          </div>
        </div>
       
      </div>
      <Post/>
      <Post/>
      
      
     
      
    </div>
  );
}
