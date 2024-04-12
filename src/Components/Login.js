import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-hot-toast';
import axios from 'axios'; // Import axios


function Login() {
  const [logindata, setloginData] = useState({
    name: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setloginData({...logindata, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(logindata);
    
    try {
      const response = await axios.post("http://localhost:8181/api/v1/user/login", logindata);
      console.log("Success", response.data);
      navigate('/');
      setloginData({});
    } catch (error) {
      console.log("Failed to register user. Please try again.");
    }
  }
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="name"
            id="name"
            placeholder="Enter your username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          <span>Login</span>
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login
