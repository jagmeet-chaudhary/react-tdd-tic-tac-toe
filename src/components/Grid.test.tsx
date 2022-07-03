import { render, screen, getByTestId } from "@testing-library/react";
import Grid from "./Grid";

describe('Grid',()=>{
    test("renders 9 cells",()=>{
        render(<Grid />);
        const cells = screen.getAllByTestId('ttt-cell')
        expect(cells.length).toEqual(9);
    })

    
})