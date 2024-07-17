import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
  };

  const profilePicStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#eee", // Placeholder for profile pic
    marginRight: "10px",
  };

  return (
    <div style={headerStyle}>
      <div>
        <h2>Welcome Back!</h2>
        <p>Let's take a closer look at your stats and appointments</p>
      </div>
      <div style={profileStyle}>
        <div style={profilePicStyle}></div>
        <span>John Doe</span>
      </div>
    </div>
  );
};

export default Header;
