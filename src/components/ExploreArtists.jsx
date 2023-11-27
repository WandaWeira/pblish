import GridItem from "./GridItem";

const ExploreArtists = () => {
  return (
    <div className="my-28">
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
          Explore Artists
        </button>
      </div>
    </div>
  );
};

export default ExploreArtists;
