// src/components/CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included

// Define the CustomButton component
const CustomButton = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Define prop types for the component
CustomButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

// Define default props for the component
CustomButton.defaultProps = {
  type: 'button',
  className: 'btn btn-primary mt-3',
  onClick: () => {},
};

export default CustomButton;
