// src/components/Profile.js

import React, { useState, useRef } from "react";
import "../Styles/Profile.css"; // Import custom CSS for additional styling
import { FaBars } from "react-icons/fa";

const Profile = ({ displayName, onSidebarToggle, onLogout, showDropdown = true }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profileRef = useRef(null);

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 0) return "";

    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join("");

    return initials;
  };

  const handleDropdownToggle = () => {
    if (showDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsDropdownOpen(false);
  };

  const handleUpdateProfile = () => {
    // Handle update profile logic here
    setIsDropdownOpen(false);
  };

  return (
    <div className="profile-container" ref={profileRef}>
      <button
        className="btn btn-primary sidebar-toggle"
        onClick={onSidebarToggle}
      >
        <FaBars />
      </button>
      <h3 className="profile-welcome">Welcome {displayName}</h3>

      <div className="profile-avatar" onClick={handleDropdownToggle}>
        {getInitials(displayName)}
        {showDropdown && isDropdownOpen && (
          <div className="profile-dropdown">
            <button
              onClick={handleUpdateProfile}
              className="dropdown-profile-item"
            >
              Update Profile
            </button>
            <button onClick={handleLogout} className="dropdown-profile-item">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
