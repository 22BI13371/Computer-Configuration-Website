import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const { email, password } = await req.json();

    try {
        // Fetch the user from the database using the email
        const result = await sql`SELECT * FROM users WHERE email = ${email}`;
        const user = result.rows[0];

        // Handle cases where the user is not found
        if (!user) {
            return new Response('Invalid credentials.', { status: 401 });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new Response('Invalid credentials.', { status: 401 });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email, isAdmin: user.is_admin },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Return the token
        return new Response(JSON.stringify({ token }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error logging in.', { status: 500 });
    }
}
