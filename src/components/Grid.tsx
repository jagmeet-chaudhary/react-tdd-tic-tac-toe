import React, { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import { GridProps, PlayerTurn } from "./types";

const Grid = (props: GridProps) => {
  const [turn, setTurn] = useState(PlayerTurn.Player1);

  const handleClick = () => {
    setTurn((prevPlayer) => {
      return prevPlayer === PlayerTurn.Player1
        ? PlayerTurn.Player2
        : PlayerTurn.Player1;
    });
  }
  function getGridCells() {
    const content = [];
    for (let i = 0; i < 9; i++) {
      content.push(<Cell key={i} currentPlayer={turn} onClick={handleClick} />);
    }
    

    return content;

  }

  return <div data-testid="ttt-grid">{getGridCells()}</div>;
};

export default Grid;
