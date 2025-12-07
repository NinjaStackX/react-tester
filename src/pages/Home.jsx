import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-blue-50 rounded-3xl border border-blue-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Welcome to my Test Apps
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
        This App was designed for testing <br /> "React testing Library"
      </p>
      <Link to="/blog">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 shadow-lg transition">
          Start showing apps
        </button>
      </Link>
    </div>
  );
}
