import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ChooseUser from "./components/ChooseUser";
import DashboardLayout from "./components/producer/DashboardLayout";
import Home from "./components/Home";
import ProducerDashboard from "./components/producer/ProducerDashboard";
import Beats from "./components/producer/Beats";
import CreateBeat from "./components/producer/CreateBeat";
import Artists from "./components/artist/Artists";
import Producers from "./components/producer/Producers";
import Music from "./components/Music";
import Collaborate from "./components/Collaborate";

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
          <Route path="dashboard/producerdashboard" element={<ProducerDashboard />} />
          <Route path="/dashboard/beats" element={<Beats />} />
          <Route path="/dashboard/createBeats" element={<CreateBeat />} />
          <Route path="/dashboard/artists" element={<Artists />} />
          <Route path="/dashboard/producers" element={<Producers />} />
          <Route path="/dashboard/music" element={<Music />} />
          <Route path="/dashboard/collaborate" element={<Collaborate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
