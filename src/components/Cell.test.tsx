import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell";
import { Player } from "./types";

describe("Cell", () => {
  var handleClick = function () {};

  test("renders a button", () => {
    render(<Cell  value={Player.None} onClick={handleClick} />);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toBeInTheDocument();
  });

  test("has height 100px", () => {
    render(<Cell value={Player.None} onClick={handleClick} />);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveStyle({
      height: "100",
    });
  });

  test("has width 100px", () => {
    render(<Cell value={Player.None} onClick={handleClick} />);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveStyle({
      width: "100",
    });
  });

  test("default display value is empty string", () => {
    render(<Cell value={Player.None} onClick={handleClick} />);
    const button = screen.getByTestId("ttt-cell");
    expect(button).toHaveDisplayValue("");
  });

  test("should display value 'x' on click for player 1", () => {
    render(<Cell  value={Player.Player1} onClick={handleClick} />);

    const button = screen.getByTestId("ttt-cell");
    fireEvent.click(button);
    expect(button).toHaveDisplayValue("x");
  });

  test("should display value 'o' on click for player 2", () => {
    render(<Cell value={Player.Player2} onClick={handleClick} />);

    const button = screen.getByTestId("ttt-cell");
    fireEvent.click(button);
    expect(button).toHaveDisplayValue("o");
  });
});
