import React from "react";
import NavigationBar from "../Navigation/Navbar";
import Post from "../Wall/Post/Post";

export default function Profile() {
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          margin: "50px auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div id="left-pane" style={{width: '40%', margin: '0 0 0 5%'}}>
            <h4>Hi, Saranga!</h4>
            <p>Name: Saranga Perera</p>
            <p>Age: Saranga Perera</p>
            <p>Name: Saranga Perera</p>
            <p>Name: Saranga Perera</p>
        </div>
        <div id="right-pane" style={{width: '60%'}}>
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
