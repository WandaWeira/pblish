import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "../Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="flex-none w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1">
        <TopBar />
        <div className="m-8 text-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
