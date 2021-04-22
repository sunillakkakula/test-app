import React from "react";

import "./CounterOutput.css";

const counterOutput = () => (
  <div className="CounterOutput">Current Counter: {props.value}</div>
);

export default counterOutput;
