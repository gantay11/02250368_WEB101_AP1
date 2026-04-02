// Stories.js - Horizontal scrollable stories bar
export default function Stories() {
  // Sample stories data
  const stories = [
    { name: "Alice", color: "bg-pink-400" },
    { name: "Bob", color: "bg-blue-400" },
    { name: "Charlie", color: "bg-green-400" },
    { name: "Diana", color: "bg-yellow-400" },
    { name: "Edward", color: "bg-purple-400" },
  ];

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
      
      {/* Create Story card */}
      <div className="min-w-24 h-40 bg-white rounded-xl overflow-hidden cursor-pointer hover:brightness-95 flex-shrink-0 shadow-sm">
        <div className="h-28 bg-gray-200 flex items-center justify-center text-4xl">
          📷
        </div>
        <div className="p-1 text-center">
          <p className="text-xs font-semibold text-blue-600">Create Story</p>
        </div>
      </div>

      {/* Story cards - reusable */}
      {stories.map((story) => (
        <div
          key={story.name}
          className={`min-w-24 h-40 ${story.color} rounded-xl overflow-hidden cursor-pointer hover:brightness-95 flex-shrink-0 shadow-sm relative`}
        >
          {/* Avatar */}
          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
            {story.name[0]}
          </div>
          {/* Name at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50">
            <p className="text-white text-xs font-semibold">{story.name}</p>
          </div>
        </div>
      ))}

    </div>
  );
}