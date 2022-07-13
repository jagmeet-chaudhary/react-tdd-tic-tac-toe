import React, { useState } from "react";
import Cell from "./Cell";
import { GridProps, Player } from "./types";

const Grid = (props: GridProps) => {
  const [turn, setTurn] = useState(Player.Player1);
  const [cells, setCells] = useState(new Array(9).fill(Player.None));
  const handleCellClick = (index: number) => {
    setCells((prev) => {
      let current = [...prev];
      if (current[index] === Player.None) {
        current[index] = turn;
        setTurn((prevPlayer) => {
          return prevPlayer === Player.Player1
            ? Player.Player2
            : Player.Player1;
        });
      }
      return current;
    });
  };

  const handleResetClick = () => {
    setCells((prev) => new Array(9).fill(Player.None));
  };
  function getGridCells() {
    const content = [];
    for (let i = 0; i < 9; i++) {
      content.push(
        <Cell key={i} value={cells[i]} onClick={() => handleCellClick(i)} />
      );
    }

    return content;
  }

  return (
    <div>
      <div data-testid="ttt-grid" className="ttt-grid">
        {getGridCells()}
      </div>
      <input type="button" value="Reset" onClick={handleResetClick}></input>
    </div>
  );
};

export default Grid;
