import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Story from './Components/Story';
import Donors from './Components/Donors';
import "./Assets/CSS/Nav.css";
import "./Assets/CSS/Home.css";
import "./Assets/CSS/login.css";
import "./Assets/CSS/Signup.css";
import './Assets/CSS/Footer.css';
import './Assets/CSS/Dashboard.css';
import './Assets/CSS/Form.css';
import './Assets/CSS/donars.css';

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
        <Route path='/donors' element={<Donors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
