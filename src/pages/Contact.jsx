import { useState } from "react";

export default function Contact() {

  // 🔐 ADMIN CONTROL
  const isAdmin = true; // change to false when live

  // 📄 RESUME STATE
  const [resume, setResume] = useState(() => {
    return localStorage.getItem("resume");
  });

  // 🔥 UPLOAD RESUME (CLOUDINARY FIXED)
  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Uploading file:", file);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "aitrendsetter");
    data.append("resource_type", "auto"); // ✅ SAFE

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/de5c6j6m1/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      console.log("Cloudinary result:", result);

      if (result.secure_url) {
        localStorage.setItem("resume", result.secure_url);
        setResume(result.secure_url);
        alert("✅ Resume uploaded successfully!");
      } else {
        alert("❌ Upload failed");
      }

    } catch (err) {
      console.log("Upload error:", err);
      alert("❌ Upload error");
    }
  };

  return (
    <div style={{ 
      background: "#000", 
      color: "#fff", 
      minHeight: "100vh", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      {/* 🔥 ID CARD */}
      <div style={{
        width: "350px",
        background: "#111",
        borderRadius: "20px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #1f1f1f",
        boxShadow: "0 0 25px rgba(0,255,255,0.2)"
      }}>

        {/* PROFILE */}
        <img 
          src="/profile.jpg" 
          alt="profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "3px solid #00f5ff",
            marginBottom: "15px"
          }}
        />

        <h2 style={{ color: "#00f5ff" }}>
          Parupalli Yerram Naidu
        </h2>

        <p style={{ color: "#aaa", fontSize: "14px" }}>
          AI Creator | Video Maker
        </p>

        <hr style={{ margin: "15px 0", borderColor: "#222" }} />

        {/* DETAILS */}
        <p>📧 chinnangh@gail.com</p>
        <p>📱 +91 9908694671 , 9100554134</p>
        <p>📍 Andhra Pradesh, India</p>

        {/* 🔥 RESUME SECTION */}
        <div style={{ marginTop: "15px" }}>

          {/* ADMIN UPLOAD */}
          {isAdmin && (
            <label style={uploadBtn}>
              Upload Resume
              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={handleResumeUpload}
              />
            </label>
          )}

          {/* DOWNLOAD BUTTON */}
          {resume && (
            <a href={resume} target="_blank" style={downloadBtn}>
              Download Resume
            </a>
          )}

        </div>

        {/* SOCIAL */}
        <div style={{ marginTop: "15px" }}>
          <a href="https://youtube.com" target="_blank" style={btn}>YouTube</a>
          <a href="https://instagram.com" target="_blank" style={btn}>Instagram</a>
          <a href="https://linkedin.com" target="_blank" style={btn}>LinkedIn</a>
        </div>

      </div>
    </div>
  );
}

/* 🔥 STYLES */

const btn = {
  display: "inline-block",
  margin: "5px",
  padding: "8px 12px",
  background: "#00f5ff",
  color: "#000",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "bold"
};

const uploadBtn = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  background: "#00f5ff",
  color: "#000",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "bold"
};

const downloadBtn = {
  display: "block",
  padding: "8px",
  background: "#22c55e",
  color: "#000",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "bold"
};