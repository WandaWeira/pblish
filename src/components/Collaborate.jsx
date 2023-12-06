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
    <div>
      {/* Select Beat */}
      <p className="my-5 font-semibold">Select Beat</p>
      <select
        className="form-select block w-full mt-1 border rounded-md p-2"
        value={selectedAudioFile}
        onChange={handleChange}
      >
        <option value="">Select an Audio File</option>
        {audioFiles.map((file, index) => (
          <option key={index} value={file.name}>
            {file.name}
          </option>
        ))}
      </select>
      {selectedAudioFile && (
        <div className="my-5">
          <p className="my-5">Selected Beat: {selectedAudioFile}</p>
          <audio src={selectedAudio} controls autoPlay />
        </div>
      )}

      {/* Upload Vocals */}
      <div className="my-5 p-4">
        <p className="my-10 font-semibold">Upload Vocals</p>
        <input
          type="file"
          onChange={handleFileChange}
          accept="audio/*"
          // ... rest of your input styling
        />
        {uploadedAudioFile && (
          <div className="my-2">
            <p className="my-5">Selected Vocal File: {uploadedAudioFile}</p>
            <audio src={uploadedAudio} controls autoPlay />
          </div>
        )}
      </div>
      <div className="my-5">
        <button className="p-2 bg-sky-500 border rounded-md w-32">Combine</button>
      </div>
    </div>
  );
};

export default Collaborate;
