import { useState } from "react";

import { CellProps, Player } from "./types";
const PLAYER_1_SYMBOL = "x";
const PLAYER_2_SYMBOL = "o";
function Cell(props: CellProps) {
  const [value, setValue] = useState("");
  function handleClick() {
    if (value !== "") return;
    switch (props.value) {
      case Player.Player1:
        setValue(PLAYER_1_SYMBOL);
        break;
      case Player.Player2:
        setValue(PLAYER_2_SYMBOL);
        break;
      case Player.None:
        setValue("");
    }

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
