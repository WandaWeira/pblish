import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ChooseUser from "./components/ChooseUser.jsx";
import ProducerDashboard from "./components/producer/ProducerDashboard.jsx";
import Beats from "./components/producer/Beats.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: 'register', element: <Register />},
      { path: 'user', element: <ChooseUser />},
      { path: 'ProducerDashboard', element: <ProducerDashboard />},
      { path: 'beats', element: <Beats />}
      // ProducerDashboard
      // Define other routes as children as needed
    ],
  },
  // You can define other routes outside of the main layout as needed
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
