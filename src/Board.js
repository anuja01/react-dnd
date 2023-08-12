import React from "react";

import Square from "./Square";
import Knight from "./Knight";
import { moveKnight } from "./Game";

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  function handleSquareClick(toX, toY) {
    moveKnight(toX, toY);
  }

  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: "800px",
        height: "100%",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {squares}
    </div>
  );
}