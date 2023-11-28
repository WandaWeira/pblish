import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const getLinkPath = (item) => {
    return item === "Dashboard"
      ? "/dashboard"
      : `/dashboard/${item.toLowerCase()}`;
  };

  return (
    <div className="fixed h-screen p-4 shadow-lg bg-gray-100 overflow-y-auto w-1/6">
      <img src="src/assets/logo.png" alt="logo" className="w-28" />
      <div className="mr-2 ml-2 mt-10 flex-col items-center justify-between">
        <ul className="text-gray-500">
          {["Dashboard", "Beats", "Artists", "Producers", "Music"].map(
            (item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 rounded-lg my-3 ${
                  activeItem === item ? "bg-gray-700 text-white" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <Link to={getLinkPath(item)}>
                  <i
                    className={`fas fa-${
                      item === "Dashboard" ? "flag" : "file"
                    } text-xl mr-3`}
                  ></i>
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
