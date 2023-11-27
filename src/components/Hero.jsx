import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex justify-around mx-28">
      <div className="mt-28">
        <h1 className="font-semibold text-5xl my-10 leading-tight">Compose melodies in unity, while physically separated with Pblish</h1>
        {/* <p className="text-3xl">Online collaborative studios for crafting original music with friends, bandmates, and countless musicians globally.</p> */}
        <p className="my-4">The Premier App for Music Production and Artistry Collaboration</p>
        <button className="uppercase bg-sky-600 text-white p-2 rounded-xl my-4">
          Get Started
        </button>
      </div>
      <img src={hero} alt="hero" className="mt-0"/>
    </div>
  );
};

export default Hero;
