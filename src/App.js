import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Story from './Components/Story';
import Signup from './Components/Signup';
import "./Assets/CSS/Nav.css";
import "./Assets/CSS/Home.css";
import "./Assets/CSS/login.css";
import "./Assets/CSS/Signup.css";
import './Assets/CSS/Footer.css';
import './Assets/CSS/Dashboard.css';
import './Assets/CSS/Form.css';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/donate' element={<Form />} />
        <Route path='/story' element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
