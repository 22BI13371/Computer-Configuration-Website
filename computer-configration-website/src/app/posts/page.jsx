import posts from './posts.js'; // Importing data from the posts.js file
import Link from 'next/link.js';
export default function Posts() {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
