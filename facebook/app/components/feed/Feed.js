// Feed.js - Center feed combining stories and posts
import Stories from "../stories/Stories";
import Post from "../post/Post";

const posts = [
  { id: 1, name: "Alice Johnson", time: "2 hrs ago", content: "Beautiful day today! 🌸 Enjoying the sunshine with friends.", likes: 24, comments: 5 },
  { id: 2, name: "Bob Smith", time: "4 hrs ago", content: "Just finished reading an amazing book. Highly recommend it to everyone!", likes: 18, comments: 3 },
  { id: 3, name: "Charlie Brown", time: "6 hrs ago", content: "Cooked dinner for the family tonight. Everyone loved it! 🍝", likes: 42, comments: 8 },
];

export default function Feed() {
  return (
    <div className="w-full max-w-xl mx-auto">

      {/* What's on your mind box */}
      <div className="bg-white rounded-xl shadow-sm mb-4 p-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
            U
          </div>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-100 rounded-full px-4 py-2 flex-1 text-sm outline-none cursor-pointer hover:bg-gray-200"
          />
        </div>
        {/* Post type buttons */}
        <div className="flex justify-around border-t pt-2">
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium">
            🎬 Live Video
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium">
            🖼️ Photo/Video
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium">
            😊 Feeling
          </button>
        </div>
      </div>

      <Stories />
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          time={post.time}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
}