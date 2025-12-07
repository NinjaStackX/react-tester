import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/blog/Blog";

export function App() {
  return (
    <Router>
      <nav
        style={{ padding: "10px", background: "#f4f4f4" }}
        className="flex gap-8"
      >
        {/* نستخدم Link بدلاً من <a> لمنع إعادة تحميل الصفحة */}
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* مسار لصفحة غير موجودة 404 */}
          <Route path="*" element={<h2>404 - الصفحة غير موجودة</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
