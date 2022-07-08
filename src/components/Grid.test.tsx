import { render, screen, fireEvent } from "@testing-library/react";
import Grid from "./Grid";

describe('Grid',()=>{
    test("renders 9 cells",()=>{
        render(<Grid />);
        const cells = screen.getAllByTestId('ttt-cell')
        expect(cells.length).toEqual(9);
    })
 
    test('player 1 has first turn',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        expect(cells[3]).toHaveDisplayValue('x');
    })

    test('player 2 has second turn',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        fireEvent.click(cells[4]);
        expect(cells[4]).toHaveDisplayValue('o');
    })

    test('player 1 has third turn',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        fireEvent.click(cells[4]);
        fireEvent.click(cells[5]);
        expect(cells[5]).toHaveDisplayValue('x');
    })
    test('player 1 and 2 take alternate turns',()=> {
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        expect(cells[1]).toHaveDisplayValue('x');
        fireEvent.click(cells[2]);
        expect(cells[2]).toHaveDisplayValue('o');
        fireEvent.click(cells[3]);
        expect(cells[3]).toHaveDisplayValue('x');
        fireEvent.click(cells[4]);
        expect(cells[4]).toHaveDisplayValue('o');
    })
    test('click on a filled cell should not change turn',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[1]);
        expect(cells[1]).toHaveDisplayValue('x');
    })


}); 