import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (data.email === 'yashashwini@gmail.com' && data.password === 'yashu1234') {
      toast.success("Logged in", {
        duration: 6000
      });
     
    } else {
      setError({ email: 'Incorrect username/password', password: 'Incorrect username/password' });
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
              required
            />
            <span className="error">{error.password}</span>
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

export default Login;
