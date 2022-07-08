import { useState } from "react";

import { CellProps, PlayerTurn } from "./types";
const PLAYER_1_SYMBOL = "x";
const PLAYER_2_SYMBOL = "o";
function Cell(props: CellProps) {
  const [value, setValue] = useState("");
  function handleClick() {
    if (value !== "") return;
    props.currentPlayer === PlayerTurn.Player1
      ? setValue(PLAYER_1_SYMBOL)
      : setValue(PLAYER_2_SYMBOL);

    props.onClick();
  }
  return (
    <input
      type="button"
      data-testid="ttt-cell"
      className="ttt-cell"
      value={value}
      onClick={handleClick}
    ></input>
  );
}

export default Cell;
