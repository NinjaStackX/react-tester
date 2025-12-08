import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export function Dashboard() {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.example.com/tasks")
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <h2 className="text-gray-500">
            Welcome back,
            <span className="text-blue-600 font-semibold">
              {user?.name || "Guest"}
            </span>
          </h2>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
          {user?.name?.[0] || "U"}
        </div>
      </header>

      <main>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Your Tasks</h3>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {tasks.length} Total
          </span>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-300 transition-colors"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded text-blue-600"
                />
                <span className="text-gray-700 font-medium">{task.title}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
