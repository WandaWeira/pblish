import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-28 my-10 mt-32 md:mt-28">
      <div className="text-center md:text-left md:mt-28">
        <h1 className="font-semibold text-3xl md:text-5xl my-4 md:my-10 leading-tight">
          Compose melodies in unity, while physically separated with Pblish
        </h1>
        <p className="my-4 text-lg md:text-xl">
          The Premier App for Music Production and Artistry Collaboration
        </p>
        <button className="uppercase bg-sky-600 text-white p-2 rounded-3xl my-4 w-3/4 md:w-1/4">
          Get Started
        </button>
      </div>
      <img src={hero} alt="hero" className="mt-4 md:mt-0 w-full md:w-auto" />
    </div>
  );
};

export default Hero;
