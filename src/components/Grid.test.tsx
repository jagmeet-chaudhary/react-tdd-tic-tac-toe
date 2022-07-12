import { render, screen, fireEvent } from "@testing-library/react";
import { cloneElement } from "react";
import Grid from "./Grid";
describe('Grid',()=>{
    test("array copy logic",()=> {
        let a1 = new Array(9).fill(0);
        let a2 = [...a1];
        expect(a1).toEqual(a2);
        a2[3] = 1;
        expect(a2[3]).toEqual(1);
    })
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
    test('click on a filled cell should not change value',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[1]);
        expect(cells[1]).toHaveDisplayValue('x');
    })
    test('click on a filled cell should not change the player turn',()=>{
        render(<Grid />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[1]);
        fireEvent.click(cells[2]);
        expect(cells[2]).toHaveDisplayValue('o');
    })
    test('renders reset button',()=>{
        render(<Grid/>);
        const resetButton = screen.getByDisplayValue('Reset');
        expect(resetButton).toBeInTheDocument();
    })
    test('clicking reset button should reset the grid to initial state',()=>{
        render(<Grid/>);
        const resetButton = screen.getByDisplayValue('Reset');

        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[3]);
        fireEvent.click(resetButton);
        cells.forEach((value,index)=>{
            expect(value).toHaveDisplayValue('');
        })
    })

    test('After reset players should be able to play new game',()=>{
        render(<Grid/>);
        const resetButton = screen.getByDisplayValue('Reset');

        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[3]);
        fireEvent.click(resetButton);
        fireEvent.click(cells[1]);
        fireEvent.click(cells[3]);
        expect(cells[1]).toHaveDisplayValue('x');
        expect(cells[3]).toHaveDisplayValue('o');
    })


}); 