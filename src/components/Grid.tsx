import Cell from "./Cell";
import { GridProps } from "./types";

const Grid = (props: GridProps) => {
  function getGridCells() {
    const content = [];
    for (let i = 0; i < 9; i++) {
      content.push(
        <Cell
          key={i}
          value={props.squares[i]}
          onClick={() => props.onCellClick(i)}
        />
      );
    }

    return content;
  }

  return (
    <div>
      <div data-testid="ttt-grid" className="ttt-grid">
        {getGridCells()}
      </div>
      <input type="button" value="Reset" onClick={props.onResetClick}></input>
      <h1>{props.result}</h1>
     
    </div>
  );
};

export default Grid;
