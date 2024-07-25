import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  warning,
  label,
}) => {
  let inputClass = 'form-control';

  if (error) {
    inputClass += ' border-danger';
  } else if (success) {
    inputClass += ' border-success';
  } else if (warning) {
    inputClass += ' border-warning';
  }

  return (
    <div className="mb-3">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="form-text text-danger">{error}</div>}
      {success && <div className="form-text text-success">{success}</div>}
      {warning && <div className="form-text text-warning">{warning}</div>}
    </div>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.string,
  label: PropTypes.string,
};

export default CustomInput;
