import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Adjusted to match the correct column names
        const result = await sql`SELECT id, user_id, title, body, created_at, updated_at FROM posts`;
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return new NextResponse('Error fetching posts', { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        // Delete the post based on the ID
        await sql`DELETE FROM posts WHERE id = ${id}`;

        return new NextResponse('Post deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error deleting post:', error);
        return new NextResponse('Error deleting post', { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, title, body } = await request.json();

        // Update the post with new title and body
        await sql`
            UPDATE posts
            SET title = ${title}, body = ${body}, updated_at = NOW()
            WHERE id = ${id}
        `;

        return new NextResponse('Post updated successfully', { status: 200 });
    } catch (error) {
        console.error('Error updating post:', error);
        return new NextResponse('Error updating post', { status: 500 });
    }
}
