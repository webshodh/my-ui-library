// src/components/SearchBar.js
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SearchBar.css'; // Import custom CSS if needed

const SearchBar = ({ searchTerm, onSearch, placeholder, style, error, disabled, className }) => {
  // Construct the input className string based on conditions
  let inputClass = 'form-control';
  
  if (error) {
    inputClass += ' border-danger';
  }
  
  if (disabled) {
    inputClass += ' bg-light';
  }

  return (
    <div className={`mb-3 ${className}`} style={style}>
      <input
        type="text"
        className={inputClass}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        disabled={disabled}
      />
      {error && <div className="form-text text-danger">{error}</div>}
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  style: {},
  error: '',
  disabled: false,
  className: '',
};

export default SearchBar;
