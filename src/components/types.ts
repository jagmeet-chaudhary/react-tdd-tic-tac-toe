export type GridProps = {
    cellIndex? : number;
    cellValue? : string;
}

export type CellProps = {
    currentPlayer? : PlayerTurn;
    onClick: () => void;
}

export enum PlayerTurn {
    Player1 = 1,
    Player2 = 2
}