import React from "react";
import NavigationBar from "../Navigation/Navbar";
import Post from "../Wall/Post/Post";
import ApplicationForm from "./ApplicationForm/ApplicationForm";

export default function Apply() {
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          margin: " 3px 1px 2px 4px",
          padding: " 30px 1px 2px 4px",
          
          justifyContent: "center",
          display: "flex",
          backgroundColor:"lightgray"
        }}
      >
        <div>
          <Post />
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}
