import React, { useEffect, useState } from "react";
import axios from "../../__mock__/axios";
import { Link } from "react-router-dom";

export function Blog() {
  const [blogData, setBlogData] = useState("");
  // State hooks
  const [title, setTitle] = useState("My Awesome Blog");
  const [subtitle, setSubtitle] = useState("Learning React useState with");
  const [content, setContent] = useState(
    "This is the first paragraph of my blog."
  );
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handlers
  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  useEffect(() => {
    axios.get("https://api.example.com/users").then((response) => {
      // تأكد من أنك تخزن الاسم بناءً على هيكلة الموك الخاص بك
      const firstName = response.data.results[0].name.firstName;
      setBlogData(firstName);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans bg-white shadow-xl rounded-2xl my-10 border border-gray-100">
      {/* users btn */}
      <div className=" text-right">
        <Link to="/users" className="text-blue-500  font-bold hover:underline ">
          Show all users
        </Link>
      </div>
      {/* Heading Section */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          {title}
        </h1>
        <h2 className="text-xl text-blue-600 font-medium italic">
          {subtitle} {blogData}
        </h2>
      </div>

      {/* Paragraph Content */}
      <p
        data-testid="paragraph-content"
        className="text-gray-700 leading-relaxed text-lg mb-8"
      >
        {content}
      </p>

      {/* Control Buttons Group */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          data-testid="btn-like"
          onClick={handleLike}
          className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full font-bold border border-blue-200 hover:bg-blue-100 transition shadow-sm"
        >
          👍 Like <span className="ml-1 text-blue-700">{likes}</span>
        </button>

        <button
          role="title-change"
          onClick={() => setTitle("Updated Blog Title")}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
        >
          Change Title
        </button>

        <button
          role="subTitle-change"
          onClick={() => setSubtitle("React Hooks in Action")}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
        >
          Change Subtitle
        </button>

        <button
          role="content-change"
          onClick={() => setContent("This is updated blog content!")}
          className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-100 transition"
        >
          Change Content
        </button>
      </div>

      {/* Comment Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Comments</h3>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button
            data-testid="btn-comment"
            onClick={handleAddComment}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-white px-4 py-3 rounded-md border border-gray-100 text-gray-600 shadow-sm"
            >
              {comment}
            </li>
          ))}
          {comments.length === 0 && (
            <li className="text-gray-400 italic text-sm">
              No comments yet. Be the first!
            </li>
          )}
        </ul>
      </div>

      {/* Extra Info / Footer UI */}
      <div className="mt-10 pt-8 border-t border-gray-100 text-center">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
          Extra Info
        </h4>
        <p data-testid="paragraph-footer" className="text-gray-500 mb-4">
          React makes building UIs fun and interactive.
        </p>
        <button
          onClick={() => alert("Hello from React!")}
          className="text-blue-500 font-bold hover:underline"
        >
          Say Hello 👋
        </button>
        <br />
      </div>
    </div>
  );
}

export default Blog;
