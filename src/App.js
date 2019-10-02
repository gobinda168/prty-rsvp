import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
