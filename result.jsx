import React, { useState } from "react";

function Result({ percentage }) {
  return (
    <h2>Percentage: {percentage}%</h2>
  );
}

function App() {
  const [marks, setMarks] = useState(0);
  const [total, setTotal] = useState(100);

  const percentage = (marks / total) * 100;

  return (
    <div>
      <h1>Percentage Calculator</h1>

      <input
        type="number"
        placeholder="Enter marks"
        onChange={(e) => setMarks(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Total marks"
        onChange={(e) => setTotal(Number(e.target.value))}
      />

      <Result percentage={total > 0 ? percentage.toFixed(2) : 0} />
    </div>
  );
}

export default App;