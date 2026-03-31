function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{post.name}</h4>
      <p>{post.content}</p>
      <button>Like ({post.likes})</button>
    </div>
  );
}

export default PostCard;