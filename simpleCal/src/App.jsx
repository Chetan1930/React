// src/App.jsx
import React, { useState } from 'react';
import InputField from './Component/InputField';

function App() {
  const [form, setForm] = useState({
    principal: '',
    rate: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const [si,setSi]=useState(0);
  const calculateSI = () => {
    const { principal, rate, time } = form;
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    if (isNaN(P) || isNaN(R) || isNaN(T)) setSi(0);
    setSi(((P * R * T) / 100));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Simple Interest Calculator</h2>

      <InputField
        label="Principal"
        name="principal"
        value={form.principal}
        onChange={handleChange}
      />
      <InputField
        label="Rate (%)"
        name="rate"
        value={form.rate}
        onChange={handleChange}
      />
      <InputField
        label="Time (years)"
        name="time"
        value={form.time}
        onChange={handleChange}
      />
  <button onClick={calculateSI}>Calcualte</button>
      <h3>Simple Interest: ₹  {si.toFixed(2)}</h3>
    </div>
  );
}

export default App;
