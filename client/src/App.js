// import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useAuthContext } from "./Hooks/useAuthContext";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

  
function App() {

  const {user} = useAuthContext();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ user ? <Home/> : <Navigate to="/login" /> } />
        <Route path="/signup" element={ !user ? <SignUp />: <Navigate to="/" /> } />
        <Route path="/login" element={ !user ? <Login /> : <Navigate to="/" /> } />
         
      </Routes>
    </Router>
  );
}

export default App;
