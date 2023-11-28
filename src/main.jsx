import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ChooseUser from "./components/ChooseUser.jsx";
import ProducerDashboard from "./components/producer/ProducerDashboard.jsx";
import Beats from "./components/producer/Beats.jsx";
import DashboardLayout from "./components/producer/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: 'register', element: <Register />},
      { path: 'user', element: <ChooseUser />},
      { path: 'dashboard/producerdashboard', element: <ProducerDashboard />},
      { path: '/dashboard/beats', element: <Beats />},
      { path: 'dashboard', element: <DashboardLayout />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
