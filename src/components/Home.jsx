import ExploreArtists from "../components/ExploreArtists";
import ExploreProducers from "../components/ExploreProducers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";


function Home() {
  return (
    <div className="min-h-screen flex flex-col text-customBlack bg-customWhite">
      <Header />
      <Hero />
      <ExploreProducers />
      <ExploreArtists />
      <Footer />
    </div>
  );
}

export default Home;
