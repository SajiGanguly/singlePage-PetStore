import React from "react";
import BookingItem from "./BookingItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const BookingList = () => {
  const bookingListStyle = {
    background: "linear-gradient(135deg, #f3f8ff, #c0e4ff)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "calc(100% - 40px)", // Adjusted to fit within the wrapper
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const bookingHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    color: "#007bff",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "20px",
  };

  const breadcrumbContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const tabStyle = {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    color: "#555",
  };

  const activeTabStyle = {
    color: "#007bff",
    fontWeight: "bold",
  };

  return (
    <div style={bookingListStyle}>
      <div style={bookingHeaderStyle}>
        <h3>Bookings</h3>
        <div style={breadcrumbContainerStyle}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="#" style={tabStyle}>
              <Typography style={activeTabStyle}>Pending</Typography>
            </Link>
            <Typography color="textPrimary">Today</Typography>
          </Breadcrumbs>
        </div>
      </div>
      <BookingItem
        name="Nick"
        pet="Small Dog"
        service="Dental Consultation"
        amount="32 Dollar"
        date="03 Jul 2024"
        time="4:15 pm"
      />
      <BookingItem
        name="Nick"
        pet="Small Dog"
        service="Dental Consultation"
        amount="32 Dollar"
        date="03 Jul 2024"
        time="4:15 pm"
      />
      <BookingItem
        name="Nick"
        pet="Small Dog"
        service="Dental Consultation"
        amount="32 Dollar"
        date="03 Jul 2024"
        time="4:15 pm"
      />
    </div>
  );
};

export default BookingList;
