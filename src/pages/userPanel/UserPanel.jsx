import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function UserPanel() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <div>Please Log In</div>;

  return (
    <div className="p-4 border">
      <p>Welcome, {user.name}!</p>
      <button onClick={logout} className="bg-red-500 text-white p-1">
        Logout
      </button>
    </div>
  );
}
