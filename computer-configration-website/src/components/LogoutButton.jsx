// src/components/LogoutButton.jsx
"use client";

export default function LogoutButton() {
    return (
        <button
            className="nav-btn"
            onClick={() => {
                console.log('Logging out...');
                document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
                window.location.reload();
            }}
        >
            Logout
        </button>
    );
}
