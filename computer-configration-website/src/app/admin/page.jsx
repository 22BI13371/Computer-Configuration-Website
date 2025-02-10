"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        async function checkAdmin() {
            try {
                const response = await fetch('/api/admin/verify', {
                    headers: {
                        Authorization: `Bearer ${
                            document.cookie.split('; ').find(row => row.startsWith('auth-token='))?.split('=')[1]
                        }`
                    },
                });

                if (response.ok) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch {
                setIsAdmin(false);
            }
        }

        checkAdmin();
    }, []);

    if (!isAdmin) {
        return <h1>Access Denied: You do not have admin privileges.</h1>;
    }

    return (
        <div>
            <h1>Welcome, Admin!</h1>
            {/* Admin panel content here */}
        </div>
    );
}
