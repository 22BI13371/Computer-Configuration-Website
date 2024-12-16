import posts from '../posts.js'; // Adjusted import path to point to the local posts.js file

export default function Post({ params }) {
    const { id } = params; // Extract the id from the URL
    const post = posts.find(post => post.id === parseInt(id)); // Find the post by id

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-2">{post.body}</p>
        </div>
    );
}
