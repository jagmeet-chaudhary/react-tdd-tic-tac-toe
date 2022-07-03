import { useState } from "react";
import "../App.css";
function Cell() {
  return (
    <input
      type="button"
      data-testid="ttt-cell"
      className="ttt-cell"
    ></input>
  );
}

export default Cell;
