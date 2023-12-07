import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-2 z-10 ${
        isScrolled ? "bg-gray-100" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-4 md:mx-10">
        <img src={logo} alt="logo" className="w-20 md:w-28" />
        {/* Responsive Navigation */}
        <ul className="hidden md:flex gap-12">
          <li>About us</li>
          <li>Feature</li>
          <li>Help</li>
        </ul>
        {/* Responsive Buttons */}
        <div className="flex gap-4 md:gap-12 items-center">
          <Link to="/login">
            <button className="uppercase text-sm md:text-base">Login</button>
          </Link>
          <Link to="/user">
            <button className="uppercase border-sky-600 p-2 border-2 text-sky-600 rounded-3xl text-sm md:text-base">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
