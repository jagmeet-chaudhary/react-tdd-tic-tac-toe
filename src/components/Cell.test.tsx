import React from "react";
import { render, screen, fireEvent,getByTestId } from "@testing-library/react";
import Cell from "./Cell";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Cell", () => {
  let button: HTMLInputElement;
  beforeEach(() => {
    render(<Cell />);
    button = screen.getByTestId("ttt-cell");
  });
  test("renders a button", () => {
    expect(button).toBeInTheDocument();
  });

  test("button has height 100px", () => {
    expect(button).toHaveStyle({
      height: "100",
    });
  });

  test("button has width 100px", () => {
    expect(button).toHaveStyle({
      width: "100",
    });
  });

  test("button default display value is empty string", () => {
    expect(button).toHaveDisplayValue("");
  });

  test("button clicks changes text to 'x' when text is empty", () => {
    act(() => {
      button.click();
    });
    expect(button).toHaveDisplayValue("x");
  });

  test("button clicks changes text to 'o' when text is 'x'", () => {
    userEvent.type(button, "x");
    userEvent.click(button);
    expect(button).toHaveDisplayValue("o");
  });

  test("button clicks changes text to 'x' when text is 'o'", () => {
    fireEvent.change(button, { target: { value: 'o' } });
    userEvent.click(button);
    expect(button).toHaveDisplayValue("x");
  });
});
