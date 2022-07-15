import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";
import {fireEvent } from "@testing-library/react";

describe('tic tac toe',()=>{
    test('render grid',()=>{
        render(<TicTacToe />);
        const grid = screen.getByTestId('ttt-grid')
        expect(grid).toBeInTheDocument();
    })

    test('player 1 has first turn',()=>{
        render(<TicTacToe />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        expect(cells[3]).toHaveDisplayValue('x');
    })

    test('player 2 has second turn',()=>{
        render(<TicTacToe />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        fireEvent.click(cells[4]);
        expect(cells[4]).toHaveDisplayValue('o');
    })

    test('player 1 has third turn',()=>{
        render(<TicTacToe />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[3]);
        fireEvent.click(cells[4]);
        fireEvent.click(cells[5]);
        expect(cells[5]).toHaveDisplayValue('x');
    })
    test('player 1 and 2 take alternate turns',()=> {
        render(<TicTacToe />); 
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
        render(<TicTacToe />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[1]);
        expect(cells[1]).toHaveDisplayValue('x');
    })
    test('click on a filled cell should not change the player turn',()=>{
        render(<TicTacToe />); 
        const cells = screen.getAllByTestId('ttt-cell')
        fireEvent.click(cells[1]);
        fireEvent.click(cells[1]);
        fireEvent.click(cells[2]);
        expect(cells[2]).toHaveDisplayValue('o');
    })
    test('renders reset button',()=>{
        render(<TicTacToe/>);
        const resetButton = screen.getByDisplayValue('Reset');
        expect(resetButton).toBeInTheDocument();
    })
    test('clicking reset button should reset the TicTacToe to initial state',()=>{
        render(<TicTacToe/>);
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
        render(<TicTacToe/>);
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

})