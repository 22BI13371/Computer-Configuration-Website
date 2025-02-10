// "use client"; // Add this line to declare this component as a Client Component

// import React from "react";
// import Register from "./Register";

// export default function Page() {
//   console.log("Rendering Login Page");
//   return <Register onLoginClick={() => (window.location.href = "/login")} />;
// }

"use client";

import React, { useState } from "react";
import Register from "./Register";

export default function Page() {
    const [username, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        if (email !== confirmEmail) {
            setMessage("Email addresses do not match.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                setMessage("Registration successful! Redirecting to login page...");
                setTimeout(() => window.location.href = "/login", 2000);
            } else {
                const errorText = await response.text();
                setMessage(`Error: ${errorText}`);
            }
        } catch (error) {
            setMessage("An error occurred during registration.");
        }
    };

    return (
        <Register
            username={username}
            setDisplayName={setDisplayName}
            email={email}
            setEmail={setEmail}
            confirmEmail={confirmEmail}
            setConfirmEmail={setConfirmEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onRegister={handleRegister}
            message={message}
            onLoginClick={() => (window.location.href = "/login")}
        />
    );
}
