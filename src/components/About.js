import React from "react";
import Navbar from "./Navigation/Navbar";


export default function About() {
  return (
    <div>

      <Navbar />
       
      <div 
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          height:'100vh',
          width:'195vh',
          marginTop:'-2px',
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          margin: "auto",
          display: "fixed",
          
         

        }}
      >
        
        </div>
        <div style={{textAlign:"center",fontSize:'80px',color:"black",fontFamily:"Verdana",}}>
        <p className="mb-2">About</p>
        </div>


        <div style={{textAlign:"justify",fontSize:'15px',margin:"10px 260px 20px 240px",fontFamily:"Verdana"}}>
        <p className="mb-4" > The Website is about a Construction Services Management System.
         The Website objective is to find jobs online. It is an internet based application that can be accessed throughout the internet. 
         This application will help to publish and find the jobs. The system will suggest new job related to job seekers profile.Job seeker can search any job specification at any time using the system.
When the seeker finally decides to apply for the job, the order information and instructions are securely stored in the database.
The system also provides cancellation option for previously applied jobs. And if anyone needs employees, they can mention the information and publish a post in the system.
Most importantly, we hope to make this system accessible to both parties so they can have a good and efficient experience.
 </p>
        </div>

        <div 
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
          height:'30vh',
          width:'30vh',
          marginTop:'-2px',
          imageResolution:"-moz-initial",
          borderImageWidth:"100px",
          backgroundRepeat: "no-repeat",
          margin: "10px 20px 40px 50px",
          display:"-ms-flexbox",
          
         

        }}
      >
        </div>
      <div style={{ textAlign:"left" , 
      fontfamily: 'Poppins',
     padding: "20px 60px 10px 10px ",
     margin: "-50px 20px 4px 50px",
     width: "30vh",
     height:"30vh",
       backgroundColor: 'hsl(218deg 50% 91%)',
     
     boxShadow: '0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)',
      
      }}>

        <div style={{textAlign:"center"}}>
        <p className="mb-4" >chammi hansana </p>
        </div>

        </div> 
    </div>
    
   
  
 
  );
    }

