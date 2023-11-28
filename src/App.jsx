import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ChooseUser from "./components/ChooseUser";
import DashboardLayout from "./components/producer/DashboardLayout";
import Home from "./components/Home";
import ProducerDashboard from "./components/producer/ProducerDashboard";
import Beats from "./components/producer/Beats";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-customBlack bg-customWhite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<ChooseUser />} />
        {/* Dashboard Layout Route */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<ProducerDashboard />} />
          <Route path="producerdashboard" element={<ProducerDashboard />} />
          <Route path="beats" element={<Beats />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
