import React, { useState } from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Table from "./Table";
import Modal from "../Modal";
import { useNavigate } from 'react-router-dom';

const Beats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate(); 

  const handleFiles = (event) => {
    const uploadedFile = event.target.files[0];
    // Navigate to createBeats page with the file in state
    navigate('/dashboard/createBeats', { state: { file: uploadedFile } });
  };

  return (
    <div className="mx-5">
      <div className="my-10 flex justify-between items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search beat..."
            className="py-2 pl-8 pr-4 w-[340px] h-[38px] rounded-xl border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
            //   onChange={({ target }) => {
            //     setSearchTerm(target.value);
            //     setFilterTerm("");
            //   }}
          />
          <div className="absolute right-3 top-3">
            <MagnifyingGlassIcon className="w-6 h-6 text-darkGray" />
          </div>
        </div>
        <div
          onClick={openModal}
          className="bg-customBlack flex gap-4 items-center rounded-xl p-1 text-customWhite"
        >
          <PlusIcon className="h-10 w-10 text-customWhite font-semibold" />
          <p className="mx-2"> Upload Beat</p>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} className="w-full m-5">
          <h2 className="text-lg font-bold mb-4">Upload Beat</h2>
          <div className="flex justify-center items-center p-6 border-2 border-dashed border-gray-300 rounded-md bg-gray-50">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8l5-5m0 0l5 5m-5-5v12m0 0H7m5 0h5"
                  ></path>
                </svg>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                Drag 'n' drop some files here, or click to select files
              </p>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="hidden"
                accept=".mp3, .mp4, audio/*, video/*"
                onChange={handleFiles}
                multiple
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer mt-8 text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block" // Increased margin-top from mt-4 to mt-8
              >
                Select file
              </label>
            </div>
          </div>
        </Modal>
      </div>
      <div className="my-14">
        <Table totalItems="10" />
      </div>
    </div>
  );
};

export default Beats;
