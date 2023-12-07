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
import CreateBeat from "./components/producer/CreateBeat.jsx";
import Artists from "./components/artist/Artists.jsx";
import Producers from "./components/producer/Producers.jsx";
import Music from "./components/Music.jsx";
import Collaborate from "./components/Collaborate.jsx";
import OpenBeat from "./components/OpenBeat.jsx";
import Vocals from "./components/producer/Vocals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "user", element: <ChooseUser /> },
      { path: "dashboard/producerdashboard", element: <ProducerDashboard /> },
      { path: "/dashboard/beats", element: <Beats /> },
      { path: "/dashboard/vocals", element: <Vocals /> },
      { path: "dashboard", element: <DashboardLayout /> },
      { path: "dashboard/createBeats", element: <CreateBeat /> },
      { path: "dashboard/artists", element: <Artists /> },
      { path: "dashboard/producers", element: <Producers /> },
      { path: "dashboard/music", element: <Music /> },
      { path: "dashboard/collaborate", element: <Collaborate /> },
      { path: "dashboard/openbeat", element: <OpenBeat /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
