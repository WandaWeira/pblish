import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import OpenBeat from "../OpenBeat";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const togglePlayer = () => setIsPlayerVisible(!isPlayerVisible);

  return (
    <div className="w-full rounded-xl border border-gray-300 flex flex-col sm:flex-row justify-between my-4">
      <div className="flex gap-2 p-2">
        <img
          src="https://media.gettyimages.com/id/994318634/photo/young-hipster-african-american-rapper-recording-songs-in-music-recording-studio.jpg?s=612x612&w=0&k=20&c=A2iXa5XXStfOQ9477mTTjMc6ml6cCkrPn4Kr9oqECg8="
          alt="icon"
          className="w-28 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-lg sm:text-xl text-customBlack font-semibold">Beat Title</h1>
          <h3 className="text-sm sm:text-md my-2 text-gray-600">
            Description about the beat
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">Created: 12/2/2023</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-2 sm:gap-8 sm:mr-5">
        <Link to="/dashboard/openbeat">
          <button className="p-2 text-customWhite bg-gray-500 h-10 w-full sm:w-28 rounded-xl">
            Open
          </button>
        </Link>

        <div
          onClick={togglePlayer}
          className="flex justify-center items-center p-2 text-customWhite bg-customBlack h-10 w-full sm:w-28 rounded-xl"
        >
          <PlayIcon className="h-5 w-6" />
        </div>
      </div>
      {/* Modal and Music Player */}
    </div>
  );
};

export default Card;
