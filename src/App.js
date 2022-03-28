import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AddComment from "./views/AddComment/AddComment";
import CreatePost from "./views/CreatePost/CreatePost";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import PostDetails from "./views/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/postdetails/:id" element={<PostDetails/>}/>
          <Route path="/addcomment/:id" element={<AddComment/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
