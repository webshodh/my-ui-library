// src/components/StatCard.js
import React from "react";
import PropTypes from "prop-types";
import "../Styles/StatCard.css"; // Import custom CSS for additional styling

// Define gradient colors
const gradients = {
  green: "linear-gradient(135deg, #32CD32, #228B22)", // Green gradient
  red: "linear-gradient(135deg, #FF0000, #B22222)", // Red gradient
  yellow: "linear-gradient(135deg, #FFD700, #FFA500)", // Yellow gradient
  blue: "linear-gradient(135deg, #1E90FF, #00BFFF)", // Blue gradient
  orange: "linear-gradient(135deg, #FFA500, #FF4500)" // Orange gradient
};

const StatCard = ({ title, value, color }) => {
  const gradient = gradients[color] || gradients.blue; // Default to blue if color is not found

  return (
    <div className="col">
      <div
        className={`card text-white stat-card`}
        style={{ background: gradient }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h1 className="card-count">{value}</h1>
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["green", "red", "yellow", "blue", "orange"])
};

export default StatCard;
