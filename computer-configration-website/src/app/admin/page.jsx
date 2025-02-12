"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function verifyAdmin() {
            try {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('auth-token='))
                    ?.split('=')[1];

                if (!token) {
                    setErrorMessage('No valid session found. Please log in.');
                    setLoading(false);
                    return;
                }

                const response = await fetch('/api/admin/verify', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.ok) {
                    setIsAdmin(true);
                    await fetchAdminData(token);
                } else {
                    setErrorMessage('Access denied.');
                }
            } catch (error) {
                console.error('Error verifying admin:', error);
                setErrorMessage('An error occurred during verification.');
            } finally {
                setLoading(false);
            }
        }

        async function fetchAdminData(token) {
            try {
                const [usersResponse, postsResponse] = await Promise.all([
                    fetch('/api/admin/users', { headers: { Authorization: `Bearer ${token}` } }),
                    fetch('/api/admin/posts', { headers: { Authorization: `Bearer ${token}` } }),
                ]);

                if (usersResponse.ok && postsResponse.ok) {
                    const usersData = await usersResponse.json();
                    const postsData = await postsResponse.json();
                    setUsers(usersData);
                    setPosts(postsData);
                } else {
                    console.error('Failed to fetch admin data.');
                }
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        }

        verifyAdmin();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!isAdmin) {
        return <h1>{errorMessage || 'Access Denied: You do not have admin privileges.'}</h1>;
    }

    return (
        <div className="admin-panel">
            <h1>Welcome, Admin!</h1>

            <h2>User Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.is_admin ? 'Yes' : 'No'}</td>
                            <td>
                                {!user.is_admin && (
                                    <button onClick={() => handleElevateUser(user.id)}>
                                        Elevate to Admin
                                    </button>
                                )}
                                <button onClick={() => handleUpdateUser(user)}>Edit</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Post Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.user_id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button onClick={() => handleUpdatePost(post)}>Edit</button>
                                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    async function handleElevateUser(userId) {
        try {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('auth-token='))
                ?.split('=')[1];

            const response = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ id: userId, isAdmin: true }),
            });

            if (response.ok) {
                // Update the UI to reflect the user's new admin status
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.id === userId ? { ...user, is_admin: true } : user
                    )
                );
            } else {
                console.error('Failed to elevate user permissions.');
            }
        } catch (error) {
            console.error('Error elevating user permissions:', error);
        }
    }

    function handleUpdateUser(user) {
        console.log('Update user:', user);
    }

    function handleDeleteUser(userId) {
        console.log('Delete user with ID:', userId);
    }

    function handleUpdatePost(post) {
        console.log('Update post:', post);
    }

    function handleDeletePost(postId) {
        console.log('Delete post with ID:', postId);
    }
}
