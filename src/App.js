import React from "react";
import Dashboard from "./components/MyDashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  const appStyle = {
    display: "flex",
  };

  return (
    <div style={appStyle}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
