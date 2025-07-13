import React, { useState } from "react";
import "./App.css";

export default function App() {
  const size = 4;
  const emptyShape = Array(size)
    .fill(null)
    .map(() => Array(size).fill(false));

  const [shape, setShape] = useState(emptyShape);

  const toggleCell = (targetRow, targetCol) => {
    const newShape = shape.map((rowArray, rowIndex) => {
      if (rowIndex !== targetRow) return rowArray;

      return rowArray.map((cell, colIndex) =>
        colIndex === targetCol ? !cell : cell
      );
    });

    setShape(newShape);
  };

  const rotateShape = () => {
    const rotated = shape[0].map((_, colIndex) =>
      shape.map((rowArray) => rowArray[colIndex]).reverse()
    );
    setShape(rotated);
  };

  return (
    <div className="container">
      <div className="grid">
        {shape.map((rowArray, rowIndex) =>
          rowArray.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
              className={`cell ${cell ? "active" : ""}`}
            />
          ))
        )}
      </div>
      <button className="rotate-button" onClick={rotateShape}>
        Rotate
      </button>
    </div>
  );
}

