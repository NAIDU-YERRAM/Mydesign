import { useState } from "react";

export default function Images() {
  const [category, setCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "horror",
    "krishna",
    "anime",
    "rabbit",
    "mine",
    "ramayana",
    "copspirit",
  ];

  const categoryImages = {
    horror: "/images/horror/horror-1.jpeg",
    krishna: "/images/krishna/krishna-1.jpeg",
    anime: "/images/anime/anime-1.jpeg",
    rabbit: "/images/rabbit/rabbit-1.jpeg",
    mine: "/images/mine/mine-1.jpeg",
    ramayana: "/images/ramayana/ramayana-1.jpeg",
    copspirit: "/images/copspirit/cop-spirit-1.jpeg",
  };

  return (
    <div style={{ padding: "20px", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🎬 AI Gallery
      </h1>

      {/* CATEGORY ROW */}
      <div style={{ display: "flex", overflowX: "auto", gap: "15px" }}>
        {categories.map((cat) => (
          <div key={cat} onClick={() => setCategory(cat)} style={{ minWidth: "200px", cursor: "pointer" }}>
            <img
              src={categoryImages[cat]}
              onError={(e) => (e.target.src = "/images/horror/horror-1.jpeg")}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "10px" }}
            />
            <p style={{ textAlign: "center" }}>{cat.toUpperCase()}</p>
          </div>
        ))}
      </div>

      {/* IMAGE GRID */}
      {category && (
        <>
          <h2 style={{ margin: "20px 0" }}>{category.toUpperCase()}</h2>

          <div
            key={category}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            {Array.from({ length: 50 }).map((_, i) => {
              const num = i + 1;
              const baseName = category === "copspirit" ? "cop-spirit" : category;

              return (
                <img
                  key={`${category}-${num}`}
                  src={`/images/${category}/${baseName}-${num}.jpeg`}
                  onClick={() =>
                    setSelectedImage(`/images/${category}/${baseName}-${num}.jpeg`)
                  }
                  onError={(e) => {
                    if (!e.target.dataset.fallback) {
                      e.target.dataset.fallback = "jpg";
                      e.target.src = `/images/${category}/${baseName}-${num}.jpg`;
                    } else if (e.target.dataset.fallback === "jpg") {
                      e.target.dataset.fallback = "png";
                      e.target.src = `/images/${category}/${baseName}-${num}.png`;
                    } else {
                      e.target.style.display = "none";
                    }
                  }}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              );
            })}
          </div>
        </>
      )}

      {/* 🔥 MODAL (FULLSCREEN IMAGE) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <img
            src={selectedImage}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}