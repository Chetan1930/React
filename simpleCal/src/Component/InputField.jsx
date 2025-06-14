// src/components/InputField.jsx
import React from 'react';

const InputField = ({ label, value, onChange, name }) => {
  return (
    <div className="input-group" style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        required
      />
    </div>
  );
};

export default InputField;
