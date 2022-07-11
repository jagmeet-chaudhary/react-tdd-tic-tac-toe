import React, { useState } from "react";
import Cell from "./Cell";
import { GridProps, PlayerTurn } from "./types";

const Grid = (props: GridProps) => {
  const [turn, setTurn] = useState(PlayerTurn.Player1);
  const [reset, setReset] = useState(false);
  const [cellArray, setCellArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const handleCellClick = () => {
    setTurn((prevPlayer) => {
      return prevPlayer === PlayerTurn.Player1
        ? PlayerTurn.Player2
        : PlayerTurn.Player1;
    });
  };

  const handleResetClick = () => {
    setReset(true);
  };
  function getGridCells() {
    const content = [];
    for (let i = 0; i < 9; i++) {
      content.push(
        <Cell key={i} value={turn} reset={reset} onClick={handleCellClick} />
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
