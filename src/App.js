import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import SignIn from './SignIn';
import SignUp from './SignUp';
import "./App.css";
function App() {
  return (
    <div className="app">
      <Home />
      <Routes>
      <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Routes>
      <Route path="/signUp" element={<SignUp />} />
      </Routes> 
    </div>
  );
}

export default App;
