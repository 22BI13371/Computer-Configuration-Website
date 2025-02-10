// src/app/api/admin/users/route.js
import { query } from '@vercel/postgres';

export async function GET(req, res) {
    try {
        const { rows } = await query('SELECT * FROM users');
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        return new Response('Error fetching users', { status: 500 });
    }
}

export async function POST(req) {
    const { userId, action } = await req.json();
    try {
        if (action === 'ban') {
            await query('UPDATE users SET status = $1 WHERE id = $2', ['banned', userId]);
            return new Response('User banned successfully', { status: 200 });
        }
    } catch (error) {
        return new Response('Error performing action', { status: 500 });
    }
}
