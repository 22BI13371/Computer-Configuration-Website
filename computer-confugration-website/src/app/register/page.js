"use client"; // Add this line to declare this component as a Client Component

import React from "react";

import Register from "./Register";

export default function Page() {
  console.log("Rendering Login Page");
  return <Register onLoginClick={() => (window.location.href = "/login")} />;
}
