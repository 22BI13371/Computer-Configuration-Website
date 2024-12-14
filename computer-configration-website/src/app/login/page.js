// src/app/login/page.js
// src/app/login/page.js
// src/app/login/page.js
"use client"; // Add this line to declare this component as a Client Component

import React from "react";
import Login from "./Login";

export default function Page() {
  console.log("Rendering Login Page");
  return <Login onRegisterClick={() => (window.location.href = "/register")} />;
}
