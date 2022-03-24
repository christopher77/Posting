import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import CreatePost from "./views/CreatePost/CreatePost";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
