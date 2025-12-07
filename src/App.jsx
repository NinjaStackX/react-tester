// src/App.js
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Blog } from "./pages/blog/Blog";
import Users from "./pages/users/Users";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/dashboard/login/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function App() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav
        style={{ padding: "10px", background: "#f4f4f4" }}
        className="flex gap-8"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/users">Users</Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
        {!user && <Link to="/login">Login</Link>}
      </nav>
      <div style={{ padding: "20px" }}>
        <Routes initialEntries={["/"]}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}
