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
  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transition-transform transform ${
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
          <Link to="/" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaHome className="mr-2" /> Home
            </li>
          </Link>

          <Link to="/form" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaWpforms className="mr-2" /> Form
            </li>
          </Link>

          <Link to="/table" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaTable className="mr-2" /> Table
            </li>
          </Link>

          <Link to="/chart" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaChartBar className="mr-2" /> Chart
            </li>
          </Link>

          <Link to="/widget" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaThLarge className="mr-2" /> Widget
            </li>
          </Link>

          <Link to="/users" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaUsers className="mr-2" /> Users
            </li>
          </Link>

          <Link to="/pricing" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaDollarSign className="mr-2" /> Pricing
            </li>
          </Link>

          <Link to="/blog" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaBlog className="mr-2" /> Blog
            </li>
          </Link>

          <Link to="/settings" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaCog className="mr-2" /> Settings
            </li>
          </Link>

          <Link to="/profile" onClick={handleMenuClick}>
            <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaUser className="mr-2" /> Profile
            </li>
          </Link>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
