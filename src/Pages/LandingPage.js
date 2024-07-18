import React from "react";

function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DashboardSection />
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside
      style={{
        width: "300px",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="/assets/Images/Asset 5.svg"
        alt=""
        style={{ marginBottom: "20px" }}
      />
      <img src="/assets/Images/Frame 224 (1).svg" alt="Sidebar Logo" />
    </aside>
  );
}

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "10px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="/assets/Images/Group 6457.svg" alt="User Avatar" />
      <ChartsSection />
    </header>
  );
}

// function ContentArea() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <BookingsSection />
//       <ChartsSection />
//     </div>
//   );
// }

function BookingsSection() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#D5E2F9, #D5E2F9), url("/assets/Images/your-figma-rectangle-image.png")`, // Replace with your Figma rectangle image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        padding: "10px",
        flex: 1,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxHeight: "750px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Bookings</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <img
          src="/assets/Images/Frame 222.svg"
          alt=""
          style={{ marginBottom: "10px", width: "30%" }}
        />
        <img
          src="/assets/Images/Today (16).svg"
          alt=""
          style={{ marginBottom: "10px", width: "20%" }}
        />
      </div>
      <div className="bookings-stats">
        <img src="/assets/Images/Mask group.svg" alt="" />
      </div>
    </div>
  );
}

function ChartsSection() {
  return (
    <section style={{ display: "flex", gap: "10px" }}>
      <div
        className="chart"
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Bookings Analysis</h2>
        <img
          src="/assets/Images/Group 6388.svg"
          alt="Bookings Chart"
          style={{ width: "100%" }}
        />
      </div>
      <div
        className="chart"
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Sales Analysis</h2>
        <img
          src="/assets/Images/Group 241.svg"
          alt="Sales Chart"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}

function DashboardSection() {
  const dashboardStyle = {
    display: "flex",
    gap: "10px",
    flex: 1,
  };

  return (
    <>
      <img
        src="/assets/Images/Frame 15.svg"
        alt="User Avatar"
        style={{ display: "block", margin: "0 auto 30px", borderRadius: "20%" }}
      />
      <section style={dashboardStyle}>
        <Header />
        <BookingsSection />
      </section>
    </>
  );
}

export default Layout;
