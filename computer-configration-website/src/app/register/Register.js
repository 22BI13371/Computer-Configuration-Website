"use client";

import React from "react";

function Register({ 
  username,
  setDisplayName,
  email,
  setEmail,
  confirmEmail,
  setConfirmEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onRegister,
  message,
  onLoginClick,
 }) {
  console.log("Rendering Register Component");
  return (
    <div style={styles.app}>
      <style>{`
        .auth-container { text-align: center; color: #ccc; }
        .auth-box { background-color: #e8f7f9; padding: 20px; width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        .auth-box h3 { margin-bottom: 20px; }
        .input { display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #b2dfdb; border-radius: 5px; }
        .btn-primary { width: 100%; padding: 10px; background-color: #4fd0e9; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
        .btn-primary:hover { background-color: #38c0d7; }
        .note { height: auto; width: 100%; border: none; font-size: 0.9em; color: #666; text-align: left; }
        .toggle-link { width: 100%; padding: 10px; background-color: #fff; color: #4fd0e9; border: solid; border-radius: 5px; cursor: pointer; }
      `}</style>

      <div className="auth-container">
          <h2>Registration</h2>
          <div className="auth-box">
              <h3>Create a new account</h3>
              <form onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
                  <input
                      type="text"
                      placeholder="Username"
                      className="input"
                      value={username}
                      onChange={(e) => setDisplayName(e.target.value)}
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                      type="email"
                      placeholder="Email (again)"
                      className="input"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                  />
                  <p className="note">
                      Note: An account activation email will be sent to the email address you provide.
                  </p>
                  <input
                      type="password"
                      placeholder="Password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                      type="password"
                      placeholder="Password (again)"
                      className="input"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="submit" className="btn-primary">Register</button>
              </form>
              <p>{message}</p>
              <p>
                  Already a member?{" "}
                  <button onClick={onLoginClick} className="toggle-link">
                      Sign in
                  </button>
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

export default Register;
