// src/App.js
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Blog } from "./pages/blog/Blog";
import Users from "./pages/users/Users";

export default function App() {
  return (
    <div>
      hi
      <nav
        style={{ padding: "10px", background: "#f4f4f4" }}
        className="flex gap-8"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/users">Users</Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Routes initialEntries={["/"]}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}
