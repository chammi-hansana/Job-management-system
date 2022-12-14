import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Apply from "./components/Apply/Apply";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    
    <Router>
      <Routes>
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/" element={<Login/>} />
        <Route exact path="/Home" element={<Home />} />
       
        <Route exact path="/sign-up" element={<Signup/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/apply" element={<Apply/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
