import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('white');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Switcher</h2>
      <select value={color} onChange={handleColorChange}>
        <option value="white">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          marginTop: '10px',
          border: '1px solid black'
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;