import posts from '../posts.json';// Importing the local posts.json file

export default function Post({ params }) {
    const { id } = params; // Extract the id from params
    const post = posts.find(post => post.id === parseInt(id)); // Find the post by its ID
    console.log("Post ID:", id);
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
