import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <p>Hello world</p>
    </div>
  );
}

export default App;
