import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/DropdownMenu.css"; // Custom CSS for additional styling

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="dropdown-menu-container">
      <button className="btn btn-primary dropdown-toggle" onClick={toggleMenu}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-menu-list-item">
              <a
                href={item.href || "#"}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleSubMenu(index);
                  }
                }}
                className="dropdown-item"
              >
                {item.text}
              </a>
              {item.submenu && activeIndex === index && (
                <ul className="submenu-list">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="submenu-item">
                      <a href={subitem.href}>{subitem.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
