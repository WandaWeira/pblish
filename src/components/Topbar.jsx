import React, { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex items-center justify-between m-5 ${scrolled ? "bg-gray-400" : ""}`}>
      <h1 className="text-xl sm:text-2xl text-darkGray">Dashboard / Producer</h1>
      <div className="flex items-center gap-4 sm:gap-8">
        <BellIcon className="w-5 h-5 text-darkGray" />
        <p className="text-sm sm:text-base text-darkGray">Hi, Jane Doe</p>
        <img
          src="src\assets\hero.png" // Correct path
          alt="Profile" // Descriptive alt text
          className="w-8 sm:w-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default TopBar;
