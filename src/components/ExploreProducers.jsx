import React from "react";
import GridItem from "./GridItem";

const ExploreProducers = () => {
  return (
    <div className="my-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-10 md:mx-28 my-8">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <button className="uppercase bg-sky-600 text-white p-2 rounded-3xl w-60">
          Explore Producers
        </button>
      </div>
    </div>
  );
};

export default ExploreProducers;
