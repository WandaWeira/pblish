import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed h-screen p-4 shadow-lg bg-gray-100 overflow-y-auto w-1/6">
      <img src="src\assets\logo.png" alt="logo" className="w-28" />
      <div className="mr-2 ml-2 mt-10 flex-col items-center justify-between">
        <ul className="text-gray-500">
          <li className="flex items-center p-2 rounded-lg my-3">
            <i className="fas fa-flag text-gray-500 text-xl mr-3"></i>
            <a href="">Dashboard</a>
          </li>
          <li className="flex items-center p-2 rounded-lg my-3 bg-gray-500 text-white">
            <i className="fas fa-file text-gray-500 text-xl mr-3"></i>
            <a href="">Artists</a>
          </li>
          <li className="flex items-center p-2 rounded-lg my-3">
            <i className="fas fa-file text-gray-500 text-xl mr-3"></i>
            <a href="">Producers</a>
          </li>
          <li className="flex items-center p-2 rounded-lg my-3">
            <i className="fas fa-bar-chart text-gray-500 text-xl mr-3"></i>
            <a href="">Beats</a>
          </li>
          <li className="flex items-center p-2 rounded-lg my-3">
            <i className="fas fa-cogs text-gray-500 text-xl mr-3"></i>
            <a href="">Music</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
