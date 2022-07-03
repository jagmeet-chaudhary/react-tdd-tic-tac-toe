import React from "react";
import Cell from "./Cell";
const Grid = () => {
  function getGridCells() {
    const content = [];
    for (let i = 0; i < 9; i++) {
      content.push(<Cell key={i} />);
    }
    return content;
  }

  return <div data-testid='ttt-grid'>{getGridCells()}</div>;
};

export default Grid;
