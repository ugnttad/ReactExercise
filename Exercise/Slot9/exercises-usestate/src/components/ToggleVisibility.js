import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>Toggle Me!</p>}
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default ToggleVisibility;