import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </>
  );
}

export default App;
