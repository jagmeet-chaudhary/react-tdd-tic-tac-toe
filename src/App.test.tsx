import React from "react";
import { render, screen,getByTestId } from "@testing-library/react";
import App from "./App";

test("renders grid", () => {
  render(<App />);
  const gridComponent = screen.getByTestId("ttt-grid");
  expect(gridComponent).toBeInTheDocument();
});
