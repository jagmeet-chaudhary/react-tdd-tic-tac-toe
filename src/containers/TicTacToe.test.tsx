import { render, screen, getByTestId } from "@testing-library/react";
import TicTacToe from "./TicTacToe";

describe('tic tac toe',()=>{
    test('render grid',()=>{
        render(<TicTacToe />);
        const grid = screen.getByTestId('tictactoe')
        expect(grid).toBeInTheDocument();
    })

    test('player1 has first turn',()=>{
        
    })
})