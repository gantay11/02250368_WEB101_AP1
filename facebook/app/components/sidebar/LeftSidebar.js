// LeftSidebar.js - Left navigation sidebar with profile and menu links
export default function LeftSidebar() {
  // Menu items data - reusable structure
  const menuItems = [
    { icon: "👤", label: "Profile" },
    { icon: "👥", label: "Friends" },
    { icon: "🏘️", label: "Groups" },
    { icon: "🎬", label: "Watch" },
    { icon: "🛒", label: "Marketplace" },
    { icon: "🎮", label: "Gaming" },
    { icon: "📅", label: "Events" },
  ];

  return (
    <div className="fixed top-14 left-0 w-64 h-full bg-white p-3 overflow-y-auto">
      
      {/* Profile link */}
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer mb-1">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
          U
        </div>
        <span className="font-medium text-sm">Your Name</span>
      </div>

      {/* Menu items */}
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer mb-1"
        >
          <span className="text-2xl w-9 text-center">{item.icon}</span>
          <span className="font-medium text-sm">{item.label}</span>
        </div>
      ))}

    </div>
  );
}