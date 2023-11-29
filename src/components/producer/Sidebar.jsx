// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   const sidebarItems = ["Dashboard", "Beats", "Artists", "Producers", "Music", "Collaborate"];

//   return (
//     <div className="fixed h-screen p-4 shadow-2xl bg-gray-100 overflow-y-auto w-1/6">
//       <img src="src/assets/logo.png" alt="logo" className="w-28" />
//       <div className="mr-2 ml-2 mt-10 flex-col items-center justify-between">
//         <ul className="text-gray-500">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center p-2 rounded-lg my-3 ${
//                 activeItem === item ? "bg-customBlack text-customWhite" : ""
//               }`}
//               onClick={() => handleItemClick(item)}
//             >
//               <Link
//                 to={
//                   item === "Dashboard"
//                     ? "/dashboard"
//                     : `/dashboard/${item.toLowerCase()}`
//                 }
//               >
//                 <i
//                   className={`fas fa-${
//                     item === "Dashboard" ? "flag" : "file"
//                   } text-xl mr-3`}
//                 ></i>
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// Importing specific icons from Heroicons
import {
  HomeIcon,
    MusicalNoteIcon,
    UserGroupIcon,
    ChatBubbleLeftIcon
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const sidebarItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Beats", icon: MusicalNoteIcon },
    { name: "Artists", icon: UserGroupIcon },
    { name: "Producers", icon: UserGroupIcon },
    { name: "Music", icon: MusicalNoteIcon },
    { name: "Collaborate", icon: ChatBubbleLeftIcon },
  ];

  return (
    <div className="fixed h-screen p-4 shadow-2xl bg-gray-100 overflow-y-auto w-1/6">
      <img src="src/assets/logo.png" alt="logo" className="w-28" />
      <div className="mr-2 ml-2 mt-10 flex-col items-center justify-between">
        <ul className="text-gray-500">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                to={
                  item.name === "Dashboard"
                    ? "/dashboard"
                    : `/dashboard/${item.name.toLowerCase()}`
                }
              >
                <li
                  key={index}
                  className={`flex items-center p-2 rounded-lg my-3 ${
                    activeItem === item.name
                      ? "bg-customBlack text-customWhite"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <Icon className="h-6 w-6 mr-3" />
                  <p>{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
