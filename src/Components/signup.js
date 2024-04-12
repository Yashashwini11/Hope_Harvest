import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [confirmpassword, setConfirmPassword] = useState('');

  const handleconfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === confirmpassword) {
      axios.post("http://localhost:8181/api/v1/user/save", data)
        .then(response => {
          console.log("Success " + response);
          navigate('/login');
          setData({});
          setConfirmPassword("");
        })
        .catch(error => {
          console.error("Error:", error);
          toast.error("Failed to register user. Please try again.");
        });
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Repeat your password"
              id="confirmpassword"
              onChange={handleconfirmPasswordChange}
              required
            />
          </div>
          <button type="submit" className="butto">
            <span>Signup</span>
          </button>
        </form>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false} />
    </>
  );
};

export default Signup;
