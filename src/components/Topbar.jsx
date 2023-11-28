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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between m-5 ${
        scrolled ? "bg-gray-400" : ""
      }`}
    >
      <h1 className="text-2xl text-darkGray">Dashboard / Producer</h1>
      <div className="flex items-center gap-8">
        <BellIcon className="w-5 h-5 text-darkGray" />
        <p className="text-darkGray">Hi, Jane Doe</p>
        <img
          src="src/assets/hero.png"
          alt="profile"
          className="w-10 rounded-full border"
        />
      </div>
    </div>
  );
};

export default TopBar;
