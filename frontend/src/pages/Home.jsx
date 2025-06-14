import React from "react";
import axios from "axios";
import { useState } from "react";
import ClipCard from "../components/clipCard";

function Home() {
  const [videoUrl, setVideourl] = useState(""); // memory
  const [shorts, setShorts] = useState([]);
  //const [selectedClips, setSelectedClips] = useState([]);

  // handle button click to call the backend
  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/shorts/generate",
        {
          videoUrl,
        }
      );

      console.log("backend response:", response.data);
      setShorts(response.data.data); // backend data will be in response
    } catch (error) {
      console.error("Axios error:", error);
    }
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
          onClick={handleSearch}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition"
        >
          Generate Shorts
        </button>

        {/* 👇 Placeholder for output clips */}

        {/* 📺 Area to display the shorts */}
        <div className="mt-8 space-y-4 bg-gray-100 p-4 rounded">
        {shorts.length > 0 ? (
          // 🌀 Loop through shorts array and show each short
          shorts.map((short, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg font-semibold mb-2">{short.title}</h3>
              {/* 🎥 Show the video if URL is available */}
              <video controls className="w-full rounded">
                <source src={short.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          // 🤍 Friendly message if no shorts yet
          <p className="text-gray-600">No shorts to display yet. Try pasting a link and click generate!</p>
        )}
        </div>
      </div>
    </>
  );
}

export default Home;
