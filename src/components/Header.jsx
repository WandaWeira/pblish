import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-10">
        <img src={logo} alt="logo" className="w-28" />
        <ul className="flex gap-12">
          <li>About us</li>
          <li>Feature</li>
          <li>Help</li>
        </ul>
        <div className="flex gap-12">
          <button className="uppercase">Login</button>
          <button className="uppercase border-sky-600 p-2 border-2 text-sky-600 rounded-3xl">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
