import posts from "../data/posts";
import PostCard from "./PostCard";

function PostList() {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;