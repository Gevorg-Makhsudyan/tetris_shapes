import React, { useState } from "react";
import "./App.css";

export default function App() {
  const size = 4;
  const emptyShape = Array(size)
    .fill(null)
    .map(() => Array(size).fill(false));

  const [shape, setShape] = useState(emptyShape);

const toggleCell = (row, col) => {
  const newShape = shape.map((rowArray, rowIndex) => {
    if (rowIndex !== row) return rowArray;

    return rowArray.map((cell, colIndex) => (colIndex === col ? !cell : cell));
  });

  setShape(newShape);
};

  const rotateShape = () => {
    const rotated = shape[0].map((_, colIndex) =>
      shape.map((row) => row[colIndex]).reverse()
    );
    setShape(rotated);
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
