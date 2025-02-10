import { sql } from '@vercel/postgres';
import jwt from 'jsonwebtoken';

export async function GET(req) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return new Response('Unauthorized', { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Query the database to verify admin status
        const result = await sql`SELECT is_admin FROM users WHERE id = ${decoded.id}`;
        if (result.rows.length === 0 || !result.rows[0].is_admin) {
            return new Response('Forbidden', { status: 403 });
        }

        return new Response(JSON.stringify({ isAdmin: true }), { status: 200 });
    } catch (error) {
        console.error('Token verification error:', error);
        return new Response('Unauthorized', { status: 401 });
    }
}
