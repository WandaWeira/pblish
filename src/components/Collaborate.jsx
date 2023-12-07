import React, { useState } from "react";

const Collaborate = () => {
  // State for Select Beat
  const [selectedAudio, setSelectedAudio] = useState("");
  const [selectedAudioFile, setSelectedAudioFile] = useState("");

  // State for Upload Vocals
  const [uploadedAudio, setUploadedAudio] = useState("");
  const [uploadedAudioFile, setUploadedAudioFile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setSelectedFile(file);
      const audioUrl = URL.createObjectURL(file);
      setUploadedAudio(audioUrl);
      setUploadedAudioFile(file.name);
    } else {
      alert("Please select an audio file");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("Uploading", selectedFile.name);
      URL.revokeObjectURL(uploadedAudio);
      setSelectedFile(null);
      setUploadedAudio("");
      setUploadedAudioFile("");
    }
  };

  const audioFiles = [
    { name: "Audio 1", src: "path/to/audio1.mp3" },
    { name: "Audio 2", src: "path/to/audio2.mp3" },
    // ... other audio files
  ];

  const handleChange = (event) => {
    const selectedFile = audioFiles.find(
      (file) => file.name === event.target.value
    );
    setSelectedAudio(selectedFile ? selectedFile.src : "");
    setSelectedAudioFile(selectedFile ? selectedFile.name : "");
  };

  return (
    <div className="px-4 md:px-8">
      {/* Select Beat */}
      <p className="my-5 font-semibold text-base md:text-lg">Select Beat</p>
      <select
        className="form-select block w-full mt-1 border rounded-md p-2 text-sm md:text-base"
        value={selectedAudioFile}
        onChange={handleChange}
      >
        <option value="">Select Beat</option>
        {audioFiles.map((file, index) => (
          <option key={index} value={file.name}>
            {file.name}
          </option>
        ))}
      </select>
      {selectedAudioFile && (
        <div className="my-5">
          <p className="my-5 text-sm md:text-base">
            Selected Beat: {selectedAudioFile}
          </p>
          <audio src={selectedAudio} controls />
        </div>
      )}

      {/* Upload Vocals */}
      <div className="my-5">
        <p className="my-5 font-semibold text-base md:text-lg">Upload Vocals</p>
        <input
          type="file"
          onChange={handleFileChange}
          accept="audio/*"
          id="fileInput"
          style={{ display: "none" }}
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer inline-block bg-sky-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out text-sm md:text-base"
        >
          Select Vocal
        </label>

        {uploadedAudioFile && (
          <div className="my-2">
            <p className="my-5 text-sm md:text-base">
              Selected Vocal File: {uploadedAudioFile}
            </p>
            <audio src={uploadedAudio} controls />
          </div>
        )}
      </div>

      <div className="my-5">
        <button className="p-2 bg-customBlack border rounded-md w-full md:w-32 text-customWhite text-sm md:text-base">
          Combine
        </button>
      </div>
    </div>
  );
};

export default Collaborate;
