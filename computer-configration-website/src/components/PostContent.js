export default function PostContent({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p><strong>Author:</strong> {post.author}</p>
        <h3>Comments:</h3>
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    );
  }
  