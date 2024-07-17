import React from "react";
import BookingsAnalysis from "./MyBookingAnalysis";
import SalesAnalysis from "./MySalesAnalysis";
import BookingList from "./BookingLists";
import { PiBellSimpleDuotone } from "react-icons/pi";
import { Stack, Typography, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dashboard = () => {
  const dashboardContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FfF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const stackContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "80%",
    margin: "0 auto",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "800px",
    boxSizing: "border-box",
  };

  const headerTextContainerStyle = {
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    padding: "6%",
    background: "linear-gradient(145deg, #AACAD0, #3498db)",
  };

  const headerTitleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
    color: "#333",
  };

  const headerSubtitleStyle = {
    fontSize: "16px",
    margin: "10px 0 0 0",
    color: "#666",
    textAlign: "center",
  };

  const analysisContainerStyle = {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "800px",
    marginBottom: "20px",
  };

  const bookingListWrapperStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "calc(50% - 10px)",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const mainContentStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const iconStyle = {
    color: "#333333",
  };

  return (
    <>
      <div style={contentWrapperStyle}>
        <div style={dashboardContainerStyle}>
          <div style={{ color: "#333333" }}>Dashboard</div>
          <div style={stackContainerStyle}>
            <Stack direction="row" spacing={2} alignItems="center">
              <PiBellSimpleDuotone style={iconStyle} />
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              <Typography style={{ color: "black" }} variant="body1">
                Saji
              </Typography>
              <IconButton>
                <RiArrowDropDownLine />
              </IconButton>
            </Stack>
          </div>
        </div>
        <br></br>
        <div style={mainContentStyle}>
          <div>
            <div style={headerStyle}>
              <div style={headerTextContainerStyle}>
                <img
                  src="/assets/TheStore-removebg-preview (1).png"
                  alt="Welcome Image"
                  style={{
                    float: "left",
                    width: "100px",
                    height: "auto",
                  }}
                />
                <h2 style={headerTitleStyle}>Welcome Back!</h2>
                <p style={headerSubtitleStyle}>
                  Let's take a closer look at your stats and appointments
                </p>
              </div>
              <div style={analysisContainerStyle}>
                <BookingsAnalysis />
                <SalesAnalysis />
              </div>
            </div>
          </div>
          <div style={bookingListWrapperStyle}>
            <BookingList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
