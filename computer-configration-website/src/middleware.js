
import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const authHeader = request.headers.get('Authorization');
    console.log('Authorization header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No valid Authorization header found.');
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const token = authHeader.split(' ')[1];
        console.log('Token received:', token);
        
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        
        console.log('Decoded JWT Payload in middleware:', payload);

        if (!payload.isAdmin) {
            console.log('User is not an admin.');
            return new NextResponse('Forbidden: Admins only', { status: 403 });
        }

        console.log('Token verified and user is admin.');
        
        // Create a new response that includes the decoded token
        const response = NextResponse.next();
        
        // Set the decoded token as a header
        response.headers.set('x-decoded-token', JSON.stringify(payload));
        
        return response;

    } catch (error) {
        console.error('Token verification failed in middleware:', error);
        return new NextResponse('Invalid token', { status: 401 });
    }
}

export const config = {
    matcher: ['/api/admin/verify'],
};