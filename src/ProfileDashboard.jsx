import React, { useState } from "react";

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  ]);

  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) setImages([...images, url]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center py-12 space-y-10">
      <div className="w-[650px] backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-purple-500/40">
        <div className="flex justify-center mb-6 space-x-4">
          {["about", "experiences", "recommended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab === "about"
                ? "About Me"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          {activeTab === "about" &&
            "3 years of hands-on experience helping businesses integrate CRM solutions smoothly. Skilled in communication and project management."}
          {activeTab === "experiences" &&
            "Experience details: Worked on multiple CRM integrations, project management, and client success projects."}
          {activeTab === "recommended" &&
            "Recommendations: John Doe - Excellent collaborator; Jane Smith - Highly skilled in CRM solutions."}
        </p>
      </div>

      <div className="w-[650px] backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-blue-500/40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 drop-shadow-md">
            Gallery
          </h2>
          <button
            onClick={addImage}
            className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            + Add Image
          </button>
        </div>
        <div className="flex space-x-5 justify-center flex-wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="w-28 h-28 rounded-2xl object-cover shadow-lg transform hover:scale-110 hover:rotate-1 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
