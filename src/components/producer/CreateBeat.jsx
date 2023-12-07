import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CreateBeat = () => {
  const location = useLocation();
  const file = location.state?.file;
  console.log(file);

  //   Input fields
  const [beatName, setBeatName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Use reader.result to set the preview
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement the upload logic here
    console.log("File to upload:", selectedFile);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreview(""); // Also clear the preview
  };
  return (
    <div>
      <h1 className="text-2xl text-customBlack">Create Beat/Vocal</h1>
      <div className="flex gap-8 w-full">
        <div className="my-10 w-1/2">
          <div className="my-2">
            <label
              htmlFor="beat-name"
              className="block text-sm font-medium text-gray-700"
            >
              Beat Name
            </label>
            <input
              id="beat-name"
              name="beatName"
              type="text"
              placeholder="Input album name"
              value={beatName}
              onChange={(e) => setBeatName(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="beat-name"
              className="block text-sm font-medium text-gray-700"
            >
              Recording Label
            </label>
            <input
              id="beat-name"
              name="beatName"
              type="text"
              placeholder="Input Recording Label"
              value={beatName}
              onChange={(e) => setBeatName(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4" // You can set the number of rows to suit your design needs
              placeholder="Enter your description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            ></textarea>
          </div>
        </div>
        <div className="my-10  w-1/2">
          <div className="mx-auto">
            <label
              htmlFor="beat-name"
              className="block text-sm font-medium text-gray-700"
            >
              Producer's name
            </label>
            <input
              id="producer"
              name="producer"
              type="text"
              placeholder="Input Producer's name"
              value={beatName}
              onChange={(e) => setBeatName(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="Genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              placeholder="Choose your Album"
            >
              <option value="" disabled>
                Choose your genre
              </option>
              {/* Add more <option> tags for each beat type */}
              <option value="hip-hop">Hip-Hop</option>
              <option value="jazz">Jazz</option>
              <option value="rock">Rock</option>
              <option value="electronic">Electronic</option>
              {/* ... other options */}
            </select>
          </div>
          <div className="my-4 p-4">
            <div className="mb-2">Image</div>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              accept=".jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer mr-2 mb-2 inline-block border border-customBlack text-customBlack font-bold py-2 px-4 rounded"
            >
              Browse
            </label>
            <button
              onClick={handleUpload}
              className="mr-2 mb-2 inline-block bg-sky-500 text-white font-bold py-2 px-4 rounded"
            >
              Upload
            </button>
            <button
              onClick={handleCancel}
              className="mb-2 inline-block bg-customBlack text-white font-bold py-2 px-4 rounded"
            >
              &times;
            </button>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-28 h-auto rounded"
              />
            )}
            <div className="text-xs italic">
              Minimum Resolution: 1000x1000 pixels, Maximum Resolution: 2000 x
              2000 pixels, (support only .JPEG/.PNG)
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleCancel}
          className="mb-2 inline-block bg-customBlack text-white font-bold py-2 px-4 rounded uppercase"
        >
          Cancel
        </button>
        <button className="mr-2 mb-2 inline-block bg-sky-500 text-white font-bold py-2 px-4 rounded uppercase">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateBeat;
