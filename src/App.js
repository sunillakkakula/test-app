

import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => setCount(count - 1);

  // useEffect(() => {
  console.log("Count :" + count);
  // }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
