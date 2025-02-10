import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function POST(req) {
    const { username, email, password } = await req.json();

    try {
        // Check if the user already exists
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.rowCount > 0) {
            return new Response('User already exists', { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await sql`
            INSERT INTO users (username, email, password, created_at, is_admin)
            VALUES (${username}, ${email}, ${hashedPassword}, NOW()::TEXT, FALSE)
        `;

        return new Response('User registered successfully', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error registering user', { status: 500 });
    }
}
