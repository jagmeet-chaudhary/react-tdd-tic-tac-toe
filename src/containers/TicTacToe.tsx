import { config } from "process";
import React, { useEffect, useState, useRef } from "react";
import Grid from "../components/Grid";
import { Player } from "../components/types";

const TicTacToe = () => {
  const [turn, setTurn] = useState(Player.Player1);
  const [squares, setSquares] = useState(new Array(9).fill(Player.None));
  const [result, setResult] = useState("");
  const winningConfigurations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
  ];

  const handleCellClick = (index: number) => {
    if (result !== "") return; //that mean is game is already over

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
      setResult(getWinner(current));
      return current;
    });
  };

  const getWinner = (currentGrid: Player[]) => {
    let result = "";
    winningConfigurations.forEach((config) => {
      if (isWinningCombination(config, currentGrid)) {
        result = `Player ${currentGrid[config[0]]} wins!!`;
      }
    });
    return result;
  };
  const isWinningCombination = (
    winningConfig: Player[],
    currentGrid: Player[]
  ) => {
    if (winningConfig.some((val) => currentGrid[val] === Player.None)) {
      return false;
    }

    if (
      currentGrid[winningConfig[0]] === currentGrid[winningConfig[1]] &&
      currentGrid[winningConfig[1]] === currentGrid[winningConfig[2]]
    ) {
      return true;
    }
    return false;
  };
  const handleResetClick = () => {
    setSquares((prev) => new Array(9).fill(Player.None));
    setResult("");
    setTurn(Player.Player1);
  };

  return (
    <Grid
      onResetClick={handleResetClick}
      onCellClick={handleCellClick}
      squares={squares}
      result={result}
    />
  );
};

export default TicTacToe;
