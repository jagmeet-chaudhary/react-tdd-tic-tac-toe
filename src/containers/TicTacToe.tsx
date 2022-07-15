import React, { useState } from "react";
import Grid from "../components/Grid";
import { Player } from "../components/types";

const TicTacToe = () => {
  const [turn, setTurn] = useState(Player.Player1);
  const [squares, setSquares] = useState(new Array(9).fill(Player.None));
  const handleCellClick = (index: number) => {
    setSquares((prev) => {
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
    setSquares((prev) => new Array(9).fill(Player.None));
  };

  return (
    <Grid
      onResetClick={handleResetClick}
      onCellClick={handleCellClick}
      squares={squares}
    />
  );
};

export default TicTacToe;
