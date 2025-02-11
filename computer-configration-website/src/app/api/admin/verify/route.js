

export const dynamic = 'force-dynamic'; // Add this to ensure dynamic processing

export async function GET(req) {
    try {
        // Get the decoded token from the custom header set by middleware
        const decodedTokenHeader = req.headers.get('x-decoded-token');
        
        // Log for debugging
        console.log('Received decoded token in route:', decodedTokenHeader);
        
        if (!decodedTokenHeader) {
            console.log('No decoded token header found');
            return new Response('Unauthorized', { status: 401 });
        }

        // We can trust this data because it was set by our middleware
        return new Response(JSON.stringify({ 
            message: 'Verified',
            success: true 
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in route handler:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}