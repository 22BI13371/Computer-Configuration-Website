import Link from 'next/link';
import posts from './posts.json'; // Importing the local posts.json file

export default function Posts() {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="mb-2">
                        <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
