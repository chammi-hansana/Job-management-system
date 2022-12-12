import React from "react";
import NavigationBar from "./Navigation/Navbar";

export default function About() {
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
        <h1>about</h1>
        </div>
    </div>
  );
}
