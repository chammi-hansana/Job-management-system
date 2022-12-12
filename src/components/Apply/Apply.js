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
          margin: "50px auto",
          justifyContent: "center",
          display: "flex",
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
