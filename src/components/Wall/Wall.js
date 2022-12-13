import React from "react";
import Post from "./Post/Post";

export default function Wall() {
  return (
   
      
      <div style={{ display:"flow", background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',  borderRadius: '5px', padding: '20px 5px' }}>
      <h1>Recent Jobs!</h1>
      <div style={{ margin: "20px 20px 0px 50px",display:"blog"}}></div>
        
        <Post />
        <Post/>
        <Post/>
        <Post/>
       
      </div>
    
  );
}
