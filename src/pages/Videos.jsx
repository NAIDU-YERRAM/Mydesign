import { useState } from "react";

export default function Videos() {
  const [category, setCategory] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 AUTO LOAD VIDEOS (NO MANUAL LIST)
  const videoModules = import.meta.glob("/videos/*.mp4", {
    eager: true,
    as: "url",
  });

  const shortsModules = import.meta.glob("/videos/shorts/*.mp4", {
    eager: true,
    as: "url",
  });

  const videoData = {
  videos: [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ],
  shorts: [
    "/videos/shorts/short1.mp4",
    "/videos/shorts/short2.mp4",
  ],
};

  const currentVideos = videoData[category] || [];

  return (
    <div style={{ padding: "20px", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>🎬 AI Videos</h1>

      {/* CATEGORY */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {Object.keys(videoData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "10px 15px",
              background: category === cat ? "#fff" : "#111",
              color: category === cat ? "#000" : "#fff",
              border: "1px solid #333",
              cursor: "pointer",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* EMPTY STATE */}
      {currentVideos.length === 0 && <p>No videos found</p>}

      {/* VIDEO GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {currentVideos.map((video, i) => (
          <video
            key={i}
            src={video}
            controls
            style={{
              width: "100%",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      {/* FULLSCREEN */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src={selectedVideo}
            controls
            autoPlay
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
}