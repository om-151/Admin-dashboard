import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaWpforms,
  FaTable,
  FaChartBar,
  FaThLarge,
  FaUsers,
  FaDollarSign,
  FaBlog,
  FaCog,
  FaUser,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:relative md:translate-x-0`}
    >
      <div className="p-4 flex justify-between items-center md:hidden">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          ✖
        </button>
      </div>
      <ul className="mt-4">
        <Link to="/">
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaHome className="mr-2" /> Application
          </li>
        </Link>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaWpforms className="mr-2" /> Form
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaTable className="mr-2" /> Table
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaChartBar className="mr-2" /> Chart
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaThLarge className="mr-2" /> Widget
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaUsers className="mr-2" /> Users
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaDollarSign className="mr-2" /> Pricing
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaBlog className="mr-2" /> Blog
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <FaCog className="mr-2" /> Settings
        </li>
        <Link to="/profile">
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaUser className="mr-2" /> Profile
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
