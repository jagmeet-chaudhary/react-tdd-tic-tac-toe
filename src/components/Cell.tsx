import { useState } from "react";
import "../App.css";
function Cell() {
  const [value, setValue] = useState("");
  function handleClick() {
    // if (value === "x") {
    //   setValue("o");
    // } else {
    //   setValue("x");
    // }
    switch (value) {
      case "x":
        setValue('o');
        break;
      case "o":
        setValue('x');
        break;
      case "":
        setValue('x');
        break;
    }
    //value === 'x' || value === '' ? setValue('o') : setValue('x');
  }

  return (
    <input
      type="button"
      data-testid="ttt-cell"
      className="ttt-cell"
      onClick={handleClick}
      value={value}
    ></input>
  );
}

export default Cell;
