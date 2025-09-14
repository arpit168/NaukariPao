import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/naukari.webp";
import { ImCross } from "react-icons/im";
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-3 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={pic} alt="logo" width={50} className="rounded-full" />
          <h3>
            <span className="text-2xl sm:text-3xl font-bold">
              <span className="text-3xl sm:text-4xl font-bold text-red-700">
                N
              </span>
              aukari-Pao
            </span>
            <br />
            <span className="text-gray-400 text-sm sm:text-base font-extrabold border-b">
              <i>Pao Sapno ki naukari</i>
            </span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 mt-2">
          <Link to="/home" className="hover:text-amber-300 hover:border-b-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-300 hover:border-b-2">
            About
          </Link>
          <Link to="/contact" className="hover:text-amber-300 hover:border-b-2">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-amber-600 hover:text-amber-300 hover:border-2 px-5 py-1 rounded-3xl"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-600 hover:text-amber-300 hover:border-2 px-4 py-1 rounded-3xl"
          >
            Register
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ImCross className="text-red-500" /> : <CgMenuRound  className="text-5xl text-gray-600"/>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-3 space-y-3">
          <Link
            to="/home"
            className="hover:text-amber-300 hover:border-b-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-300 hover:border-b-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-300 hover:border-b-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-amber-600 hover:text-amber-300 hover:border-2 px-5 py-1 rounded-3xl"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-600 hover:text-amber-300 hover:border-2 px-4 py-1 rounded-3xl"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
