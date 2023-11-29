import { Link } from "react-router-dom";
import { PlayIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const OpenBeat = () => {
  return (
    <>
      <div className="gap-8">
        <img
          src="https://media.istockphoto.com/id/1420658818/vector/set-of-hand-drawn-leaves-flowers-and-plants-abstract-contemporary-modern-trendy-vector.jpg?s=612x612&w=0&k=20&c=QiNUs3CFjxK-aPMX30HLpgeKh2EP81XWL88SAOXSgbI="
          alt="beat"
          className="w-48"
        />
        <h1 className="mt-5">Beat Name</h1>
        <div className="flex gap-3 mt-5 w-full">
          <p>Description:</p>
          <p className="text-md text-gray-500">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
        </div>
        <div className="flex gap-3 mt-5 w-full">
          <p>Posted:</p>
          <p className="text-md text-gray-500">12/12/2023</p>
        </div>
      </div>

      <div className="flex gap-8 mt-8">
        <div className="p-2 text-customWhite bg-gray-500 h-10 w-28 rounded-xl flex items-center gap-3">
          <PlayIcon className="h-5 w-6" />
          <p>Listen</p>
        </div>

        <div className="p-2 text-customWhite bg-sky-600 h-10 w-28 rounded-xl flex items-center gap-3">
          <ArrowDownIcon className="h-10 w-10" />
          <p>Download</p>
        </div>
      </div>
    </>
  );
};

export default OpenBeat;
