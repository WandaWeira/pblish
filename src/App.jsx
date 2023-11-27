import ExploreArtists from "./components/ExploreArtists";
import ExploreProducers from "./components/ExploreProducers";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-customBlack bg-customWhite">
      <Header />
      <Hero />
      <ExploreProducers />
      <ExploreArtists />
    </div>
  );
}

export default App;
