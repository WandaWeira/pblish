import React from "react";
import GridItem from "./GridItem";

const ExploreProducers = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-28 my-8">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <button className="uppercase bg-sky-600 text-white p-2 rounded-3xl w-60">
          Get Started
        </button>
      </div>
    </>
  );
};

export default ExploreProducers;
