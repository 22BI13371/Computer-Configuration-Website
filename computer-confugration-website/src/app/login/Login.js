// src/app/login/Login.js
"use client"; // Add this line to declare this component as a Client Component

import React from "react";

function Login({ onRegisterClick }) {
  console.log("Rendering Login Component"); // Moved this up to ensure it's logged on render
  return (
    <div style={styles.app}>
      <style>{`
        .auth-container { text-align: center; color: #ccc; }
        .auth-box { background-color: #e8f7f9; padding: 20px; width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        .auth-box h3 { margin-bottom: 20px; }
        .input { display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #b2dfdb; border-radius: 5px; }
        .btn-primary { width: 100%; padding: 10px; background-color: #4fd0e9; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
        .btn-primary:hover { background-color: #38c0d7; }
        .forgot-password { color: #38c0d7; cursor: pointer; margin: 10px 0; }
        hr { border: 1px solid #ccc; margin: 20px 0; }
        .toggle-link { color: #38c0d7; cursor: pointer; }
      `}</style>

      <div className="auth-container">
        <h2>Your account</h2>
        <div className="auth-box">
          <h3>Sign in</h3>
          <input
            type="text"
            placeholder="Username or Email"
            className="input"
          />
          <input type="password" placeholder="Password" className="input" />
          <button className="btn-primary">Sign In</button>
          <p className="forgot-password">Forgot password?</p>
          <hr />
          <p>
            Not a member?{" "}
            <span onClick={onRegisterClick} className="toggle-link">
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#2c2f33",
  },
};

export default Login;
