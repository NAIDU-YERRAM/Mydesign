import { useState } from "react";
import {
  FaRobot,
  FaBrain,
  FaVideo,
  FaMagic,
  FaMusic,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiOpenai, SiGoogle, SiNotion } from "react-icons/si";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div id="main-content" style={container}>
      
      {/* HERO */}
      <div style={hero}>
        <img
          src="/profile.jpg"
          alt="profile"
          style={bigProfile}
          onClick={() => setShowContent(true)}
        />

        <h1 style={title}>AI TRENDSETTER 🚀</h1>

        <p style={subtitle}>
          AI Creator | Video Maker | Storyteller | Tech Explorer
        </p>

        {!showContent && (
          <p style={hint}>👉 Click profile to explore</p>
        )}
      </div>

      {/* ABOUT */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          👤 About Me
        </h2>

        <div style={aboutBox}>
          <h3 style={{ color: "#00f5ff" }}>
            Parupalli Yerram Naidu
          </h3>

          <p>
            I am an <span style={{ color: "#00f5ff" }}>AI Creator</span> passionate
            about building creative digital experiences.
          </p>

          <p>📍 Andhra Pradesh, India</p>
        </div>
      </section>

      {/* CONTENT */}
      {showContent && (
        <div className="fade-slide">

          {/* MY CONTENT */}
          <section style={section}>
            <h2 style={sectionTitle}>🎨 My Content</h2>
            <div style={grid}>
              <Card title="Canva Designs" icon={<FaMagic />} />
              <Card title="AI Design" icon={<FaRobot />} />
              <Card title="Articles" icon={<FaBrain />} />
              <Card title="Blogs" icon={<FaBrain />} />
              <Card title="Carousels" icon={<FaVideo />} />
            </div>
          </section>

          {/* TOOLS */}
          <section style={section}>
            <h2 style={sectionTitle}>🛠️ Tools I Use</h2>

            <div style={toolsWrapper}>
              <div>
                <h3 style={subHeading}>🧠 AI / Research</h3>
                <div style={grid}>
                  <Card title="ChatGPT" icon={<SiOpenai />} />
                  <Card title="Claude AI" icon={<FaBrain />} />
                  <Card title="Gemini" icon={<SiGoogle />} />
                </div>
              </div>

              <div>
                <h3 style={subHeading}>🎨 Creative Tools</h3>
                <div style={grid}>
                  <Card title="Haulio.ai" icon={<FaMagic />} />
                  <Card title="Suno AI" icon={<FaMusic />} />
                </div>
              </div>
            </div>

            <h3 style={{ ...subHeading, marginTop: "30px" }}>
              🎬 Editing Tools
            </h3>
            <div style={grid}>
              <Card title="CapCut" icon={<FaVideo />} />
              <Card title="Notion" icon={<SiNotion />} />
            </div>
          </section>

          {/* SOCIAL */}
          <section style={section}>
            <h2 style={sectionTitle}>🌐 Connect With Me</h2>

            <h3 style={subHeading}>
              <FaLinkedin color="#0A66C2" /> LinkedIn
            </h3>
            <div style={grid}>
              <SocialCard
                title="My LinkedIn"
                link="https://www.linkedin.com"
                icon={<FaLinkedin color="#0A66C2" />}
              />
            </div>

            <h3 style={subHeading}>
              <FaYoutube color="#FF0000" /> YouTube
            </h3>
            <div style={grid}>
              <SocialCard title="AI Trendsetter" link="https://youtube.com" icon={<FaYoutube color="#FF0000" />} />
              <SocialCard title="Rabbit Trends" link="https://youtube.com" icon={<FaYoutube color="#FF0000" />} />
            </div>

            <h3 style={subHeading}>
              <FaInstagram color="#E1306C" /> Instagram
            </h3>
            <div style={grid}>
              <SocialCard title="My Instagram" link="https://instagram.com" icon={<FaInstagram color="#E1306C" />} />
            </div>
          </section>

        </div>
      )}
    </div>
  );
}

/* COMPONENTS */

function Card({ title, icon }) {
  return (
    <div style={card} className="card-hover">
      <div style={iconStyle}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

function SocialCard({ title, link, icon }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div style={card} className="card-hover">
        <div style={{ fontSize: "22px", marginBottom: "8px" }}>
          {icon}
        </div>
        <h3>{title}</h3>
      </div>
    </a>
  );
}

/* STYLES */

const container = {
  background: "#000",
  color: "#fff",
  minHeight: "100vh",
  padding: "40px",
};

const hero = { textAlign: "center", marginTop: "60px" };

const bigProfile = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "3px solid #00f5ff",
  cursor: "pointer",
};

const title = { fontSize: "50px", marginTop: "20px" };

const subtitle = { color: "#aaa" };

const hint = { color: "#0ff" };

const section = { marginTop: "60px" };

const sectionTitle = { textAlign: "center" };

const subHeading = { color: "#0ff", marginTop: "20px" };

const toolsWrapper = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const card = {
  background: "#111",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "30px",
  marginBottom: "10px",
};

const aboutBox = {
  maxWidth: "700px",
  margin: "auto",
  background: "#111",
  padding: "25px",
  borderRadius: "16px",
};