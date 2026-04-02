import Navbar from "./components/layout/Navbar";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import RightSidebar from "./components/sidebar/RightSidebar";
import Feed from "./components/feed/Feed";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-14 flex justify-center mx-auto max-w-screen-xl">
        <LeftSidebar />
        <main className="ml-64 mr-64 w-full p-4">
          <Feed />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}