// Post.js - Reusable individual post card component
export default function Post({ name, time, content, likes, comments }) {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 p-4">
      
      {/* Post header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{time}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="text-sm mb-3">{content}</p>

      {/* Like/comment counts */}
      <div className="flex justify-between text-gray-500 text-xs border-b pb-2 mb-2">
        <span>👍 {likes} Likes</span>
        <span>{comments} Comments</span>
      </div>

      {/* Action buttons */}
      <div className="flex justify-around">
        <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-4 py-1 rounded-lg text-sm font-medium">
          👍 Like
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-4 py-1 rounded-lg text-sm font-medium">
          💬 Comment
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 px-4 py-1 rounded-lg text-sm font-medium">
          ↗️ Share
        </button>
      </div>

    </div>
  );
}