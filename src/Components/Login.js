import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
          />
        </div>
        <Link to="/home">
          <button type="submit">
            <span>Login</span>
          </button>
        </Link>
         <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </form>
    </div>
  );
}

export default Login;
