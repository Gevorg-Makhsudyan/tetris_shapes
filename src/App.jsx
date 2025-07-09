import React, { useState } from "react";
import "./App.css";

export default function App() {
  const size = 4;
  const emptyGrid = Array(size)
    .fill(null)
    .map(() => Array(size).fill(false));

  const [grid, setGrid] = useState(emptyGrid);

  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? !cell : cell))
    );
    setGrid(newGrid);
  };

  const rotateGrid = () => {
    const newGrid = Array(size)
      .fill(null)
      .map(() => Array(size).fill(false));

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        newGrid[j][size - 1 - i] = grid[i][j];
      }
    }

    setGrid(newGrid);
  };

  return (
    <div className="container">
      <div className="grid">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => toggleCell(i, j)}
              className={`cell ${cell ? "active" : ""}`}
            />
          ))
        )}
      </div>
      <button className="rotate-button" onClick={rotateGrid}>Rotate</button>
    </div>
  );
}

