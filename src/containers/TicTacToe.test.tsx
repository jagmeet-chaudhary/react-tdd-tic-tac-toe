import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";
import { fireEvent } from "@testing-library/react";
import exp from "constants";

describe("tic tac toe", () => {
  test("render grid", () => {
    render(<TicTacToe />);
    const grid = screen.getByTestId("ttt-grid");
    expect(grid).toBeInTheDocument();
  });

  test("player 1 has first turn", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[3]);
    expect(cells[3]).toHaveDisplayValue("x");
  });

  test("player 2 has second turn", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[3]);
    fireEvent.click(cells[4]);
    expect(cells[4]).toHaveDisplayValue("o");
  });

  test("player 1 has third turn", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[3]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[5]);
    expect(cells[5]).toHaveDisplayValue("x");
  });
  test("player 1 and 2 take alternate turns", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveDisplayValue("x");
    fireEvent.click(cells[2]);
    expect(cells[2]).toHaveDisplayValue("o");
    fireEvent.click(cells[3]);
    expect(cells[3]).toHaveDisplayValue("x");
    fireEvent.click(cells[4]);
    expect(cells[4]).toHaveDisplayValue("o");
  });
  test("click on a filled cell should not change value", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[1]);
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveDisplayValue("x");
  });
  test("click on a filled cell should not change the player turn", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[1]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[2]);
    expect(cells[2]).toHaveDisplayValue("o");
  });
  test("renders reset button", () => {
    render(<TicTacToe />);
    const resetButton = screen.getByDisplayValue("Reset");
    expect(resetButton).toBeInTheDocument();
  });
  test("clicking reset button should reset the TicTacToe grid to initial state", () => {
    render(<TicTacToe />);
    const resetButton = screen.getByDisplayValue("Reset");

    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(resetButton);
    cells.forEach((value, index) => {
      expect(value).toHaveDisplayValue("");
    });
  });

  test("clicking reset button should reset the player win message", () => {
    render(<TicTacToe />);
    const resetButton = screen.getByDisplayValue("Reset");
    const cells = screen.getAllByTestId("ttt-cell");
    const label = screen.getByTestId("ttt-result");
    fireEvent.click(cells[0]);
    fireEvent.click(cells[8]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[2]);
    expect(label).toHaveDisplayValue("Player 1 wins!!");
    fireEvent.click(resetButton);
    expect(label).toHaveDisplayValue("");
  });

  test("clicking reset button should reset the player turn to player 1", () => {
    render(<TicTacToe />);
    const resetButton = screen.getByDisplayValue("Reset");
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[0]);
    fireEvent.click(resetButton);
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveDisplayValue("x");
  });

  it.each`
    P1_FirstMove | P2_FirstMove | P1_SecondMove | P2_SecondMove | P1_ThirdMove
    ${0}         | ${3}         | ${1}          | ${4}          | ${2}
    ${3}         | ${1}         | ${4}          | ${2}          | ${5}
    ${6}         | ${1}         | ${7}          | ${2}          | ${8}
    ${0}         | ${1}         | ${4}          | ${2}          | ${8}
    ${2}         | ${1}         | ${4}          | ${3}          | ${6}
    ${1}         | ${2}         | ${4}          | ${3}          | ${7}
    ${0}         | ${8}         | ${3}          | ${7}          | ${6}
    ${2}         | ${0}         | ${5}          | ${1}          | ${8}
  `(
    "when square [$P1_FirstMove,$P1_SecondMove,$P1_ThirdMove] are filled with 'x' then player 1 wins",
    ({
      P1_FirstMove,
      P2_FirstMove,
      P1_SecondMove,
      P2_SecondMove,
      P1_ThirdMove,
    }: {
      P1_FirstMove: number;
      P2_FirstMove: number;
      P1_SecondMove: number;
      P2_SecondMove: number;
      P1_ThirdMove: number;
    }) => {
      render(<TicTacToe />);
      const cells = screen.getAllByTestId("ttt-cell");
      fireEvent.click(cells[P1_FirstMove]);
      fireEvent.click(cells[P2_FirstMove]);
      fireEvent.click(cells[P1_SecondMove]);
      fireEvent.click(cells[P2_SecondMove]);
      fireEvent.click(cells[P1_ThirdMove]);

      const label = screen.getByTestId("ttt-result");
      expect(label).toHaveDisplayValue("Player 1 wins!!");
    }
  );
  test("After reset players should be able to play new game", () => {
    render(<TicTacToe />);
    const resetButton = screen.getByDisplayValue("Reset");

    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(resetButton);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    expect(cells[1]).toHaveDisplayValue("x");
    expect(cells[3]).toHaveDisplayValue("o");
  });

  test("when square [0,1,2] are filled with 'o' then player 2 wins", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[8]);
    fireEvent.click(cells[0]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[2]);
    const label = screen.getByTestId("ttt-result");
    expect(label).toHaveDisplayValue("Player 2 wins!!");
  });
  test("when player wins no more moves should be allowed", () => {
    render(<TicTacToe />);
    const cells = screen.getAllByTestId("ttt-cell");
    fireEvent.click(cells[8]);
    fireEvent.click(cells[0]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[2]);
    const label = screen.getByTestId("ttt-result");
    expect(label).toHaveDisplayValue("Player 2 wins!!");
    fireEvent.click(cells[7]);
    expect(cells[7]).toHaveDisplayValue("");
  });
});
