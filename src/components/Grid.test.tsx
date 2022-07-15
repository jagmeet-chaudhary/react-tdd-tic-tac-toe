import { render, screen, fireEvent } from "@testing-library/react";
import Grid from "./Grid";
import { Player } from "./types";
describe('Grid',()=>{
    var emptyFunction = function() { };
    let squares = new Array(9).fill(Player.None);
    test("renders 9 cells",()=>{
        render(<Grid onResetClick={emptyFunction} onCellClick={emptyFunction} squares={squares} />);
        const cells = screen.getAllByTestId('ttt-cell')
        expect(cells.length).toEqual(9);
    })
 



}); 