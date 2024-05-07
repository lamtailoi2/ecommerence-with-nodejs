import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login></Login>
      </BrowserRouter>
    </>
  );
}

export default App;
