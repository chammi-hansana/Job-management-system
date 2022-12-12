import React from "react";
import Post from "./Post/Post";

export default function Wall() {
  return (
    <div
      style={{ margin: "50px auto", justifyContent: "center", display: "flex", }}
    >
      <div style={{ width: '40%', height: '90%', background: "gray",  borderRadius: '8px', padding: '20px 5px' }}>
        <h1>Recent Jobs!</h1>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}
