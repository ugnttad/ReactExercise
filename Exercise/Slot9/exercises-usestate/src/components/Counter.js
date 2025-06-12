import React, { usestate } from 'react';

function Counter() {
  const [count, setCount] = usestate(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onclick={handleIncrement}>Increment</button>
    </div>

  );

}


export default Counter;