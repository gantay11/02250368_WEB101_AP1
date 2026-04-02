// Navbar.js - Top navigation bar that appears on every page
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-14 flex items-center justify-between px-4">
      
      {/* Left - Facebook logo */}
      <div className="text-blue-600 text-2xl font-bold">
        facebook
      </div>

      {/* Center - Search bar */}
      <div className="bg-gray-100 rounded-full flex items-center px-3 py-1 gap-2">
        <span className="text-gray-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Search Facebook"
          className="bg-transparent outline-none text-sm w-48"
        />
      </div>

      {/* Right - Profile avatar placeholder */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">
          U
        </div>
      </div>

    </nav>
  );
}