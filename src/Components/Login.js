import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value})
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

   
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
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
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}
}
export default Login
