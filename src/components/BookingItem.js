import React from "react";

const BookingItem = ({ name, pet, service, amount, date, time }) => {
  const bookingItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
  };

  const leftContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
    backgroundColor: "#eee",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const rightContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #73B9C6, #A9BAF3)",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    marginTop: "10px",
  };

  return (
    <div style={bookingItemStyle}>
      <div style={leftContainerStyle}>
        <div style={avatarStyle}></div>
        <div style={infoStyle}>
          <span>{name}</span>
          <span>
            {pet} - {service}
          </span>
        </div>
      </div>
      <div style={rightContainerStyle}>
        <span>{amount}</span>
        <span>
          {date} - {time}
        </span>
        <button style={buttonStyle}>View More</button>
      </div>
    </div>
  );
};

export default BookingItem;
