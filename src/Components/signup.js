import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

    const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || name.length < 2) {
      toast.error("Name must be at least 2 characters");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email format");
      return;
    }
  
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters.');
      return;
    }
  
    if (password !== repeatPassword) {
      toast.error('Passwords do not match');
      return;
    }
  
    toast.success("Successful");
    
    
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
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
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
