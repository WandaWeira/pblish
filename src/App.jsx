import ExploreArtists from "./components/ExploreArtists";
import ExploreProducers from "./components/ExploreProducers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import ChooseUser from "./components/ChooseUser";
import ProducerDashboard from "./components/producer/ProducerDashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-customBlack bg-customWhite">
      <Routes>
        {/* Route for the main page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <ExploreProducers />
              <ExploreArtists />
              <Footer />
            </>
          }
        />

        {/* Route for the login page */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<ChooseUser />} />
        <Route path="ProducerDashboard" element={<ProducerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
