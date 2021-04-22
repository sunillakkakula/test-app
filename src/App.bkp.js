import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });
  // console.log(`count is ${count}`);
  // console.log(`new count is ${handleIncrement}`);
  const handleIncrement = () => setCount((currentCount) => currentCount + 1);
  // console.log(`count is ${currentCount}`);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  // useEffect(() => {
  //   console.log("Using Use Effect Current Count :" + count);
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
