import React from 'react';
import "./App.css";
import Home from "./Home";
import SignIn from './SignIn';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Home />
      <Routes>
      <Route path="/signIn" element={<SignIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
