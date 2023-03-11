import React from "react";

import Post from "../Wall/Post/Post";

import NavigationBar from "../Navigation/Navbar";
export default function HireJobs() {
    return (
        <div>
     <NavigationBar />
         

    <div
        style={{
          marginTop: "-2px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          position:'relative',
          backgroundPosition:'30%',
          overflow:'hidden',
          //backgroundColor: '#D3E7EE',
          backgroundImage:
            "url('https://demos.creative-tim.com/paper-kit-react/static/media/fabio-mangione.488bc249.jpg')",
          height: "40vh",
          width: "100%", }}

          >
            <div style={{backgroundColor:'#1A120B', opacity:'50%',  height: "40vh",
          width: "100%",  }}>  </div>
          
           </div>
    </div>
          );    
}