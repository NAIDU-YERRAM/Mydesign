import { NavLink } from "react-router-dom";

export default function Navbar() {
  const handleProfileClick = () => {
    const section = document.getElementById("main-content");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={nav}>
      {/* 🔥 LEFT SIDE */}
      <div style={logoContainer}>
        <img
          src="/profile.jpg"
          alt="profile"
          style={profileImg}
          onClick={handleProfileClick}
          onError={(e) => {
            e.target.src = "/default-avatar.png";
          }}
        />
        <span style={logoText}>AI TRENDSETTER</span>
      </div>

      {/* 🔗 LINKS */}
      <div style={links}>
        <NavItem to="/" label="Home" />
        <NavItem to="/videos" label="Videos" />
        <NavItem to="/images" label="Images" />
        <NavItem to="/projects" label="Projects" />
        <NavItem to="/contact" label="Contact" />
      </div>
    </nav>
  );
}

/* 🔗 NAV ITEM */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...link,
        color: isActive ? "#00f5ff" : "#aaa",
      })}
      className="nav-link"
    >
      {label}
    </NavLink>
  );
}

/* 🎨 STYLES */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "#000",
  borderBottom: "1px solid #111",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const profileImg = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid #00f5ff",
  cursor: "pointer",
};

const logoText = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#00f5ff",
};

const links = {
  display: "flex",
  gap: "25px",
};

const link = {
  textDecoration: "none",
  fontSize: "16px",
  position: "relative",
  transition: "0.3s",
};