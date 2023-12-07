import { Link } from "react-router-dom";
import { PlayIcon, ArrowDownIcon, PlusIcon } from "@heroicons/react/24/outline";

const OpenBeat = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <img
          src="https://media.istockphoto.com/id/1420658818/vector/set-of-hand-drawn-leaves-flowers-and-plants-abstract-contemporary-modern-trendy-vector.jpg?s=612x612&w=0&k=20&c=QiNUs3CFjxK-aPMX30HLpgeKh2EP81XWL88SAOXSgbI="
          alt="beat"
          className="w-full sm:w-48"
        />
        <h1 className="text-xl text-center">Beat Name</h1>
        <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full px-4">
          <p>Description:</p>
          <p className="text-md text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full px-4">
          <p>Posted:</p>
          <p className="text-md text-gray-500">12/12/2023</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="p-2 text-customWhite bg-gray-500 h-10 w-full sm:w-28 rounded-xl flex items-center justify-center gap-3">
          <PlayIcon className="h-5 w-6" />
          <p>Listen</p>
        </div>

        <div className="p-2 text-customWhite bg-sky-600 h-10 w-full sm:w-28 rounded-xl flex items-center justify-center gap-3">
          <ArrowDownIcon className="h-5 w-6 sm:h-10 sm:w-10" />
          <p>Download</p>
        </div>
        <Link to="/dashboard/collaborate">
          <div className="p-2 text-customWhite bg-customBlack h-10 w-full sm:w-32 rounded-xl flex items-center justify-center gap-3">
            <PlusIcon className="h-5 w-6" />
            <p>Collaborate</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OpenBeat;
