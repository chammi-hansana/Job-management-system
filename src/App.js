
import Login from "./components/Login";
import Findjob from "./components/Findjob";
import About from "./components/About";


import Approval from "./components/Approval";
import Pending from "./components/Pending";
import Reject from "./components/Reject";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Apply from "./components/Apply/Apply";
import Profile from "./components/Profile/Profile";

import HireJobs from "./components/EmployerFiles/HireJobs";
import Inputpost from "./components/EmployerFiles/Inputpost";
import EmpAbout from "./components/EmployerFiles/EmpAbout";

import Admin from "./components/admin/adminDashboard";


function App() {
  return (
   
    
    <Router>
      <Routes> 
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/" element={<Login/>} />
        <Route exact path="/Findjob" element={<Findjob />} />
       
        <Route exact path="/sign-up" element={<Signup/>} />
        <Route exact path="/Findjob" element={<Findjob/>} />
        <Route exact path="/apply" element={<Apply/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/profile" element={<Profile/>} />
        
        <Route exact path="/Approval" element={<Approval/>} />
        <Route exact path="/Pending" element={<Pending/>} />
        <Route exact path="/Reject" element={<Reject/>} />

        <Route exact path="/HireJobs" element={<HireJobs/>} />
        <Route exact path="/Inputpost" element={<Inputpost/>} />
        <Route exact path="/EmpAbout" element={<EmpAbout/>} />

        <Route exact path="/Admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;


