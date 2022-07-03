import React from "react";
import { render, screen } from "@testing-library/react";

import Cell from "./Cell";

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


});
