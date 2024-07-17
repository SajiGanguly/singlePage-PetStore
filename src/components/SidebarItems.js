import React from "react";

const SidebarItem = ({ label }) => {
  const itemStyle = {
    width: "100%",
    padding: "10px 20px",
    marginBottom: "10px",
    backgroundColor: "#f8f9fd",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    fontWeight: "bold",
  };

  return <div style={itemStyle}>{label}</div>;
};

export default SidebarItem;
