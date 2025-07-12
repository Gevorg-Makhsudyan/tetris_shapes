import React, { useState } from "react";
import "./App.css";

export default function App() {
  const size = 4;
  const emptyShape = Array(size)
    .fill(null)
    .map(() => Array(size).fill(false));

  const [shape, setShape] = useState(emptyShape);

  const toggleCell = (row, col) => {
    const newShape = shape.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? !cell : cell))
    );
    setShape(newShape);
  };

  const rotateShape = () => {
    const newShape = Array(size)
      .fill(null)
      .map(() => Array(size).fill(false));

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        newShape[j][size - 1 - i] = shape[i][j];
      }
    }

    setShape(newShape);
  };

  return (
    <div className="container">
      <div className="grid">
        {shape.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => toggleCell(i, j)}
              className={`cell ${cell ? "active" : ""}`}
            />
          ))
        )}
      </div>
      <button className="rotate-button" onClick={rotateShape}>Rotate</button>
    </div>
  );
}


