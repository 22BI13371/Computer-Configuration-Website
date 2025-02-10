// src/app/login/Login.js
// "use client"; // Add this line to declare this component as a Client Component

// import React from "react";

// function Login({ onRegisterClick }) {
//   console.log("Rendering Login Component"); // Moved this up to ensure it's logged on render
//   return (
//     <div style={styles.app}>
//       <style>{`
//         .auth-container { text-align: center; color: #ccc; }
//         .auth-box { background-color: #e8f7f9; padding: 20px; width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
//         .auth-box h3 { margin-bottom: 20px; }
//         .input { display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #b2dfdb; border-radius: 5px; }
//         .btn-primary { width: 100%; padding: 10px; background-color: #4fd0e9; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
//         .btn-primary:hover { background-color: #38c0d7; }
//         .forgot-password { color: #38c0d7; cursor: pointer; margin: 10px 0; }
//         hr { border: 1px solid #ccc; margin: 20px 0; }
//         .toggle-link { width: 100%; padding: 10px; background-color: #fff; color: #4fd0e9; border: solid; border-radius: 5px; cursor: pointer; }
//         .text-align {text-align: left; color: #000000; font-weight: bold; margin-bottom: 6px;}
//       `}</style>

//       <div className="auth-container">
//         <h2>Your account</h2>
//         <div className="auth-box">
//           <h3>Sign in</h3>
//           <input
//             type="text"
//             placeholder="Username or Email"
//             className="input"
//           />
//           <input type="password" placeholder="Password" className="input" />
//           <button className="btn-primary">Sign In</button>
//           <p className="forgot-password">Forgot password?</p>
//           <hr />
//           <p className="text-align">
//             Not a member? <br />
//           </p>
//           <button onClick={onRegisterClick} className="toggle-link">
//             Register here
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   app: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#2c2f33",
//   },
// };

// export default Login;

"use client";

import React from "react";

function Login({ email, setEmail, password, setPassword, onLogin, message, onRegisterClick }) {
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
          .toggle-link { width: 100%; padding: 10px; background-color: #fff; color: #4fd0e9; border: solid; border-radius: 5px; cursor: pointer; }
          .text-align {text-align: left; color: #000000; font-weight: bold; margin-bottom: 6px;}
        `}</style>
          <div className="auth-container">
              <h2>Your account</h2>
              <div className="auth-box">
                  <h3>Sign in</h3>
                  <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                      <input
                          type="text"
                          placeholder="Email"
                          className="input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                          type="password"
                          placeholder="Password"
                          className="input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit" className="btn-primary">Sign In</button>
                  </form>
                  <p className="forgot-password">Forgot password?</p>
                  <hr />
                  <p className="text-align">Not a member? <br /></p>
                  <button onClick={onRegisterClick} className="toggle-link">
                      Register here
                  </button>
                  <p>{message}</p>
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
