import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Adjusted to match the correct column names
        const result = await sql`SELECT id, username, email, is_admin FROM users`;
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        return new NextResponse('Error fetching users', { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        // Delete the user based on the ID
        await sql`DELETE FROM users WHERE id = ${id}`;

        return new NextResponse('User deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return new NextResponse('Error deleting user', { status: 500 });
    }
}

export async function PATCH(request) {
    try {
        const { id, isAdmin } = await request.json();

        // Update the user's admin status
        await sql`
            UPDATE users
            SET is_admin = ${isAdmin}
            WHERE id = ${id}
        `;

        return new NextResponse('User updated successfully', { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return new NextResponse('Error updating user', { status: 500 });
    }
}