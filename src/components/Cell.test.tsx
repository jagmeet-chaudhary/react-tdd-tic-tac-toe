import React from "react";
import { render, screen ,fireEvent} from "@testing-library/react";
import Cell from "./Cell";
import { PlayerTurn } from "./types";

describe("Cell", () => {
  var handleClick = function() { };

  test("renders a button", () => {
    render(<Cell onClick={handleClick}/>);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toBeInTheDocument();
  });

  test("has height 100px", () => {
    render(<Cell onClick={handleClick}/>);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveStyle({
      height: "100",
    });
  });

  test("has width 100px", () => {
    render(<Cell onClick={handleClick}/>);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveStyle({
      width: "100",
    });
  });

  test("default display value is empty string", () => {
    render(<Cell onClick={handleClick}/>);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveDisplayValue("");
  });

  test("should display value 'x' on click for player 1",()=>{
    render(<Cell currentPlayer={PlayerTurn.Player1} onClick={handleClick}/>);

    const button = screen.getByTestId("ttt-cell");
    fireEvent.click(button);
    expect(button).toHaveDisplayValue('x');
  })

  test("should display value 'o' on click for player 2",()=>{
    render(<Cell currentPlayer={PlayerTurn.Player2} onClick={handleClick}/>);

    const button = screen.getByTestId("ttt-cell");
    fireEvent.click(button);
    expect(button).toHaveDisplayValue('o');
  })

  test("should not change value if already filled",()=>{
    render(<Cell currentPlayer={PlayerTurn.Player1} onClick={handleClick}/>);
    const button = screen.getByTestId("ttt-cell");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button).toHaveDisplayValue('x');
  })

});
