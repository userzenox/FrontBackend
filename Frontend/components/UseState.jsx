import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, "count", and a function to update it, "setCount"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, update the state by incrementing the count */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;