import React from "react";
import { useState } from "react";
import ClipCard from "../components/clipCard";

function Home() {
  const [videoUrl, setVideourl] = useState(""); // memory
  const [clips, setClips] = useState([]);
  const [selectedClips, setSelectedClips] = useState([]);

  const handleGenerate = () => {
    console.log("Generating clips for video:", videoUrl);
//todo

  };

  const handleDownload = () => {
    console.log("Download selected:", selectedClips);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome to ClipCraft
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Smart AI powered tool to create YouTube Shorts
        </p>

        {/* 👇 Input for video link */}
        <input
          type="text"
          placeholder="Paste your YouTube video link here"
          value={videoUrl}
          onChange={(e) => setVideourl(e.target.value)}
          className="mt-6 w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* 👇 Generate Button */}
        <button
          onClick={handleGenerate}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition"
        >
          Generate Shorts
        </button>

        {/* 👇 Placeholder for output clips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
            Clip 1
          </div>
          <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
            Clip 2
          </div>
          <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
            Clip 3
          </div>
          <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
            Clip 4
          </div>
        </div>

        {/* 👇 Download button */}
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
          Download Selected Shorts
        </button>
      </div>
    </>
  );
}

export default Home;
