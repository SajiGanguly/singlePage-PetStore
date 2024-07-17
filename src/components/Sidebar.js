import React from "react";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";
import { TfiHandPointRight } from "react-icons/tfi";
import { FcServices } from "react-icons/fc";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiUserHeartLine } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";

const Sidebar = () => {
  const sidebarStyle = {
    width: "200px",
    height: "90vh",
    backgroundColor: "#DEE5FD",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRight: "5px solid #ddd",
  };

  const logoStyle = {
    marginBottom: "10px",
  };

  const menuStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const menuItemStyle = {
    padding: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    color: "#333",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: "#283974",
    color: "#fff",
    borderRadius: "5px",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "1.2em",
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <h1>
          <span style={{ color: "#3E4E86" }}>Book</span>
          <span style={{ color: "#6E8FFF" }}>mypet</span>
        </h1>
      </div>
      <div style={menuStyle}>
        <a href="#dashboard" style={activeMenuItemStyle}>
          <MdDashboard style={iconStyle} />
          Dashboard
        </a>
        <a href="#calendar" style={menuItemStyle}>
          <SlCalender style={iconStyle} />
          Calendar
        </a>
        <a href="#bookings" style={menuItemStyle}>
          <TbBrandBooking style={iconStyle} />
          Bookings
        </a>
        <a href="#facilities" style={menuItemStyle}>
          <TfiHandPointRight style={iconStyle} />
          Facilities
        </a>
        <a href="#services" style={menuItemStyle}>
          <FcServices style={iconStyle} />
          Services
        </a>
        <a href="#customers" style={menuItemStyle}>
          <RiCustomerService2Line style={iconStyle} />
          Customers
        </a>
        <a href="#staff" style={menuItemStyle}>
          <RiUserHeartLine style={iconStyle} />
          Staff
        </a>
        <a href="#rooms" style={menuItemStyle}>
          <MdMeetingRoom style={iconStyle} />
          Rooms
        </a>
        <a href="#addons" style={menuItemStyle}>
          <MdFileDownloadDone style={iconStyle} />
          Add-ons
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
