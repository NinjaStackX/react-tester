// UsersPage.jsx
import React, { useEffect, useState } from "react";
import { logi } from "../../utils/test";

export default function Users({ isTset = false }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isTset) {
      fetch("/api/user")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setError(error.message);
          setLoading(false);
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-50">
        <p className="text-blue-600 text-xl font-semibold animate-pulse">
          Loading users...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Other users
      </h1>
      <div>
        {error && <div>Error loading user</div>}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            //
            <li
              key={user.id}
              className="bg-white shadow-md rounded-lg p-5 border border-blue-100 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium text-blue-600">Email:</span>{" "}
                {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-blue-600">City:</span>{" "}
                {user.address.city}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-blue-600">Phone:</span>{" "}
                {user.phone}
              </p>
            </li>

            //
          ))}
        </ul>
      </div>
    </div>
  );
}
