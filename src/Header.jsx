import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, LogOut, Menu } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 animate-gradient-x"></div>

      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative z-10">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
        >
          TreowTreeFoundation
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <Menu size={24} />
        </button>

        <div
          className={`lg:flex lg:space-x-4 lg:overflow-x-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-purple-500 lg:bg-transparent z-20`}
        >
          <Link
            to="/"
            className="block lg:inline-block relative text-white hover:text-gray-200 transition duration-300 px-4 py-2 group"
          >
            Home
            <span className="absolute inset-0">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full delay-200"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-300"></span>
            </span>
          </Link>

          <Link
            to="/add-part"
            className="block lg:inline-block relative text-white hover:text-gray-200 transition duration-300 px-4 py-2 group"
          >
           About
            <span className="absolute inset-0">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full delay-200"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-300"></span>
            </span>
          </Link>

          <Link
            to="/getAll"
            className="block lg:inline-block relative text-white hover:text-gray-200 transition duration-300 px-4 py-2 group"
          >
            Services
            <span className="absolute inset-0">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full delay-200"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-300"></span>
            </span>
          </Link>
          <Link
            to="/getAll"
            className="block lg:inline-block relative text-white hover:text-gray-200 transition duration-300 px-4 py-2 group"
          >
            Contact
            <span className="absolute inset-0">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full delay-200"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-white transition-all duration-300 group-hover:h-full delay-300"></span>
            </span>
          </Link>
        </div>

        {/* <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            <User size={20} />
            <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                onClick={() => console.log("Logout")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Header;