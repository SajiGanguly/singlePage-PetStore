import React from "react";

const SalesAnalysis = () => {
  const analysisStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "48%",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const analysisHeaderStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const graphPlaceholderStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  return (
    <div style={analysisStyle}>
      <h3 style={analysisHeaderStyle}>Sales Analysis</h3>
      <p>Total Sales: 220</p>
      <div style={graphPlaceholderStyle}>
        <img src="/assets/Graphs.jpeg" alt="Sales Graph" style={imageStyle} />
      </div>
    </div>
  );
};

export default SalesAnalysis;
