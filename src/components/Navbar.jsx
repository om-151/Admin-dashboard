import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none mr-4"
        >
          ☰
        </button>
        <Link to="/">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
