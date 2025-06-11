import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/apiUsers";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome, {user.firstName}
        </h1>
        <img src={user.image} alt="user-image" className="h-10 w-10" />
      </div>
      <div className="flex gap-4 mx-auto">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Products
        </NavLink>
      </div>
      <LogoutButton />
    </nav>
  );
}
